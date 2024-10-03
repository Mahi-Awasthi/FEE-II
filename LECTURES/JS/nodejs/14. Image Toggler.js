const image = document.querySelector("img");

function imageToggler() {
  let isTrue = false;

  setInterval(() => {
    if (isTrue) {
      image.setAttribute(
        "src",
        "tycs.jpg"
      );
    } else {
      image.setAttribute(
        "src",
        "dino.png"
      );
    }
    isTrue = !isTrue;
  },1000);
}
imageToggler();