const overlay = document.querySelector(".overlay");
const on = document.querySelector(".on");
const off = document.querySelector(".off");
const icon = document.querySelector(".icon");
const timeline = gsap.timeline();

lucide.createIcons();

overlay.addEventListener("mousemove", touchStart);

/*overlay.addEventListener("mousemove", function () {
  console.log("Moving!");
});*/

function initialAnimation() {
  timeline.to(".overlay", {
    "--mouse-x": "50%",
    "--mouse-y": "30%",
    duration: 0.5,
    ease: "slow(0.2, 0.2, false)",
  });
  timeline.to(".overlay", {
    "--mouse-x": "70%",
    "--mouse-y": "50%",
    duration: 0.5,
    ease: "slow(0.2, 0.2, false)",
  });
  timeline.to(".overlay", {
    "--mouse-x": "35%",
    "--mouse-y": "70%",
    duration: 0.5,
    ease: "slow(0.2, 0.2, false)",
  });
}
initialAnimation();

function touchStart(e) {
  e.preventDefault();
  const x = e.offsetX;
  const y = e.offsetY;
  overlay.style.setProperty("--mouse-x", `${x}px`); //setting the x property to the mouse position
  overlay.style.setProperty("--mouse-y", `${y - 100}px`);
}

let isMoved = false;
on.addEventListener("click", () => {
  if (isMoved === true) {
    overlay.style.display = "inherit"; // Show overlay
    on.style.marginLeft = 0; // Move left
    on.innerHTML = `<i class="icon" data-lucide="flashlight"></i>`;
  } else {
    overlay.style.display = "none"; // Hide overlay
    on.style.marginLeft = "calc(100% - 2.8em)"; // Move right
    on.innerHTML = `<i class="icon" data-lucide="flashlight-off"></i>`;
  }
  isMoved = !isMoved;
  lucide.createIcons();
});
