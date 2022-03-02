
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

 // only section slide
 var myArray = ["POINT 01", "POINT 02", "POINT 03"];
 const newSwiper = new Swiper(".new_swiper", {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
         delay: 8000,
         disableOnInteraction: false,
     },
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
         renderBullet: function (index, className) {
             return '<span class="' + className + '">' + (myArray[index]) + "</span>";
         },
     },
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },

 });

 // 광고주 대상 프로모션 section promotion 
 var swiperSt = ["방문형", "배송형"];
 const prSwiper = new Swiper(".pr_swiper", {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
         delay: 5000,
         disableOnInteraction: false,
     },
     pagination: {
         el: ".pr-pagination.swiper-pagination",
         clickable: true,
         renderBullet: function (index, className) {
             return '<span class="' + className + '">' + (swiperSt[index]) + "</span>";
         },
     },
     navigation: {
         nextEl: "pr-button.swiper-button-next",
         prevEl: "pr-button.swiper-button-prev",
     },
     breakpoints: {
 
 500: {
   slidesPerView: 2, 
   spaceBetween: 1,
 },
},
     
     
 });




 // review section slide
    $('.reviews').slick({
     slide: 'div', //슬라이드 되어야 할 태그 ex) div, li 
     // rows: 2,
     infinite: true, //무한 반복 옵션	 
     slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
     slidesToScroll: 3, //스크롤 한번에 움직일 컨텐츠 개수
     speed: 600, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
     arrows: true, // 옆으로 이동하는 화살표 표시 여부
     dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
     autoplay: true, // 자동 스크롤 사용 여부
     autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
     pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
     vertical: false, // 세로 방향 슬라이드 옵션
     prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
     nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
     dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
     draggable: true, //드래그 가능 여부 

     responsive: [ // 반응형 웹 구현 옵션
       
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         },
     ]

 });



 // partner section slide 
 $('.patners').slick({
     dots: true,
     infinite: true,
     rows: 2,
     speed: 2000,
     slidesToShow: 5,
     slidesToScroll: 5,
     autoplay: true,
     autoplaySpeed: 3000,
     responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }
     ]
 });


 // campaign section slide 
 $('.campaign_cards').slick({
     dots: true,
     infinite: true,
     speed: 2000,
     slidesToShow: 4,
     slidesToScroll: 4,
     autoplay: true,
     autoplaySpeed: 3000,
     responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,
                 dots: true
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         },
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }
     ]
 });

//  고객 데이터 영역 
 (function () {
    function validEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    function validateHuman(honeypot) {
        if (honeypot) {
            console.log("Robot Detected!");
            return true;
        } else {
            console.log("Welcome Human!");
        }
    }

    function getFormData(form) {
        var elements = form.elements;

        var fields = Object.keys(elements).filter(function (k) {
            return (elements[k].name !== "honeypot");
        }).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];
            formData[name] = element.value;
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "sheet1"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        console.log(formData);
        return formData;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        var form = event.target;
        var data = getFormData(form);
        if (data.email && !validEmail(data.email)) {
            var invalidEmail = form.querySelector(".email-invalid");
            if (invalidEmail) {
                invalidEmail.style.display = "block";
                return false;
            }
        } else {
            disableAllButtons(form);
            var url = form.action;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                console.log(xhr.status, xhr.statusText);
                console.log(xhr.responseText);
                var formElements = form.querySelector(".form-elements")
                if (formElements) {
                    formElements.style.display = "none"; // hide form
                }
                var thankYouMessage = form.querySelector(".thankyou_message");
                if (thankYouMessage) {
                    thankYouMessage.style.display = "block";
                }
                return;
            };


           

    

            var encoded = Object.keys(data).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            }).join('&');
            xhr.send(encoded);
        }
    }

    function loaded() {
        console.log("Contact form submission handler loaded successfully.");
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
})();
       