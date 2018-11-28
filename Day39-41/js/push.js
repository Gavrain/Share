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
    push.call(e.target)
  }
}


function push() {
  var hash = "#"
  switch (this.innerText) {
    case "A":
    case "B":
    case "C":
      hash += this.innerText
      hash += cont2.innerText
      history.pushState(document.title, null, location.pathname + hash)
      display()
      break
    case "D":
    case "E":
    case "F":
      hash += cont1.innerText
      hash += this.innerText
      history.pushState(document.title, null, location.pathname + hash)
      display()
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
      case "A":
      case "B":
      case "C":
        cont1.innerHTML = content[i]
        break
      case "D":
      case "E":
      case "F":
        cont2.innerHTML = content[i]
        break
      default:
        break
    }
  }
}

window.onpopstate = function () {
  display()
}
/* 进来先执行一次渲染函数() */