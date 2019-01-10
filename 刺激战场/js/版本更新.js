/**
 * Created by lenovo on 2018/10/4.
 */
window.onload = function(){
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
    /*******************************************/
    var  productData = null;
    let getData = function(){
        let xhr = new XMLHttpRequest();
        xhr.open('get','json/banben.json',false);
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4&&xhr.status==200){
                productData = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
    };

    let bindhtml = function (){
        let str=``;
        for (var i = 0; i < productData.length; i++) {
            let{img,edition,h3,p1,p2,p3,p4,p5,p6,p7,p8}=productData[i];
            str+=`
            <li>
                <a href="javascript">
                    <img src="${img}" alt="">
                    <span class="num">版本<span data-edition="edition">${edition}</span></span>
                </a>
                <div class="exp_con">
                    <h3>${h3}</h3>
                    <p class="tx">${p1}</p>
                    <p class="refresh">${p2}</p>
                    <div class="exp_list">
                        <p class="tx">
                            <span class="icon"></span>
                            ${p3}
                        </p>
                        <p class="tx">
                            <span class="icon"></span>
                            ${p4}
                        </p>
                        <p class="tx">
                            <span class="icon"></span>
                            ${p5}
                        </p>
                        <p class="tx">
                            <span class="icon"></span>
                            ${p6}
                        </p>
                        <p class="tx">
                            <span class="icon"></span>
                            ${p7}
                        </p>
                    </div>
                    <p class="checkNewMes">${p8}</p>
                </div>
            </li>
                    `
        }
        list.innerHTML=str;
    };
    getData();
    bindhtml();


    let prev = document.getElementsByClassName('prev')[0],
        pageNum = document.getElementsByClassName('pageNum'),
        next = document.getElementsByClassName('next')[0];
    prev.onclick = function(){
        if(list.style.display = 'block'){
            list.style.display = 'block';
            list1.style.display = 'none';
            pageNum[0].classList.add('now');
            pageNum[1].classList.remove('now');
        }
    };
    next.onclick = function(){
        if(list1.style.display = 'block'){
            list.style.display = 'none';
            list1.style.display = 'block';
            pageNum[1].classList.add('now');
            pageNum[0].classList.remove('now');
        }
    };

    var top = document.getElementById('top');
    function scroll(){
        return {
            top:window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop||0,
            left:window.pageXOffset || document.documentElement.scrollLeft||document.body.scrollLeft||0
        }
    }
    function getTop(img){
        window.onscroll = function () {
            if(scroll().top>1000){
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

    getTop(top)


};
