const overlay = document.querySelector(".overlay");
const on = document.querySelector(".on");
const off = document.querySelector(".off");
const icon = document.querySelector(".icon");
const timeline = gsap.timeline();
let pulseTimeout;

lucide.createIcons();

overlay.addEventListener("mousemove", pointerMove);
overlay.addEventListener("touchstart", pointerMove);

const duration = 0.75;
const ease = "slow(0.2, 0.2, false)";

function initialAnimation() {
  timeline.to(".overlay", {
    "--mouse-x": "33%",
    "--mouse-y": "33%",
    duration,
    ease: ease,
  });
  timeline.to(".overlay", {
    "--mouse-x": "75%",
    "--mouse-y": "50%",
    duration,
    ease: ease,
  });
  timeline.to(".overlay", {
    "--mouse-x": "33%",
    "--mouse-y": "75%",
    duration,
    ease: ease,
  });
}
initialAnimation();

function pulse() {
  timeline.to(".overlay", {
    "--spotlight-width": "6em",
    "--spotlight-height": "6em",
    duration: 0.25,
    ease: ease,
  });
  timeline.to(".overlay", {
    "--spotlight-width": "5em",
    "--spotlight-height": "5em",
    duration: 0.25,
    ease: ease,
  });
  timeline.to(".overlay", {
    "--spotlight-width": "6em",
    "--spotlight-height": "6em",
    duration: 0.25,
    ease: ease,
  });
  timeline.to(".overlay", {
    "--spotlight-width": "5em",
    "--spotlight-height": "5em",
    duration: 0.25,
    ease: ease,
  });
}
pulse();

const overlayRect = overlay.getBoundingClientRect();

let userInteraction;
function pointerMove(e) {
  e.preventDefault();
  clearInterval(userInteraction);

  const x = e.offsetX;
  const y = e.offsetY;
  const edges = gsap.timeline();

  //const edge = 3
  if (x <= 3 || y <= 3 || x >= overlayRect.width - 3 || y >= overlayRect.height - 3) {
    edges.to(".overlay", {
      "--spotlight-width": 0,
      "--spotlight-height": 0,
      duration: 0.25,
      ease: "low(0.5, 0.5, false)",
    });
  } else {
    edges.to(".overlay", {
      "--spotlight-width": "5em",
      "--spotlight-height": "5em",
      duration: 0.25,
      ease: ease,
    });
  }

  overlay.style.setProperty("--mouse-x", `${x}px`); //setting the x property to the mouse position
  overlay.style.setProperty("--mouse-y", `${y - 80}px`);

  userInteraction = setInterval(() => {
    clearInterval(userInteraction);
    pulse();
  }, 3000); // start a timer for 3 seconds
}

let isMoved = false;
on.addEventListener("click", () => {
  if (isMoved === true) {
    overlay.style.display = "inherit"; // Show overlay
    on.style.marginLeft = 0; // Move left
    on.innerHTML = `<i class="icon" data-lucide="flashlight"></i>`;
  } else {
    overlay.style.display = "none"; // Hide overlay
    on.style.marginLeft = "calc(100% - 3.2em)"; // Move right
    on.innerHTML = `<i class="icon" data-lucide="flashlight-off"></i>`;
  }
  isMoved = !isMoved;
  lucide.createIcons();
});
