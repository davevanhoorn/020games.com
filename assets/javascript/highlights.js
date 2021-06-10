$(function () {
  var offsetTopHeight =
    $("header").height() + $("#hero").height() + $("#partnered-with").height()
  var servicesHeight = offsetTopHeight
  var aboutHeight = offsetTopHeight + $("#services-wrapper").height()
  var contactHeight =
    offsetTopHeight +
    $("#services-wrapper").height() +
    $("#about-wrapper").height()

  var debounce_timer

  $(window).scroll(function () {
    if (debounce_timer) {
      window.clearTimeout(debounce_timer)
    }
    debounce_timer = window.setTimeout(function () {
      var winTop = $(window).scrollTop()

      if (winTop < servicesHeight) {
        $("nav a").removeClass("show-border")
      } else if (winTop >= servicesHeight && winTop <= aboutHeight) {
        $("nav a:not(#nav-services)").removeClass("show-border")
        $("#nav-services").addClass("show-border")
      } else if (winTop >= aboutHeight && winTop <= contactHeight) {
        $("nav a:not(#nav-about)").removeClass("show-border")
        $("#nav-about").addClass("show-border")
      } else if (winTop >= contactHeight) {
        $("nav a:not(#nav-contact)").removeClass("show-border")
        $("#nav-contact").addClass("show-border")
      }
    }, 15)
  })
})
