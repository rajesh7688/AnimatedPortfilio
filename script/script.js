let tl = gsap.timeline();

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach((item) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");
    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = item.innerHTML;
    spanParent.appendChild(spanChild);
    item.innerHTML = "";
    item.appendChild(spanParent);
  });
}

function valueSatters() {
  // gsap.set("#designContainer .bounding h1", {
  //   y: "100%",
  // });
}

const loaderAnimation = () => {
  tl.from(".child span", {
    x: 100,
    duration: 1,
    stagger: 0.2,
    ease: Power3.easeInOut,
  })
    .to(".parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1.5,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1.3,
      delay: -1.5,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      duration: 1,
      delay: -0.6,
      ease: Power3,
      onComplete: function () {
        animateHomeHeading();
      },
    });
};

const visualAnimate = () => {
  const svg = document.querySelectorAll("#Visual>g");
  svg.forEach((e) => {
    let path = e.childNodes[1].childNodes[1];
    path.style.strokeDasharray = path.getTotalLength() + "px";
    path.style.strokeDashoffset = path.getTotalLength() + "px";
  });

  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    delay: 7,
    ease: Power3,
  });
};

const animateHomeHeading = () => {
  gsap.to("#designContainer .bounding h1", {
    scaleY: 1,
    // y: "0%",
    duration: 1.4,
  });
};

revealToSpan();
loaderAnimation();
visualAnimate();
// ;
