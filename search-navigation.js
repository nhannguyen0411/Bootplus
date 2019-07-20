let spRemove = document.getElementById('sp-remove');
let rmEffect = document.getElementById('remove-effect');
let search = document.getElementById('search');
search.addEventListener('click', myFunction);
spRemove.addEventListener('click', myFunction);

function myFunction() {
  let check = rmEffect.getAttribute('class');
  if(!check.includes('d-none')) {
    rmEffect.classList.add('d-none');
    //menuRight.classList.add('end-none');
  }
  else {
    rmEffect.classList.remove('d-none');
  }
}