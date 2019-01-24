// a script written for certain animations

var curr = 1;
var anim, deg;

function moveForHome() {
  if (curr == 3) {
    anim = 'spinForHome 2s linear';
    deg = 'rotate(360deg)';
  }
      
  else if (curr == 2) {
    anim = 'spinToHome 2s linear';
    deg = 'rotate(0deg)';
  }
  
  document.getElementById('info-reel').style.animation = anim;
  document.getElementById('info-reel').style.transform = deg;
  document.getElementById('des').innerHTML = 'Backslash is a tech event organized by the IT department of Wilson College,\
   Mumbai. It has been initiated in order to appreciate and learn more about various forms of technology.';
  curr = 1;
}

function moveForBlog()  { 
  if (curr == 1) {
    anim = 'spinForBlog 2s linear';
  }

  else if (curr == 3) {
    anim = 'spinToBlog 2s linear';
  }

  document.getElementById('info-reel').style.animation = anim;
  document.getElementById('info-reel').style.transform = 'rotate(120deg)';
  document.getElementById('des').innerHTML = 'Read about the latest updates regarding the event <a href="blog/"> here.</a>';
  curr = 2;
}

function moveForEvents() {
  if (curr == 2) {
    anim = 'spinForEvents 2s linear';    
  }

  else if (curr == 1) {
    anim = 'spinToEvents 4s linear';   
  }

  document.getElementById('info-reel').style.animation = anim;
  document.getElementById('info-reel').style.transform = 'rotate(240deg)';
  document.getElementById('des').innerHTML = 'Learn more about different events taking place <a href="events/"> here.</a>';       
  curr = 3;
}