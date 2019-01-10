/**
 * Created by Administrator on 2016/7/25.
 */
/**
 * 能够让任意对象快速移动到指定位置
 * @param obj
 * @param target
 */
function animateH(obj,target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetTop;
        var step = (target - leader)/10;
        step = step > 0 ? Math.ceil(step):Math.floor(step);
        leader = leader + step;
        obj.style.top = leader + 'px';
        if (leader === target){
            clearInterval(obj.timer)
        }
    }, 6);
}