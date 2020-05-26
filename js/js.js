var scrollpos = window.scrollY;
var header = document.getElementById("header");
var windowheight = window.innerHeight;
var headerheight = document.getElementById("header").offsetHeight;

function add_class_on_scroll() {
    header.classList.add("fixed");
}

function remove_class_on_scroll() {
    header.classList.remove("fixed");
}

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos > (windowheight - headerheight)) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});
