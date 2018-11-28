var a = document.getElementById("a"),
  b = document.getElementById("b"),
  c = document.getElementById("c"),
  cont = document.getElementById("cont"),
  btn = [a, b, c]

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    changeHash.call(e.target)
  }
}

function changeHash() {
  location.hash = this.innerText
}

function getHash() {
  var hash=location.hash
  hash=hash.replace("#","")
  return hash
}

function display() {
  var content = getHash() /* 解析Hash，获取状态参数 */
  cont.innerHTML = content
}

window.onhashchange = function () {
  display()
}

/* 进来先执行一次渲染函数() */