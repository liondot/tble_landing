
// add btn 
const addBtn = document.querySelector('.add_btn');

addBtn.addEventListener('click', ()=> {
    const scrollTo = document.querySelector('#dbForm');
    scrollTo.scrollIntoView({behavior: 'smooth'})
})


