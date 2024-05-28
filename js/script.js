// jQuery code
$(".footer-links-wrapper h3").on("click", function () {
  if ($(window).width() <= 833) {
    $(this).next().slideToggle();
    $(this).toggleClass("expanded");
  }
});
$(window).on("resize", function () {
  location.reload();
});