const overlay = document.querySelector(".overlay");
const on = document.querySelector(".on");
const off = document.querySelector(".off");

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
  overlay.style.setProperty("--mouse-x", `${x}px`); //setting the x property to the mouse position
  overlay.style.setProperty("--mouse-y", `${y - 64}px`);
}

/*off.addEventListener("click", () => {
  overlay.style.display = "none";
});*/

on.addEventListener("click", () => {
  //overlay.style.display = "inherit";
  overlay.style.display = "none";
});
