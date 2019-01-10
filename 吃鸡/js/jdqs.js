/*Created by Administrator on 2018/8/29 0029.*/
    window.onload=function() {
        var oJdqss11 = document.getElementsByClassName('jdqss11')[0];
        var oJdqss12 = document.getElementsByClassName('jdqss12')[0];
        var oJdqs28 = document.querySelectorAll('.jd1>li');
        var oJdqs282 = document.querySelectorAll('.jd2>li');
        var  oJdqs283 = document.querySelectorAll('.jd3>li');
        var  oJdqs29 = document.querySelectorAll('.jd1 h4');
        var  oJdqs292 = document.querySelectorAll('.jd2 h4');
        var  oJdqs293 = document.querySelectorAll('.jd3 h4');
        var  oJdqs211 = document.querySelectorAll('.jd1 .jdqs211');
        var  oJdqs212 = document.querySelectorAll('.jd2 .jdqs211');
        var  oJdqs213 = document.querySelectorAll('.jd3 .jdqs211');
        var oBdcx9a6 = document.getElementsByClassName('bdcx9a6');
        var oBdcx9 = document.getElementsByClassName('bdcxx')[0];
        var oBdcx91 = document.getElementsByClassName('bdcx91')[0];
        var oGfyy55 = document.getElementsByClassName('gfyy55');
        var oGfyy8 = document.getElementsByClassName('bb');
        var oJdqs40=document.querySelector('.jdqs40');
        var oJdqs4ss1=document.querySelectorAll('.jdqs4ss1');
        var oJdqs4ss1now=document.querySelectorAll('.jdqs4ss1 li');
        oJdqss11.onmouseover = function (){
            oJdqss11.classList.add('now');
            oJdqss12.classList.add('now');
        };
        oJdqss12.onmouseout = function () {
            oJdqss11.classList.remove('now');
            oJdqss12.classList.remove('now');
        };
        //腾讯游戏排行榜
        function ab(a, b, c) {
            for (let i = 0; i < a.length; i++) {
                a[i].onmouseover = function () {
                    for (var j = 0; j < b.length; j++) {
                        b[j].classList.remove('now');
                        c[j].classList.remove('now');
                    }
                    b[i].classList.add('now');
                    c[i].classList.add('now');
                }
            }
        }
        ab(oJdqs28, oJdqs29, oJdqs211);
        ab(oJdqs282, oJdqs292, oJdqs212);
        ab(oJdqs283, oJdqs293, oJdqs213);
        //绑定查询
        for (let i = 0; i < oBdcx9a6.length; i++) {
            oBdcx9a6[i].onclick = function () {
                oBdcx9.style.display = "block";
            };
            oBdcx91.onclick = function () {
                oBdcx9.style.display = "none";
            }
        }
        //国服预约
        for (let i = 0; i < oGfyy55.length; i++) {
            oGfyy55[i].onclick = function () {
                for (var j = 0; j < oGfyy8.length; j++) {
                    oGfyy55[j].classList.remove('now');
                    oGfyy8[j].classList.remove('now');
            }
                oGfyy55[i].classList.add('now');
                  oGfyy8[i].classList.add('now');
            }
        }

}
