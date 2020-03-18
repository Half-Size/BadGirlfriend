window.onscroll = function() {stickyNav()};

var header = document.getElementById("myHeader");


function stickyNav() {
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}