function drawHistogram(product,region,data) {
  var container = document.getElementById("histogram"),
    h = 600,
    w = 700,
    axisHeight = 500,
    axisWidth = 600,
    columnWidth = 25,
    intervalWidth = axisWidth/12-columnWidth,
    columnColor = "rgba(12,123,234,1)",
    axisColor = "black",
    Max = 0,
    list = [];

  for (i = 0; i < data.length; i++) {
    if (data[i].product == product && data[i].region == region) {
      list = data[i].sale
      break
    }
  }
  for (j = 0; j < list.length; j++) {
    if (Max < list[j]) {
      Max = list[j]
    }
  }

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  if (container.innerHTML!="") container.removeChild(container.children[0])

  container.appendChild(svg)
  svg.setAttribute("height", h)
  svg.setAttribute("width", w)

  var axis = document.createElementNS("http://www.w3.org/2000/svg", "polyline")
  svg.appendChild(axis)
  axis.setAttribute("points", "50,50 50," + (axisHeight + 50) + " " + (axisWidth + 50) + "," + (axisHeight + 50 ))
  axis.setAttribute("style", "fill:rgba(0,0,0,0);stroke:"+axisColor+";stroke-width:2")

  var month=[]
  for(i=0;i<12;i++){
    month[i] = document.createElementNS("http://www.w3.org/2000/svg", "text")
    svg.appendChild(month[i])
    month[i].append((i+1)+"月")
    month[i].setAttribute("x", (intervalWidth + columnWidth) * i + 65+columnWidth/2)
    month[i].setAttribute("y", axisHeight + 65)
    month[i].setAttribute("style", "text-anchor:middle;font-size:14")

  }
  var sale = []
  for (i = 0; i < 6; i++) {
    sale[i] = document.createElementNS("http://www.w3.org/2000/svg", "text")
    svg.appendChild(sale[i])
    sale[i].append(Max-(Max/5)*i+"-")
    sale[i].setAttribute("x", 50)
    sale[i].setAttribute("y", axisHeight/5*i+55)
    sale[i].setAttribute("style", "text-anchor:end;font-size:14")
  }
  var rect = []
  for (i = 0; i < 12; i++) {
    rect[i] = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    svg.appendChild(rect[i])
    rect[i].setAttribute("x", (intervalWidth+columnWidth) * i + 65)
    rect[i].setAttribute("y", 50 + axisHeight-(list[i] / Max) * axisHeight);
    rect[i].setAttribute("width", columnWidth)
    rect[i].setAttribute("height", list[i] / Max * axisHeight)
    rect[i].setAttribute("style", "")
    rect[i].setAttribute("style", "fill:"+columnColor+";stroke:black;stroke-width:1")
  }

}
drawHistogram("手机","华东",sourceData)