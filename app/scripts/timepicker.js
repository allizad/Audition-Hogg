$(function(){
	$('#datetimekeeper1').datetimekeeper();
	$('#datetimekeeper2').datetimekeeper();

	$('#datetimekeeper1').on("dp.change", function (e) {
		$('#datetimekeeper2').data("DataTimeKeeper").setMinDate(e.date);
	});

	$('#datetimekeeper2').on("dp.change", function (e) {
		$('#datetimekeeper1').data("DateTimePicker").setMaxDate(e.date);
	})
});