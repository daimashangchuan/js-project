/**
 * Created by lenovo on 2018/9/9.
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
/**************************************************************/
    var article1=document.querySelectorAll('.article-tab li'),
        article2=document.getElementsByClassName('article-wrap');
    a(article1,article2,'onclick')

    var jiwei1=document.querySelectorAll('#gs li'),
        jiwei2=document.querySelectorAll('#jiwei .section');
    a(jiwei1, jiwei2,'onclick');

    var p1=document.getElementsByClassName('p1')[0],
        p2=document.getElementsByClassName('p2')[0],
        p3=document.getElementsByClassName('p3')[0],
        p4=document.getElementsByClassName('p4')[0],
        p11=document.getElementsByClassName('p11')[0],
        p22=document.getElementsByClassName('p22')[0],
        p33=document.getElementsByClassName('p33')[0],
        p44=document.getElementsByClassName('p44')[0],
        ba=document.getElementsByClassName('ba')[0],
        bb=document.getElementsByClassName('bb')[0],
        bc=document.getElementsByClassName('bc')[0],
        bd=document.getElementsByClassName('bd')[0],
        baa=document.getElementsByClassName('baa')[0],
        bbb=document.getElementsByClassName('bbb')[0],
        bcc=document.getElementsByClassName('bcc')[0],
        bdd=document.getElementsByClassName('bdd')[0],
        icon1=document.getElementsByClassName('map-icon1')[0],
        icon2=document.getElementsByClassName('map-icon2')[0],
        icon3=document.getElementsByClassName('map-icon3')[0],
        icon4=document.getElementsByClassName('map-icon4')[0],
        icon5=document.getElementsByClassName('map-icon5')[0],
        icon6=document.getElementsByClassName('map-icon6')[0],
        icon7=document.getElementsByClassName('map-icon7')[0],
        icon8=document.getElementsByClassName('map-icon8')[0],
        icon9=document.getElementsByClassName('map-icon9')[0],
        icon10=document.getElementsByClassName('map-icon10')[0],
        bth1=document.getElementsByClassName('bth1')[0],
        bth2=document.getElementsByClassName('bth2')[0],
        btha=document.getElementsByClassName('btha')[0],
        bthb=document.getElementsByClassName('bthb')[0];

    function gudaoshamo(p,icon,b,ev){
        p[ev] = function(){
            if(icon.style.display=='inline-block'){
                icon.style.display='none'
                b.style.display='none'
            }else{
                icon.style.display='inline-block'
                b.style.display='block'
            }
        }
    }
    gudaoshamo(p1,icon1,ba,'onclick');
    gudaoshamo(p2,icon2,bb,'onclick');
    gudaoshamo(p3,icon3,bc,'onclick');
    gudaoshamo(p4,icon4,bd,'onclick');
    gudaoshamo(p11,icon6,baa,'onclick');
    gudaoshamo(p22,icon7,bbb,'onclick');
    gudaoshamo(p33,icon8,bcc,'onclick');
    gudaoshamo(p44,icon9,bdd,'onclick');
    bth1.onclick = function(){
        if(bth1.innerHTML=='隐藏全部'){
            bth1.innerHTML='显示全部';
            bth2.innerHTML='显示网格';
            icon1.style.display='none';
            icon2.style.display='none';
            icon3.style.display='none';
            icon4.style.display='none';
            icon5.style.display='none';
            ba.style.display='none';
            bb.style.display='none';
            bc.style.display='none';
            bd.style.display='none';

        }else{
            bth1.innerHTML='隐藏全部';
            bth2.innerHTML='隐藏网格';
            icon1.style.display='block';
            icon2.style.display='block';
            icon3.style.display='block';
            icon4.style.display='block';
            icon5.style.display='block';
            ba.style.display='block';
            bb.style.display='block';
            bc.style.display='block';
            bd.style.display='block';
        }
    };
    bth2.onclick = function(){
        if(bth2.innerHTML=='隐藏网格'){
            bth2.innerHTML='显示网格';
            icon5.style.display='none'
        }else{
            bth2.innerHTML='隐藏网格';
            icon5.style.display='block'
        }
    };
    btha.onclick = function(){
        if(btha.innerHTML=='隐藏全部'){
            btha.innerHTML='显示全部';
            bthb.innerHTML='显示网格';
            icon6.style.display='none';
            icon7.style.display='none';
            icon8.style.display='none';
            icon9.style.display='none';
            icon10.style.display='none';
            baa.style.display='none';
            bbb.style.display='none';
            bcc.style.display='none';
            bdd.style.display='none';

        }else{
            btha.innerHTML='隐藏全部';
            bthb.innerHTML='隐藏网格';
            icon6.style.display='block';
            icon7.style.display='block';
            icon8.style.display='block';
            icon9.style.display='block';
            icon10.style.display='block';
            baa.style.display='block';
            bbb.style.display='block';
            bcc.style.display='block';
            bdd.style.display='block';
        }
    };
    bthb.onclick = function(){
        if(bthb.innerHTML=='隐藏网格'){
            bthb.innerHTML='显示网格'
            icon10.style.display='none'
        }else{
            bthb.innerHTML='隐藏网格'
            icon10.style.display='block'
        }
    };

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