(function () {
'use strict';

// レコード追加、編集、一覧の編集画面の「申請No」非活性処理
  const eventsShow = ['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'];
  kintone.events.on(eventsShow, event => {
    const record = event.record;
    record.incidentprofile.disabled = true;
    record.cause.disabled = true;
    record.measurestaken.disabled = true;
    record.measurestobe.disabled = true;
    return event;
  });

//新規作成時保存で呼ばれるイベント
  const eventBox01=['app.record.create.submit'];
  kintone.events.on(eventBox01, function (event) {
  cellJoin(event);

  return event;
});

//編集時保存で呼ばれるイベント
  const eventBox02=['app.record.edit.submit'];
  kintone.events.on(eventBox02, function (event) {
  cellJoin(event);

  return event;
});



//セルの情報取得、結合、表示関数
  const cellJoin=(event)=>{
  // 現在のフィールドの入力値を取得する
  const record=event.record;

  //だれに、何が起きた？、事象発生の経緯、対象となる金額を結合
  //console.log('record:',record);
  let strA=record.forWhom.value ||"";
  let strB=record.whatHappened.value ||"";
  let strC=record.circumstances.value ||"";
  let strD=record.culc.value ||"";

  //カンマ区切り
  strD=+strD;
  let strDnum=strD.toLocaleString();
  //console.log('金額:',strDnum);
  let str='影響対象：'+strA+'\n'+'発生内容：'+strB+'\n'+'事象経緯：'+'\n'+strC+'\n'+'対象の金額：'+strDnum;

  //インシデントの具体的な内容を表示
  record.incidentprofile.value =str;

  //なぜ起きた？を内容コピー
  let strE=record.whyHappened.value ||"";

  //発生した原因を表示
  record.cause.value =strE;


  //実施した対策①②③
  let strF=record.correspondence.value ||"";
  let strG=record.correspondence2.value ||"";
  let strH=record.correspondence3.value ||"";
  record.measurestaken.value =strF+'\n'+strG+'\n'+strH;


  //今後実施予定の対策①②③
  let strI=record.preventivePlan.value ||"";
  let strJ=record.preventivePlan2.value ||"";
  let strK=record.preventivePlan3.value ||"";
  record.measurestobe.value =strI+'\n'+strJ+'\n'+strK;

}


})();