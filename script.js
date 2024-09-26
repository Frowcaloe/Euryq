const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Happy National Crush Day, Eury q hihi🤍.";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/temaaciii.gif";
    }
  
});
