let sections = document.querySelectorAll('section');
let navbarlinks = document.querySelectorAll('.navbar-nav a');
let allSidesNav = document.querySelectorAll('.side-navbar .line-nav');
// tracks index of current section
let currentSectionIndex = 0;


window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navbarlinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
  allSidesNav.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// document.addEventListener('wheel', e => {
//   if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
//     // wheel up
//     sections[currentSectionIndex].className = '';
//     navbarlinks[currentSectionIndex].classList.remove('active') ;
//     allSidesNav[currentSectionIndex].classList.remove('active') ;

//     currentSectionIndex--;

//     sections[currentSectionIndex].className = 'active';
//     navbarlinks[currentSectionIndex].classList.add('active') ;
//     allSidesNav[currentSectionIndex].classList.add('active') ;
//   } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
//     // wheel down
//     sections[currentSectionIndex].className = '';
//     navbarlinks[currentSectionIndex].classList.remove('active') ;
//     allSidesNav[currentSectionIndex].classList.remove('active') ;

//     currentSectionIndex++;
//     sections[currentSectionIndex].className = 'active';
//     navbarlinks[currentSectionIndex].classList.add('active') ;
//     allSidesNav[currentSectionIndex].classList.add('active') ;
//   }
// });
// document.addEventListener('keydown' , () => {
//   console.log("hgjkytk");
// })


// const el = document.querySelector("section");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX  + "px";
//   el.style.backgroundPositionY = -e.offsetY+ "px";
// });

  AOS.init();
