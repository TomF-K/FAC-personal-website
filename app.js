// testimonials data

const students = [
    {
        id: 1,
        author: 'Stew B.',
        location: 'Somerset, UK',
        img: 'imgs/SB_profile.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },
    {
        id: 2,
        author: 'Erik P.',
        location: 'Someplace, MA',
        img: 'imgs/SB_profile.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },
    {
        id: 3,
        author: 'Alex B.',
        location: 'Oxford, UK',
        img: 'imgs/SB_profile.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },
    {
        id: 4,
        author: 'Jim D.',
        location: 'Somerset, UK',
        img: 'imgs/SB_profile.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },
    {
        id: 5,
        author: 'Dave D-R.',
        location: 'Athens, Greece',
        img: 'imgs/SB_profile.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },
];

// target elements:

const img = document.getElementById('student-img');
const author = document.getElementById('testimonials__author');
const area = document.getElementById('testimonials__location');
const testimonialText = document.getElementById('testimonials__text');


// target buttons

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


// load default testimonial
let currentItem = 0;

// load testimonial based on student
window.addEventListener('DOMContentLoaded', function () {
    const item = students[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    area.textContent = item.location;
    testimonialText.textContent = item.text;
  });

  function loadTestimonial(student) {
    const item = students[student];
    img.src = item.img;
    author.textContent = item.author;
    area.textContent = item.location;
    testimonialText.textContent = item.text;
  }

// load previous 
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = students.length - 1;
    }
    loadTestimonial(currentItem);
  });

// load next
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > students.length - 1) {
      currentItem = 0;
    }
    loadTestimonial(currentItem);
  });