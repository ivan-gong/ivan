// when screen width <= 980px
//   add .hidden to #desktop-nav
//   remove .hidden from #mobile-top-bar

//   when #nav-icon is clicked
//     if #mobile-top-bar is hidden:
//       remove .hidden from #mobile-top-bar 
//     otherwise 
//       add .hidden to #mobile-top-bar

$("#nav-icon").click(function () {
  if ($("#nav-mobile").hasClass("hidden")) {
    $("#nav-mobile").removeClass("hidden");
  } else {
    $("#nav-mobile").addClass("hidden")
  }
})