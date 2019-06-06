$(function () {
    //日付処理
    $("#datepicker").pickadate({
        //ボタン類
        today: '本日',
        clear: '',
        close: '閉じる',
        //フォーマット
        format: 'm月d日(ddd)',
        formatSubmit: 'yyyymm-dd',
        hiddenSuffix: 'js_gethiduke',
        //自動で閉じない
        closeOnSelect: false,
    });
    var thisName = 'input[name=js_gethiduke]';
    //id属性を追加しname属性を削除
    $(thisName).attr('id', 'js_gethiduke');
    $(thisName).removeAttr('name');
    //
});

function sethiduke() {　//カレンダーをタップor検索ボタンタップで発火
    //idからvalueを取得し、分割してinput:hiddenに渡す
    var date = $('#js_gethiduke').val().split('-');
    var Dym = date[0];
    var Ddd = date[1];
    $('input[name=Dym]').val(Dym);
    $('input[name=Ddd]').val(Ddd);
    return;
};
