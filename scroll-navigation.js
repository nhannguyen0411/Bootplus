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