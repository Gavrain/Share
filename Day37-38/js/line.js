function drawLine(product, region, data) {
  var line = document.getElementById("line"),
    context = line.getContext('2d')

  var

    h = 300,
    w = 350,
    axisHeight = 400,
    axisWidth = 600,
    pointDiameter = 5,
    interval = axisWidth / 12,
    list = [],
    Max = 0,
    scale = 0

  line.height = h
  line.width = w
  context.translate(50, 50)
  context.scale(0.5, 0.5)


  /*   定义好折线图绘制区域的高度， 宽度， 轴的高度， 宽度
    定义好每一个数据点的直径， 颜色， 线的颜色， 宽度
    定义好没两个数据点之间的横向间隔距离
   */
  function drawLine1(product, region, data) {

    for (i = 0; i < data.length; i++) {
      if (data[i].product == product && data[i].region == region) {
        for (j = 0; j < data[i].sale.length; j++) {
          list[j] = data[i].sale[j]
        }
        break
      }
    }
    scale = axisHeight / Max
    for (j = 0; j < list.length; j++) {
      list[j] = (Max - list[j]) * scale
    }
    /*   拿到折线图中的最大值Max
      根据Max和你用来绘制折线图图像区域的高度， 进行一个数据和像素的折算比例
     */
    context.moveTo(0, 0)
    context.lineTo(0, axisHeight)
    context.lineTo(axisWidth, axisHeight)
    context.strokeStyle = 'black'
    context.stroke()
    context.beginPath();
    context.moveTo(0, list[0])

    /*   绘制横轴及纵轴 */
    for (i = 0; i < list.length; i++) /* 遍历数据 */ {
      /* 计算将要绘制数据点的坐标
      绘制数据点 */


      var p = new Path2D
      p.arc(i * interval, list[i], pointDiameter / 2, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.fill(p)

      if (i != 0) /* 不是第一个点 */ {
        /* 绘制这个数据点和上一个数据点的连线 */
        context.lineTo(i * interval, list[i])
      }
      context.strokeStyle = 'rgb(' + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")"
      context.lineWidth = 1
      /* 记录下当前数据点的数据用于下一个点时绘制连线 */
    }
    context.stroke()
  }

  function Max1(product, region, data) {
    var max = 0,
      list = []
    for (i = 0; i < data.length; i++) {
      if (data[i].product == product && data[i].region == region) {
        for (j = 0; j < data[i].sale.length; j++) {
          list[j] = data[i].sale[j]
        }
        break
      }
    }
    for (i = 0; i < list.length; i++) {
      max = max < list[i]/1 ? list[i]/1 : max
    }
    return max
  }
  for (q = 0; q < product.length; q++) {
    for (w = 0; w < region.length; w++) {
      var m = Max1(product[q], region[w], data)
      Max = Max < m ? m : Max
    }
  }
  for (q = 0; q < product.length; q++) {
    for (w = 0; w < region.length; w++) {
      drawLine1(product[q], region[w], data)
    }
  }
}
