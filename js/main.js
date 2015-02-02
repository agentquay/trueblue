
var num = 1600; //number of pixels before modifying styles

$(window).bind('scroll', function () {
if ($(window).scrollTop() > num) {
	$('.hero_one').addClass('hero_fadein_one');
	$('.hero_two').addClass('hero_fadein_two');
	$('.hero_three').addClass('hero_fadein_three');
	$('.hero_four').addClass('hero_fadein_four');
	$('.arrow_one').addClass('arrow_fadein_one');
	$('.arrow_two').addClass('arrow_fadein_two');
	$('.arrow_three').addClass('arrow_fadein_three');
	$('.arrow_four').addClass('arrow_fadein_four');
	$('.hero').addClass('fullin');
	$('.bb_arrow').addClass('fullin');
	$('.benefits').addClass('ben_full');
} else {
	$('.hero_one').removeClass('hero_fadein_one');
	$('.hero_two').removeClass('hero_fadein_two');
	$('.hero_three').removeClass('hero_fadein_three');
	$('.hero_four').removeClass('hero_fadein_four');
	$('.arrow_one').removeClass('arrow_fadein_one');
	$('.arrow_two').removeClass('arrow_fadein_two');
	$('.arrow_three').removeClass('arrow_fadein_three');
	$('.arrow_four').removeClass('arrow_fadein_four');
	$('.hero').removeClass('fullin');
	$('.bb_arrow').removeClass('fullin');
	$('.benefits').removeClass('ben_full');
}
});


