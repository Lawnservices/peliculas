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
const muestra = 'La relajación mental te ayuda a comprender mejor la vida.'
document.getElementById('mas').textContent = greeting + ' ' + muestra;


setInterval(() =>{
  let texto = 'suscribete a mi canal gracias hoy es';
  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
  const day = dias[new Date().getDay()];
  document.getElementById('demo').textContent = texto + ' ' + day;
},9000); 