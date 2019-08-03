// console.log()
window.onscroll = () => {
    var nav_bar = document.querySelector(".navbar");
    if (this.scrollY <= 90) {
        nav_bar.classList.remove("nav-bar-scroll");
        nav_bar.classList.remove("fixed-top");

    }
    else {
        nav_bar.classList.add("nav-bar-scroll");
        nav_bar.classList.add("fixed-top");
    }

}