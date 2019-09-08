function checkTable(tblId, tdInfo) {
    var thList = $(`#${tblId}`).find('.th-id-wrap');
    var storeKey = tblId + '_width';
    var widthInfoStr = localStorage.getItem(storeKey);

    var curTblWidth = $(`#${tblId}`).find('.ui-table.ui-widget.ui-table-hoverable-rows').outerWidth();
    thList.each(function (index, item) {
        var thText = $(this).text().trim();
        if (thText == tdInfo.header) {
            var thW = $(this).outerWidth();
            var widthInfo = {};
            if(tdInfo.visibility) { //Hidden => Show (Reading hidden td width from LocalStorage)
                if(widthInfoStr) {
                    widthInfo = JSON.parse(widthInfoStr);
                    thW = widthInfo[index];
                    curTblWidth = curTblWidth + thW;
                }
            } else { //Show => Hidden (Writing td width to LocalStorage)
                curTblWidth = curTblWidth - thW;
            }
            $(`#${tblId}`).find('.ui-table.ui-widget.ui-table-hoverable-rows').width(curTblWidth)
        }
    })
}

function initTable(tblId) {
    //Save initial table width data
    var prevWidthSetting = localStorage.getItem(`${tblId}_width`);
    if(!prevWidthSetting){
        setTimeout(function () {
            var thList  = $(`#${tblId}`).find('.th-id-wrap');
            var tdWidthList = [];
            var i = 0;
            thList.each(function (index, item) {
                if(index>1){
                    tdWidthList.push($(this).outerWidth());
                }
            });
            localStorage.setItem(`${tblId}_width`, JSON.stringify(tdWidthList));
        },1000);
    }
}

function readTable(tblId) {
    //Restore saved table width data
    setTimeout(function () {
        var thList = $(`#${tblId}`).find('.th-id-wrap');
        var storeKey = tblId + '_width';
        var widthInfoStr = localStorage.getItem(storeKey);
        var visibleSettingStr = localStorage.getItem(tblId + '_setting');
        if (widthInfoStr) {
            var widthInfo = JSON.parse(widthInfoStr);
            var visibleSetting = JSON.parse(visibleSettingStr);
            var visibleCols = visibleSetting.visible;
            var tblWidth = 0;
            thList.each(function (index, item) {
                if(index>1) {
                    $(this).outerWidth(widthInfo[index-2]);
                    var thText = $(this).text().trim();
                    if(visibleCols.indexOf(thText)>-1){
                        tblWidth += widthInfo[index-2];
                    }
                }
            });
            $(`#${tblId}`).find('.ui-table.ui-widget.ui-table-hoverable-rows').width(tblWidth + 148)
        } else {
            initTable(tblId);
        }
    },50);
}

function updateTableWidth(tblId, tdInfo) {
    console.log('column resizing.....');
    var curThName = $(tdInfo.element).text();
    //Get Th tag Index and Setting Table Width Info
    var thList = $(`#${tblId}`).find('.th-id-wrap');
    var curThIndex = 0;
    thList.each(function (index, item) {
        if($(this).text()== curThName) {
            curThIndex = index;
        }
    });
    var storeKey = tblId + '_width';
    var widthInfoStr = localStorage.getItem(storeKey);
    if (widthInfoStr) {
        var widthInfo = JSON.parse(widthInfoStr);
        widthInfo[curThIndex-2] = widthInfo[curThIndex-2] + tdInfo.delta;
        localStorage.setItem(storeKey, JSON.stringify(widthInfo));
    }
    var prevWrapWidth = $(`#${tblId}`).find('.ui-table.ui-widget.ui-table-hoverable-rows').outerWidth();
    $(`#${tblId}`).find('.ui-table.ui-widget.ui-table-hoverable-rows').outerWidth(prevWrapWidth + tdInfo.delta)



}
