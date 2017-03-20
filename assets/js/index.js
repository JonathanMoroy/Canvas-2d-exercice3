// Fonction ready
$(function() {
  // déclaration de ma variable pour travailler sur mon canvas
  var car = document.getElementById('car').getContext('2d');

  // Corps de la voiture
  car.fillStyle = 'green';
  car.fillRect(100,150,200,50);
  car.fillRect(50,200,300,50);

  // Roues de la voiture
  car.beginPath();
  car.arc(75,275,25,0,Math.PI*2,false);
  car.fillStyle = 'lightgrey';
  car.strokeStyle = 'black';
  car.stroke();
  car.fill();
  
  // deuxième Roue
  car.beginPath();
  car.arc(325,275,25,0,Math.PI*2,false);
  car.fillStyle = 'lightgrey';
  car.strokeStyle = 'black';
  car.stroke();
  car.fill();
});
