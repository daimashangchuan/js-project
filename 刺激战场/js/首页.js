/**
 * Created by lenovo on 2018/8/29.
 */
window.onload = function(){
    //点击x
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
    function c(x, y) {
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
    }
    function d(x, y, z) {
        for (let i = 0; i < x.length; i++) {
            x[i].onclick = function () {
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
    function nav(x,y,ev){
        x[ev] = function(){
            if(y.style.display == 'block'){
                y.style.display = 'none';
                x.style.color='#000';
            }else{
                y.style.display = 'block';
                x.style.color='#ff6600';
            }
        }
    }
    function bann(banner, x, y) {
        var timer=null;
        banner.onmouseover = function () {
            clearInterval(timer);
        };
        banner.onmouseout = function () {
            timer = setInterval(right, 1500);
        };
        timer = setInterval(right, 1500);
        var index=0
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
    }

    // 找 id=“banner” y点击原点跳转  z图片滚动  左右按钮与点击按钮
    // xx左按钮  yy右按钮  显示左右   自动走
    function ban(banner,y,z,xxyy,xx,yy,index,timer) {

        // 鼠标移上\移下banner时   按钮出现\消失与图片animation效果出现\停止
        banner.onmouseover = function () {
            xxyy.classList.remove('now');
            clearInterval(timer);
        };
        banner.onmouseout = function () {
            xxyy.classList.add('now');
            timer = setInterval(right, 1500);
        };
        timer = setInterval(right, 1500);
        //  点击原点实现图片滚动
        for (let i = 0; i < y.length; i++) {
            y[i].onclick = function () {
                for (var j = 0; j < z.length; j++) {
                    z[j].classList.remove('now');
                    y[j].classList.remove('now');
                }
                z[i].classList.add('now');
                y[i].classList.add('now');
            }
        }
        //点击右边实现图片滚动
        yy.onclick = right;
        function right() {
            index++;
            if (index > z.length - 1) {
                index = 0;
            }
            for (var j = 0; j < z.length; j++) {
                z[j].classList.remove('now');
                y[j].classList.remove('now');
            }
            z[index].classList.add('now');
            y[index].classList.add('now');
        }
        //点击左边实现图片滚动
        xx.onclick = function () {
            index--;
            if (index < 0) {
                index = z.length - 1;
            }
            for (var j = 0; j < z.length; j++) {
                z[j].classList.remove('now');
                y[j].classList.remove('now');
            }
            z[index].classList.add('now');
            y[index].classList.add('now');
        }
    }

    // 一屏滚动     浏览器兼容   浏览器事件兼容    向上、向下滚动兼容
    function qpgd(oScreenBanner,oAllScreen,arrScreen,screenW, screenH,page){
        function resize(){
            // 获取屏幕宽高
            screenW = document.documentElement.clientWidth;  //获取宽
            //  document.documentElement   获取的  body    client 全屏
            screenH = document.documentElement.clientHeight; // 获取高
            // 设置宽高    总轮播图    大盒子    每一屏
            oAllScreen.style.width = oScreenBanner.style.width = screenW + "px";
            oScreenBanner.style.height = screenH + "px";
            oAllScreen.style.height = screenH * arrScreen.length + "px";
            for (var i = 0; i < arrScreen.length; i++) {
                arrScreen[i].style.width = screenW + "px";
                arrScreen[i].style.height = screenH + "px";
            }
            oAllScreen.style.top = -page * screenH + "px";
        }
        resize();
        window.onresize = resize;   //  绑定窗口   窗口改变时候宽高改变

        var isRunning = false; // 儅isRunning 為true  鼠標滾軸不管事
        // 儅isRunning 為false  鼠標滾軸管事
        function scrollUp() {
            if(!isRunning){
                isRunning = true;
                // 設置定時器  儅1秒之後  滾軸繼續可以使用
                setTimeout(function(){
                    isRunning = false;
                },1000);
                if (page > 0) {
                    page--;
                    oAllScreen.style.top = -page * screenH + "px";
                }
            }
        }
        function scrollDown() {
            if(!isRunning) {
                isRunning = true;
                setTimeout(function(){
                    isRunning = false;

                },1000);
                if (page < arrScreen.length - 1) {
                    page++;
                    oAllScreen.style.top = -page * screenH + "px";
                }
            }
        }
        // chrome   ie
        addEvent(window, "mousewheel", mouseWheel);
        // ff
        addEvent(window, "DOMMouseScroll", mouseWheel);
        // 滚轴事件函数
        function mouseWheel(ev) {
            var oEvent = window.event || ev;
            if (oEvent.detail) {
                if (oEvent.detail > 0) {  //向下滚动
                    scrollDown()
                } else {          //向上滚动
                    scrollUp()
                }
            } else if (oEvent.wheelDelta) {
                if (oEvent.wheelDelta > 0) {
                    scrollUp()
                } else {
                    scrollDown()
                }
            }
        }
        //  兼容浏览器
        function addEvent(ele, type, listener) {
            if (ele.addEventListener) {
                ele.addEventListener(type, listener); //除ie
            } else {
                ele.attachEvent("on" + type, listener);
            }
        }
    }

    //   goUp 上盒子  goDown 下盒子   pic 移动的盒子
    function overpic(goUp,goDown,pic,dist,timerId){
        goUp.onmouseover = function () {
            clearInterval(timerId);
            timerId = setInterval(function () {
                dist--;
                if (dist > -2184) {
                    pic.style.top = dist + "px";
                } else {
                    clearInterval(timerId);
                }
            }, 1);
        };
        goDown.onmouseover = function () {
            clearInterval(timerId);
            timerId = setInterval(function () {
                dist++;
                if (dist <= 0) {
                    pic.style.top = dist + "px";
                } else {
                    clearInterval(timerId);
                }
            }, 1);
        };
        pic.parentNode.onmouseout = function () {
            clearInterval(timerId);
        }
    };

    var pic1=document.getElementById('pic1'),
        goup1=document.getElementById('goup1'),
        godown1=document.getElementById('godown1'),
        dist1= 0,
        timerid1=null;
    overpic(goup1,godown1,pic1,dist1,timerid1);

    var game1=document.querySelectorAll('.game12 li .yxz'),
        game2=document.querySelectorAll('.game12 li div:last-of-type.yxt');
    a(game1,game2, 'onmousemove');

    var title1=document.querySelector('.big-you .h31'),
        title2=document.querySelector('.game');
    nav(title1,title2,'onclick');

    var sub=document.querySelectorAll('#player li'),
        play=document.querySelectorAll('#player p');
    a(sub,play, 'onmousemove');

    var banner=document.getElementById('banner'),
        zhong1=document.querySelectorAll('#dianji li'),
        zhong2=document.querySelectorAll('#banner li'),
        you1=document.querySelectorAll('#shang1 li'),
        you2=document.querySelectorAll('.you1 .xia1');
    console.log(banner, zhong1, zhong2);
    bann(banner,zhong1,zhong2);
    c(you1,you2);

    var scetion31=document.querySelectorAll('.section3 .zuo3 .two .shang31 li'),
        scetion32=document.querySelectorAll('.section3 .zuo3 .two .shang31 li .em6'),
        scetion33=document.querySelectorAll('.section3 .zuo3 .two .xia31');
    d(scetion31,scetion32,scetion33)

    var scetion41=document.querySelectorAll('#sszx li'),
        scetion42=document.querySelectorAll('#sszx li .em6'),
        scetion43=document.querySelectorAll('#sszx_xia .xia4');
    d(scetion41,scetion42,scetion43)
    var rank=document.querySelector('.rank-top li:last-of-type'),
        rank1=document.querySelector('.rank-top .em-2'),
        xxk=document.querySelector('.main-rank .rank-xxk'),
        button=document.querySelector('.rank-xxk button');
        rank.onclick=function(){
           rank1.style.display='block';
           xxk.style.display='block' ;
    };
    button.onclick=function(){
        rank1.style.display='none';
        xxk.style.display='none' ;
    };

    var five51=document.querySelectorAll('.section5 .zuo5 .two .shang5 li'),
        five52=document.querySelectorAll('.section5 .zuo5 .two .shang5 li .em6'),
        five53=document.querySelectorAll('.section5 .zuo5 .two .xia5');
    d(five51,five52,five53);
    var scetion51=document.querySelectorAll('#yxzl .shang li'),
        scetion52=document.querySelectorAll('#yxzl .shang li .em-8'),
        scetion53=document.querySelectorAll('#yxzl .xia');
    d(scetion51,scetion52,scetion53);

    var scetion61=document.querySelectorAll('.dier .man li'),
        scetion62=document.querySelectorAll('.dier .man li .em-9'),
        scetion63=document.querySelectorAll('.dier .hua');
    d(scetion61,scetion62,scetion63);

    var ban1=document.getElementById('banner1'),
        ban2=document.querySelectorAll('#banner1 .dianji li'),
        ban3=document.querySelectorAll('#banner1 .tupian li'),
        ban4=document.querySelector('#banner1 div:nth-of-type(3).now'),
        ban5=document.querySelector('#banner1 .prev'),
        ban6=document.querySelector('#banner1 .next'),
        index1= 0,
        timer1=null;
    ban(ban1,ban2,ban3,ban4,ban5,ban6,index1,timer1)

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