/**
 * Created by lenovo on 2018/9/1.
 */
var sec1Switch    = document.querySelectorAll('.sec1 .sec1-left-switch span'),
    sec1Content   = document.querySelectorAll('.sec1 .sec1-left .sec1-left-content div.left-content');
var sec1Cont1Hd   = document.querySelectorAll('.sec1-cont1-hd ul li'),
    sec1Cont1Bd   = document.querySelectorAll('.cont-gf .sec1-cont1-bd ol li');
var sec1Cont2Hd   = document.querySelectorAll('.cont-hz .sec1-cont2-hd ul li'),
    sec1Cont2Bd   = document.querySelectorAll('.cont-hz .sec1-cont2-bd ol li');
var boxTitle      = document.querySelectorAll('.sec1-right .box-title ul li'),
    boxContent    = document.querySelectorAll('.sec1-right .box-content ul');
var spanHh    = document.querySelectorAll('.sec2 .sec2-content .dress-hh span'),
    peoHh     = document.querySelectorAll('.sec2 .sec2-content .dress-hh div');
var spanYans  = document.querySelectorAll('.sec2 .sec2-content .dress-yans span'),
    peoYans   = document.querySelectorAll('.sec2 .sec2-content .dress-yans div');
var spanXk   = document.querySelectorAll('.sec2 .sec2-content .dress-xk span'),
    peoXk    = document.querySelectorAll('.sec2 .sec2-content .dress-xk div');
var spanJs   = document.querySelectorAll('.sec2 .sec2-content .dress-js span'),
    peoJs    = document.querySelectorAll('.sec2 .sec2-content .dress-js div');
var spanDk   = document.querySelectorAll('.sec2 .sec2-content .dress-dk span'),
    peoDk    = document.querySelectorAll('.sec2 .sec2-content .dress-dk div');
var spanSs   = document.querySelectorAll('.sec2 .sec2-content .dress-ss span'),
    peoSs   = document.querySelectorAll('.sec2 .sec2-content .dress-ss div');
var spanFs   = document.querySelectorAll('.sec2 .sec2-content .dress-fs span'),
    peoFs  = document.querySelectorAll('.sec2 .sec2-content .dress-fs div');
var spanYs  = document.querySelectorAll('.sec2 .sec2-content .dress-ys span'),
    peoYs  = document.querySelectorAll('.sec2 .sec2-content .dress-ys div');
var spanMz  = document.querySelectorAll('.sec2 .sec2-content .dress-mz span'),
    peoMz  = document.querySelectorAll('.sec2 .sec2-content .dress-mz div');
var spanYr  = document.querySelectorAll('.sec2 .sec2-content .dress-yr span'),
    peoYr  = document.querySelectorAll('.sec2 .sec2-content .dress-yr div');
var asideLi  = document.querySelectorAll('.sec2 .sec2-aside ul li a'),
    sec2Cont  = document.querySelectorAll('.sec2 .sec2-content div.job');
var sec4Li    = document.querySelectorAll('.sec4 .sec4-hd ul li');
    sec4Div   = document.querySelectorAll('.sec4 .sec4-content .sec4-bd>div');

//===========英雄======背景图
var bgDressHh=document.querySelectorAll('.sec2 .sec2-content .job-hh .dress-bg-f');
var bgDressYans=document.querySelectorAll('.sec2 .sec2-content .dress-yans.dress-bg-f');
var bgDressXk=document.querySelectorAll('.sec2 .sec2-content .dress-xk.dress-bg-f');
var bgDressJs=document.querySelectorAll('.sec2 .sec2-content .dress-js.dress-bg-f');
var bgDressDk=document.querySelectorAll('.sec2 .sec2-content .dress-dk.dress-bg-f');
var bgDressSs=document.querySelectorAll('.sec2 .sec2-content .dress-ss.dress-bg-f');
var bgDressFs=document.querySelectorAll('.sec2 .sec2-content .dress-fs.dress-bg-f');
var bgDressYs=document.querySelectorAll('.sec2 .sec2-content .dress-ys.dress-bg-f');
var bgDressMz=document.querySelectorAll('.sec2 .sec2-content .dress-mz.dress-bg-f');
var bgDressYr=document.querySelectorAll('.sec2 .sec2-content .dress-yr.dress-bg-f');

function a(x,y,ev) {
    for (let i = 0; i < x.length; i++) {
        x[i][ev] = function () {
            for (let j = 0; j < y.length; j++) {
                y[j].classList.remove('now');
                x[j].classList.remove('now');
            }
            y[i].classList.add('now');
            x[i].classList.add('now');
            index=i;
        }
    }
}
function b(bgDress,span){
    span[0].onmousemove=function(){
        bgDress[0].classList.remove('dress-bg-s');
        bgDress[0].classList.add('dress-bg-f');
    };
    span[1].onmousemove=function(){
        bgDress[0].classList.remove('dress-bg-f');
        bgDress[0].classList.add('dress-bg-s');
    };
}

a(sec1Cont1Hd,sec1Cont1Bd,"onmouseover");
a(sec1Cont2Hd,sec1Cont2Bd,"onmouseover");
a(boxTitle,boxContent,"onmouseover");
a(boxTitle,boxContent,"onmouseover");
a(sec1Switch,sec1Content,"onclick");
a(spanHh,peoHh,"onmouseover");
a(spanYans,peoYans,"onmouseover");
a(spanXk,peoXk,"onmouseover");
a(spanJs,peoJs,"onmouseover");
a(spanDk,peoDk,"onmouseover");
a(spanSs,peoSs,"onmouseover");
a(spanFs,peoFs,"onmouseover");
a(spanYs,peoYs,"onmouseover");
a(spanMz,peoMz,"onmouseover");
a(spanYr,peoYr,"onmouseover");
a(asideLi ,sec2Cont,"onmouseover");
a(sec4Li ,sec4Div,"onmouseover");

b(bgDressHh,spanHh);
b(bgDressYans,spanYans);
b(bgDressXk,spanXk);
b(bgDressJs,spanJs);
b(bgDressDk,spanDk);
b(bgDressSs,spanSs);
b(bgDressFs,spanFs);
b(bgDressYs,spanYs);
b(bgDressMz,spanMz);
b(bgDressYr,spanYr);


//定时器
var gfbanner=document.getElementById('gfbanner');
console.log(gfbanner);
var index=0;
gfbanner.onmouseover = function(){
    clearInterval(timer);
};
gfbanner.onmouseout = function(){
    timer = setInterval(clock,1500);
};
timer = setInterval(clock,1500);
function clock(){
    index++;
    if(index>sec1Cont1Bd.length-1){
        index=0;
    }
    for (var j = 0; j < sec1Cont1Bd.length; j++) {
        sec1Cont1Bd[j].classList.remove('now');
        sec1Cont1Hd[j].classList.remove('now');
    }
    sec1Cont1Bd[index].classList.add('now');
    sec1Cont1Hd[index].classList.add('now');
}
var sec3Ul=document.getElementById('sec3-ul');
   sec3Li4=document.getElementById('sec3-li4');
//console.log(sec3Ul, sec3Li4);
sec3Li4.onmouseover= function(){
        sec3Ul.style.left=-318+'px';
}
sec3Li4.onmouseout= function(){
    sec3Ul.style.left=0+'px';
}