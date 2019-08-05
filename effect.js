let arr = ['SERVICE', 'ABOUT', 'NEWS', 'FAQ', 'CONTANT'];
let todoList = document.getElementById('todo-list');

let content = arr.map( item => {
  return `<a href="#" class="text-secondary text-decoration-none d-block"> ${item} </a>`;
})

todoList.innerHTML = content.join('');

//==============================================================

let menu = document.getElementById('menu');
let menuRight = document.getElementById('menu-right');
let delRight = document.getElementById('del-right');
menu.addEventListener('click', onMenu);
delRight.addEventListener('click', onMenu)
function onMenu() {
  let check = menuRight.getAttribute('class');
  if(!check.includes('d-none')) {
    menuRight.classList.add('d-none');
  }
  else {
    menuRight.classList.remove('d-none');
  }
}

//==============================================================

let spRemove = document.getElementById('sp-remove');
let rmEffect = document.getElementById('remove-effect');
let search = document.getElementById('search');
search.addEventListener('click', onSearch);
spRemove.addEventListener('click', onSearch);

function onSearch() {
  let check = rmEffect.getAttribute('class');
  if(!check.includes('d-none')) {
    rmEffect.classList.add('d-none');
    //menuRight.classList.add('end-none');
  }
  else {
    rmEffect.classList.remove('d-none');
  }
}

//==============================================================

let scrollBg = document.getElementById('scroll-bg');
let navParent = document.getElementById('nav-parent');
let navTop = document.getElementById('nav-top');
window.onscroll = function() {myFunction()};

//carousel owl
function myFunction() {
 if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    var att1 = document.createAttribute('data-scroll');
    var att2 = document.createAttribute('data-scroll');
  att1.value = 'dNone';
  att2.value = 'dBg';
  scrollBg.setAttributeNode(att2);
  navTop.setAttributeNode(att1);
 } else {
    navTop.removeAttribute("data-scroll");
    scrollBg.removeAttribute('data-scroll');
  }
}

//==============================================================
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 10,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:2,
          nav:true,
          loop:false
      }
    }
  });
});
//==============================================================