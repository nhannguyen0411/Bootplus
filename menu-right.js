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
menu.addEventListener('click', myMenu);
delRight.addEventListener('click', myMenu)
function myMenu() {
  let check = menuRight.getAttribute('class');
  if(!check.includes('d-none')) {
    menuRight.classList.add('d-none');
    //menuRight.classList.add('end-none');
  }
  else {
    menuRight.classList.remove('d-none');
  }
}