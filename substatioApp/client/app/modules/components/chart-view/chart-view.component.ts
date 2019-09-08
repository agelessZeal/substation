import {ChangeDetectorRef, Component, Input, NgModule, OnInit} from '@angular/core';
import {HttpServiceHelper} from '../../../core/http/HttpServiceHelper';
import {NodeInfoService} from '../../../core/services/node-type.service';
import {Chart} from 'angular-highcharts';
import {ChartSettings} from '../../../core/interfaces/chart-settings';
import {TreeToggleService} from '../../../core/services/tree-toggle.service';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../../core/services/auth.service';

declare var config;

@Component({
    selector: 'app-chart-view',
    templateUrl: './chart-view.component.html',
    styleUrls: ['./chart-view.component.css']
})

// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-marker-symbol/
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-marker-width-height/
// http://api.highcharts.com/highcharts/Point.update http://api.highcharts.com/highcharts/plotOptions.series.marker.symbol
// http://jsfiddle.net/abk21rdy/
// https://stackoverflow.com/questions/11083794/dynamically-draw-marker-on-last-point-in-highcharts
// https://www.highcharts.com/demo/spline-symbols/grid-light

// https://www.highcharts.com/forum/viewtopic.php?t=40901
// http://jsfiddle.net/BlackLabel/76qrjhoz/

// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/tooltip/shared-x-crosshair/
// https://api.highcharts.com/highcharts/series.scatter.tooltip.split
// https://stackoverflow.com/questions/18988329/highcharts-use-shared-tooltip-only-when-series-overlap

export class ChartViewComponent implements OnInit {
    @Input() accToken: string;
    msTypes: Array<MSTypes>;
    meterings: Array<MSTypes>;
    timeSeries: TimeSeries;
    seriesTypes: string[];
    dataBaseURL: string;

    curMSType: MSTypes;
    curMeteringType: MSTypes;
    curDevInfo: any;
    curSeriesType: string;

    jsonData: any;

    // Parameter for Historical Measurement API
    fromDate: Date; // for Historical Measurement API Call
    toDate: Date; // for Historical Measurement API Call

    // Parameter for Metering API
    numberOf: Number;
    timeSpan: string;
    // sub parameters for time span
    tsValue: string;
    curPrecision: string;
    // sub parameters for period and total time in actual measurement
    tsPeriodValue: number;
    tsTotalTimeValue: number;

    curPeriodPrecision: string;
    curTotalTimePrecision: string;

    tsDay: string;
    tsHour: string;
    tsMin: string;
    tsSecond: string;
    // sub parameters for time span
    isTimeSpanValid: boolean;
    startDate: Date;
    endDate: Date;

    chatDataLoaded: boolean;
    chart: Chart;
    chartOptions: any;
    chartTypes: any;
    selectedChartType: any;
    actualChartTimer: any;
    actualChartInterval: number;
    actualMaxPoint: number;
    actualCurPoint: number;
    actualTempData: Array<any>;
    prevActualPoint: any;
    isLoggedIn: boolean;

    public timePrecList = ['day', 'hour', 'minute', 'second'];

    userSetting: any;

    isTreeShowed: boolean;
    accessToken: string;
    apiBaseURL: string;

    tzOffset: number;
    httpErrorMsg: string;

    curHistoryHttpReq: any;

    scatterOption: any;

