   //==== Back-to-top button
   $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 1200) {
        $('.back-to-top').fadeIn(300)
    } else {
        $('.back-to-top').fadeOut(300)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});