function oTh() {
    var tipItem = window.event.target.firstElementChild;
    if(window.event.clientY<400){
        if(tipItem){
            tipItem.classList.add("ttext-top");
        }
    }
}

