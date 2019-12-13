var a = document.getElementById("a"),
  b = document.getElementById("b"),
  c = document.getElementById("c"),
  d = document.getElementById("d"),
  e = document.getElementById("e"),
  f = document.getElementById("f"),
  cont1 = document.getElementById("contABC"),
  cont2 = document.getElementById("contDEF"),

  btn = [a, b, c, d, e, f]

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    changeHash.call(e.target)
  }
}



function changeHash() {
  switch (this.innerText) {
    case "A":case "B":case "C":
      location.hash = this.innerText
      location.hash += cont2.innerText
      break
    case "D": case "E": case "F":
      location.hash = cont1.innerText
      location.hash += this.innerText
      break
    default:
      break
  }
}

function getHash() {
  var hash = location.hash
  hash = hash.replace("#", "")
  return hash
}

function display() {
  var content = getHash() /* 解析Hash，获取状态参数 */
  for (var i = 0; i < content.length; i++) {
    switch (content[i]) {
    case "A": case "B": case "C":
        cont1.innerHTML = content[i]
        break
    case "D": case "E": case "F":
        cont2.innerHTML = content[i]
        break
      default:
        break
    }
  }
}

window.onhashchange = function () {
  display()
}

/* 进来先执行一次渲染函数() */