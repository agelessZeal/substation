function pageLeave() {
    var opSaveBtn = document.getElementsByClassName('op-btn-save');
    if(opSaveBtn){
        var disabledBtnCnt = 0;
        for(var i = 0 ;i<opSaveBtn.length; i++){
            if(opSaveBtn[i].disabled){
                disabledBtnCnt ++;
            }
        }
        if(disabledBtnCnt != opSaveBtn.length){
            return 'Dialog text here.';
        }
    }
}
