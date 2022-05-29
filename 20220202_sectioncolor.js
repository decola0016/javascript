(function() {
  'use strict';
  kintone.events.on('app.record.index.show', function(event) {
      let bgColor = '#ffe4e1';
      let elStatus = kintone.app.getFieldElements('section');

    [].forEach.call(document.getElementsByClassName("recordlist-header-cell-gaia"), function(th){
      let column = th.getElementsByClassName("recordlist-header-label-gaia")[0];

      if(column && column.innerText==='区分') {
        //console.log('ok');

        for (let i = 0; i < elStatus.length; i++) {
            let record = event.records[i];
            switch (record['section']['value']) {
                case "インシデント":
                    break;
                case "アクシデント":
            	elStatus[i].style.backgroundColor = bgColor;
                    break;
            }
        }


      }
    });
    return event;  
    
  });
})();