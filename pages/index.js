
document.addEventListener("DOMContentLoaded", function () {
  const containerParticipants = document.querySelector(".participants__lists");
  const cards = document.querySelectorAll(".participants__list");
  const totalCards = document.querySelectorAll(".participants__list").length;
  const prevButton = document.querySelector("#rigth");
  const nextButton = document.querySelector("#left");

  let currentIndex = 0;
  let firstCardIndex = 1;
  const disableBtn = (currentCount,totalCount,btn) => currentCount === totalCount ? btn.disabled = true : btn.disabled = false

  function updateUI(data) {
    const currentCount = currentIndex + 1
    const countOutput = document.querySelector(".participants__count");
    countOutput.textContent = `${currentCount}/${totalCards}`; 
    // disableBtn(currentCount,totalCards,nextButton)
    disableBtn(currentCount,firstCardIndex,prevButton)

    if(data){
      data.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      })
      
      calcTransform(containerParticipants)
    }
  }

  function changeSlide(direction) {
    if(direction ==='next'){ 
      currentIndex++
      if(currentIndex === totalCards)
        {
          currentIndex = 0
        }
    } else if(direction ==='prev'){
      console.log(currentIndex)
      currentIndex--
      if(currentIndex < 0){
        currentIndex = totalCards -1
      }
    }
    updateUI(cards);
  }

  const calcTransform = (container) => {
    const width = document.body.clientWidth;
    if(width <= 485){
      index = 19
    } else{
      index = 25
    }
    container.style.transform = `translateX(-${currentIndex  * index}%)`;
  }

  window.addEventListener("resize", () => {
    updateUI(cards);
  });

  prevButton.addEventListener("click", () => changeSlide("prev"));
  nextButton.addEventListener("click", () => changeSlide("next"));

  updateUI(cards);
});