    constructor(private httpService: HttpServiceHelper,
                private cdRef: ChangeDetectorRef,
                private router: Router,
                private nodeTypeService: NodeInfoService,
                private authService: AuthService,
                private treeToggleService: TreeToggleService) {
        this.dataBaseURL = config.client_info.apiEndPoints.serverBaseURL;
        this.seriesTypes = ['Historical Measurement', 'Actual Measurement', 'Metering'];
        this.curSeriesType = 'Historical Measurement';
        let yesterday = new Date(Date.now() - 864e5);
        let oneHourAgo = new Date(Date.now() - 36e5);
        this.fromDate = oneHourAgo;
        this.startDate = oneHourAgo;
        this.numberOf = 10; //no used in data api
        this.timeSpan = '';
        this.isLoggedIn = true;
        this.actualChartInterval = 1;

        this.actualCurPoint = 0;
        this.actualTempData = [];

        this.tsValue = ''; //Metering Time Span Value (day, hour, minute, second)
        this.curPrecision = 'day'; //Metering Time Span Precision (day, hour, minute, second)

        this.prevActualPoint = {x: 0, y: 0};
        this.httpErrorMsg = '';
        this.userSetting = {
            period: config.client_info.actualChartSetting.period,
            totalTime: config.client_info.actualChartSetting.totalTime,
            periodPrecision: config.client_info.actualChartSetting.periodPrecision,
            totalTimePrecision: config.client_info.actualChartSetting.totalTimePrecision
        };

        //Check user cookie
        let userChartSetting = localStorage.getItem(config.client_info.storeInfo.settingKey);
        if (userChartSetting) {
            try {
                this.userSetting = JSON.parse(userChartSetting);
            } catch (e) {
                console.error('User Setting Parsing Error');
            }
        }
        this.tsPeriodValue = this.userSetting.period;
        this.tsTotalTimeValue = this.userSetting.totalTime;
        this.curPeriodPrecision = this.userSetting.periodPrecision; //Actual Period Time Precision measurement (day, hour, minute, second)
        this.curTotalTimePrecision = this.userSetting.totalTimePrecision; //Actual Total Time Precision (day, hour, minute, second)

        this.actualMaxPoint = 6; // Initial total time  5 mins => max point count = 5 mins / 2 seconds

        this.tsDay = '';
        this.tsHour = '';
        this.tsMin = '';
        this.tsSecond = '';

        this.isTimeSpanValid = false;
        this.chatDataLoaded = false;

        this.chartOptions = {
            chart: {type: 'spline',},
            title: {text: 'All Data'},
            xAxis: {
                visible: true,
                lineWidth: 1,
                type: 'datetime',
                labels: {
                    formatter: function () {
                        let dt = new Date(this.value);
                        return moment.utc(dt).format('YYYY.MM.DD') + '<br>' + moment.utc(dt).format('HH:mm:ss');
                    }
                }
            },
            yAxis: {
                visible: true,
                labels: {formatter: null, useHTML: true},
                title: {text: ''},
                lineWidth: 1,
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b> : <b>' + this.y + '</b>';
                },
                crosshairs: {
                    color: '#77757a',
                    dashStyle: 'solid'
                },
                shared: true
            },
            plotOptions: ChartSettings.splinePlot,
            credits: {enabled: false},
            series: [{name: 'Line 1', data: []}]
        };
        this.chart = new Chart(this.chartOptions);

        this.chartTypes = [
            {id: 1, name: 'Line Chart', lang: 'linechart', thumbnail: '../assets/img/linechart.jpg'},
            {id: 2, name: 'Bar Chart', lang: 'barchart', thumbnail: '../assets/img/barchart.jpg'},
        ];
        this.selectedChartType = 'Line Chart';
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.apiBaseURL = config.client_info.apiEndPoints.serverBaseURL;

        this.tzOffset = new Date().getTimezoneOffset() * 60000;

