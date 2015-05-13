

$('.nav_btn').click(function () {
    $('.m_items').toggle('slow');

   });

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

//Slider
var triggers = $('ul.triggers li');
var images = $('ul.images li');
var s_title = $('.slide_title');
var lastElem = triggers.length-1;
var target;


triggers.first().addClass('selected');
images.hide().first().show().addClass('testing');
//s_title.first().addClass('up');




function sliderResponse(target) {
    
     
    images.removeClass('testing').fadeOut(300).eq(target).addClass('testing').fadeIn(300); 
    s_title.removeClass('up').fadeOut(300).eq(target).addClass('up').fadeIn(300);
    triggers.removeClass('selected').eq(target).addClass('selected');

    

}

triggers.click(function() {
    if ( !$(this).hasClass('selected') ) {
        target = $(this).index();
        sliderResponse(target);
        resetTiming();
    }
});
$('.next').click(function() {
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
    resetTiming();
});
$('.prev').click(function() {
    target = $('ul.triggers li.selected').index();
    lastElem = triggers.length-1;
    target === 0 ? target = lastElem : target = target-1;
    sliderResponse(target);
    resetTiming();
});
function sliderTiming() {
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}
var timingRun = setInterval(function() { sliderTiming(); },7000);
function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },7000);
} 
