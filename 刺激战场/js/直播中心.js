/**
 * Created by lenovo on 2018/9/18.
 */
window.onload = function () {
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
    var game1 = document.querySelectorAll('.game12 li .yxz'),
        game2 = document.querySelectorAll('.game12 li div:last-of-type.yxt');
    a(game1, game2, 'onmousemove');

    var title1 = document.querySelector('.big-you .h31'),
        title2 = document.querySelector('.game');
    nav(title1, title2, 'onclick');

    var sub = document.querySelectorAll('#player li'),
        play = document.querySelectorAll('#player p');
    a(sub, play, 'onmousemove');
    /**************************************************************/
    var photo = document.querySelectorAll('.mode1 .Hostbox .pre'),
        slide = document.querySelectorAll('.mode1 .Hostbox .next .swiper-slide li');
    a(slide,photo,'onclick');
    console.log(photo);

    var left = document.getElementsByClassName('next-left')[0];
    var right = document.getElementsByClassName('next-right')[0];
    var swiper = document.getElementsByClassName('swiper')[0];
    var swiper1 =document.querySelectorAll('.mode1 .Hostbox .next .swiper-slide');
    var title0 = document.querySelectorAll('.mode1 .Hostbox h3');
    //var tit = title0.setAttribute('class');
    console.log(title0);
    function lunbo(ul,ulLis,left,right){
        var pic = 0;
        var timer = null;
        right.onclick = function () {
            clearInterval(timer);
            if (pic === ulLis.length - 1) {
                ul.style.left = 0;
                pic = -1;
            }
            pic++;
            var target = -pic * 460;
            animate(ul, 30, target);
            console.log(pic);
            xuan();
            title();
        };
        left.onclick = function () {
            clearInterval(timer);
            if (pic === 0) {
                ul.style.left = -(ulLis.length - 1) * 460 + "px";
                pic = ulLis.length ;
            }
            pic--;
            var target = -pic * 460;
            animate(ul, 30, target);
            console.log(pic);
            xuan();
            title();
        };
        swiper.onmouseover = function(){
            clearInterval(timer);
        };
        swiper.onmouseout = function(){
            timer = setInterval(playNext, 2000);
        };
        timer = setInterval(playNext, 2000);
        function playNext() {
            right.onclick();
        }
        function xuan(){
            for (var i = 0; i < title0.length; i++) {
                title0[i].classList.remove('now');
                pic == 0?title0[0].classList.add('now'):pic == 1?title0[1].classList.add('now'):
                pic == 2?title0[2].classList.add('now'):pic == 3?title0[3].classList.add('now'):null;
            }
        }
        function title(){
            for (var i = 0; i < photo.length; i++) {
                photo[i].classList.remove('now');
                pic == 0?pre1.classList.add('now'):pic == 1?pre2.classList.add('now'):
                pic == 2?pre3.classList.add('now'):pic == 3?pre4.classList.add('now'):null;

            }
        }
    }
    lunbo(swiper,swiper1,left,right);
    function animate(obj, step, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            step = Math.abs(step);
            step = leader < target ? step : -step;
            //Math.abs(target - leader)  当前位置到目标的位置
            if (Math.abs(target - leader) > Math.abs(step)) {
                leader += step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15);
    }

    var container1 = document.querySelector('.mode2 .carousel'),
        container2 = document.querySelector('.mode2 .swiper-container2'),
        wrapper = document.querySelector('.mode2 .swiper-wrapper'),
        slide1 = document.querySelectorAll('.mode2 .swiper-slide'),
        arrow = document.querySelectorAll('.mode2 .carousel-arrow');
    console.log(container1, container2, wrapper, slide1, ol1, arrow, left2, right2);
    lunbotu(container1, container2,wrapper,slide1,ol1,arrow,left2,right2)
    function lunbotu(box,screen,ul,ulLis,ol,arr,left,right){
        var imgWidth = screen.offsetWidth;
        var timer = null;
        function animate(obj, step, target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var leader = obj.offsetLeft;
                step = Math.abs(step);
                step = leader < target ? step : -step;
                //Math.abs(target - leader)  当前位置到目标的位置
                if (Math.abs(target - leader) > Math.abs(step)) {
                    leader += step;
                    obj.style.left = leader + "px";
                } else {
                    obj.style.left = target + "px";
                    clearInterval(obj.timer);
                }
            }, 15);
        }
        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = '';
            ol.appendChild(li);
        }
        var olLis = ol.children;
        olLis[0].className = "current";
        var firstImg = ulLis[0].cloneNode(true);
        ul.appendChild(firstImg);
        var target = 0;
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].index = i;
            olLis[i].onmouseover = function () {
                for (var j = 0; j < olLis.length; j++) {
                    olLis[j].className = "";
                }
                this.className = "current";
                target = -this.index * imgWidth;
                animate(ul, 30, target);
                pic = square = this.index;
            };
        }
        box.onmouseover = function () {
            clearInterval(timer);
        };
        box.onmouseout = function () {
            timer = setInterval(playNext, 5000);
        };
        arr.onmouseover = function () {
            clearInterval(timer);
        };
        arr.onmouseout = function () {
            timer = setInterval(playNext, 5000);
        };
        var pic = 0;//记录当前显示的图片的索引
        var square = 0;//记录当前亮起的按钮的索引
        right.onclick = function () {
            if (pic === ulLis.length - 1) {
                ul.style.left = 0;
                pic = 0;
            }
            pic++;
            target = -pic * imgWidth;
            animate(ul, 30, target);
            if (square < olLis.length - 1) {
                square++;
            } else {
                square = 0;
            }
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            olLis[square].className = "current";
        };
        left.onclick = function () {
            if (pic === 0) {
                ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
                pic = ulLis.length - 1;
            }
            pic--;
            target = -pic * imgWidth;
            animate(ul, 30, target);
            if (square > 0) {
                square--;
            } else {
                square = olLis.length - 1;
            }
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            olLis[square].className = "current";
        };
        //添加自动滚动
        timer = setInterval(playNext, 5000);//每隔一秒钟播放下一张
        function playNext() {
            right.onclick();
        }
    }
    var top1 = document.getElementById('top');
    function getTop(img){
        window.onscroll = function () {
            function scroll(){
                return {
                    top:window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop||0,
                    left:window.pageXOffset || document.documentElement.scrollLeft||document.body.scrollLeft||0
                }
            }
            if(scroll().top>1000){
                img.style.display = "block";
            }else{
                img.style.display = "none";
            }
            leader = scroll().top;
        };
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
    getTop(top1);
    /*****************************************/
    let mask = document.getElementById('mask'),
        loginPop = document.getElementById('loginPop'),
        activeRulePop = document.getElementById('activeRulePop'),
        loginbox = document.getElementById('loginbox'),
        denglu = document.getElementById('denglu'),
        ruleBtn = document.getElementById('ruleBtn'),
        recordBtn = document.getElementById('recordBtn'),
        wxlogin = document.getElementById('wxlogin'),
        qqlogin = document.getElementById('qqlogin'),
        close0 = document.getElementById('close0'),
        close1 = document.getElementById('close1');
    function dianji(denglu,close0,mask,loginPop){
        denglu.onclick = function (){
            mask.style.display = 'block';
            loginPop.style.display = 'block';
        };
        close0.onclick = function (){
            mask.style.display = 'none';
            loginPop.style.display = 'none';
            //close0.parentNode.style.display = 'none';
        };
        return false;
    }
    dianji(denglu,close0,mask,loginPop);
    dianji(ruleBtn,close1,mask,activeRulePop)
};