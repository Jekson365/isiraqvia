var container = document.querySelector(".container");
var eachBox = document.querySelectorAll(".each-box");
var choosen = document.querySelector(".choosen");
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
const colorList = [
  "#7149C6",
  "#FC2947",
  "#FE6244",
  "#245953",
  "#408E91",
  "#E49393",
];

window.addEventListener("load", () => {
  const element = {
    top: Math.random() * 500,
    left: Math.random() * 500,
  };
  const row = colorList.length.toString();

  for (var i = 0; i < 50; i++) {
    const eachBoxElement = document.createElement("div");
    eachBoxElement.classList.add("each-box");
    eachBoxElement.style.left = `${randomNumber(0, 430)}px`;
    eachBoxElement.style.top = `${randomNumber(0, 430)}px`;
    eachBoxElement.style.zIndex = Math.floor(randomNumber(0, colorList.length));
    if (eachBoxElement.style.zIndex == "5") {
      eachBoxElement.style.back = "gray";
    }
    eachBoxElement.style.background =
      colorList[Math.floor(Math.random() * colorList.length)];

    if (eachBoxElement.style.zIndex === row) {
      eachBoxElement.style.background = "gray";
    }
    container.appendChild(eachBoxElement);
    eachBoxElement.addEventListener("click", (e) => {
      if (e.currentTarget.style.zIndex === "5") {
        e.currentTarget.style.position = "static";
        e.currentTarget.classList.add("choosen-box");
        choosen.appendChild(e.currentTarget);
        // console.log((e.currentTarget.style.background = "gray"));
      }
      const allChosenBox = document.querySelectorAll(".choosen-box");
    });
  }
});
3320005133;
