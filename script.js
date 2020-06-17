var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');

function indicator(e){
  marker.style.left = e.offsetLeft+"px";
  marker.style.width = e.offsetWidth+"px";
  marker.style.display = "flex";
}

item.forEach(link => {
  link.addEventListener('mouseover', (e) => {
    indicator(e.target);
  })
})
