var tableWrapper = document.getElementById("table-wrapper"),
  regionAmount = 0,
  productAmount = 0

function get() { /* 根据select选项获取数据 */
  /* 返回数据 */
  var list = [],
    n = 0,
    r = [],
    p = []
  for (i = 0; i < regionRadioWrapper.children.length; i++) {
    if (regionRadioWrapper.children[i].getAttribute("checkboxtype") == "checkbox")
      if (regionRadioWrapper.children[i].checked == true) r[n++] = regionRadioWrapper.children[i].value
  }
  regionAmount = r.length
  n = 0
  for (i = 0; i < productRadioWrapper.children.length; i++) {
    if (productRadioWrapper.children[i].getAttribute("checkboxtype") == "checkbox")
      if (productRadioWrapper.children[i].checked == true) p[n++] = productRadioWrapper.children[i].value
  }
  productAmount = p.length
  n = 0
  for (i = 0; i < sourceData.length; i++) {
    for (j = 0; j < r.length; j++) {
      if (sourceData[i].region == r[j])
        for (k = 0; k < p.length; k++) {
          if (sourceData[i].product == p[k])
            list[n++] = {
              product: sourceData[i].product,
              region: sourceData[i].region,
              sale: sourceData[i].sale
            }
        }
    }
  }
  return list
}

function generate() {
  var data = get()
  /*       输出表头： 商品、 地区、 1 月、 2 月、…… 12 月
        遍历数据 {
          输出每一行的表格HTML内容
        }
        把生成的HTML内容赋给table - wrapper
   */
  var html = ""
  if ((regionAmount == 1 && productAmount > 1) || (productAmount == 1 && regionAmount > 1)) {
    if (regionAmount > 1) {
      html = "<table cellspacing=\"0\">\
                  <tr>\
                    <th>商品</th>\
                    <th>地区</th>\
                    <th>1月</th>\
                    <th>2月</th>\
                    <th>3月</th>\
                    <th>4月</th>\
                    <th>5月</th>\
                    <th>6月</th>\
                    <th>7月</th>\
                    <th>8月</th>\
                    <th>9月</th>\
                    <th>10月</th>\
                    <th>11月</th>\
                    <th>12月</th>\
                  </tr>"
      html += "<tr>\
                  <td rowspan=\"" + regionAmount + "\">" + data[0].product + "</td>"
      for (i = 0; i < data.length; i++) {
        html += "<td>" + data[i].region + "</td>\
                <td>" + data[i].sale[0] + "</td>\
                <td>" + data[i].sale[1] + "</td>\
                <td>" + data[i].sale[2] + "</td>\
                <td>" + data[i].sale[3] + "</td>\
                <td>" + data[i].sale[4] + "</td>\
                <td>" + data[i].sale[5] + "</td>\
                <td>" + data[i].sale[6] + "</td>\
                <td>" + data[i].sale[7] + "</td>\
                <td>" + data[i].sale[8] + "</td>\
                <td>" + data[i].sale[9] + "</td>\
                <td>" + data[i].sale[10] + "</td>\
                <td>" + data[i].sale[11] + "</td>\
              </tr>"
      }
    }
    if (productAmount > 1) {
      html = "<table cellspacing=\"0\">\
                  <tr>\
                    <th>地区</th>\
                    <th>商品</th>\
                    <th>1月</th>\
                    <th>2月</th>\
                    <th>3月</th>\
                    <th>4月</th>\
                    <th>5月</th>\
                    <th>6月</th>\
                    <th>7月</th>\
                    <th>8月</th>\
                    <th>9月</th>\
                    <th>10月</th>\
                    <th>11月</th>\
                    <th>12月</th>\
                  </tr>"
      html += "<tr>\
                  <td rowspan =\"" + productAmount + "\">" + data[0].region + "</td>"
      for (i = 0; i < data.length; i++) {
        html += "<td>" + data[i].product + "</td>\
                <td>" + data[i].sale[0] + "</td>\
                <td>" + data[i].sale[1] + "</td>\
                <td>" + data[i].sale[2] + "</td>\
                <td>" + data[i].sale[3] + "</td>\
                <td>" + data[i].sale[4] + "</td>\
                <td>" + data[i].sale[5] + "</td>\
                <td>" + data[i].sale[6] + "</td>\
                <td>" + data[i].sale[7] + "</td>\
                <td>" + data[i].sale[8] + "</td>\
                <td>" + data[i].sale[9] + "</td>\
                <td>" + data[i].sale[10] + "</td>\
                <td>" + data[i].sale[11] + "</td>\
              </tr>"
      }
    }
  } else {
    html = "<table cellspacing=\"0\">\
                  <tr>\
                    <th>商品</th>\
                    <th>地区</th>\
                    <th>1月</th>\
                    <th>2月</th>\
                    <th>3月</th>\
                    <th>4月</th>\
                    <th>5月</th>\
                    <th>6月</th>\
                    <th>7月</th>\
                    <th>8月</th>\
                    <th>9月</th>\
                    <th>10月</th>\
                    <th>11月</th>\
                    <th>12月</th>\
                  </tr>"
    for (i = 0; i < data.length; i++) {

      html += "<tr>\
                <td>" + data[i].product + "</td>\
                <td>" + data[i].region + "</td>\
                <td>" + data[i].sale[0] + "</td>\
                <td>" + data[i].sale[1] + "</td>\
                <td>" + data[i].sale[2] + "</td>\
                <td>" + data[i].sale[3] + "</td>\
                <td>" + data[i].sale[4] + "</td>\
                <td>" + data[i].sale[5] + "</td>\
                <td>" + data[i].sale[6] + "</td>\
                <td>" + data[i].sale[7] + "</td>\
                <td>" + data[i].sale[8] + "</td>\
                <td>" + data[i].sale[9] + "</td>\
                <td>" + data[i].sale[10] + "</td>\
                <td>" + data[i].sale[11] + "</td>\
              </tr>"
    }
  }
  regionAmount = 0
  productAmount = 0
  tableWrapper.innerHTML = html
}
generate()