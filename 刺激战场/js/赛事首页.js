/**
 * Created by lenovo on 2018/10/4.
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
    var screen = document.getElementById("cont");
    var ul = screen.children[0];
    var ulLis = ul.children;
    var left = document.getElementById("prev");
    var right = document.getElementById("next");
    var imgWidth = screen.offsetWidth;
    var pic = 0,target = 0;
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
    left.onclick = function (){
        if (pic === ulLis.length - 1) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        target = -pic * imgWidth;
        animate(ul, 30, target);
    }
    right.onclick = function () {
        if (pic === 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            pic = ulLis.length - 1;
        }
        pic--;
        target = -pic * imgWidth;
        animate(ul, 30, target);
    }
/****************************************/
    let see3 = document.getElementById('see3'),
        ul1 = see3.children[1],
        lis = ul1.children,
        imgs = document.querySelectorAll('.see3 ul li img'),
        ps = document.querySelectorAll('.see3 ul li p');
    lis[0].onclick = function (){
        see3.style.background = 'url(saishi/yintian.jpg) no-repeat center';
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].classList.remove('now');
            ps[j].classList.remove('now');
        }
        imgs[0].classList.add('now');
        ps[0].classList.add('now');
    };
    lis[1].onclick = function(){
        see3.style.background = 'url(saishi/yutian.jpg) no-repeat center';
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].classList.remove('now');
            ps[j].classList.remove('now');
        }
        imgs[1].classList.add('now');
        ps[1].classList.add('now');
    };
    lis[2].onclick = function(){
        see3.style.background = 'url(saishi/wutian.jpg) no-repeat center' ;
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].classList.remove('now');
            ps[j].classList.remove('now');
        }
        imgs[2].classList.add('now');
        ps[2].classList.add('now');
    };
    /*************************************/
    let a1 = document.querySelectorAll('.see4 li .preview a'),
        li = document.querySelectorAll('.see4 li'),
        first = document.getElementsByClassName('span_first'),
        info = document.getElementsByClassName('info'),
        last = document.getElementsByClassName('span_last');
    console.log(li, first, last);
    for (let i = 0; i < game1.length; i++) {
        li[i].onmouseover = function(){
            for (var j = 0; j < a1.length; j++) {
                li[j].style.width = '110px';
                info[j].style.display='none';
                a1[j].classList.remove('active');
                first[j].classList.remove('now');
                last[j].classList.remove('show');
        }
            info[i].style.display='block';
            a1[i].classList.add('active');
            first[i].classList.add('now');
            last[i].classList.add('show');
            li[i].style.width = '673px';
        };

        /**************************************/
        var flag = true;//将flag初始值设置为true，表示节流阀是打开的
        //config是配置单，规定了每张图片的大小位置层级透明度
        var config = [
            {
                "width": 400,
                "top": 20,
                "left": 50,
                "opacity": 0.2,
                "zIndex": 2
            },//0
            {
                "width": 600,
                "top": 70,
                "left": 0,
                "opacity": 0.8,
                "zIndex": 3
            },//1
            {
                "width": 800,
                "top": 100,
                "left": 200,
                "opacity": 1,
                "zIndex": 4
            },//2
            {
                width: 600,
                top: 70,
                left: 600,
                opacity: 0.8,
                zIndex: 3
            },//3
            {
                "width": 400,
                "top": 20,
                "left": 750,
                "opacity": 0.2,
                "zIndex": 2
            }//4
        ];
        var wrap = document.getElementById("wrap");
        var slide = document.getElementById("slide");
        var ul_1 = slide.children[0];
        var lis_1 = ul_1.children;
        var arrow = document.getElementById("arrow");
        var arrLeft = document.getElementById("arrLeft");
        var arrRight = document.getElementById("arrRight");
        function animate1(obj, json, fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var flag = true;
                for (var k in json) {
                    if (k === "opacity") {
                        obj.style.opacity = json[k];

                        //var leader = getStyle(obj, k) * 100;
                        //var target = json[k] * 100;
                        //var step = (target - leader) / 10;
                        //step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        //leader = leader + step;
                        //obj.style[k] = leader / 100;
                    } else if (k === "zIndex") {
                        obj.style.zIndex = json[k];
                    } else {
                        var leader = parseInt(getStyle(obj, k)) || 0;
                        var target = json[k];
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        obj.style[k] = leader + "px";
                    }
                    if (leader != target) {
                        flag = false;
                    }
                }
                if (flag) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                }
            }, 15);
        }
        function getStyle(obj, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj, null)[attr];
            } else {
                return obj.currentStyle[attr];
            }
        }
        //鼠标经过盒子，让arrow箭头渐渐地显示出来
        wrap.onmouseover = function () {
            animate1(arrow, {"opacity": 1});
        };
        //鼠标离开盒子，让arrow箭头渐渐地隐藏
        wrap.onmouseout = function () {
            animate1(arrow, {"opacity": 0});
        };

        function assign() {
            //让所有的li按照config配置单渐渐地各就各位
            for (var i = 0; i < lis_1.length; i++) {
                animate1(lis_1[i], config[i], function () {
                    flag = true;//当动画执行完成后，将flag设置为true，打开节流阀
                });
            }
        }
        assign();
        //点击右箭头，将配置单中最前面的元素放到最后面
        arrRight.onclick = function () {
            if (flag) {//当flag为true即节流阀是打开的状态时，才能执行动画
                flag = false;//当动画执行时，将flag设置为false，关闭节流阀
                config.push(config.shift());//把最前面的元素放到最后面
                //config.unshift(config.pop());//把最后面的元素放到最前面
                //让所有的li按照新生成的config配置单渐渐地各就各位
                assign();
            }

        };
        //点击左箭头，将配置单中最后面的元素放到最前面
        arrLeft.onclick = function () {
            if (flag) {
                flag = false;
                config.unshift(config.pop());//把最后面的元素放到最前面

                //config.push(config.shift());//把最前面的元素放到最后面
                assign();
            }
        };
    }

};