(function($) {

var days = new Date(2014, 10, 5) - new Date();
days = days > 0 ? Math.round(days / (1000 * 60 * 60 * 24)) : 0;
$("#onlb-days-left").text(days);

})(jQuery);