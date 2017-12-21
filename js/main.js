$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop();

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = 100 * pixelsFromTop / difference

  $('.progress-bar').css('width', percentage + 'vw')


})

// open linkedin in

$('.linkedin').on('click', function() {

  $('#whyyy').css('display', 'flex')
  $('body').css('overflow', 'hidden') // lock scrolling

  return false

})

// close linkedin

$('#whyyy').on('click', function() {

  $('#whyyy').css('display', 'none')
  $('body').css('overflow', 'initial') // reset scrolling

  return false

})



// open preview

$('.preview').on('click', function() {

  $('.preview-open').fadeIn(300)
  $('body').css('overflow', 'hidden') // lock scrolling

  return false

})

// close preview

$('.preview-open').on('click', function() {

  $('.preview-open').fadeOut(150)
  $('body').css('overflow', 'initial') // reset scrolling

  return false

})

// smooth scroll

$(".hire-left").click(function() {
    $('html, body').animate({
        scrollTop: $("#hire").offset().top
    }, 2000);
    return false

});

$(".hire-right").click(function() {
    $('html, body').animate({
        scrollTop: $("#hire").offset().top
    }, 2000);
    return false

});

$(".backtotop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1600, "swing");
  return false;
});


// fade in sections
