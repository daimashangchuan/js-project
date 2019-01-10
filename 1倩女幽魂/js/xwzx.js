/**
 * Created by lenovo on 2018/9/15.
 */

function b(x,y,ev) {
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
var xwA = document.querySelectorAll('.inner .left-box .top-box2 .wx_wb a');
  dwDiv = document.querySelectorAll('.inner .left-box .top-box2 .wx_wb div');
var newTit = document.querySelectorAll('.inner .content-box .list-box .tab-title li a');
   newLists=document.querySelectorAll('.inner .content-box .list-box .news-list.list-1')
console.log(newTit, newLists);
b(xwA ,dwDiv,"onmouseover");
b(newTit, newLists,"onclick");


