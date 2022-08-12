let progressbar = document.querySelector(".circular-progress");
let valuecontainer = document.querySelector(".value-container");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let progressvalue = 0;
  let progressendvalue = 100;
  let speed = 50;

  let progress = setInterval(() => {
    progressvalue++;
    valuecontainer.textContent = `${progressvalue}%`;
    progressbar.style.background = `conic-gradient(
        #DD6200 ${progressvalue * 1.2}deg, 
        #fff     ${progressvalue * 2.0}deg,
        #4d804d ${progressvalue * 3.6}deg,
        #cadcff ${progressvalue * 3.6}deg
    )`;

    if (progressvalue == progressendvalue) {
      clearInterval(progress);
      setTimeout(() => {
        openpopup();
      }, 300);
    }
  }, speed);

  let fluid = document.querySelector(".fluid");
  let percent = document.querySelector(".percent");
  let counter = 0;

  setInterval(moveFluid, 17);
  function moveFluid() {
    counter++;
    fluid.style.width = counter + "px";
    if (counter >= 296) {
      counter = 296;
    }
    percent.innerHTML = Math.floor((counter * 100) / 296) + "%";
  }

  let popup = document.querySelector(".popup");
  let button = document.querySelector(".close");

  function openpopup() {
    popup.classList.add("openpopup");
  }
  button.addEventListener("click", () => {
    function closepopup() {
      popup.classList.remove("openpopup");
    }
    closepopup();
  });
});
