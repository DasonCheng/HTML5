*syc*

```javascript

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //填充的样式
    context.fillStyle
    //边框样式
    context.strokeStyle

    //填充
    context.fill()
    //绘制边框
    ontext.stroke()
    //图形边框宽度
    context.lineWidth

    颜色的表示方式:
    直接用颜色名称:"red" "green" "blue"
    十六进制颜色值: "#EEEEFF"
    rgb(1-255,1-255,1-255)
    gba(1-255,1-255,1-255,透明度)

    绘制矩形  context.fillRect(x,y,width,height)  strokeRect(x,y,width,height)

         x:矩形起点横坐标（坐标原点为canvas的左上角，当然确切的来说是原始原点，后面写到变形的时候你就懂了，现在暂时不用关系）

         y:矩形起点纵坐标

         width:矩形长度

         height:矩形高度


    清除矩形区域 context.clearRect(x,y,width,height)

         x:清除矩形起点横坐标

         y:清除矩形起点纵坐标

         width:清除矩形长度

         height:清除矩形高度

    圆弧context.arc(x, y, radius, starAngle,endAngle, anticlockwise)

        x:圆心的x坐标

        y:圆心的y坐标

        straAngle:开始角度

        endAngle:结束角度

        anticlockwise:是否逆时针（true）为逆时针，(false)为顺时针

    路径  context.beginPath()    context.closePath()

    绘制线段 context.moveTo(x,y)  context.lineTo(x,y)

    x:x坐标

       y:y坐标

       每次画线都从moveTo的点到lineTo的点，

       如果没有moveTo那么第一次lineTo的效果和moveTo一样，

       每次lineTo后如果没有moveTo，那么下次lineTo的开始点为前一次lineTo的结束点


       线性渐变 var lg= context.createLinearGradient(xStart,yStart,xEnd,yEnd)

        线性渐变颜色lg.addColorStop(offset,color)

           xstart:渐变开始点x坐标

           ystart:渐变开始点y坐标

           xEnd:渐变结束点x坐标

           yEnd:渐变结束点y坐标



           offset:设定的颜色离渐变结束点的偏移量(0~1)

           color:绘制时要使用的颜色

    径向渐变（发散）var rg=context.createRadialGradient(xStart,yStart,radiusStart,xEnd,yEnd,radiusEnd)

    径向渐变（发散）颜色rg.addColorStop(offset,color)

        xStart:发散开始圆心x坐标

        yStart:发散开始圆心y坐标

        radiusStart:发散开始圆的半径

        xEnd:发散结束圆心的x坐标

        yEnd:发散结束圆心的y坐标

        radiusEnd:发散结束圆的半径



        offset:设定的颜色离渐变结束点的偏移量(0~1)

        color:绘制时要使用的颜色


    图形变形

    1、平移context.translate(x,y)

        x:坐标原点向x轴方向平移x

        y:坐标原点向y轴方向平移y

    2、缩放context.scale(x,y)

        x:x坐标轴按x比例缩放

        y:y坐标轴按y比例缩放

    3、旋转context.rotate(angle)

        angle:坐标轴旋转x角度（角度变化模型和画圆的模型一样）


    给图形绘制阴影

        context.shadowOffsetX :阴影的横向位移量（默认值为0）
        context.shadowOffsetY :阴影的纵向位移量（默认值为0）
        context.shadowColor :阴影的颜色
        context.shadowBlur :阴影的模糊范围（值越大越模糊）
```