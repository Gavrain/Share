var ck1 = document.querySelectorAll("#region-radio-wrapper input:nth-of-type(n)"),
  ck2 = document.querySelectorAll("#product-radio-wrapper input:nth-of-type(n)")
for (var i = 0; i < ck1.length; i++) {
  ck1[i].addEventListener("click", changeHash)
}
for (var i = 0; i < ck2.length; i++) {
  ck2[i].addEventListener("click", changeHash)
}


function changeHash() {
  setTimeout(changeHash, 50)

  function changeHash() {
    var hash = []
    for (var i = 0; i < ck1.length; i++) {
      hash[i] = ck1[i].checked + 0
    }
    for (var i = 0; i < ck2.length; i++) {
      hash[ck1.length + i] = ck2[i].checked + 0
    }
    hash += ""
    location.hash = hash.replace(/,/g, "")
  }
}

function display() {
  setTimeout(display, 60)

  function display() {
    if (!!location.hash) {
      var hash = location.hash.replace("#", "")
      for (var i = 0; i < ck1.length; i++) {
        ck1[i].checked = tof(hash[i] /1)
      }
      for (var i = 0; i < ck2.length; i++) {
        ck2[i].checked = tof(hash[i+ck1.length] /1)
      }
    }
  }
}

function tof(p) {
  switch (p) {
    case 0:
      return false
    case 1:
      return true
    default:
      break
  }
}
window.onhashchange = display