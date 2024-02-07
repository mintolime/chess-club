document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".participants__lists");
  const cards = document.querySelectorAll(".participants__list");
  const prevButton = document.querySelector("#rigth");
  const nextButton = document.querySelector("#left");

  let currentIndex = 0;

  const disableBtn = (currentCount,totalCount,btn) => currentCount === totalCount ? btn.disabled = true : btn.disabled = false

  function updateUI(data) {
    if(data){
      const totalCards = data.length;
      const currentCount = currentIndex + 1
      const countOutput = document.querySelector(".participants__count");
      countOutput.textContent = `${currentCount}/${totalCards}`; 
      disableBtn(currentCount,totalCards,nextButton)
      data.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add("active");
          console.log(item,index,'if')
        } else {
           console.log(item,'else')
          item.classList.remove("active");
        }
        
      })
      container.style.transform = `translateX(-${currentIndex * 300}px)`;
    }
  }

  function moveCards(direction) {
    const maxIndex = cards.length - 1;
    if (direction === "next") {
      currentIndex = (currentIndex === maxIndex) ? 0 : currentIndex + 1;
    } else if (direction === "prev") {
      currentIndex = (currentIndex === 0) ? maxIndex : currentIndex - 1;
    }
    updateUI(cards);
  }

  prevButton.addEventListener("click", () => moveCards("prev"));
  nextButton.addEventListener("click", () => moveCards("next"));

  window.addEventListener("resize", () => {
    updateUI(cards);
  });

  updateUI(cards);
});
