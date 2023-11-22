// testimonials data

const students = [
    {
        id: 1,
        author: 'Stew B.',
        location: 'Somerset, UK',
        img: 'imgs/student_imgs/SB_profile.jpg',
        text: "I came to Tom as a bass player with many years of experience across many genres and at many levels. In other words, I had decades of bad habits and inadequate knowledge ingrained in me. You'd never have imagined what an uphill task he faced in attempting to undo all this, because his manner was always cheerful, open and friendly. Tom understands what makes me tick as a person and communicates with such precision, humility and skill that he makes the learning fun and the progression seamless.",
    },
    {
        id: 2,
        author: 'Erik P.',
        location: 'Someplace, MA',
        img: 'imgs/student_imgs/Erik_P.png',
        text: "Tom is a consummate professional who has developed a mastery of the instrument. His attention to the subtleties of playing have resulted in a high level of musicianship while his personality and humor keep things light and positive. Despite having played for almost 15 years, my lessons with Tom provided me with new ways of approaching the instrument that I had yet to explore. This made each session enlightening, filled with “ah-ha” moments and left me energized for days afterwards.",

    },
    {
        id: 3,
        author: 'Alex B.',
        location: 'Oxford, UK',
        img: 'imgs/student_imgs/Alex_B.jpg',
        text: "One of my favourite things about the lessons was that I felt like I had complete control over the direction we went in. Because Tom is so knowledgeable about all areas of bass and music I could mention anything I had been thinking about and without any preparation, Tom would have something informative to say about it, or make tailored exercises so that I could practise and improve in the areas we had been discussing.",

    },
    {
        id: 4,
        author: 'Jim D.',
        location: 'Worcestershire, UK',
        img: 'imgs/student_imgs/Jim_D.png',
        text: "Tom is extremely patient, flexible, and understanding of my other commitments. In lessons I can see he is very focused on making the best use of our time.  One of the qualities I most value from him is that he is careful to point out my mistakes and give me the guidance I need but is always motivating and positive about it, I always leave the lessons feeling energised and encouraged, never demotivated.",

    },
    {
        id: 5,
        author: 'Dave D-R.',
        location: 'Athens, Greece',
        img: 'imgs/student_imgs/Dave_D-R.png',
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