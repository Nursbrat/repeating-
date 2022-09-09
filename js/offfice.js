const dropdowns=document.querySelector(".answers__dropdown")
dropdowns.forEach(dropdown =>{
    const caret= dropdown.querySelector('.answers__caret');
    const summary =dropdown.querySelector('.answers__summary')
    const details = dropdown.querySelector('.answers__details')
    
    details.addEventListener("click", ()=> {
    caret.classList.toggle('answers__caret-rotate');
    summary.classList.toggle('answers__summary-open')
    })

})
