window.onload = function(){

    /**
     *  canvas 要在标签上写宽高
     *
     *  标签
     *      <canvas>
     *          不支持canvas的浏览器可以看到内容
     *      </canvas>
     *
     *  绘制环境
     *      getContext("2d") 目前支持2d的场景
     *
     *  绘制方块
     *      fillRect(L,T,W,H) 默认颜色是黑色
     *      strokeRect(L,T,W,H) 带边框的方块
     *          默认一像素黑色边框，显示出来的不一样原因
     *
     *  设置绘图
     *      fillStyle 填充颜色（绘制canvas是有顺序的）
     *      lineWidth 线宽度，是一个数值
     *      strokeStyle 变线颜色
     *
     *   边界的绘制
     *      lineJoin 边界连接点样式
     *              miter默认 round圆角 bevel斜角
     *      lineCap 端点样式(直线)
     *              butt默认  round圆角 square高度多出为宽一半的值
     *
     *   绘制路径
     *      beginPath 开始绘制路径
     *      closePath 闭合绘制路径
     *      moveTo 移动到绘制的新目标点
     *      lineTo 新的目标点
     *      stroke 画线 默认黑色
     *      fill 填充 默认黑色
     *      rect 矩形区域
     *      clearRect 删除画布的矩形区域
     *      save 保存路径
     *      restore 恢复路径
     *
     *   绘制圆
     *   arc(x,y,半径,起始弧度，结束弧度,旋转方向)
     *      x,y 起始位置
     *      弧度与角度的关系：弧度=角度*Math.PI/180
     *      旋转方向：顺时针（默认：false）、逆时针（true）
     *
     *   绘制其他曲线
     *   arcTo(x1, y1, x2, y2, r)
     *      第一组坐标，第二组坐标，半径
     *   quadraticCurveTo(dx,dy,x1,y1)
     *      贝塞尔曲线：第一组控制点、第二组结束坐标
     *   bezierCurveTo(dx1, dy1, dx2, dy2, x1, y1)
     *      贝塞尔曲线：第一组控制点、第二组控制点、第三组结束坐标
     *
     *   变换(先调用再画图)
     *   translate
     *      偏移:从起点为基准点，移动当前坐标位置
     *   rotate(会累加)(以原点为中心点)
     *      旋转：参数为弧度
     *   scale(以原点为中心点)
     *      缩放例子
     *
     *   插入图片
     *   等图片加载完，再执行canvas操作
     *      图片预加载：在onload中调用
     *   drawImage(oImg,x,y,w,h)
     *      oImg:当前图片, x,y坐标 w,h宽高
     *
     *   设置背景（用来设置fillStyle）
     *   createPattern(oImg, 平铺方式)
     *      2参为：repeat / repeat-x / repeat-y / no-repeat
     *
     *   渐变（用来设置fillStyle）
     *   createLinearGradient(x1,y1,x2,y2)
     *      线性渐变
     *      第一组参数：起始点坐标、第二组参数：结束点坐标
     *      addColorStop(位置，颜色)添加渐变点
     *   createRadialGradient(x1,y1,r1,x2,y2,r2)
     *      放射性渐变
     *      参数：第一个圆的坐标和半径，第二个圆的坐标和半径
     *
     *   文本
     *   strokeText(文字,x,y)
     *      文字边框
     *   fillText(文字, x, y)
     *      文字填充
     *   font
     *      文字大小样式: "60px impact"
     *   textAlign
     *      默认是start跟left一样的效果end right center
     *   textBaseline
     *      文字上下的位置的方式默认:alphabetic  top
     *   measureText()
     *      measureText(str).width
     *   阴影
     *      shadowOffsetX, shadowOffsetY
     *          X轴偏移，y轴偏移
     *      shadowBlur
     *          模糊值
     *      shadowColor
     *          阴影颜色
     *
     *   像素
     *   getImageData(x,y,w,h)
     *          获取图像数据
     *   putImageData(获取图像, x,y)
     *          设置新的图像数据
     *      属性:
     *          width 一行的像素个数
     *          height 一列的像素个数
     *          data 一个数组，包含每个像素的rgba四个值，注意每个值都在0~255之间的整数
     *   createImageData(w,h)
     *      生成新的像素矩阵，初始值是全透明的黑色，
     *   获取和设置指定坐标
     *      封装
     *
     *   合成
     *   全局阿尔法值
     *      globalAlpha
     *   覆盖合成
     *      源：新的图片
     *      目标：已经绘制过的图形
     *      globalCompositeOperation属性
     *          source-over destination-over source-atop
     *          destination-atop source-in destination-in
     *          source-out destination-out lighter
     *          copy xor
     *
     *    将画布导出为图像
     *    toDataURL
     *
     *    事件操作
     *    isPointInPath
     *      是否在点击范围内
     *      jCanvasScript(canvas中的jQuery)
     *        http://jscript.com/
     */

    var oC = document.getElementById("c");
    var cc = oC.getContext("2d");


};