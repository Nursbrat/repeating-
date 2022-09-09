// import './answers'
// import './contacts'
// import './offfice'
// import './partners'
// import './projects'
// import './review'
// import './square'
// import './twenty'
const twenty = [
  { top: "26", middle: "лет", bottom: "на рынке" },
  { top: "26", middle: "лет", bottom: "на рынке" },
  { top: "26", middle: "лет", bottom: "на рынке" },
  { top: "26", middle: "лет", bottom: "на рынке" },
];

const twentyItems = document.querySelector(".twenty__items");

twenty.forEach((element) => {
  twentyItems.innerHTML += `
      <div class="twenty__item">
                          <h2 class="twenty__top">${element.top}</h2>
                          <h3 class="twenty__middle">${element.middle}</h3>
                          <p class="twenty__bottom">${element.bottom}</p>
                      </div>
          `;
});

//////////////////////////////////PROJECTS//////////////////////////////////////////////////////////////////

const projects = [
  {
    img: "./assets/img/stadium.png",
    line: "./assets/img/line.svg",
    name: "Газпром Арена",
    description:
      "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
  },
  {
    img: "./assets/img/stadium.png",
    line: "./assets/img/line.svg",
    name: "Газпром Арена",
    description:
      "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
  },
  {
    img: "./assets/img/stadium.png",
    line: "./assets/img/line.svg",
    name: "Газпром Арена",
    description:
      "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
  },
];

const projectsItems = document.querySelector(".projects__box");
projects.map((item) => {
  projectsItems.innerHTML += `
      <div class="projects__items">
  <img src="${item.img}" alt="stadium" class="projects__img">
  <div class="projects__text">
  <div class="projects__rectangle"></div>
      <h4 class="projects__name">${item.name}</h4>
      <p class="projects__des">${item.description} </p>
  </div>
</div>
`;
});
////////////////////////////////////// /// OFFICE//////////////////////////////////

const office = [
  {
    img: "./assets/img/building.svg",
    des: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/img/building.svg",
    des: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/img/building.svg",
    des: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/img/building.svg",
    des: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/img/building.svg",
    des: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/img/building.svg",
    des: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
];
const officeItems = document.querySelector(".office__items");

for (let index = 0; index < office.length; index++) {
  const element = office[index];

  officeItems.innerHTML += `
  <div class="office__item">
  <img src="${element.img}" alt="building.svg" class="office__img">
  <p class="office__text">${element.des}</p>
</div>
  `;
}
///////////////////////////////SQUARE/////////////////////////'/////

const square = [
  {
    img: "./assets/img/square.png",
  },
  {
    img: "./assets/img/square.png",
  },
  {
    img: "./assets/img/square.png",
  },
  {
    img: "./assets/img/square.png",
  },
  {
    img: "./assets/img/square.png",
  },
  {
    img: "./assets/img/square.png",
  },
  {
    img: "./assets/img/square.png",
  },
  {
    img: "./assets/img/square.png",
  },
];

const squareItems = document.querySelector(".square__items");
for (let index = 0; index < square.length; index++) {
  const element = square[index];

  squareItems.innerHTML += `
<img src="${element.img}" alt="square-img" class="square__img">
`;
}

//////////////////////ANSWERS/////////////////////////

const answers = [
  {
    question: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
    caret: document.querySelector(".answers__caret"),
    summary:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. ',
  },
  {
    question: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
    caret: document.querySelector(".answers__caret"),
    summary:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. ',
  },
  {
    question: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
    caret: document.querySelector(".answers__caret"),
    summary:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. ',
  },
  {
    question: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
    caret: document.querySelector(".answers__caret"),
    summary:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. ',
  },
  {
    question: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
    caret: document.querySelector(".answers__caret"),
    summary:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. ',
  },
];

const answersItems = document.querySelector(".answers__items");

answers.map((item) => {
  answersItems.innerHTML += `
<div class="answers__dropdown">
<div class="answers__details">
<div class="answers__caret"></div>
    <div class="answers__question">${item.question}</div>
</div>
<p class="answers__summary">${item.summary}</p>
</div>

`;
});

const dropdowns = document.querySelectorAll(".answers__dropdown");
dropdowns.forEach((dropdown) => {
  const caret = dropdown.querySelector(".answers__caret");
  const summary = dropdown.querySelector(".answers__summary");
  const details = dropdown.querySelector(".answers__details");

  details.addEventListener("click", () => {
    caret.classList.toggle("answers__caret-rotate");
    summary.classList.toggle("answers__summary-open");
  });
});

///////////////////////////////////PARTNERS'////////////////////////

const partners = [
  {
    img: "./assets/img/berksho.svg",
  },
  {
    img: "./assets/img/berksho.svg",
  },
  {
    img: "./assets/img/berksho.svg",
  },
  {
    img: "./assets/img/berksho.svg",
  },
  {
    img: "./assets/img/berksho.svg",
  },
];

const partnersItems = document.querySelector(".partners__items");
partners.forEach((element) => {
  partnersItems.innerHTML += `
<img src="${element.img}" alt="partners-png" class="partners__img">
`;
});

////////////////////////////REVIEW/////////////////////////////

const review = [
  {
    mark: "./assets/img/mark.svg",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
    author: "Иванов Иван,",
    span: " ООО “Газпром-Арена”",
  },
  {
    mark: "./assets/img/mark.svg",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
    author: "Иванов Иван,",
    span: " ООО “Газпром-Арена”",
  },
  {
    mark: "./assets/img/mark.svg",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
    author: "Иванов Иван,",
    span: " ООО “Газпром-Арена”",
  },
];

const reviewItems = document.querySelector(".review__items");

for (let index = 0; index < review.length; index++) {
  const element = review[index];
  reviewItems.innerHTML += `
    <div class="review__item">
    <div class="review__box">
        <img src="${element.mark}" alt="" class="review__quotes-mark">
        <p class="review__text">${element.text}</p>
    </div>
    <h3 class="review__author">
    ${element.author}
        <span class="review__span">
          ${element.span}  
        </span>
        </h3>
</div>
    `;
}

//////////////////////////////CONTACTS////////////////////////

const contacts = [
  {
    icon: "./assets/img/place.svg",
    label: "АДРЕС:",
    info: "НЕВСКИЙ ПРОСПЕКТ 140,",
    second:"ОФИС 140-142"
    
  },
  {
    icon: "./assets/img/phone.svg",
    label: "ТЕЛЕФОН:",
    info:"8 (812) 111-22-33",
    second:"8 (812) 111-22-33"
  },
  {
    icon: "./assets/img/clock.svg",
    label: "ВРЕМЯ РАБОТЫ:",
    info: 'ПН-СБ ',
    second:"10:00 - 20:00"
  },
  {
    icon: "./assets/img/mail.svg",
    label: "E-MAIL:",
    info: "INFO@VIP.RU",
    second:''
    
  },
];

const contactsItem= document.querySelector('.contacts__items')

contacts.forEach(item =>{
    contactsItem.innerHTML+=`
    <div class="contacts__item">
    <img src="${item.icon}" alt="" class="contacts__icon">
    <h4 class="contacts__name">${item.label}</h4>
    <div class="contacts__info">
        <h3 class="contacts__text-main">${item.info}</h3>
        <h3 class="contacts__text">${item.second}</h3>

    </div>
    </div>
    
    `

})