        this.scatterOption = {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    shared: true,
                    crosshairs: true,
                    split: true
                }
            }}

    }

    ngOnInit() {

        this.msTypes = [];
        let self = this;
        setTimeout(function () {
            self.getMSTypes();
        }, 500);
        setTimeout(function () {
            self.getMeterings();
        }, 1000);

        //Subscriber to receive device click event
        this.nodeTypeService.getNodeInfo().subscribe(msTypeInfo => {
            this.curDevInfo = msTypeInfo;
            this.makeAPIRequest();
        });

        //Subscriber to handle toggle button click
        this.treeToggleService.getToggleInfo().subscribe(toggleInfo => {
            this.chart.destroy();
            this.chart = new Chart(this.chartOptions);
        });
    }

    /**
     * Get Measurement types
     */
    getMSTypes() {
        this.httpService.httpGetRequest(this.accToken, this.dataBaseURL + '/measurements')
            .subscribe((res: any) => {
                if (config.client_info.testEnumMode) {
                    this.msTypes = this.genTestAddEnumData(res);
                } else {
                    this.msTypes = res;
                }
                if (this.msTypes.length > 0) {
                    this.curMSType = this.msTypes[0]; // set Default measurement information;
                }
            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
            });
    }

    /**
     * Testing purpose functions Start
     */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    genTestAddEnumData(msList: any) {
        for (let i = 0; i < msList.length; i++) {
            let enumValues: string[] = [];
            for (let j = 0; j < 10; j++) {
                enumValues.push('E' + j);
            }
            msList[i]['enumeration'] = {
                flags: false,
                values: enumValues
            };
        }
        return msList;
    }

    /**
     * Get Metering Types
     */
    getMeterings() {
        this.httpService.httpGetRequest(this.accessToken, this.dataBaseURL + '/meterings')
            .subscribe((res: any) => {
                if (config.client_info.testEnumMode) {
                    this.meterings = this.genTestAddEnumData(res);
                } else {
                    this.meterings = res;
                }
                console.log("Meterings Data===>", this.meterings);
                if (this.meterings.length > 0) {
                    this.curMeteringType = this.meterings[0];
                }
            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
            });
    }

    httpErrorHandler(error: any) {
        switch (error.status) {
            case 401:
                this.isLoggedIn = false;
                this.authService.setAuthInfo({login_st: false, errorobj: error});
                break;
            case 404:
                this.httpErrorMsg = `No ${this.curSeriesType.toLowerCase()} available`;
                break;
            default:
                this.httpErrorMsg = `Error occurred Status Code : ${error.status} <br> Message: ${error.error.Message}`;
        }
        this.chatDataLoaded = false;
    }

    /**
     * Get Data Series
     */
    makeAPIRequest() {
        this.chatDataLoaded = true;
        this.httpErrorMsg = '';
        switch (this.curSeriesType) {
            case 'Historical Measurement':
                //Get Device Info, fromDate, toDate.
                console.log('====Making Historical API===');
                this.actualCurPoint = 0;
                clearInterval(this.actualChartTimer);
                this.actualChartTimer = null;
                this.chartOptions.series = [{name: 'Line 1', data: []}];
                this.chart = new Chart(this.chartOptions);

                this.makeHistoryAPI(this.curDevInfo, this.curMSType, this.fromDate, this.toDate);
                break;
            case 'Metering':
                console.log('====Making Metering API===');
                this.actualCurPoint = 0;
                clearInterval(this.actualChartTimer);
                this.actualChartTimer = null;
                this.chartOptions.series = [{name: 'Line 1', data: []}];
                this.chart = new Chart(this.chartOptions);

                this.makeMeteringAPI(this.curDevInfo, this.curMeteringType, this.numberOf, this.timeSpan, this.startDate, this.endDate);
                break;
            case 'Actual Measurement':
                console.log('====Making Actual API===');
                this.updateActualChart();
                break;
        }
    }

    /**
     * Get Historical Measurement Data Series
     * @param devInfo
     * @param msType
     * @param fromDate
     * @param toDate
     */
    makeHistoryAPI(devInfo, msType, fromDate, toDate) {
        this.chatDataLoaded = false;
        console.log(devInfo, msType, fromDate, toDate);
        if (typeof msType == 'undefined' || typeof devInfo == 'undefined') {
            this.chatDataLoaded = false;
            this.httpErrorMsg = `No ${this.curSeriesType.toLowerCase()} available`;
            return;
        }
        let apiURL = `${this.apiBaseURL}/measurements/${msType.id}/historical/`;

        if (devInfo.type == 'all') {
            apiURL += 'all';
        } else if (devInfo.type == 'sub') {
            apiURL += 'substation/';
        } else if (devInfo.type == 'bay') {
            apiURL += 'bay/';
        } else if (devInfo.type == 'vsub') {
            apiURL += 'virtual_substation/';
        } else {
            apiURL += 'device/';
        }

        if (devInfo.type != 'all') apiURL += devInfo.value;
        apiURL += '?c=1';

        if (fromDate) {
            apiURL += '&fromDate=' + moment.utc(fromDate).format();
        }
        if (toDate) {
            apiURL += '&toDate=' + moment.utc(toDate).format();
        }
        if (this.curHistoryHttpReq) {
            this.curHistoryHttpReq.unsubscribe();
        }
        this.curHistoryHttpReq = this.httpService.httpGetRequest(this.accToken, apiURL)
            .subscribe((res: any) => {
                this.timeSeries = res;
                console.log('Historical Measurement Time Series Data');
                this.updateChartData(devInfo, msType, res.data);
                this.chatDataLoaded = true;
            }, (error: HttpErrorResponse) => {
                this.updateChartData(devInfo, msType, []);
                this.httpErrorHandler(error);
            });
    }

    /**
     *
     * @param devInfo
     * @param meteringType //required
     * @param numberOf //optional
     * @param timeSpan
     * @param startDate //optional
     * @param endDate //optional
     */
    makeMeteringAPI(devInfo, meteringType, numberOf, timeSpan, startDate, endDate) {
        console.log(devInfo, meteringType, numberOf, timeSpan, startDate, endDate);
        console.log('Metering Series API Called');
        if (typeof devInfo == 'undefined' || typeof meteringType == 'undefined'){
            this.chatDataLoaded = false;
            this.httpErrorMsg = `No ${this.curSeriesType.toLowerCase()} available`;
            return;
        }
        let apiURL = `${this.apiBaseURL}/meterings/${meteringType.id}/`;

        if (devInfo.type == 'all') {
            apiURL += 'all';
        } else if (devInfo.type == 'sub') {
            apiURL += 'substation/';
        } else if (devInfo.type == 'bay') {
            apiURL += 'bay/';
        } else if (devInfo.type == 'vsub') {
            apiURL += 'virtual_substation/';
        } else {
            apiURL += 'device/';
        }

        if (devInfo.type != 'all') apiURL += devInfo.value;
        apiURL += '?c=1';

        if (typeof timeSpan != 'undefined' && timeSpan != '') {
            apiURL += '&timeSpan=' + timeSpan;
        }

        if (typeof startDate != 'undefined') {
            apiURL += '&startDate=' + moment.utc(startDate).format();
        }
        if (typeof endDate != 'undefined') {
            apiURL += '&endDate=' + moment.utc(endDate).format();
        }

        this.chatDataLoaded = false;
        this.httpService.httpGetRequest(this.accToken, apiURL)
            .subscribe((res: any) => {
                this.timeSeries = res.data;
                console.log('Metering Time Series Data');
                console.log(this.timeSeries);
                this.updateChartData(devInfo, meteringType, res.data);
                this.chatDataLoaded = true;
            }, (error: HttpErrorResponse) => {
                this.updateChartData(devInfo, meteringType, []);
                this.httpErrorHandler(error);
            });
    }

    updateChartData(devInfo: any, msType: MSTypes, rawData: any) {
        let retData: any [] = [];
        let self = this;
        let enumLen = 0;
        let enumVal;
        if(this.curMSType.enumeration) {
            enumLen = self.curMSType.enumeration.values.length;
            this.chartOptions.yAxis.min = 0;
            this.chartOptions.chart.type = 'line';
            if(this.curMSType.enumeration.flags) {
                this.chartOptions.yAxis.max = enumLen;
            }  else {
                this.chartOptions.yAxis.max = enumLen - 1;
            }
        }

        for (let i = 0; i < rawData.length; i++) {
            let ts = new Date(rawData[i].date).getTime() - this.tzOffset;
            if (this.curMSType.enumeration) {
                enumVal = parseInt(rawData[i].value) % enumLen;
                if (this.curMSType.enumeration.flags) {
                    this.chartOptions.chart.type = 'scatter';
                    this.chartOptions.plotOptions = this.scatterOption;

                    //for the single data => multiple points using binary format
                    let binValueStr = parseInt(rawData[i].value).toString(2);
                    console.log(binValueStr.length, 'Line 512');
                    for (let j = 0; j < binValueStr.length; j++) {
                        if (binValueStr[j] == '1') {
                            retData.push([ts, (binValueStr.length - j - 1)]);
                        }
                    }
                } else {
                    retData.push([ts, enumVal]);
                }
            } else {
                retData.push([ts, rawData[i].value]);
            }
        }

        this.chartOptions.yAxis.labels.formatter = function () {
            if (self.curMSType.enumeration) {
                if(self.curMSType.enumeration.values[this.value]) {
                    return `<img src="/assets/resources/${self.curMSType.enumeration.values[this.value]}.png"  alt=""/>`;
                } else {
                    return '';
                }
            } else {
                return this.value + msType.unit;
            }
        };

        if (this.curMSType.enumeration) {
            this.chartOptions.chart.events = {
                load: function () {
                    let selfChart = this,
                        points = selfChart.series[0].points;
                    points.forEach(function (point, index) {
                        if(self.curMSType.enumeration.values[point.y]) {
                            point.update({
                                marker: {
                                    symbol: `url(/assets/resources/${self.curMSType.enumeration.values[point.y]}.png)`,
                                }
                            });
                        }
                    });
                }
            };
        }

        this.chartOptions.tooltip.formatter = function () {
            //Get All Points with current x axis point
            let tf = moment.utc(this.x).format().replace('T', ' ').replace('Z', '');
            if (self.curMSType.enumeration && self.curMSType.enumeration.flags) {
                let seriesData: any;
                seriesData = self.chart.ref.series[0];
                let dataPointsX = seriesData.processedXData;
                let dataPointsY = seriesData.processedYData;
                let yAxisVal = 0;
                for (let i = 0; i < dataPointsX.length; i++) {
                    if (this.x == dataPointsX[i]) {
                        yAxisVal += Math.pow(2, dataPointsY[i]);
                    }
                }
                return '<b>' + tf + '</b> : <b>' + yAxisVal + msType.unit + '</b>';
            } else {
                return '<b>' + tf + '</b> : <b>' + this.y + msType.unit + '</b>';
            }
        };

        this.chartOptions.yAxis.title.text = msType.description + ' (' + msType.unit + ')';

        this.chartOptions.series = [{name: 'Line 1', data: retData}];
        this.chartOptions.title.text = devInfo.value + ' Data';

        this.chart.destroy();
        this.chart = new Chart(this.chartOptions);
    }

    onChangeChartType(newValue: string) {
        if(this.curMSType.enumeration && !this.curMSType.enumeration.flags) {
            this.chartOptions.chart.type  = 'line';
        } else {
            if (newValue == 'Bar Chart') {
                this.chartOptions.chart.type = 'column';
            } else {
                this.chartOptions.chart.type = 'spline';
            }
        }
        this.chart.destroy();
        this.chart = new Chart(this.chartOptions);
    }

    onSelectSeries(newValue: string) {
        if (this.curSeriesType != newValue) {
            this.curSeriesType = newValue;
            console.log(this.curSeriesType);
            this.makeAPIRequest();
        }
    }

    onSelectMSType(newValue: string) {
        for (let i = 0; i < this.msTypes.length; i++) {
            if (newValue == this.msTypes[i].id) {
                this.curMSType = this.msTypes[i];
                this.makeAPIRequest();
                break;
            }
        }
    }

    onSelectMetering(newValue: string) {
        for (let i = 0; i < this.meterings.length; i++) {
            if (newValue == this.meterings[i].id) {
                this.curMeteringType = this.meterings[i];
                this.makeAPIRequest();
                break;
            }
        }
    }

    onSelectTimeSpanPrecision(newValue: string) {
        this.curPrecision = newValue;
    }

    onSelectPeriodPrecision(newValue: string) {
        this.curPeriodPrecision = newValue;
    }

    onSelectTotalTimePrecision(newValue: string) {
        this.curTotalTimePrecision = newValue;
    }

    onSetTotalTime() {
        this.updateActualChart();
    }

    onSetPeriodTime() {
        this.updateActualChart();
    }

    /**
     * Entry Point to get Actual data Series
     */
    updateActualChart() {
        if(typeof this.curDevInfo == 'undefined' || typeof this.curMSType == 'undefined') {
            this.chatDataLoaded = false;
            this.httpErrorMsg = `No ${this.curSeriesType.toLowerCase()} available`;
            return;
        }
        //Get Period Time Value
        let periodValue = Number(this.tsPeriodValue);
        if (periodValue < 0 || periodValue == 0) return;

        this.userSetting.period = periodValue;
        this.userSetting.periodPrecision = this.curPeriodPrecision;
        localStorage.setItem(config.client_info.storeInfo.settingKey, JSON.stringify(this.userSetting));

        let realPeriodTime = 0;
        switch (this.curPeriodPrecision) {
            case 'day':
                realPeriodTime = periodValue * 86400;
                break;
            case 'hour':
                realPeriodTime = periodValue * 3600;
                break;
            case 'minute':
                realPeriodTime = periodValue * 60;
                break;
            case 'second':
                realPeriodTime = periodValue;
                break;
        }
        //Get Total Time Value
        let curTotalTime = Number(this.tsTotalTimeValue);
        if (curTotalTime < 0 || curTotalTime == 0) return;

        this.userSetting.totalTime = curTotalTime;
        this.userSetting.totalTimePrecision = this.curTotalTimePrecision;
        localStorage.setItem(config.client_info.storeInfo.settingKey, JSON.stringify(this.userSetting));

        let realTotalTime = 0;
        switch (this.curTotalTimePrecision) {
            case 'day':
                realTotalTime = curTotalTime * 86400;
                break;
            case 'hour':
                realTotalTime = curTotalTime * 3600;
                break;
            case 'minute':
                realTotalTime = curTotalTime * 60;
                break;
            case 'second':
                realTotalTime = curTotalTime;
                break;
        }
        if (realTotalTime < realPeriodTime) {
            alert('Total Time must be bigger than Period');
            return;
        }
        this.actualMaxPoint = Math.floor(realTotalTime / realPeriodTime);
        clearInterval(this.actualChartTimer);
        this.actualTempData = [];
        let self = this;
        let actualStartTime = new Date();
        for (let i = +this.actualMaxPoint; i > -1; i--) {
            // this.actualTempData.push([actualStartTime.getTime() + i * (+realPeriodTime) * 1000, null]);
            this.actualTempData.push([actualStartTime.getTime() - this.tzOffset - i * (+realPeriodTime) * 1000, null]);
        }

        this.chartOptions.yAxis.labels.formatter = function () {
            if (self.curMSType.enumeration) {
                self.chartOptions.yAxis.min = 0;
                let enumValues = self.curMSType.enumeration.values;
                if(self.curMSType.enumeration.flags) {
                    self.chartOptions.yAxis.max = enumValues.length;
                } else {
                    self.chartOptions.yAxis.max = enumValues.length - 1;
                }
                if (this.value.toString().indexOf('.') > -1) {
                    // When data value downward or upward,
                    // chart generate float numbers such 2.2, 2.4 , resource missing issue
                    return '';
                } else {
                    if(self.curMSType.enumeration.flags) {
                    } else {
                        console.error(this.value, self.curMSType.enumeration.values[this.value], "Line 705");
                    }
                    if(self.curMSType.enumeration.values[this.value]) {
                        return `<img src="/assets/resources/${self.curMSType.enumeration.values[this.value]}.png"  alt=""/>`;
                    } else {
                        return '';
                    }
                }
            } else {
                return this.value + self.curMSType.unit;
            }
        };
        this.chartOptions.yAxis.title.text = this.curMSType.description + ' (' + this.curMSType.unit + ')';
        this.chartOptions.series = [{name: 'Line 1', data: this.actualTempData}];

        this.chart = new Chart(this.chartOptions);
        this.actualCurPoint = 0;

        this.actualChartTimer = setInterval(function () {
            self.actualLiveData(self.curDevInfo, self.curMSType);
        }, +realPeriodTime * 1000);
    }

    /**
     * Acutal single data and update using specified parameters
     * @param devInfo
     * @param msType
     */
    actualLiveData(devInfo, msType) {
        if (this.curSeriesType != 'Actual Measurement') return;
        console.log('History Actual Time Series API Called');
        if (typeof msType == 'undefined' || typeof  devInfo == 'undefined') {
            this.chatDataLoaded = false;
            this.httpErrorMsg = `No ${this.curSeriesType.toLowerCase()} available`;
            return;
        }
        let apiURL = `${this.apiBaseURL}/measurements/${msType.id}/actual/`;

        if (devInfo.type == 'all') {
            apiURL += 'all';
        } else if (devInfo.type == 'sub') {
            apiURL += 'substation/';
        } else if (devInfo.type == 'bay') {
            apiURL += 'bay/';
        } else if (devInfo.type == 'vsub') {
            apiURL += 'virtual_substation/';
        } else {
            apiURL += 'device/';
        }

        if (devInfo.type != 'all') apiURL += devInfo.value;

        this.httpService.httpGetRequest(this.accToken, apiURL)
            .subscribe((res: any) => {
                this.timeSeries = res.data;
                console.log('Actual Measurement Time Series Data');
                let enumValueLen = (msType.enumeration)?msType.enumeration.values.length:0;
                let transValue, pSeries, firstPx, k, indexSeries  = [];
                let ts = new Date(res.data[0].date).getTime() - this.tzOffset;
                if(msType.enumeration && msType.enumeration.flags) { // Binary Mode
                    this.chartOptions.chart.type = 'scatter';
                    let binValueStr = parseInt(res.data[0].value).toString(2);
                    for (let j = 0; j < binValueStr.length; j++) {
                        if (binValueStr[j] == '1') {
                            this.chart.addPoint([ts, (binValueStr.length - j - 1)]);
                        }
                    }
                    //Remove all points with first x Axis value,
                    pSeries = this.chart.ref.series[0].points;
                    firstPx = pSeries[0].x;
                    indexSeries  = [];
                    for(k = 0; k<pSeries.length; k++) {
                        if(firstPx == pSeries[k].x) {
                            indexSeries.push(k);
                        } else {
                            break;
                        }
                    }
                    for(k = 0; k<indexSeries.length; k++) {
                        this.chart.removePoint(0);
                    }
                    //Update Point Operation
                    this.prevActualPoint = {x: ts, y: res.data[0].value};
                } else { // Standard and modulation Mode

                    if (msType.enumeration && !msType.enumeration.flags) {
                        transValue = parseInt(res.data[0].value) % enumValueLen;
                    } else {
                        transValue = res.data[0].value;
                    }

                    if (ts != this.prevActualPoint.x || transValue != this.prevActualPoint.y) {
                        this.chart.addPoint([ts, transValue], 0, true, true);
                    }
                    this.prevActualPoint = {x: ts, y: transValue};
                }
                //*Real Time Update when data point at the end*/
                // https://stackoverflow.com/questions/11083794/dynamically-draw-marker-on-last-point-in-highcharts

                if (msType.enumeration) {
                    pSeries = this.chart.ref.series[0].points;
                    let lastPoint = this.chart.ref.series[0].points[pSeries.length - 1];
                    if (msType.enumeration.flags) { //Binary mode
                        for(k = pSeries.length - 1; k>-1; k--) {
                            if(lastPoint.x == pSeries[k].x) {
                                if(msType.enumeration.values[pSeries[k].y]) {
                                    pSeries[k].update({
                                        marker: {
                                            symbol: `url(/assets/resources/${msType.enumeration.values[pSeries[k].y]}.png)`,
                                        }
                                    });
                                }
                            } else {
                                break;
                            }
                        }
                    } else { // Modulation Mode
                        if(msType.enumeration.values[lastPoint.y]) {
                            lastPoint.update({
                                marker: {
                                    symbol: `url(/assets/resources/${msType.enumeration.values[lastPoint.y]}.png)`,
                                }
                            });
                        }
                    }
                }

            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
            });
    }

    onSelectTimeSpan() {
        this.tsDay = this.tsHour = this.tsMin = this.tsSecond = '';
        if (!this.tsValue) {
            this.tsValue = '';
            this.isTimeSpanValid = false;
            this.httpErrorMsg = 'Specify one of the following parameters: numberOf or timespan';
            this.chatDataLoaded = false;
            return;
        }
        this.isTimeSpanValid = true;
        switch (this.curPrecision) {
            case 'day':
                this.tsDay = this.tsValue;
                break;
            case 'hour':
                this.tsHour = this.tsValue;
                break;
            case 'minute':
                this.tsMin = this.tsValue;
                break;
            case 'second':
                this.tsSecond = this.tsValue;
                break;
        }

        if (this.tsDay == '') this.tsDay = '0';
        if (this.tsHour == '') this.tsHour = '0';
        if (this.tsMin == '') this.tsMin = '0';
        if (this.tsSecond == '') this.tsSecond = '0';

        let i = 0, len = 0;

        len = this.tsHour.length;
        for (i = 0; i < 2 - len; i++) {
            this.tsHour = '0' + this.tsHour;
        }
        len = this.tsMin.length;
        for (i = 0; i < 2 - len; i++) {
            this.tsMin = '0' + this.tsMin;
        }
        len = this.tsSecond.length;
        for (i = 0; i < 2 - len; i++) {
            this.tsSecond = '0' + this.tsSecond;
        }

        this.timeSpan = `${this.tsDay}:${this.tsHour}:${this.tsMin}:${this.tsSecond}`;
        this.makeAPIRequest();
    }

    onChangeFromDate(fromDate: Date) {
        this.fromDate = fromDate;
        console.log(this.fromDate.toUTCString());
        this.makeAPIRequest();
    }

    onChangeToDate(toDate: Date) {
        this.toDate = toDate;
        this.makeAPIRequest();
    }

    onChangeNumberOf(newValue: Number) {
        this.numberOf = newValue;
    }

    onSelectNumberOf() {
        this.makeAPIRequest();
    }

    onChangeStartDate(startDate: Date) {
        this.startDate = startDate;
        this.makeAPIRequest();
    }

    onChangeEndDate(endDate: Date) {
        this.endDate = endDate;
        this.makeAPIRequest();
    }

    onTreeToggle() {
        this.isTreeShowed = !this.isTreeShowed;
        this.treeToggleService.setToggle(!this.isTreeShowed);
    }
}
