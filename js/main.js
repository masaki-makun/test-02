const animationButton = () => {
  const bubbleButton = document.getElementsByClassName("animation-btn");
  function classToggle(e) {
    e.preventDefault();
    e.target.classList.remove("animate");
    e.target.classList.add("animate");
    setTimeout(() => {
      e.target.classList.remove("animate");
    }, 700);
  }

  for (let i = 0; i < bubbleButton.length; i++) {
    bubbleButton[i].addEventListener("click", classToggle, false);
    console.log("click");
  }
  console.log("animationButton");
};

document.addEventListener("DOMContentLoaded", animationButton);
