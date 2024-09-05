document.getElementById('inscribete').addEventListener('click', function() {
    alert('Gracias por tu interés! Pronto te contactaremos con más información.');
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const paragraphs = document.querySelectorAll('.general p');

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('mouseover', () => {
    paragraph.style.color = 'black'; // Cambia el color del texto al pasar el cursor
  });

  paragraph.addEventListener('mouseout', () => {
    paragraph.style.color = 'white'; // Restaura el color original
  });
});