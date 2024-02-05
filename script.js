const overlay = document.querySelector(".overlay");

overlay.addEventListener("mousemove", touchStart);

/*overlay.addEventListener("mousemove", function () {
  console.log("Moving!");
});*/

function touchStart(e) {
  e.preventDefault();
  const x = e.offsetX;
  const y = e.offsetY;
  //console.log(x);
  //console.log(y);
  //console.log(e);
  overlay.style.setProperty("--mouse-x", `${x}px`);
  overlay.style.setProperty("--mouse-y", `${y - 64}px`);
}
