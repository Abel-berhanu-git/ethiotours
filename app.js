// ****** set date ******
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



// ****** nav toggle ******

const navBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// console.log(navBtn)
// console.log(navLinks)

navBtn.addEventListener('click', () => {
  navLinks.classList.toggle('showNavLinks')
})

// navBtn.addEventListener('click', () => {
//   navLinks.classList.remove('showNavLinks')
// })

