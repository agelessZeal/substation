import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    DoCheck,
    ElementRef, Inject,
    Injector,
    OnInit,
    ViewChild
} from '@angular/core';
import {HTMLMarkerComponent} from "./html-marker.component";

import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';

import {MapResizeService} from "../../../core/services/map-resize.service";
import {UpdateMarkerService} from "../../../core/services/update-marker.service";
import {InteractionMarkerService} from "../../../core/services/interaction-marker.service";

import {Severity} from "../../../core/interfaces/severity";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {HttpErrorResponse} from "@angular/common/http";
import {MsalService} from "@azure/msal-angular";
import {forkJoin} from "rxjs";
import {AuthService} from "../../../core/services/auth.service";
import {UpdateBreadCrumbService} from "../../../core/services/update-bread-crumb.service";
import {MsMrDeviceSelectionService} from "../../../core/services/msmr-device-selection.service";
import {UpdateMsMrMarkerService} from "../../../core/services/update-msmr-marker.service";

import * as GoldenLayout from "golden-layout";
import {GoldenLayoutContainer} from "@embedded-enterprises/ng6-golden-layout";

declare var $: any;
declare var L: any;
declare var config: any;
declare var hideCloseControls: any;

import 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster.layersupport';

// https://github.com/Asymmetrik/ngx-leaflet#readme
//

