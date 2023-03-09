function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      //步长公式(目标值-现在位置)/10
      var step = (target - obj.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (obj.offsetLeft == target) {
        clearInterval(obj.timer);
        //定时器结束启用回调函数
        // if (callback) {
        //   callback();
        // }
        callback && callback();
      } else {
        obj.style.left = obj.offsetLeft + step + "px";
      }
    }, 15)}