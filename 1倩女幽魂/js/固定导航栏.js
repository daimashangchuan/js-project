/**
 * Created by lenovo on 2018/9/18.
 */
var topPart = document.getElementById("topPart");
var navBar = document.getElementById("navBar");
var mainPart = document.getElementById("mainPart");
console.log(topPart, navBar, mainPart);
window.onscroll = function () {
    if (scroll().top > topPart.offsetHeight) {
        navBar.className = "nav fixed";
        mainPart.style.paddingTop = navBar.offsetHeight + "px";//记得加单位
    } else {
        navBar.className = "nav";
        mainPart.style.paddingTop = 0;
    }
};
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
