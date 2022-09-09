
const answers = [
    { top: "26", middle: "лет", bottom: "на рынке" },
    { top: "26", middle: "лет", bottom: "на рынке" },
    { top: "26", middle: "лет", bottom: "на рынке" },
    { top: "26", middle: "лет", bottom: "на рынке" },
  ];
  
  const answersItems=document.querySelector('.twenty__items');
  
  answers.forEach(element => {
      answersItems.innerHTML+=`
      <div class="twenty__item">
                          <h2 class="twenty__top">${element.top}</h2>
                          <h3 class="twenty__middle">${element.middle}</h3>
                          <p class="twenty__bottom">${element.bottom}</p>
                      </div>
          `
  
      
  });