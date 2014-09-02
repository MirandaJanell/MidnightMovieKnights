(function($) {
var now = new Date();
var ceebsDays = calcDays(new Date(2014, 10, 1), now);
var onlbDays = calcDays(new Date(2014, 10, 5), now);

if(ceebsDays > 0) {
	$("#onlb-ceebs-days").text(ceebsDays);
	$("#onlb-ceebs-arrives").show();
}

if(onlbDays > 0) {
	$("#onlb-days-left").text(onlbDays);
	$("#onlb-commences").show();
} else {
	$("#onlb-underway").show();
}

function calcDays(d1, d2) {
	return Math.ceil((d1 - d2) / (1000 * 60 * 60 * 24));
}

})(jQuery);