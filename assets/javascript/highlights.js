$(function () {
  var offsetTopHeight =
    $("header").height() + $("#hero").height() + $("#partnered-with").height()

  console.log("offsetTopHeight", offsetTopHeight)

  var servicesHeight = offsetTopHeight
  var aboutHeight = offsetTopHeight + $("#services-wrapper").height()
  var contactHeight =
    offsetTopHeight +
    $("#services-wrapper").height() +
    $("#about-wrapper").height()

  $(window).scroll(function () {
    var winTop = $(window).scrollTop()

    if (winTop >= servicesHeight && winTop <= aboutHeight) {
      $("nav a").removeClass("show-border")
      $("nav #nav-services").addClass("show-border")
      // location.href = "#services"
    } else if (winTop >= aboutHeight && winTop <= contactHeight) {
      $("nav a").removeClass("show-border")
      $("nav #nav-about").addClass("show-border")
      // location.href = "#about"
    } else if (winTop >= contactHeight) {
      $("nav a").removeClass("show-border")
      $("nav #nav-contact").addClass("show-border")
      // location.href = "#contact"
    }
  })
})
