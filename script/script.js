let tl = gsap.timeline();

// .to("#green", {
//   height: "100%",
//   duration: 3,
//   delay: -3,
//   ease: Expo.easeInOut,
// });
// .to("#offwhite", {
//   height: "100%",
//   duration: 3,
//   delay: -2.6,
//   ease: Expo.easeInOut,
// })

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
revealToSpan();

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
    delay: -2,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "0%",
    duration: 1,
    delay: -0.6,
    ease: Circ.easeInOut,
  })
  .to("#home", {
    top: "0%",
    duration: 2,
    delay: -2.3,
    ease: Circ.easeInOut,
  });