/**
 * Created by lenovo on 2018/9/3.
 */
//点击x     ev  事件
function a(x, y, ev) {
    for (let i = 0; i < x.length; i++) {
        x[i][ev] = function () {
            for (var j = 0; j < y.length; j++) {
                y[j].classList.remove('now');
                x[j].classList.remove('now');
            }
            y[i].classList.add('now');
            x[i].classList.add('now');
        }
    }
};
function b(x, y, z ,ev) {
    for (let i = 0; i < x.length; i++) {
        x[i][ev] = function () {
            for (var j = 0; j < y.length; j++) {
                y[j].classList.remove('now');
                x[j].classList.remove('now');
                z[j].classList.remove('now');
            }
            y[i].classList.add('now');
            x[i].classList.add('now');
            z[i].classList.add('now');
        }
    }
};
function nav(x,y,ev){
    x[ev] = function(){
        if(y.style.display == 'block'){
            y.style.display = 'none';
        }else{
            y.style.display = 'block';
        }
    }
}
function ban(banner,x,y,xxyy,xx,yy,index,timer) {
    // 鼠标移上\移下banner时   xxyy timer按钮出现\消失与图片animation效果出现\停止
    banner.onmouseover = function () {
        xxyy.classList.remove('now');
        clearInterval(timer);
    };
    banner.onmouseout = function () {
        xxyy.classList.add('now');
        timer = setInterval(right, 1500);
    };
    timer = setInterval(right, 1500);
    //  点击原点实现图片滚动   y   z
    for (let i = 0; i < x.length; i++) {
        x[i].onclick = function () {
            for (var j = 0; j < y.length; j++) {
                y[j].classList.remove('now');
                x[j].classList.remove('now');
            }
            y[i].classList.add('now');
            x[i].classList.add('now');
        }
    }
    //点击右边实现图片滚动   yy
    yy.onclick = right;
    function right() {
        index++;
        if (index > y.length - 1) {
            index = 0;
        }
        for (var j = 0; j < y.length; j++) {
            x[j].classList.remove('now');
            y[j].classList.remove('now');
        }
        x[index].classList.add('now');
        y[index].classList.add('now');
    }
    //点击左边实现图片滚动    xx
    xx.onclick = function () {
        index--;
        if (index < 0) {
            index = y.length - 1;
        }
        for (var j = 0; j < y.length; j++) {
            x[j].classList.remove('now');
            y[j].classList.remove('now');
        }
        x[index].classList.add('now');
        y[index].classList.add('now');
    }
}