$(function () {
  var menuOpen = false

  function toggleMenu() {
    if (menuOpen === false) {
      openMenu()
      return
    }
    if (menuOpen === true) {
      closeMenu()
    }
  }

  function openMenu() {
    $("body").removeClass("mobile-menu-closed").addClass("mobile-menu-open")
    menuOpen = true
  }

  function closeMenu() {
    $("body").removeClass("mobile-menu-open").addClass("mobile-menu-closed")
    menuOpen = false
  }

  $("body").on("click", ".mobile-menu-toggle", toggleMenu)
  $("body").on("click", "nav a", closeMenu)
})
