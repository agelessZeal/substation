/**
 * Chart Basic Setting
 */
export class ChartSettings {
    public static splinePlot = {
        series: {
            connectNulls: true,
            color: '#5d62b5',
            lineWidth: 1,
            shadow: true,
            marker: {
                enabled: true,
                symbol: 'circle',
                width: 4,
                height: 4,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    };
    public static yAxis = {
        min: 0, //0,
        max: 3.5,
        lineWidth: 1,
        lineColor: '#CCCCCC',
        tickPixelInterval: 50,
        tickLength: 5,
        tickWidth: 1,
        tickColor: '#FFFFFF',
        tickPosition: 'inside',
        gridLineWidth: 1,
        gridLineColor: '#444444',
        alternateGridColor: 'rgba(0, 0, 0, .2)',
        minorTickInterval: null,
        minorTickLength: 2,
        minorTickWidth: 0,
        minorTickColor: '#cccccc',
        minorTickPosition: 'outside',
        minorGridLineWidth: 1,
        minorGridLineColor: '#333333',
        minRange: 1,
        showFirstLabel: false,
        showLastLabel: true,
        maxZoom: 1
    };
}
