(function() {
  "use strict";
  kintone.events.on(['app.record.index.show'], function(event) {

/*[].forEach.call(document.getElementsByClassName('require-cybozu'), function(element){
//console.log(element.previousElementSibling.innerText);
element.previousElementSibling.style.color = 'red';
    });
*/


//ボタン挿入
let headercellbutton_width= document.createElement('button');
let headercellbutton_area = document.getElementsByClassName('recordlist-edit-gaia');
//headercellbutton_width.class='';
headercellbutton_width.type='button';
headercellbutton_width.aria-label='編集する';
headercellbutton_area[0].appendChild(headercellbutton_width);

/*
// img要素を作成
let img_element = document.createElement('img');
img_element.class='recordlist-edit-icon-gaia';
img_element.src = 'https://static.cybozu.com/contents/k/image/argo/component/recordlist/record-edit.png'; 

// 指定した要素にimg要素を挿入
let content_area = document.getElementsByClassName('recordlist-cell-gaia detail-action-1 recordlist-action-gaia');
//console.log(content_area);
content_area[0].appendChild(img_element);
*/

//　列幅変更
let headercell_width= document.createElement('th');
let headercell_area = document.getElementsByClassName('recordlist-header-cell-gaia');
headercell_width.style.width='60px';
headercell_area[0].appendChild(headercell_width);


    return event;
  });
})();


//<img class="recordlist-edit-icon-gaia" src="https://static.cybozu.com/contents/k/image/argo/component/recordlist/record-edit.png" alt="">
//<td class="recordlist-cell-gaia detail-action-7 recordlist-action-gaia"><a class="recordlist-show-gaia" href="/k/53/show#record=7&amp;l.view=5739740&amp;l.q&amp;l.sort_0=f5527947&amp;l.order_0=DESC&amp;l.next=6&amp;l.prev=0" target="_self" title="レコードの詳細を表示する"><span class="recordlist-detail-gaia"></span></a></td>
//<td class="recordlist-cell-gaia detail-action-1 recordlist-action-gaia"><a class="recordlist-show-gaia" href="/k/80/show#record=1&amp;l.view=5739379&amp;l.q&amp;l.sort_0=f5527947&amp;l.order_0=DESC&amp;l.next=0&amp;l.prev=0" target="_self" title="レコードの詳細を表示する"><span class="recordlist-detail-gaia"></span></a></td>
//<th class="recordlist-header-cell-gaia" width="1%" style="width: 42px;"></th>
//<button type="button" class="recordlist-edit-gaia" title="編集する" aria-label="編集する"></button>