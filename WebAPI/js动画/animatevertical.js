function animateline(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      //步长公式(目标值-现在位置)/10
      var step = (target - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset == target) {
        clearInterval(obj.timer);
        //定时器结束启用回调函数
        // if (callback) {
        //   callback();
        // }
        callback && callback();
      } else {
        // obj.style.left = window.pageYOffset + step + "px";
        window.scroll(0, window.pageYOffset + step);
      }
    }, 15);
  }