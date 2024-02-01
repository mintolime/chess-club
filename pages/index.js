export const dataListStage = [
    {
      id: 1,
      text: 'Строительство железнодорожной магистрали Москва-Васюки'
    },
    {
      id: 2,
      text: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов'
    },
    {
      id: 3,
      text: 'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет'
    },
    {
      id: 4,
      text: 'Строительство дворца для турнира'
    },
    {
      id: 5,
      text: 'Размещение гаражей для гостевого автотранспорта'
    },
    {
      id: 6,
      text: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов'
    },
    {
      id: 7,
      text: 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн'
    }
  ];

  const ulElement = document.querySelector('.stages__lists');

  dataListStage.forEach(item => {
    const liElement = document.createElement('li');
    liElement.classList.add('stages__list', 'list' + item.id);
  
    const spanElement = document.createElement('span');
    spanElement.className = 'stages__number';
    spanElement.textContent = item.id;
    liElement.appendChild(spanElement);
  
    const pElement = document.createElement('p');
    pElement.className = 'stages__list-text';
    pElement.textContent = item.text;
    liElement.appendChild(pElement);
  
    ulElement.appendChild(liElement);
  });