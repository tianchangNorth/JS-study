window.addEventListener('load',function(){
    var box = document.querySelector('.box');
    var bbox = document.querySelector('.bbox');
    var sbox  = document.querySelector('.sbox');
    //显示隐藏盒子
    box.addEventListener('mouseover',function(){
        bbox.style.display = 'block';
        sbox.style.display = 'block';
    })
    box.addEventListener('mouseout',function(){
        bbox.style.display = 'none';
        sbox.style.display = 'none';
    })
    //小盒子跟随鼠标
    box.addEventListener('mousemove',function(e){
        var x = e.pageX - box.offsetLeft;
        var y = e.pageY - box.offsetTop;
        // (2) 减去盒子高度 300的一半 是 150 就是我们sbox的最终 left 和top值了
        var sboxX = x - sbox.offsetWidth / 2;
        var sboxY = y - sbox.offsetHeight / 2;
        // 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var sboxMax = box.offsetWidth - sbox.offsetWidth;
        if (sboxX <= 0) {
            sboxX = 0;
        } else if (sboxX >= sboxMax) {
            sboxX = sboxMax;
        }
        if (sboxY <= 0) {
            sboxY = 0;
        } else if (sboxY >= sboxMax) {
            sboxY = sboxMax;
        }
        sbox.style.left = sboxX + 'px';
        sbox.style.top = sboxY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigimg = document.querySelector('.bigimg');
        var bboxMax = bigimg.offsetWidth - bbox.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = sboxX * bboxMax/sboxMax;
        var bigY = sboxY * bboxMax/sboxMax;
        bigimg.style.top = -bigY +'px';
        bigimg.style.left = -bigX+'px';
    })

})