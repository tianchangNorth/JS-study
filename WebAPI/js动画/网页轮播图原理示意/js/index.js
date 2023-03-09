window.addEventListener('load',function(){
    var button = document.querySelector('.box-button');
    var box = document.querySelector('.box');
    var btnleft = document.querySelector('.box-right');
    var btnright = document.querySelector('.box-left');

    //鼠标移动到盒子上显示按钮
    box.addEventListener('mouseenter',function(){
        button.style.display = 'block';
    });
    box.addEventListener('mouseleave',function(){
        button.style.display = 'none';
    })

    //动态获取图片个数并创建相应的小圆圈
    var ul = box.querySelector('ul');
    var ol = document.querySelector('.circle');
    for(var i = 0;i < ul.children.length ;i++){   
     var li = document.createElement('li');
     //通过自定义属性来设置当前li的索引号
     li.setAttribute('index',i);
     ol.appendChild(li);
     //排他思想 做点击特效
     li.addEventListener('click',function(){
        for(var i =0 ;i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        this.className = 'current';
        //点击对应圆圈使图片移动到相应位置
        var boxwidth = box.offsetWidth;
        //获得li的索引号
        var index = this.getAttribute('index');
        animate(ul,-index * boxwidth);
        // 当我们点击了某个小圆点就把这个小圆点的索引号给num 和 circle
        num = index;
        circle =index;
     })
    }
    ol.children[0].className = 'current';

    //克隆第一张图片并将其放到最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // //克隆最后一张放到最开始
    // var last = ul.children[ul.children.length-1].cloneNode(true);
    // ul.insertBefore(last,ul.children[0]);
    //点击按钮播放图片
    // 点击右侧按钮一次，就让图片滚动一张。
    // ②声明一个变量um,点击一次，自增1，让这个变量乘以图片宽度，就是ul的滚动距离。
    // 图片无缝滚动原理
    // 把ul第一个i复制一份，放到ul的最后面
    // 当图片滚动到克隆的最后一张图片时，让ul快速的、不做动画的跳到最左侧：lft为0
    var boxwidth = box.offsetWidth;
    var num = 0;
    //控制小圆圈变化
    var circle = 0;
    //节流阀
    // var flag = true;
    btnright.addEventListener('click',function(){
        // if (flag) {
            // flag = false;
            if(num == ol.children.length){
                ul.style.left = 0;
                num = 0;
            }
            num++;  
            animate(ul,-num * boxwidth,function(){
                flag = true;
            });
            circle++;
            if(circle == ol.children.length){
                circle = 0;
            } 
            circleChange();
        // }
    });

    //控制左侧按钮
    btnleft.addEventListener('click',function(){
        // if (flag) {
            // flag = false;
            if(num == 0){
                ul.style.left = -ol.children.length * boxwidth + 'px';
                num = ol.children.length;
            }
            num--;  
            animate(ul,-num * boxwidth,function(){
                flag = true;
            });
            circle--;
            // if(circle < 0){
            //     circle = ol.children.length-1;
            // }
            circle = circle < 0 ? ol.children.length-1 : circle;
            circleChange();
        // }
    });

    function circleChange(){
        for(var i = 0 ; i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    // 自动播放模块
    setInterval(function(){
            if(num == ol.children.length){
                ul.style.left = 0;
                num = 0;
            }
            num++;  
            animate(ul,-num * boxwidth);
            circle++;
            if(circle == ol.children.length){
                circle = 0;
            } 
            circleChange();
    },4000)
})