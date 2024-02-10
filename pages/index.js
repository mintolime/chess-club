
document.addEventListener("DOMContentLoaded", function () {
  const containerParticipants = document.querySelector(".participants__lists");

  const cardsStages = document.querySelectorAll(".stages__list_slider");
  const cardStagesDots = document.querySelector(".button__items")
  const cardsParticipants = document.querySelectorAll(".participants__list");
  const totalCardsStages = document.querySelectorAll(".stages__lists_slider").length;
  const totalCards = document.querySelectorAll(".participants__list").length;
  const countOutput = document.querySelector(".participants__count");
  const countAll = document.querySelector(".participants__count_span");
  const prevButton = document.querySelector("#rigth");
  const nextButton = document.querySelector("#left");
  const prevButtonStages = document.querySelector("#stages_rigth");
  const nextButtonStages = document.querySelector("#stages_left");

  let currentIndexParticipants = 0;
  let currentIndexStages = 0;
  let totalCardsStagesCope = 5;
  let firstCardIndex = 1;

  //  функция для блокировки кнопки
  const disableBtn = (currentCount, totalCount, btn) => currentCount === totalCount ? btn.disabled = true : btn.disabled = false

  // функция отрисовки точек в слайде блока Stages
  function createStagesDots() {
    cardStagesDots.innerHTML = '';

    for (let i = 0; i < totalCardsStagesCope; i++) {
      const spanElement = document.createElement('span');
      spanElement.classList.add('button__dots');
      cardStagesDots.appendChild(spanElement);
    }
    return cardStagesDots
  }

  // обновление блока Participants
  function updateUIParticipants() {
    const currentCount = currentIndexParticipants + 1

    countOutput.textContent = currentCount
    countAll.textContent = `${'/ ' + totalCards}`

    disableBtn(currentCount, totalCards, nextButton)
    disableBtn(currentCount, firstCardIndex, prevButton)

    if (cardsParticipants) {
      cardsParticipants.forEach((item, index) => {
        if (index === currentIndexParticipants) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      })

      calcTransformParticipants()
    }
  }
  // обновление блока Stages
  function updateUIStages() {
    const dots = cardStagesDots.querySelectorAll('.button__dots');
    const currentCount = currentIndexStages + 1
    disableBtn(currentCount, totalCardsStagesCope, nextButtonStages)
    disableBtn(currentCount, firstCardIndex, prevButtonStages)

    cardsStages.forEach((item, index) => {
      if (index === currentIndexStages) {
        item.classList.add("stages__list_slider_active");
      } else {
        item.classList.remove("stages__list_slider_active");
      }
    });

    // Обновляем активную точку
    dots.forEach((dot, index) => {
      if (index === currentIndexStages) {
        dot.classList.add('button__dots_active');
      } else {
        dot.classList.remove('button__dots_active');
      }
    });
  }

  function changeSlide(direction, index, totalItem) {
    let newIndex = index;
    if (direction === 'next') {
      newIndex++;
    } else if (direction === 'prev') {
      newIndex--;
    }
    return newIndex;
  }

  const calcTransformParticipants = () => {
    if (cardsParticipants.length > 0) {
      const slideWidth = cardsParticipants[0].clientWidth;
      let translateValue = -currentIndexParticipants * slideWidth;

      containerParticipants.style.transition = 'transform 0.3s ease';
      containerParticipants.style.transform = `translateX(${translateValue}px)`;
    }
  }

  window.addEventListener("resize", () => {
    updateUIParticipants();
    updateUIStages();
  });

  prevButton.addEventListener("click", () => {
    currentIndexParticipants = changeSlide("prev", currentIndexParticipants, totalCards);
    updateUIParticipants();
  });
  nextButton.addEventListener("click", () => {
    currentIndexParticipants = changeSlide("next", currentIndexParticipants, totalCards);
    updateUIParticipants();
  });


  const dots = cardStagesDots.querySelectorAll('.button__dots');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndexStages = index;
      updateUIStages();
    });
  });

  prevButtonStages.addEventListener("click", () => {
    currentIndexStages = changeSlide("prev", currentIndexStages, totalCardsStages);
    updateUIStages();
  });

  nextButtonStages.addEventListener("click", () => {
    currentIndexStages = changeSlide("next", currentIndexStages, totalCardsStages);
    updateUIStages();
  });

  createStagesDots()
  updateUIParticipants();
  updateUIStages();
});