@Component({
    selector: 'app-openstreet-map',
    templateUrl: './openstreet-map.component.html',
    styleUrls: ['./openstreet-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {

    lat: number;
    lng: number;
    map: any;

    options: any;
    severities: string[];

    // Marker cluster stuff
    markerClusterData: any[] = [];

    mkTypes: string[];
    markers: any; // Raw Marker Data
    layerGroupList: any;
    markerList: any; // Map Icon Marker List
    overLayerModels: any;

    // Measurement/Metering Management
    msList: any[]; //Measurement List
    mrList: any[]; //Metering List,
    timeRange: any;
    isShowTimePicker: boolean;
    curBdInfo: any;
    apiBaseURL: string;
    devDetailList: any;

    accessToken: string; //Event App Access Token
    accessTokenSub: string; //Substation App Access Token

    layersControl:any;
    emptyLayerGroup: any;
    curMkInfo: any;// current Selected mark

    mcgLayerSupportGroup: any;
    layerGroupListLayerSupportOptions: any;

    isEnabledTimeSel: boolean;

    gL: any; //Golden Layout

    @ViewChild("map")
    public mapElement: ElementRef;

    constructor(@Inject(GoldenLayoutContainer) private container: GoldenLayout.Container,
                private updateMkService: UpdateMarkerService,
                private updateMsMrMarkerService: UpdateMsMrMarkerService,
                private httpService: HttpServiceHelper,
                private interactMkService: InteractionMarkerService,
                private msmrLayerService: MsMrDeviceSelectionService,
                private msalAuthService: MsalService,
                private authService: AuthService,
                private bdService: UpdateBreadCrumbService) {

        let self = this;
        this.gL = this.container.layoutManager;
        this.gL.on('componentCreated',function(component) {

            hideCloseControls(); // Hide Pop out/In Icon

            component.container.on('resize',function() {
                self.map.invalidateSize();
            });
        });

        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;

        this.isEnabledTimeSel = true;

        this.lat = config.client_info.map.pos.lat;
        this.lng = config.client_info.map.pos.lng;
        this.emptyLayerGroup = L.layerGroup();
        this.curMkInfo = {type: '', id: ''};
        this.mkTypes = ['Alarms', 'In-Alarms', 'Events'];
        this.timeRange = {};
        this.isShowTimePicker = false;
        this.curBdInfo = {sub:'',bay:'', dev:''};
        this.markers = { 'Alarms':[], 'In-Alarms':[], 'Events' : []};
        this.markerList = { 'Alarms':[], 'In-Alarms':[], 'Events' : []};

        this.overLayerModels = {
            Alarms: true,
            Events: true,
            Measurements: true,
            Meterings: true
        };

        this.severities = [];
        for (let item in Severity) {
            if (isNaN(Number(item))) {
                this.severities.push(Severity[item]);
            }
        }

        this.layerGroupList = {};
        this.layerGroupList['Alarms'] = L.layerGroup();
        this.layerGroupList['Events'] = L.layerGroup();
        this.msList = [];
        this.mrList = [];
        this.layerGroupListLayerSupportOptions = {spiderfyDistanceMultiplier: 2};
    };

    ngOnInit() {
        let self = this;
        this.map = L.map(this.mapElement.nativeElement, {
            center: [this.lat, this.lng],
            zoom: 7,
            layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
            zoomControl: true,
            attributionControl:true,
        });

        this.mcgLayerSupportGroup = L.markerClusterGroup.layerSupport(this.layerGroupListLayerSupportOptions);
        this.mcgLayerSupportGroup.addTo(this.map);

        this.layersControl = L.control.layers(null, null, { collapsed: false });
        this.mcgLayerSupportGroup.checkIn([this.layerGroupList.Alarms, this.layerGroupList.Events]);

        this.layersControl.addOverlay(this.layerGroupList.Alarms, 'Alarms');
        this.layersControl.addOverlay(this.layerGroupList.Events, 'Events');

        this.layersControl.addTo(this.map);

        this.layerGroupList.Alarms.addTo(this.map); // Adding to map or to AutoMCG are now equivalent.
        this.layerGroupList.Events.addTo(this.map);

        this.updateMkService.getMksInfo().subscribe(mkInfo => {
            if(mkInfo.type == 'Alarms') {
                if(this.isMarkerChanged(mkInfo.mkList, mkInfo.type)){
                    this.markers[mkInfo.type] = mkInfo.mkList;
                    this.generateData(mkInfo.type);
                }
            }

        });

        this.interactMkService.getMarkerInfo().subscribe(mkInfo => {
            if (mkInfo.type == 'Events') {
                if(this.isMarkerChanged([mkInfo.mkInfo], mkInfo.type)){
                    this.markers[mkInfo.type] = [mkInfo.mkInfo];
                    this.generateData(mkInfo.type);
                }
            }
            this.curMkInfo = {type: mkInfo.type, id: mkInfo.mkInfo.id};
            this.zoomToMarker(mkInfo.type);
        });

        this.updateMsMrMarkerService.getMsMarketInfo().subscribe(mkInfo => {
            let layerName = mkInfo.type + '_' + mkInfo.layerType;
            //Check Metering/Measurement data
            if(mkInfo.type == 'Meterings') {
                this.isEnabledTimeSel = true;
            }
            if(this.isMrMsMarkerChanged(mkInfo.mkList, layerName)) {
                this.markers[layerName] = mkInfo.mkList;
                this.generateData(layerName);
            } else {
                this.markers[layerName] = mkInfo.mkList;
                this.updateMsMrData(layerName);
            }

        });

        /// Access token for the substation
        if(!this.accessTokenSub) {
            setTimeout(function () {
                self.msalAuthService.acquireTokenSilent([config.client_info.msal_info.reqScopesSub])
                    .then(function (accessToken) {
                        self.accessTokenSub = accessToken;
                        localStorage.setItem(config.client_info.storeInfo.tokenKey + '_sub', accessToken);
                        self.getMsMr();
                    }).catch(function (err) {
                    console.error(err, "Can't get Substation Access Token");
                });
            }, 5000);
        } else {
            this.getMsMr();
        }
        this.bdService.getBDInfo().subscribe(bdInfo => {
            this.curBdInfo = bdInfo;
            this.reloadMsMrMarkers();
        })
    }

    reloadMsMrMarkers() {
        let devlist = this.getDevDetailList(this.curBdInfo.sub, this.curBdInfo.bay, this.curBdInfo.dev);
        if(this.msList.length>0) {
            this.msmrLayerService.setDevList('ms', this.msList, devlist);
        }
        if(this.mrList.length>0) {
            //Set Flag ...... at time-Selector
            this.isEnabledTimeSel = false;
            this.msmrLayerService.setDevList('mr', this.mrList, devlist, this.timeRange);
        }
    }

    createNewLayer(newLayerName) {
        this.overLayerModels[newLayerName] = true;
        this.markers[newLayerName] = [];
        this.markerList[newLayerName] = [];
        this.layerGroupList[newLayerName] = L.layerGroup();
        this.mcgLayerSupportGroup.checkIn(this.layerGroupList[newLayerName]);
        this.layersControl.addOverlay(this.layerGroupList[newLayerName], newLayerName);
        this.layerGroupList[newLayerName].addTo(this.map);
    }

    generateData(mkType) {
        let self = this;
        let mkList: any[];

        if (mkType == 'Alarms' || mkType == 'In-Alarms') {
            mkList =  this.markers['Alarms'].concat(this.markers['In-Alarms']);
        } else {
            mkList = this.markers[mkType];
        }
        this.markerList[mkType] = [];
        this.layerGroupList[mkType].clearLayers();
        console.log('testing openstreetmap.....');

        for (let i = 0; i<mkList.length; i++) {
            let popupHtml = '';
            let latlng:any;
            let mkInfo: any;
            let markerColor: string = '';
            let mapMarker: any;
            if(mkType.indexOf('_')>-1) {
                mkInfo = mkList[i].dev;
                latlng = mkList[i].dev.location;
                let unitInfo = mkList[i].unit;
                let decimalValue = (mkList[i].value)? mkList[i].value.toFixed(2): 'N/A';
                markerColor = this.stringToHslColor(unitInfo.unit);
                if(mkType.indexOf('Measurements')>-1){
                    popupHtml = self.makePopUpHTML(mkList[i], 'Measurements');
                    let msIcon  = L.divIcon(
                        {
                            html: `<span style="background-color: ${markerColor}">${decimalValue} ${unitInfo.unit}</span>`,
                            className: 'ev-marker-ms',
                            iconAnchor: [10, -5],
                            bgPos: [10, 30],
                            iconSize: [20, 30],
                        });
                    mapMarker = L.marker([latlng.latitude, latlng.longitude], {icon: msIcon});
                    mapMarker.on('click', self.onAlarmSelEvent, {mkInfo: mkList[i], ref: self});
                    mapMarker.bindPopup(popupHtml).openPopup();
                    mapMarker.addTo(this.layerGroupList[mkType]);
                } else {
                    popupHtml = self.makePopUpHTML(mkList[i], 'Meterings');
                    let msIcon  = L.divIcon(
                        {
                            html: `<span style="background-color: ${markerColor}">${decimalValue} ${unitInfo.unit}</span>`,
                            className: 'ev-marker-ms mr',
                            iconAnchor: [10, -5],
                            bgPos: [10, 30],
                            iconSize: [20, 30],
                        });
                    mapMarker = L.marker([latlng.latitude, latlng.longitude], {icon: msIcon});
                    mapMarker.on('click', self.onAlarmSelEvent, {mkInfo: mkList[i], ref: self});
                    mapMarker.bindPopup(popupHtml).openPopup();
                    mapMarker.addTo(this.layerGroupList[mkType]);
                }

            } else {
                latlng = mkList[i].location;
                mkInfo = mkList[i];
                let severityNo: number = 0;
                popupHtml = self.makePopUpHTML(mkInfo, mkInfo.mk_type);
                switch (mkInfo.mk_type) {
                    case 'Alarms':
                        severityNo = self.severities.length - self.severities.indexOf(mkInfo.severity);
                        let circleIcon = L.divIcon(
                            {
                                html: `<div class="ev-sv-${mkInfo.severity.toLowerCase()}"><span>${severityNo}</span></div>`,
                                className: 'ev-marker-alarm',
                                bgPos: [30, 30],
                                iconSize: [30, 30]
                            });
                        mapMarker = L.marker([latlng.latitude, latlng.longitude], {icon: circleIcon});
                        mapMarker.on('click', self.onAlarmSelEvent, {mkInfo: mkInfo, ref: self});
                        mapMarker.bindPopup(popupHtml).openPopup();
                        break;
                    case 'In-Alarms':
                        severityNo = self.severities.length - self.severities.indexOf(mkInfo.severity);
                        let recIcon = L.divIcon(
                            {
                                html: `<div class="ev-mk-${mkInfo.severity.toLowerCase()}"><span>${severityNo}</span></div>`,
                                className: 'ev-marker-in-alarm',
                                bgPos: [30, 30],
                                iconSize: [30, 30]
                            });
                        mapMarker = L.marker([latlng.latitude, latlng.longitude], {icon: recIcon});
                        mapMarker.on('click', self.onAlarmSelEvent, {mkInfo: mkInfo, ref: self});
                        mapMarker.bindPopup(popupHtml).openPopup();
                        break;
                    case 'Events':
                        let evIcon =  L.divIcon(
                            {
                                html: '<img src="/assets/img/star.png">',
                                className: 'ev-div-marker',
                                bgPos: [36, 40],
                                iconSize: [36, 40]

                            });
                        mapMarker = L.marker([latlng.latitude, latlng.longitude], {icon: evIcon});
                        mapMarker.on('click', self.onEvSelEvent, {mkInfo: mkInfo, ref: self});
                        mapMarker.bindPopup(popupHtml).openPopup();
                        break;
                }
                mapMarker.addTo(this.layerGroupList[mkType]);
            }
            this.markerList[mkType].push(mapMarker);
        }

    }

    updateMsMrData(mkType) {
        for(let i = 0; i<this.markerList[mkType].length; i++) {
            let markerInstance = this.markerList[mkType][i];
            let mkInfo = this.markers[mkType][i];
            let popupHtml:string = '';
            let markerColor: string = '';
            let unitInfo = mkInfo.unit;
            let decimalValue = (mkInfo.value)? mkInfo.value.toFixed(2): 'N/A';
            markerColor = this.stringToHslColor(unitInfo.unit);
            //Update Marker
            if(mkType.indexOf('Measurements')>-1) {
                popupHtml = this.makePopUpHTML(mkInfo, 'Measurements');
                let msIcon  = L.divIcon(
                    {
                        html: `<span style="background-color: ${markerColor}">${decimalValue} ${unitInfo.unit}</span>`,
                        className: 'ev-marker-ms',
                        bgPos: [10, 30],
                        iconSize: [20, 30],
                    });
                markerInstance.setIcon(msIcon);
                markerInstance._popup.setContent(popupHtml)
            } else {
                popupHtml = this.makePopUpHTML(mkInfo, 'Meterings');
                let mrIcon  = L.divIcon(
                    {
                        html: `<span style="background-color: ${markerColor}">${decimalValue} ${unitInfo.unit}</span>`,
                        className: 'ev-marker-ms mr',
                        bgPos: [10, 30],
                        iconSize: [20, 30],
                    });
                markerInstance.setIcon(mrIcon);
                markerInstance._popup.setContent(popupHtml)
            }
            //Update PopupHTML
        }
    }
    /**
     * Check Changed Marker List
     * @param inputList
     * @param mktype
     */
    isMarkerChanged(inputList: any, mktype: string) {
        let sameCnt: number = 0;
        let tgtMkList = this.markers[mktype];
        if(tgtMkList.length == 0) {
            return true;
        }
        if(inputList.length != tgtMkList.length) {
            return true;
        }
        for (let i = 0; i < inputList.length; i++) {
            let mkItem = inputList[i];
            if(mktype == 'Events') { //'alarm', 'in-alarm'
                if(mkItem.id == tgtMkList[i].id &&
                    mkItem.date == tgtMkList[i].date &&
                    mkItem.remark == tgtMkList[i].remark &&
                    mkItem.name == tgtMkList[i].name &&
                    mkItem.cause == tgtMkList[i].cause &&
                    mkItem.devicemrid == tgtMkList[i].devicemrid &&
                    this.isSameLocation(mkItem.location, tgtMkList[i].location)) {
                    sameCnt++;
                }
            } else {
                if(mkItem.id == tgtMkList[i].id &&
                    mkItem.date == tgtMkList[i].date &&
                    mkItem.postponedate == tgtMkList[i].postponedate &&
                    mkItem.state == tgtMkList[i].state &&
                    mkItem.remark == tgtMkList[i].remark &&
                    mkItem.name == tgtMkList[i].name &&
                    mkItem.cause == tgtMkList[i].cause &&
                    mkItem.severity == tgtMkList[i].severity &&
                    mkItem.devicemrid == tgtMkList[i].devicemrid &&
                    mkItem.activecount == tgtMkList[i].activecount &&
                    mkItem.activedate == tgtMkList[i].activedate &&
                    this.isSameLocation(mkItem.location, tgtMkList[i].location)) {
                    sameCnt++;
                }
            }
        }
        return sameCnt != tgtMkList.length;

    }

    /**
     * If this function return true, then it means device list update, else => only update marker Status
     * @param layerName: layername
     * @param inputList: input Ms Mr List
     */
    isMrMsMarkerChanged(inputList: any, layerName: string) {
        let sameCnt: number = 0;
        let tgtMkList = this.markers[layerName];
        if(!tgtMkList) {
            return true;
        }
        if(inputList.length != tgtMkList.length) {
            return true;
        }
        for (let i = 0; i < inputList.length; i++) {
            let mkItem = inputList[i];
            if(mkItem.dev.mrid == tgtMkList[i].dev.mrid &&
                this.isSameLocation(mkItem.dev.location, tgtMkList[i].dev.location)) {
                sameCnt++;
            }
        }
        return sameCnt != tgtMkList.length;

    }

    isSameLocation(pos1: Location, pos2: Location) {
        return pos1.latitude == pos2.latitude && pos1.longitude == pos2.longitude && pos1.altitude == pos2.altitude;
    }

    zoomToMarker(mkType) {
        if (this.overLayerModels[mkType]) {
            for (let i = 0; i<this.markers[mkType].length; i++) {
                let mkitem = this.markers[mkType][i];
                if (mkitem.id == this.curMkInfo.id) {
                    this.mcgLayerSupportGroup.zoomToShowLayer(this.markerList[mkType][i], function () {
                        console.log('Ok');
                    });
                }
            }
        }
    }

    onEvSelEvent(event: any) {
        let ctx: any = this;
        $('.ev-div-marker').removeClass('selected');
        $(window.event.target).parent().addClass('selected');
    }

    onAlarmSelEvent(event: any) {
        let ctx: any = this;
        $('.ev-marker-' + ctx.mkInfo.mk_type).removeClass('selected');
        $(window.event.target).parent().parent().addClass('selected');
        ctx.ref.interactMkService.setMarkerInfo(ctx.mkInfo.mk_type, ctx.mkInfo, true);
    }
    /**
     * Construct Device Tree using token from Auth server
     */
    getDeviceTreeData() {
        let subs = [];
        let subIdsURL = this.apiBaseURL + '/substations';
        let actk = this.accessTokenSub;
        let i, j, k, self = this;
        this.httpService.httpGetRequest(actk, subIdsURL).subscribe((subsRes: any) => {
            subs = subsRes;
            let promiseList = [];
            let subObjList = [];
            let devPromiseList = [];
            if(subs.length == 0) return;
            for (i = 0; i < subs.length; i++) {
                let baysURL = this.apiBaseURL + '/substations/' + subs[i] + '/bays?suborder=' + i;
                subObjList.push({value: subs[i], children: []});
                promiseList.push(this.httpService.httpGetRequestWithHeader(actk, baysURL));
            }
            forkJoin(promiseList).subscribe(results => {
                for (let op = 0; op < results.length; op++) {
                    let baysRes = results[op];
                    let bays = baysRes.body;
                    let subOrder = baysRes.url.split('/substations/')[1].split('/bays')[1].split('?suborder=')[1];
                    for (j = 0; j < bays.length; j++) {
                        let devsURL = `${self.apiBaseURL}/bays/${bays[j]}/devices?suborder=${subOrder}`;
                        devPromiseList.push(self.httpService.httpGetRequestWithHeader(actk, devsURL));
                    }
                }
                forkJoin(devPromiseList).subscribe(function (devResults) {
                    devResults.forEach(function (devsRes) {
                        let devs = devsRes.body;
                        let bayName = devsRes.url.split('/bays/')[1].split('/devices')[0];
                        let subOrder = devsRes.url.split('/bays/')[1].split('/devices')[1].split('?suborder=')[1];
                        //console.log('Sub Id :' + subName, 'Bay Id : ' + bayName,devsRes.data);
                        let bayObj = {value: bayName, children: []};
                        for (k = 0; k < devs.length; k++) {
                            let devObj = {value: devs[k], children: []};
                            bayObj.children.push(devObj);
                        }
                        subObjList[Number(subOrder)].children.push(bayObj);
                    });
                    self.getDeviceTreeDetail(subObjList);
                }, (error: any) => {
                    this.httpErrorHandler(error);
                });
            }, (error: any) => {
                this.httpErrorHandler(error);
            });
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
        });
    }

    getDeviceTreeDetail(devSt: any) {
        let i, j, k, self = this;
        let devPromiseList = [];
        let devTypes = {};
        let actk = this.accessTokenSub;

        for (i = 0; i < devSt.length; i++) {
            let bayList = devSt[i].children;
            for(j = 0; j<bayList.length; j++) {
                let devList = bayList[j].children;
                for(k = 0; k<devList.length; k++){
                    let devDetailURL = `${this.apiBaseURL}/devices/${devList[k].value}?suborder=${i}&bayorder=${j}&devorder=${k}`;
                    devPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, devDetailURL));
                }
            }
        }
        forkJoin(devPromiseList).subscribe(async function (deviceDetailsRes) {
            for(i = 0 ;i<deviceDetailsRes.length; i++) {
                let deviceDetailRes:any = deviceDetailsRes[i];
                /*
                let devTypeInfo:any = {};
                if(devTypes[deviceDetailRes.body.devicetypemrid]){
                    devTypeInfo = devTypes[deviceDetailRes.body.devicetypemrid];
                } else {
                    try{
                        let devTypeDetailURL = `${self.apiBaseURL}/devices/${deviceDetailRes.body.mrid}/devicetype`;
                        devTypeInfo = await self.httpService.httpGetRequest(actk,devTypeDetailURL).toPromise();
                        devTypes[deviceDetailRes.body.devicetypemrid] = devTypeInfo;
                    }catch (err) {
                        console.error(err);
                    }
                }*/
                /////////////////////
                let deviceOrderInfo = deviceDetailRes.url.split('?suborder=')[1];
                let deviceSubOrder = deviceOrderInfo.split('&bayorder=')[0];
                let deviceBayOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[0];
                let deviceOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[1];
                devSt[Number(deviceSubOrder)].children[Number(deviceBayOrder)].children[Number(deviceOrder)].children = deviceDetailRes.body;
            }
            self.devDetailList = devSt;
            self.curBdInfo = {sub:'',bay:'', dev:''};
            self.reloadMsMrMarkers();
        }, (error:any) => {
            self.httpErrorHandler(error);
        })
    }
    ///Getting Device Structure Details============================================
    httpErrorHandler(error: any) {
        console.error(error);
        switch (error.status) {
            case 400:
                console.log('Bad Request');
                break;
            case 401:
                this.authService.setAuthInfo({login_st:false});
                break;
            default:
                alert(`Backend returned code ${error.status}, body was: ${error.error.Message}`);
        }
    }

    /**
     * Get Measurement and Meterings
     */
    getMsMr() {
        let msURL = `${config.client_info.apiURL.serverURLSubstation}/measurements`;
        let mrURL = `${config.client_info.apiURL.serverURLSubstation}/meterings`;
        let i;
        this.httpService.httpGetRequest(this.accessTokenSub, msURL).subscribe((results: any)=> {
            this.msList = results;
            for(i=0; i<results.length; i++) {
                this.createNewLayer('Measurements_' + this.msList[i].id)
            }
        }, (error: HttpErrorResponse) => {
            console.log(error);
            this.msList = [];
            console.error("Can't get measurement list");
        });

        this.httpService.httpGetRequest(this.accessTokenSub, mrURL).subscribe((results: any)=> {
            this.mrList = results;
            for(i=0; i<this.mrList.length; i++) {
                this.createNewLayer('Meterings_' + this.mrList[i].id)
            }
            if(this.mrList.length>0) {
                this.isShowTimePicker = true;
            }
        }, (error: HttpErrorResponse) => {
            console.log(error);
            this.mrList = [];
            console.error("Can't get metering list");
        });

        this.getDeviceTreeData();
    }

    getDevDetailList(subId, bayId, devId) {
        let devlist = [];
        for (let i = 0; i<this.devDetailList.length; i++) {
            if(this.devDetailList[i].value.indexOf(subId)>-1) {
                let baylist = [];
                baylist = this.devDetailList[i].children;
                for(let j = 0; j<baylist.length; j++) {
                    if(baylist[j].value.indexOf(bayId)>-1) {
                        let tmpdevlist = [];
                        tmpdevlist = baylist[j].children;
                        for(let k = 0; k<tmpdevlist.length; k++) {
                            if(tmpdevlist[k].value.indexOf(devId)>-1) {
                                devlist.push(tmpdevlist[k].children);
                            }
                        }
                    }
                }
            }
        }
        return devlist;
    }

    apply(type) {

        if((type == 'Measurements_' || type == 'Meterings_')) {
            for (let mdname in this.overLayerModels) {
                if(this.overLayerModels.hasOwnProperty(mdname) && mdname.indexOf(type)>-1) {
                    let tt = type.substr(0, type.length-1);
                    this.overLayerModels[mdname] = this.overLayerModels[tt];
                }
            }

            if(type == 'Meterings_' && this.overLayerModels[type]) {
                this.isShowTimePicker = true;
            }

        }

        if (type == 'Alarms' || type == 'In-Alarms') {
            if(this.overLayerModels.Alarms){
                this.layerGroupList.Alarms.addTo(this.map);
            }else {
                this.map.removeLayer(this.layerGroupList.Alarms);
            }
        } else {
            if(type.indexOf('Measurements_')>-1 || type.indexOf('Meterings_')>-1) {
                //Add or Remove All measurements/meterings layer
                for(let layername in this.layerGroupList) {
                    if(this.layerGroupList.hasOwnProperty(layername) && layername.indexOf(type)>-1) {
                        if(this.overLayerModels[layername]){
                            this.layerGroupList[layername].addTo(this.map);
                        }else {
                            this.map.removeLayer(this.layerGroupList[layername]);
                        }
                    }
                }
            } else {
                if(this.overLayerModels[type]){
                    this.layerGroupList[type].addTo(this.map);
                }else {
                    this.map.removeLayer(this.layerGroupList[type]);
                }
            }
        }
    }

    onSubMsMrVisible(pType, selfType) {
        // check whether parent is true or not.
        let falseCnt = 0;
        let trueCnt = 0;
        let cntOfChildType = (pType == 'Meterings')? this.mrList.length: this.msList.length;
        for (let overlayname in this.overLayerModels) {
            if(this.overLayerModels.hasOwnProperty(overlayname) && overlayname.indexOf(pType + '_') > -1) {
                if(this.overLayerModels[overlayname]) {
                    trueCnt ++;
                } else {
                    falseCnt ++;
                }
            }
        }

        if(falseCnt == cntOfChildType) {
            this.overLayerModels[pType] = false;
        }

        if(trueCnt == cntOfChildType) {
            this.overLayerModels[pType] = true;
        }

        if(pType == 'Meterings') {
            this.isShowTimePicker = trueCnt>0;
        }

        this.apply(pType + '_' + selfType);
    }

    onSetMeteringTs($ev) {
       this.timeRange =  $ev;
       if (this.devDetailList) {
           let devlist = this.getDevDetailList(this.curBdInfo.sub, this.curBdInfo.bay, this.curBdInfo.dev);
           this.msmrLayerService.setDevList('mr', this.mrList, devlist, this.timeRange);
           this.isEnabledTimeSel = false;
       }
    }

    makePopUpHTML(mkinfo: any, mkType: string) {
        let pphtml = '';
        if(mkType == 'Events') {
            pphtml = `
                    <div class="ev-html-marker">
                        <h4>${mkinfo.name}</h4>
                        <p>ID: ${mkinfo.id}</p>
                        <p>Date: ${mkinfo.date}</p>
                        <p>Remark: ${mkinfo.remark}</p>
                        <p>Cause: ${mkinfo.cause}</p>
                        <p class="ev-pp-location">Latitude: ${mkinfo.location.latitude}</p>
                        <p class="ev-pp-location">Longitude: ${mkinfo.location.longitude}</p>
                        <p class="ev-pp-location">Altitude: ${mkinfo.location.altitude}</p>
                    </div>`;
        } else if(mkType == 'Alarms' || mkType == 'In-Alarms'){
            pphtml = `
                    <div class="ev-html-marker">
                        <h4>${mkinfo.name}</h4>
                        <p>ID: ${mkinfo.id}</p>
                        <p>Date: ${mkinfo.date}</p>
                        <p>PpDate: ${mkinfo.postponedate}</p>
                        <p>Remark: ${mkinfo.remark}</p>
                        <p>State: ${mkinfo.state}</p>
                        <p>Cause: ${mkinfo.cause}</p>
                        <p class="ev-pp-severity ev-mk-${mkinfo.severity.toLowerCase()}">Severity: ${mkinfo.severity}</p>
                        <p class="ev-pp-location">Latitude: ${mkinfo.location.latitude}</p>
                        <p class="ev-pp-location">Longitude: ${mkinfo.location.longitude}</p>
                        <p class="ev-pp-location">Altitude: ${mkinfo.location.altitude}</p>
                    </div>`;
        } else {
            pphtml = `
                    <div class="ev-html-marker">
                        <h5>${mkinfo.dev.name}</h5>
                        <p>ID: ${mkinfo.dev.mrid}</p>
                        <p>Type: ${mkinfo.unit.id}</p>
                        <p>Format: ${mkinfo.unit.format}</p>
                        <p>Value: ${mkinfo.value} ${mkinfo.unit.unit}</p>
                        <p class="ev-pp-location">Latitude: ${mkinfo.dev.location.latitude}</p>
                        <p class="ev-pp-location">Longitude: ${mkinfo.dev.location.longitude}</p>
                        <p class="ev-pp-location">Altitude: ${mkinfo.dev.location.altitude}</p>
                    </div>`;
        }
        return pphtml;
    }

    stringToHslColor(str) {
        let s = 60;
        let l = 80;
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return `hsl(${h}, ${s}%,${l}%)`;
    }

}
