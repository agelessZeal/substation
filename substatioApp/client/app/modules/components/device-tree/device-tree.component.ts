import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import * as treeSetting from './tree-setting';
import {HttpServiceHelper} from '../../../core/http/HttpServiceHelper';
import {NodeInfoService} from '../../../core/services/node-type.service';
import {TreeToggleService} from '../../../core/services/tree-toggle.service';
import {Router} from '@angular/router';
import {forkJoin} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../../core/services/auth.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

declare var config;

//https://github.com/valor-software/ng2-tree/issues/299
//https://github.com/valor-software/ng2-tree/issues/316

@Component({
    selector: 'app-device-tree',
    templateUrl: './device-tree.component.html',
    styleUrls: ['./device-tree.component.css']
})

export class DeviceTreeComponent implements OnInit {

    @Input() accToken: string;
    @ViewChild('treeComponent') treeComponent;
    devTreeLoaded: boolean;
    isTreeShowed: boolean;
    apiBaseURL: string;
    isLoggedIn: boolean;

    devTreeData: any;

    //3 - make sure that tree object conforms to the TreeModel interface
    public tree: TreeModel = {
        value: 'All',
        id: 'root_1##root',
        settings: treeSetting.MyTreeSetting.settings,
        children: [{
            value: 'Physical Substations',
            id: 'all_1##all',
            children: []
        },{
            value: 'Virtual Substations',
            id: 'virtual_1##virtual',
            settings: {'selectionAllowed': false},
            children: []
        },]
    };

    constructor(private httpService: HttpServiceHelper,
                private nodeInfoService: NodeInfoService,
                private translate: TranslateService,
                private router: Router,
                private authService: AuthService,
                private treeToggleService: TreeToggleService) {
        this.devTreeLoaded = false;
        this.isTreeShowed = true;
        this.isLoggedIn = true;
        this.apiBaseURL = config.client_info.apiEndPoints.serverBaseURL;

        this.devTreeData = [];
    }

