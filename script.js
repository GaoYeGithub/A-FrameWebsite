document.addEventListener('keydown', function(event) {
  const car = document.getElementById('car');
  const position = car.getAttribute('position');

  switch (event.key) {
    case 'w':
      position.z -= 0.1;
      break;
    case 's':
      position.z += 0.1;
      break;
    case 'a':
      position.x -= 0.1;
      break;
    case 'd':
      position.x += 0.1;
      break;
  }

  car.setAttribute('position', position);
});