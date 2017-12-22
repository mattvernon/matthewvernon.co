// $(document).on('scroll', function() {
//   var pixelsFromTop = $(document).scrollTop();
//
//   var documentHeight = $(document).height()
//   var windowHeight = $(window).height()
//
//   var difference = documentHeight - windowHeight
//
//   var percentage = 100 * pixelsFromTop / difference
//
//   $('.progress-bar').css('width', percentage + 'vw')
//
//
// })

// progress bars

$(document).on("scroll", function () {
  // total bar dist
  var barTotal = ($(window).height() * 2) + ($(window).width() * 2)

  // scroll total
  var scrollTotal = $(document).height() - $(window).height()

  // current scroll position
  var pixels = $(document).scrollTop()

  // percantage scrolled
  var pc = pixels / scrollTotal

  // bar across percentage of total
  var barAcross = $(window).width() / barTotal

  // bar down percentage of total
  var barDown = $(window).height() / barTotal

  var bar1 = pc / barAcross
  var bar2 = (pc - barAcross) / barDown
  var bar3 = (pc - barAcross - barDown) / barAcross
  var bar4 = (pc - barAcross - barDown - barAcross) / barDown

  $("div.bar-1").css("width",  100 * bar1 + "%")
  $("div.bar-2").css("height", 100 * bar2 + "%")
  $("div.bar-3").css("width",  100 * bar3 + "%")
  $("div.bar-4").css("height", 100 * bar4 + "%")

  console.log(bar1)
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
