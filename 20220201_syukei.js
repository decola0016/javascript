(function() {
  "use strict";
  kintone.events.on(['app.record.index.show'], function(event){
    var oldTotalRow = document.getElementsByClassName('total-row')[0];
    if(oldTotalRow) oldTotalRow.parentNode.removeChild(oldTotalRow);
    var client = new KintoneRestAPIClient();
    var table = document.getElementsByClassName('recordlist-gaia')[0];
    kintone.Promise.all([
      client.app.getFormFields({
        app: kintone.app.getId()
      }),
      client.record.getAllRecordsWithCursor({
        app: kintone.app.getId(),
        query: kintone.app.getQueryCondition()
      }),
    ]).then(function(responses){
      var properties = responses[0].properties;
      var records = responses[1];
      var totalRow = document.createElement('tr');
      totalRow.classList.add('total-row');
//追記
      //totalRow.style.position = 'relative';
      //totalRow.style.padding = '9px 12px';
//


      var firstCell = document.createElement('td');
      firstCell.innerText = '計';
      totalRow.prepend(firstCell);
      var columnProperties = [].map.call(table.getElementsByClassName('recordlist-header-label-gaia'), function(label){
        return Object.values(properties).find(function(property){
          return property.label === label.innerText;
        });
      });
      var columnTotals = columnProperties.map(function(property){
        var totalCell = document.createElement('td');
        if(['NUMBER', 'CALC'].includes(property.type)){
          totalCell.innerText = records.reduce(function(sum, record){
            return sum + Number(record[property.code].value);
          }, 0).toLocaleString();
          totalCell.style.textAlign = 'right';
        }
        if(property.options){
          var options = Object.values(property.options).sort(function(a, b){
            if(a.index < b.index) return -1;
            if(a.index > b.index) return 1;
            return 0;
          }).map(function(option){
            return option.label;
          });
          var optionCounts = options.map(function(option){
            return records.reduce(function(count, record){
              var value = record[property.code].value;
              if(Array.isArray(value) && value.includes(option)) count++;
              if(!Array.isArray(value) && value === option) count++;
              return count;
            }, 0);
          });


          totalCell.innerText = options.map(function(option, index){
//追記
//console.log(option);
//console.log(Array.isArray(option));
if(optionCounts[index]){
          return option.substr( 0, 3 )  + optionCounts[index]+"\n";
}else{
return;
}
//追記

          }).join('');

        }
        totalRow.appendChild(totalCell);
        return '';
      });
      var lastCell = document.createElement('td');
      totalRow.appendChild(lastCell);
      table.getElementsByTagName('tbody')[0].prepend(totalRow);
    });
  });
})();