    ngOnInit() {

        this.loadTreeData();

        this.treeToggleService.getToggleInfo().subscribe(toggleInfo => {
            this.isTreeShowed = toggleInfo;
        });

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            if (this.treeComponent) {
                let pTreeNode = this.treeComponent.getControllerByNodeId('all_1##all');
                pTreeNode.rename(event.translations['Home']['PhysicalSubstations']);
                pTreeNode = this.treeComponent.getControllerByNodeId('virtual_1##virtual');
                pTreeNode.rename(event.translations['Home']['VirtualSubstations']);
            }
        });
    }

    /**
     * Construct Device Tree using token from Auth server
     */
    loadTreeData() {
        let subs = [];
        let subIdsURL = this.apiBaseURL + '/substations';
        let actk = this.accToken;
        let i, j, k, self = this;
        this.httpService.httpGetRequest(actk, subIdsURL).subscribe((subsRes: any) => {
            subs = subsRes;
            let promiseList = [];
            let subObjList = [];
            let devPromiseList = [];
            if (subs.length == 0) {
                this.isLoggedIn = false;
                this.authService.setAuthInfo({login_st: false, errorobj: {status: '', statusText: 'No substation data is accessible'}});
                return;
            }
            for (i = 0; i < subs.length; i++) {
                let baysURL = this.apiBaseURL + '/substations/' + subs[i] + '/bays?suborder=' + i;
                let subObjId = self.getRandomId('sub_', 10, 50000);
                subObjList.push({value: subs[i], id: subObjId + '##' + subs[i], children: []});
                promiseList.push(this.httpService.httpGetRequestWithHeader(actk, baysURL));
            }
            forkJoin(promiseList).subscribe((results: any) => {
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
                    devResults.forEach(function (devsRes: any) {
                        let devs = devsRes.body;
                        let bayName = devsRes.url.split('/bays/')[1].split('/devices')[0];
                        let subOrder = devsRes.url.split('/bays/')[1].split('/devices')[1].split('?suborder=')[1];
                        //console.log('Sub Id :' + subName, 'Bay Id : ' + bayName,devsRes.data);
                        let bayObj = {value: bayName, id: self.getRandomId('bay_', 10, 50000) + '##' + bayName, children: []};
                        for (k = 0; k < devs.length; k++) {
                            let devObj = {value: devs[k], id: self.getRandomId('dev_', 10, 50000) + '##' + devs[k], children: []};
                            bayObj.children.push(devObj);
                        }
                        subObjList[Number(subOrder)].children.push(bayObj);
                    });
                    self.getDeviceTreeDetail(subObjList);
                }, (error: any) => {
                    this.httpErrorHandler(error);
                    this.devTreeLoaded = true;
                });
            }, (error: any) => {
                this.httpErrorHandler(error);
                this.devTreeLoaded = true;
            });
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            this.devTreeLoaded = true;
        });
    }

    loadVirtualTreeData() {
        let vsubs = [];
        let subIdsURL = this.apiBaseURL + '/virtual_substations';
        let actk = this.accToken;
        let i, self = this;
        this.httpService.httpGetRequest(actk, subIdsURL).subscribe((vsubsRes: any) => {
            vsubs = vsubsRes;
            let promiseList = [];
            let vSubObjList = [];
            for (i = 0; i < vsubs.length; i++) {
                let vSubDetailURL = this.apiBaseURL + '/virtual_substations/' + vsubs[i] + '?suborder=' + i;
                let subObjId = self.getRandomId('vsub_', 10, 50000);
                vSubObjList.push({value: vsubs[i], id: subObjId + '##' + vsubs[i], children: []});
                promiseList.push(this.httpService.httpGetRequestWithHeader(actk, vSubDetailURL));
            }
            forkJoin(promiseList).subscribe((results: any) => {
                for(i = 0; i<results.length; i++) {
                    let vSubItem = results[i];
                    let vsubOrder = vSubItem.url.split('suborder=')[1];
                    vSubObjList[vsubOrder].value = this.makeVSubTooltip(vSubItem.body);
                    vSubObjList[vsubOrder].children = this.getSubSubstationTree(vSubItem.body.substations);
                }
                let oopNodeController = self.treeComponent.getControllerByNodeId('virtual_1##virtual');
                for (i = 0; i < vSubObjList.length; i++) {
                    oopNodeController.addChild(vSubObjList[i]);
                }

            }, (error: any) => {
                this.httpErrorHandler(error);
                this.devTreeLoaded = true;
            });
            this.devTreeLoaded = true;
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            this.devTreeLoaded = true;
        });
    }

    getSubSubstationTree(subs) {
        let subtree = [];
        for (let j = 0; j<subs.length; j++) {
            for(let i = 0; i<this.devTreeData.length; i++) {
                let subTreeNodeId = this.devTreeData[i].id.split('##')[1];
                if(subTreeNodeId == subs[j].substationmrid) {
                    let subinfo = JSON.parse(JSON.stringify(this.devTreeData[i]));
                    subinfo.value = this.makeSubToolTip(this.devTreeData[i].additionalData, true, subs[j].role);
                    subtree.push(subinfo);
                }
            }
        }
        return subtree;
    }

    httpErrorHandler(error: any) {
        console.error(error);
        switch (error.status) {
            case 401:
                this.isLoggedIn = false;
                this.authService.setAuthInfo({login_st: false, errorobj: error});
                break;
            case 404:
                console.error(`No Device Tree available`);
                break;
            default:
                alert(`Backend returned code ${error.status}, body was: ${error.error.Message}`);
        }
    }

    ///Getting Device Structure Details============================================
    getDeviceTreeDetail(devSt: any) {
        let i, j, k, self = this;
        let subPromiseList = [];
        let devPromiseList = [];
        let bayPromiseList = [];
        let devTypes = {};
        let ttipHTML = '';
        let actk = this.accToken;

        for (i = 0; i < devSt.length; i++) {
            let subDetailURL = `${this.apiBaseURL}/substations/${devSt[i].value}?suborder=${i}`;
            subPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, subDetailURL));
            let bayList = devSt[i].children;
            for (j = 0; j < bayList.length; j++) {
                let bayDetailURL = `${this.apiBaseURL}/bays/${bayList[j].value}?suborder=${i}&bayorder=${j}`;
                bayPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, bayDetailURL));
                let devList = bayList[j].children;
                for (k = 0; k < devList.length; k++) {
                    let devDetailURL = `${this.apiBaseURL}/devices/${devList[k].value}?suborder=${i}&bayorder=${j}&devorder=${k}`;
                    devPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, devDetailURL));
                }
            }

        }
        forkJoin(subPromiseList).subscribe(function (subDetailsRes) {
            for (i = 0; i < subDetailsRes.length; i++) {
                let subDetailRes: any = subDetailsRes[i];
                ttipHTML = self.makeSubToolTip(subDetailRes.body, false, '');
                let subOrder = subDetailRes.url.split('?suborder=')[1];
                devSt[Number(subOrder)].value = ttipHTML;
                devSt[Number(subOrder)].additionalData = subDetailRes.body;
            }
            //make bay tool tip
            forkJoin(bayPromiseList).subscribe(function (bayDetailsRes) {
                for (i = 0; i < bayDetailsRes.length; i++) {
                    let bayDetailRes: any = bayDetailsRes[i];
                    ttipHTML = self.makeBayToolTip(bayDetailRes.body);
                    let bayOrderInfo = bayDetailRes.url.split('?suborder=')[1];
                    let baySubOrder = bayOrderInfo.split('&bayorder=')[0];
                    let bayOrder = bayOrderInfo.split('&bayorder=')[1];
                    devSt[Number(baySubOrder)].children[Number(bayOrder)].value = ttipHTML;
                }
                //make device tool tip
                forkJoin(devPromiseList).subscribe(async function (deviceDetailsRes) {
                    for (i = 0; i < deviceDetailsRes.length; i++) {
                        let deviceDetailRes: any = deviceDetailsRes[i];
                        let devTypeInfo: any;
                        if (devTypes[deviceDetailRes.body.devicetypemrid]) {
                            devTypeInfo = devTypes[deviceDetailRes.body.devicetypemrid];
                        } else {
                            try {
                                let devTypeDetailURL = `${self.apiBaseURL}/devices/${deviceDetailRes.body.mrid}/devicetype`;
                                devTypeInfo = await self.httpService.httpGetRequest(actk, devTypeDetailURL).toPromise();
                            } catch (err) {
                                console.log("Can't get device type information", err.status + 'Error');
                            }
                            devTypes[deviceDetailRes.body.devicetypemrid] = devTypeInfo;
                        }
                        ttipHTML = self.makeDeviceToolTip(deviceDetailRes.body, devTypeInfo);
                        /////////////////////
                        let deviceOrderInfo = deviceDetailRes.url.split('?suborder=')[1];
                        let deviceSubOrder = deviceOrderInfo.split('&bayorder=')[0];
                        let deviceBayOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[0];
                        let deviceOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[1];
                        devSt[Number(deviceSubOrder)].children[Number(deviceBayOrder)].children[Number(deviceOrder)].value = ttipHTML;
                    }

                    let oopNodeController = self.treeComponent.getControllerByNodeId('all_1##all');
                    for (i = 0; i < devSt.length; i++) {
                        oopNodeController.addChild(devSt[i]);
                    }

                    //Set Device TreeData
                    self.devTreeData = devSt;
                    self.loadVirtualTreeData();

                    //Select Default Node
                    setTimeout(function () {
                        oopNodeController.select();
                    }, 1200);

                    self.devTreeLoaded = true;
                }, (error: any) => {
                    self.httpErrorHandler(error);
                    self.devTreeLoaded = true;
                });
            }, (error: any) => {
                self.httpErrorHandler(error);
                self.devTreeLoaded = true;
            });
        }, (error: any) => {
            this.httpErrorHandler(error);
            this.devTreeLoaded = true;
        });
    }

    /**
     * Send Device click event into chart-view component
     * @param $e
     */
    onDevItemClick($e) {
        let nodeType = $e.node.id.split('_')[0];
        let nodeId = $e.node.id.split('##')[1];
        console.log($e.node.id);
        if(nodeType == 'virtual') return;
        this.nodeInfoService.setNodeInfo(nodeType, nodeId);
    }

    /**
     * Return random id to construct device tree
     * @param type
     * @param min
     * @param max
     * @returns {*}
     */
    getRandomId(type: string, min: number, max: number) {
        return type + Math.round(Math.random() * (max - min) + min);
    }

    makeSubToolTip(subInfo: any, isVirtual: boolean, role: string) {
        let ttipWrap = '<div class="ctip sub"  onmouseover="oTh()">';
        let ttipItem = '<span class="ttext">';
        let ttipHTML = '';
        ttipHTML += ttipWrap;
        console.log(subInfo.mrid);
        let emptyAddress = {
            'number': '',
            'street': '',
            'city': '',
            'locality': '',
            'zip': '',
            'country': '',
            'region':''
        };
        let emptyPos = {'latitude': '', 'longitude': '', 'altitude': ''};
        let subPos = (subInfo.location) ? subInfo.location : emptyPos;
        let subContact = (subInfo.contact) ? subInfo.contact : {'name': '', 'phone': '', 'email': ''};
        let subAddress = (subInfo.address) ? subInfo.address : emptyAddress;
        //Make HTML for Tooltip
        ttipHTML += subInfo.mrid;
        ttipHTML += ttipItem;

        if(isVirtual) {
            ttipHTML += '<span class="tipitem role">Role : ' + role + '</span>';
            ttipHTML += '<hr>';
        }

        ttipHTML += '<span class="tipitem">MRID : ' + subInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + subInfo.description + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">latitude : ' + subPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + subPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + subPos.altitude + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">name : ' + subContact.name + '</span>';
        ttipHTML += '<span class="tipitem">phone : ' + subContact.phone + '</span>';
        ttipHTML += '<span class="tipitem">email : ' + subContact.email + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">number : ' + subAddress.number + '</span>';
        ttipHTML += '<span class="tipitem">street : ' + subAddress.street + '</span>';
        ttipHTML += '<span class="tipitem">city : ' + subAddress.city + '</span>';
        ttipHTML += '<span class="tipitem">locality : ' + subAddress.locality + '</span>';
        ttipHTML += '<span class="tipitem">zip : ' + subAddress.zip + '</span>';
        ttipHTML += '<span class="tipitem">country : ' + subAddress.country + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';

        return ttipHTML;
    }

    makeBayToolTip(bayInfo: any) {
        let emptyPos = {'latitude': '', 'longitude': '', 'altitude': ''};
        let ttipWrapBay = '<div class="ctip bay"  onmouseover="oTh()">';
        let ttipItem = '<span class="ttext">';
        let ttipHTML = '';
        let bayPos = (bayInfo.location) ? bayInfo.location : emptyPos;
        ttipHTML += ttipWrapBay;
        ttipHTML += bayInfo.mrid;
        ttipHTML += ttipItem;
        ttipHTML += '<span class="tipitem">MRID : ' + bayInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">Name : ' + bayInfo.name + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + bayInfo.description + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">latitude : ' + bayPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + bayPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + bayPos.altitude + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';
        return ttipHTML;
    }

    makeDeviceToolTip(devInfo: any, devtypeInfo: any) {
        let emptyDevType = {
            'vendor': '',
            'hwRev': '',
            'swRev': '',
            'serNum': '',
            'model': '',
            'owner': '',
            'primeOps': '',
            'secondOps': ''
        };
        let ttipWrapDev = '<div class="ctip dev"  onmouseover="oTh()">';
        let ttipItem = '<span class="ttext">';
        let emptyPos = {'latitude': '', 'longitude': '', 'altitude': ''};
        let devPos = (devInfo.location) ? devInfo.location : emptyPos;
        let devType = (devInfo.devicetypemrid) ? devtypeInfo : emptyDevType;

        let ttipHTML = '';
        ttipHTML += ttipWrapDev;
        ttipHTML += devInfo.mrid;
        ttipHTML += ttipItem;
        ttipHTML += '<span class="tipitem">MRID : ' + devInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">Name : ' + devInfo.name + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + devInfo.description + '</span>';
        ttipHTML += '<hr>';

        if (devInfo.devicetypemrid) {
            ttipHTML += '<span class="tipitem">vendor : ' + devType.vendor + '</span>';
            ttipHTML += '<span class="tipitem">hwRev : ' + devType.hwRev + '</span>';
            ttipHTML += '<span class="tipitem">swRev : ' + devType.swRev + '</span>';
            ttipHTML += '<span class="tipitem">serNum : ' + devType.serNum + '</span>';
            ttipHTML += '<span class="tipitem">model : ' + devType.model + '</span>';
            ttipHTML += '<span class="tipitem">owner : ' + devType.owner + '</span>';
            ttipHTML += '<span class="tipitem">primeOps : ' + this.replaceHTMLSymbol(devType.primeOps) + '</span>';
            ttipHTML += '<span class="tipitem">secondOps : ' + this.replaceHTMLSymbol(devType.secondOps) + '</span>';
            ttipHTML += '<hr>';
        }

        ttipHTML += '<span class="tipitem">latitude : ' + devPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + devPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + devPos.altitude + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';
        return ttipHTML;
    }

    makeVSubTooltip(vSubInfo: any) {

        let ttipWrapDev = '<div class="ctip dev"  onmouseover="oTh()">';
        let ttipItem = '<span class="ttext">';
        let emptyPos = {'latitude': '', 'longitude': '', 'altitude': ''};
        let devPos = (vSubInfo.location) ? vSubInfo.location : emptyPos;

        let ttipHTML = '';
        ttipHTML += ttipWrapDev;
        ttipHTML += vSubInfo.mrid;
        ttipHTML += ttipItem;

        ttipHTML += '<span class="tipitem">MRID : ' + vSubInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">PMRID : ' + vSubInfo.partnermrid + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + vSubInfo.description + '</span>';
        ttipHTML += '<hr>';

        if (vSubInfo.address) {
            ttipHTML += '<span class="tipitem">Number : ' + vSubInfo.address.number + '</span>';
            ttipHTML += '<span class="tipitem">Country : ' + vSubInfo.address.country + '</span>';
            ttipHTML += '<span class="tipitem">City : ' + vSubInfo.address.city + '</span>';
            ttipHTML += '<span class="tipitem">Street : ' + vSubInfo.address.street + '</span>';
            ttipHTML += '<span class="tipitem">Locality : ' + vSubInfo.address.locality + '</span>';
            ttipHTML += '<span class="tipitem">Zip : ' + vSubInfo.address.zip + '</span>';
            ttipHTML += '<span class="tipitem">Region : ' + vSubInfo.address.region + '</span>';
            ttipHTML += '<hr>';
        }

        ttipHTML += '<span class="tipitem">latitude : ' + devPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + devPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + devPos.altitude + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';
        return ttipHTML;
    }

    replaceHTMLSymbol(srcstr) {
        return srcstr.replace(/>/g, '&gt;').replace(/</g, '&lt;');
    }
}
