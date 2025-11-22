const imgDog = document.querySelector(".doggy");
const inpRangeWidth = document.querySelector(".inpRangeWidth");

inpRangeWidth.addEventListener(
  "input",
  _.debounce(() => {
    imgDog.style.width = `${inpRangeWidth.value * 4.2}px`;
  }, 300)
);

const box = document.querySelector(".box");

// document.body.addEventListener("mousemove", (event) => {
//   //   console.log(event.y);
//   box.style.transform = `translate(-50%, -50%)`;
//   box.style.top = `${event.y}px`;
//   box.style.left = `${event.x}px`;
// });

document.body.addEventListener(
  "mousemove",
  _.debounce((event) => {
    box.style.transform = `translate(-50%, -50%)`;
    box.style.top = `${event.y}px`;
    box.style.left = `${event.x}px`;
  }, 100)
);
