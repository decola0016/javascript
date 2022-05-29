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

//編集画面でA、Bの値が変更された場合に呼ばれるイベント
  const eventBox=['app.record.create.submit','app.record.edit.submit'];
  kintone.events.on(eventBox, function (event) {
  // 現在のフィールドの入力値を取得する
  //console.log(event);

  //だれに、何が起きた？、事象発生の経緯、対象となる金額を結合
  let strA=record['forWhom']['value'] ||"";
  let strB=record['whatHappened']['value'] ||"";
  let strC=record['circumstances']['value'] ||"";
  let strD=record['amount']['value'] ||"";

  let str='影響対象：'+strA+'\n'+'発生内容：'+strB+'\n'+'事象経緯：'+'\n'+strC+'\n'+'対象の金額：'+strD;

  //インシデントの具体的な内容を表示
  record['incidentprofile']['value'] =str;

  //なぜ起きた？を内容コピー
  let strE=record['whyHappened']['value'] ||"";

  //発生した原因を表示
  record['cause']['value'] =strE;


  //実施した対策①②③と今後実施予定の対策①②③結合
  let strF=record['correspondence']['value'] ||"";
  let strG=record['correspondence_0']['value'] ||"";
  let strH=record['correspondence_1']['value'] ||"";
  let strI=record['preventivePlan']['value'] ||"";
  let strJ=record['preventivePlan_0']['value'] ||"";
  let strK=record['preventivePlan_1']['value'] ||"";

  //実施した対策と今後実施予定の対策を表示
  record['measurestaken']['value'] =strF+'\n'+strG+'\n'+strH;
  record['measurestobe']['value'] =strI+'\n'+strJ+'\n'+strK;


  //イベント終了（変更した値を反映する）
  return event;
});
})();