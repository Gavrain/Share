function drawHistogram(data) {
  var h=1100,
  w=1400,
  axisHeight=1000,
  axisWidth=1300,
  columnHeight=[],
  columnWidth=50,
  intervalWidth=50,
  columnColor="",
  axisColor="",
  Max=0,
  list=[]

  for(i=0;i<data.length;i++){
    if(data[i].product=="手机"&&data[i].region=="华东"){
      list=data[i].sale
      break
    }
  }
  for (j = 0; j < list.length; j++) {
    if (Max < list[j]) {
      Max = list[j]
    }
  }


}