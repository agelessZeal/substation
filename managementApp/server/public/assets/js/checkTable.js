function checkTable(tblId, tdInfo) {
    var thList = $(`#${tblId}`).find('.th-id-wrap');
    var checkBoxItem = $(`#${tblId}`).find('.mg-item-checkbox');
    var storeKey = tblId + '_width';
    var widthInfoStr = localStorage.getItem(storeKey);

    var curTblWidth = 0;
    if(tblId == 'substation-partner-tbl') {
        curTblWidth = $('#' + tblId).find('.ui-table-wrapper table').outerWidth();
    } else {
        curTblWidth = $('#' + tblId).outerWidth();
    }
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
            if(tblId == 'substation-partner-tbl') {
                $(`#${tblId}`).find('.ui-table-wrapper table').width(curTblWidth);
                console.error('removed any column....');
                if(curTblWidth>window.innerWidth*0.94){
                    $(`#substation-partner-tbl`).find('.ui-table-wrapper').css('overflow-y','auto');
                }else{
                    $(`#substation-partner-tbl`).find('.ui-table-wrapper').css('overflow-y','unset');
                }
            } else {
                $('#' + tblId).outerWidth(curTblWidth);
                if(checkBoxItem.length>0) {
                    $(`#${tblId}`).find('.ui-table-wrapper table').width(curTblWidth - 42)
                } else {
                    if(tblId = "partner-address-list") {
                        $(`#${tblId}`).find('.ui-table-wrapper table').width(curTblWidth - 42)
                    } else {
                        $(`#${tblId}`).find('.ui-table-wrapper table').width(curTblWidth - 78)
                    }
                }
            }
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
            thList.each(function () {
                tdWidthList.push($(this).outerWidth());
            });
            localStorage.setItem(`${tblId}_width`, JSON.stringify(tdWidthList));
        },1000);
    }
}

function readTable(tblId) {
    //Restore saved table width data
    setTimeout(function () {
        var thList = $(`#${tblId}`).find('.th-id-wrap');
        var checkBoxItem = $(`#${tblId}`).find('.mg-item-checkbox');
        var storeKey = tblId + '_width';
        var widthInfoStr = localStorage.getItem(storeKey);
        var visibleSettingStr = localStorage.getItem(tblId + '_setting');
        if (widthInfoStr) {
            var widthInfo = JSON.parse(widthInfoStr);
            var visibleSetting = JSON.parse(visibleSettingStr);
            var visibleCols = visibleSetting.visible;
            var tblWidth = 0;
            if (widthInfo.length == thList.length) {
                thList.each(function (index, item) {
                    $(this).outerWidth(widthInfo[index]);
                    var thText = $(this).text().trim();
                    if(visibleCols.indexOf(thText)>-1){
                        tblWidth += widthInfo[index];
                    }
                });
                if(checkBoxItem.length>0){
                    $('#' + tblId).outerWidth(tblWidth + 90);
                } else {
                    if(tblId == 'substation-partner-tbl') {
                        $(`#${tblId}`).find('.ui-table-wrapper table').outerWidth(tblWidth);
                        if(tblWidth>window.innerWidth*0.94){
                            $(`#substation-partner-tbl`).find('.ui-table-wrapper').css('overflow-y','auto');
                        }else{
                            $(`#substation-partner-tbl`).find('.ui-table-wrapper').css('overflow-y','unset');
                        }
                    } else {
                        $('#' + tblId).outerWidth(tblWidth + 80);
                    }
                }
            }
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
        widthInfo[curThIndex] = widthInfo[curThIndex] + tdInfo.delta;
        localStorage.setItem(storeKey, JSON.stringify(widthInfo));
    }

    if(tblId == 'substation-partner-tbl') {
        console.error('helellel');
        var curPartnerTblWidth = $(`#substation-partner-tbl`).find('.ui-table-wrapper table').outerWidth();
        if(curPartnerTblWidth>window.innerWidth*0.94){
            $(`#substation-partner-tbl`).find('.ui-table-wrapper').css('overflow-y','auto');
        }else{
            $(`#substation-partner-tbl`).find('.ui-table-wrapper').css('overflow-y','unset');
        }
    } else {
        var prevWrapWidth = $(`#${tblId}`).outerWidth();
        $(`#${tblId}`).outerWidth(prevWrapWidth + tdInfo.delta);
    }


}