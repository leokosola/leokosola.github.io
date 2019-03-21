let width;
let height;
let boksit;
boksi1 = document.getElementById("box1");
boksi2 = document.getElementById("box2");
boksi3 = document.getElementById("box3");
boksi4 = document.getElementById("box4");
// boksi5 = document.getElementById("box5");

let x1 = 0;
let x2 = x1 + 150;
let x3 = x2 + 150;
let x4 = x3 + 150;
// let x5 = x4 + 150;

let speed = 1.5;



function setup() {
  width = karuselli.offsetWidth;
  height = karuselli.offsetHeight;
  createCanvas(width, height).parent("karuselli");

  print("Welcome to my website.")
  print("Sadly, this is currently under construction -- ")
  print("Feel free to send me an email leo kosola aalto fi")
}

function draw() {

  boksi1.style.left = x1;

  if (x1 < width) {  
    x1 = x1 - speed;
   }
 
   if (x1 < 0 - 200) {
     x1 = width - 1;
    }

  boksi2.style.left = x2;

  if (x2 < width) {  
    x2 = x2 - speed;
   }
 
   if (x2 < 0 - 350) {
     x2 = width - 150;
    }

  boksi3.style.left = x3;

  if (x3 < width) {  
    x3 = x3 - speed;
   }
 
   if (x3 < 0 - 500) {
     x3 = width - 300;
    }

  boksi4.style.left = x4;

  if (x4 < width) {  
    x4 = x4 - speed;
   }
 
   if (x4 < 0 - 650) {
     x4 = width - 450;
    }

  // boksi5.style.left = x5;

  // if (x5 < width) {  
  //   x5 = x5 - speed;
  //  }
 
  //  if (x5 < 0 - 800) {
  //    x5 = width - 600;
  //   }

}