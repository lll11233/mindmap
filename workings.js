

// typing effect
var i = 0;
var txt = 'A Portfolio of Artefacts'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}

//event listener



// function transport() {
//     const image = document.getElementById("shuttle");
//     image.style.left = "80%"; // Move it to the right
// }
  
// moving shuttle for home page
function moveShuttle() {
    const shuttle = document.getElementById("shuttle");
    let position = 0;
    const endPosition = 900; // adjust how far you want it to go
    const speed = 3; // pixels per frame
    const intervalTime = 10; // ms between frames
  
    const interval = setInterval(() => {
      if (position >= endPosition) {
        clearInterval(interval); // stop when it reaches destination
      } else {
        position += speed;
        shuttle.style.left = `${200 + position}px`; // starting from left: 500px
      }
    }, intervalTime);

    setTimeout(() => {
        window.location.href = "rocketship.html";
      }, 3000); // 3 seconds delay
      

    
}


//space craft dashboard

const traits = [
  { name: "Extrovert", level: 60 },
  { name: "Intuitive", level: 74 },
  { name: "Feeling", level: 57 },
  { name: "Judging", level: 90 },
  { name: "Turbulent", level: 51 },
  { name: "Energy", level: 100 },
];

const dashboard = document.getElementById("dashboard");

traits.forEach(trait => {
  const card = document.createElement("div");
  card.className = "card";

  const name = document.createElement("div");
  name.className = "trait-name";
  name.textContent = trait.name;
  name.id = trait.name.toLowerCase(); // Set the ID to the lowercase name

  const barContainer = document.createElement("div");
  barContainer.className = "bar-container";

  const barFill = document.createElement("div");
  barFill.className = "bar-fill";

  barContainer.appendChild(barFill);

  const level = document.createElement("div");
  level.className = "level";
  level.textContent = `${trait.level}%`;

  card.appendChild(name);
  card.appendChild(barContainer);
  card.appendChild(level);
  dashboard.appendChild(card);

  // Animate the bar fill after layout is rendered
  setTimeout(() => {
    barFill.style.width = trait.level + "%";
  }, 100);
});

// var qualityOneTitle = document.getElementById("extrovert")

// draggable elements


dragElement(document.getElementById("qualityOne"));
dragElement(document.getElementById("qualityTwo"));
dragElement(document.getElementById("qualityThree"));
dragElement(document.getElementById("opening"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "headerDraggable")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "headerDraggable").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


var qualityWindow1 = document.querySelector("#qualityOne")
var openingWindow = document.querySelector("#opening")
var qualityWindow2 = document.querySelector("#qualityTwo")
var qualityWindow3 = document.querySelector("#qualityThree")


function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}

var qualityOneClose = document.querySelector("#qualityOneclose")
var qualityOneOpen = document.querySelector("#extrovert")

var qualityTwoClose = document.querySelector("#qualityTwoclose")
var qualityTwoOpen = document.querySelector("#intuitive")

var qualityThreeClose = document.querySelector("#qualityThreeclose")
var qualityThreeOpen = document.querySelector("#feeling")

var openingClose = document.querySelector("#openingclose")
var openingOpen = document.querySelector("#energy")

qualityOneClose.addEventListener("click", function() {
  closeWindow(qualityWindow1);
});

qualityOneOpen.addEventListener("click", function() {
  openWindow(qualityWindow1);
});

qualityTwoClose.addEventListener("click", function() {
  closeWindow(qualityWindow2);
});

qualityTwoOpen.addEventListener("click", function() {
  openWindow(qualityWindow2);
});

qualityThreeClose.addEventListener("click", function() {
  closeWindow(qualityWindow3);
});

qualityThreeOpen.addEventListener("click", function() {
  openWindow(qualityWindow3);
});

openingClose.addEventListener("click", function() {
  closeWindow(openingWindow);
});

openingOpen.addEventListener("click", function() {
  openWindow(openingWindow);
});

//slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}

//to the galaxy
function moveRocket() {
  const shuttle = document.getElementById("shuttle");
  let position = 0;
  const endPosition = 900; // adjust how far you want it to go
  const speed = 3; // pixels per frame
  const intervalTime = 10; // ms between frames

  const interval = setInterval(() => {
    if (position >= endPosition) {
      clearInterval(interval); // stop when it reaches destination
    } else {
      position += speed;
      shuttle.style.left = `${200 + position}px`; // starting from left: 500px
    }
  }, intervalTime);

}


function toGalaxy() {
  //move the shuttle to the right
  var rocket = document.getElementById("shuttle");
  rocket.style.display = "flex";
  moveRocket();

  setTimeout(() => {
    window.location.href = "galaxy.html";
  }, 2000); // 3 seconds delay

}

function openProject(name) {
  window.location.href = (name+ ".html");
}


//projects

// const observer = new IntersectionObserver((entries)=>{


//   entries.forEach((entry)=>{


//     if(entry.isIntersecting){

//       entry.target.classList.add('show');
//     }
//     // else if (entry.isIntersecting && entry.target.classList('musicnote')){
//     //   entry.target.classList.add('show');
//     // }
//     else{
//       entry.target.classList.remove('show');
//     }
//   })
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el)=>observer.observe(el));


document.getElementById("button3").addEventListener("click", () => {
  
});

document.getElementById("button4").addEventListener("click", () => {
 
});

document.getElementById("exitWorm").addEventListener("click", () => {
  
});

document.getElementById("button5").addEventListener("click", () => {
  
});


document.getElementById("button6").addEventListener("click", () => {
  
});

document.getElementById("protagonist").addEventListener("click", () => {
  
});






function earth(){

  document.getElementById("earthTitle").style.display = "none";
  document.getElementById("earthContent").style.display = "flex"
  document.getElementById("blockquoteEarth").innerText = "What makes the desert more beautiful,’ said the little prince, ‘is that it’s hiding a well somewhere."
  document.getElementById("button3").remove();

  // Optional: remove the text after it fades out
  setTimeout(() => {
    document.getElementById("earthTitle").remove();
  }, 2000); // Match the fade-out duration in CSS
}

function earthDay(){

  document.getElementById("earthTitle2").style.display = "none";
  document.getElementById("earthContent").style.display = "flex"
  document.getElementById("blockquoteDay").innerText = "What makes the desert more beautiful,’ said the little prince, ‘is that it’s hiding a well somewhere."
  document.getElementById("cloud").style.display = "flex"
  // Optional: remove the text after it fades out
  setTimeout(() => {
    document.getElementById("earthTitle2").remove();
  }, 2000); // Match the fade-out duration in CSS

}

function toMemory(){
  window.location.href = "exitWormhole.html";
}

function toWorm(){
  window.location.href = "test.html";
}

function toWorkexperience(){
  window.location.href = "workexperience.html";
  
}



function earthSunset(){
  document.getElementById("button5").style.display = "none";
  document.getElementById("button6").style.display = "flex";
  document.getElementById("earthTitle2").style.display = "none";
  document.getElementById("earthContent3").style.display = "flex"
  // Optional: remove the text after it fades out
  setTimeout(() => {
    document.getElementById("blockquoteDay").innerText = "What makes the desert more beautiful,’ said the little prince, ‘is that it’s hiding a well somewhere."
  }, 3000); // Match the fade-out duration in CSS
}

// function showPage(pageId) {
//   document.getElementById("loading").style.display = "flex";
//   document.getElementById("body").style.display = "none";

//   setTimeout(() => {
//     document.getElementById("loader").style.display = "none";
//     const pages = document.querySelectorAll('.page');
//     pages.forEach(p => p.style.display = 'none');
//     document.getElementById(pageId).style.display = 'block';
//   }, 3000); // optional delay
// }





