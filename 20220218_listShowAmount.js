(function() {

  kintone.events.on('app.record.index.show', function(event) {

    let body1 = {
      'app': kintone.app.getId(),
      'fields': ['レコード番号', 'applicationNumber', 'reportFlag'],
      'query': 'reportFlag not in ("完了") order by レコード番号 desc',
      'size': 500
    };

    const space = kintone.app.getHeaderMenuSpaceElement();
    const div = document.createElement('div');
    space.appendChild(div);
    
    kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', body1, function(resp) {
      // success
      //console.log(resp);
      //const ele = document.querySelector('.gaia-argoui-select-label');
      //console.log(ele.id);

      const inComplete = document.createElement('h4');
      
//      if(document.getElementById("inComplete") === null && document.querySelector('.gaia-argoui-select-label').id==":21") {
      if(document.getElementById("inComplete") === null && document.querySelector('.gaia-argoui-select-label').innerText=="【インシデント会】【管理表】実施状況") {
        inComplete.classList.add('kintoneplugin-label'); 
        inComplete.id = "inComplete";
        inComplete.style.margin = "0px 20px 0px";
        inComplete.innerText = '[未完了]： ' + resp.records.length + ' 件';
        div.appendChild(inComplete);
      }
    }, function(error) {
      // error
      console.log(error);
    });



  });

})();