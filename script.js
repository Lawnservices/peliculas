const today = new Date();
const hourNow = today.getHours();
let greeting;

if (hourNow > 18){
  greeting = 'Good evening!';
} else if(hourNow > 12){
  greeting = 'Good afternoon!';
} else if(hourNow > 0){
  greeting = 'Good morning!';
} else{
  greeting = 'welcome';
}
const muestra = 'Estará disponible solo por una semana y luego pondremos otra.'
document.getElementById('mas').textContent = greeting + ' ' + muestra;

