/**
 * Created by lenovo on 2018/9/5.
 */
window.onload=function() {
    function nav(x, y, ev) {
        x[ev] = function () {
            if (y.style.display == 'block') {
                y.style.display = 'none';
                x.style.color = '#000';
            } else {
                y.style.display = 'block';
                x.style.color = '#ff6600';
            }
        }
    }
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
    }
    function d(x, y, z, ev) {
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
    }
    var game1=document.querySelectorAll('.game12 li .yxz'),
        game2=document.querySelectorAll('.game12 li div:last-of-type.yxt');
    a(game1,game2, 'onmousemove');

    var title1 = document.querySelector('.big-you .h31'),
        title2 = document.querySelector('.game');
    nav(title1, title2, 'onclick');

    var sub=document.querySelectorAll('#player li'),
        play=document.querySelectorAll('#player p');
    a(sub,play, 'onmousemove');
    /*********************************/
    var pop = document.querySelectorAll('.section3 .three ul li .pop');
    var num = 0,timer=null;
    console.log(pop);
    /*timer=setInterval(function(){
        clearInterval('timer');
        pop.style.marginTop = num+'px';
        num--
    },100)*/

    var top = document.getElementById('top');
    function getTop(img){
        window.onscroll = function () {
            if(scroll().top>100){
                img.style.display = "block";
            }else{
                img.style.display = "none";
            }
            leader = scroll().top;
        }
        //3.缓动跳转到页面最顶端（利用我们的缓动动画）
        var timer = null;
        var target = 0; //目标位置
        var leader = 0; //显示区域自身的位置
        img.onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader +step;
                window.scrollTo(0,leader);
                if(leader === 0){
                    clearInterval(timer);
                }
            },25);
        }
    };
    function animate(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = (target-ele.offsetTop)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            ele.style.top = ele.offsetTop + step + "px";
            console.log(1);
            if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
                ele.style.top = target + "px";
                clearInterval(ele.timer);
            }
        },25);
    }
    getTop(top)

};