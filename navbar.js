var myNav = document.getElementById("navbar");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};