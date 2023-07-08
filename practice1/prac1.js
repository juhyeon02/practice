//버튼 누르면 .active 활성화되어 배경이 보라색으로 변경.
function btn_change(e) {
  var btns = document.querySelectorAll(".button");
  btns.forEach(function (btn, i) {
    if (e.currentTarget == btn) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  console.log(e.currentTarget);
}
