(function() {
  'use strict';
    
  const colorChange=(event)=>{
  [].forEach.call(document.getElementsByClassName('require-cybozu'), function(element){
//console.log(element.previousElementSibling.innerText);
element.previousElementSibling.style.color = 'red';
    });

  }
 const saveTextChange=()=>{
  const saveText=document.getElementsByClassName('gaia-ui-actionmenu-save')[0];
  saveText.textContent='申請';
  //console.log(saveText.textContent);

 
 }

  kintone.events.on(['app.record.create.show', 'app.record.edit.show'], function(event) {
  saveTextChange();
  colorChange(event);

    return event;
  });
  
  
})();

