window.onscroll = function() {stickyNav()};

var mainNav = document.querySelector("nav");


function stickyNav() {
    var sticky = mainNav.offsetTop;
    if (window.pageYOffset > sticky) {
        mainNav.classList.add("sticky");
    } else {
        mainNav.classList.remove("sticky");
    }
}