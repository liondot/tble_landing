
// add btn 
const addBtn = document.querySelector('.add_btn');

addBtn.addEventListener('click', ()=> {
    const scrollTo = document.querySelector('#dbForm');
    scrollTo.scrollIntoView({behavior: 'smooth'})
})


// order section scrollTo animation 
$(function(){
    var $order = $('.order');
    var $offset = 400;
    var $orderOST = $order.offset().top - $offset
    $(window).scroll(function(){
        if($(this).scrollTop() > $orderOST) {
            $order.find('em').addClass('animate')
        };
    });
});

// function resize(){
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     console.log(width, height);
// }

// window.addEventListener("resize", resize);