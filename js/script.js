
// script.js - navegación, búsqueda básica y utilidades
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href')===location.pathname.split('/').pop()) a.setAttribute('aria-current','page');
});

function filtrarLista(inputId, listSelector){
  const q = document.getElementById(inputId).value.toLowerCase();
  document.querySelectorAll(listSelector).forEach(row=>{
    row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}
