document.addEventListener("DOMContentLoaded", function () {

    let sliderImages = document.querySelectorAll('.slide');
    let arrowRight = document.querySelector('#arrow-right');
    let arrowLeft = document.querySelector('#arrow-left');
    let current = 0;
    let timerId = setInterval(() => {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    }, 5000); 


    //function clearing all images:
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
    }
    //function initiating the slider:
    function startSlide() {
        reset();
        sliderImages[0].style.display = 'block';
    }

    startSlide();

    //show previous:
    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }

    //show next:
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }



    //left arrow click:
    arrowLeft.addEventListener('click', function () {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    })

    //rigth arrow click:
    arrowRight.addEventListener('click', function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    })

const portrait = document.querySelector('.portrait');
portrait.addEventListener('mouseover', function() {
this.style.transition('')
});


//scrolling to the elements of the page

const navElement = document.querySelector('.navElement');
const navAbout = document.querySelector('.navAbout');
const navWorkshops= document.querySelector('.navWorkshops');
const navContact = document.querySelector('.navContact');
const arrowUp = document.querySelectorAll('.arrow_up');
const header = document.querySelector('header');

const navElements = [navAbout, navWorkshops, navContact, arrowUp];

const aboutSection = document.querySelector('.aboutSection');
const workshopsSection = document.querySelector('.workshopsSection');
const contactSection = document.querySelector('.contactSection');

const pageSections = [aboutSection, workshopsSection, contactSection, header]; 


function scrollIt(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  }

navElements[0].addEventListener('click', () => {
    scrollIt(pageSections[0]);
  });

navElements[1].addEventListener('click', () => {
    scrollIt(pageSections[1]);
  });

  console.log(arrowUp.toArray());
  //tu trzeba zrobić jakąś pętlę przez te arrowup
navElements[3].addEventListener('click', () => {
    scrollIt(pageSections[3]);
  });


}); //end