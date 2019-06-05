$(function () {
    //デートピッカー用スクリプト
    $("#datepicker").pickadate({
        //ボタン類
        today: '本日',
        clear: '',
        close: '閉じる',
        //フォーマット
        format: 'm月d日(ddd)',
        formatSubmit: 'yyyymm-dd',
        hiddenName: true,
        //自動で閉じない
        closeOnSelect: false,
    });
});