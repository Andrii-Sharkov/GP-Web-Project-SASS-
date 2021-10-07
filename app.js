// Small Database 
const people = [
  {
    image: '/images/person-5.jpg',
    name: 'Julia',
    position: 'Content Manager',
    describing: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
  },
  {
    image: '/images/person-4.jpg',
    name: 'Jessica',
    position: 'Photograph',
    describing: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque nisi voluptatem delectus beatae similique.',
  },
  {
    image: '/images/person-3.jpg',
    name: 'Monica',
    position: 'Web Developer',
    describing: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor egestas feugiat. Morbi fringilla, libero sed malesuada dictum.',
  },
  {
    image: '/images/person-2.jpg',
    name: 'Alison',
    position: 'Content Manager',
    describing: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque nisi voluptatem delectus beatae similique.',
  },
  {
    image: '/images/person-1.jpg',
    name: 'Kelly',
    position: 'Designer',
    describing: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque nisi voluptatem delectus beatae similique.',
  },
];

// Fixed Header
window.addEventListener('scroll', function() { 
  const header = document.querySelector('#header');
  header.classList.toggle('sticky-header', window.scrollY > 0);
});

// Testimonials
const image = document.querySelector('.image');
const name = document.querySelector('.person-name');
const position = document.querySelector('.position');
const describing = document.querySelector('.describing');

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let currentItem = 0;
function showPerson () {
  const item = people[currentItem];
  image.src = item.image;
  name.textContent = item.name;
  position.textContent = item.position;
  describing.textContent = item.describing;
}

// Show Previous Peron
btnLeft.addEventListener('click', function () {
  currentItem --;
  if (currentItem < 0) {
    currentItem = people.length -1;
  }
  showPerson();
});

// Show Next Person
btnRight.addEventListener('click', function () {
  currentItem ++;
  if (currentItem > people.length -1) {
    currentItem = 0;
  }
  showPerson();
});

// Getting Current Year
function getCurrentYear () {
  const year = document.querySelector('.year');
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;
}
getCurrentYear();