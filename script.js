//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page1btn2 = document.querySelector("#page1btn2");
const page2btn2 = document.querySelector("#page2btn2");
const page3btn2 = document.querySelector("#page3btn2");
var allpages = document.querySelectorAll(".page");
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() {
    menuItemsList.classList.toggle("menuHide")
    /*open and close menu*/
    /*if(menuItemsList.style.display=="block")
    menuItemsList.style.display="none";
    else menuItemsList.style.display="block";*/
}
//select all subtopic pages
console.log(allpages);
hideall();
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    //show the page
    onepage.style.display = "block";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page1btn2.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page2btn2.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page3btn2.addEventListener("click", function () {
    show(3);
});
show(1);
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var galleryItems = document.getElementsByClassName("gallery-item");

for (var i = 0; i < galleryItems.length; i++) {
  galleryItems[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.getElementsByTagName('img')[0].src;
    captionText.innerHTML = this.getElementsByClassName("gallery-caption")[0].innerHTML;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function createStars() {
    const container = document.body;
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 1}s`;
      container.appendChild(star);
    }
  }

  createStars();
  document.addEventListener('DOMContentLoaded', (event) => {
    const blackHole = document.getElementById('black-hole');
    const accretionDisk = document.getElementById('accretion-disk');
    const particleSystem = document.getElementById('particle-system');
    let mass = 1; // in solar masses
    let zoom = 1;
    let accretionDiskVisible = false;
  
    function updateBlackHole() {
      const size = 100 * mass * zoom;
      blackHole.style.width = `${size}px`;
      blackHole.style.height = `${size}px`;
      
      accretionDisk.style.width = `${size * 2}px`;
      accretionDisk.style.height = `${size * 2}px`;
      
      document.getElementById('mass-info').textContent = `Current Mass: ${mass.toFixed(2)} Solar Masses`;
      document.getElementById('radius-info').textContent = `Event Horizon Radius: ${(2.95 * mass).toFixed(2)} km`;
      document.getElementById('temp-info').textContent = `Hawking Temperature: ${(61.5 / mass).toFixed(2)} nK`;
    }
  
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 200 + 100;
      particle.style.left = `${Math.cos(angle) * radius + 250}px`;
      particle.style.top = `${Math.sin(angle) * radius + 250}px`;
      particleSystem.appendChild(particle);
  
      animateParticle(particle, angle, radius);
    }
  
    function animateParticle(particle, angle, radius) {
      let currentAngle = angle;
      let currentRadius = radius;
      
      function update() {
        currentAngle += 0.02 / currentRadius;
        currentRadius -= 0.5;
        
        if (currentRadius < 50 * mass * zoom) {
          particleSystem.removeChild(particle);
          return;
        }
        
        particle.style.left = `${Math.cos(currentAngle) * currentRadius + 250}px`;
        particle.style.top = `${Math.sin(currentAngle) * currentRadius + 250}px`;
        
        requestAnimationFrame(update);
      }
      
      update();
    }
  
    setInterval(createParticle, 100);
  
    document.getElementById('zoom-in').addEventListener('click', () => {
      zoom *= 1.2;
      updateBlackHole();
    });
  
    document.getElementById('zoom-out').addEventListener('click', () => {
      zoom /= 1.2;
      updateBlackHole();
    });
  
    document.getElementById('increase-mass').addEventListener('click', () => {
      mass *= 1.5;
      updateBlackHole();
    });
  
    document.getElementById('decrease-mass').addEventListener('click', () => {
      mass /= 1.5;
      updateBlackHole();
    });
  
    document.getElementById('toggle-accretion').addEventListener('click', () => {
      accretionDiskVisible = !accretionDiskVisible;
      accretionDisk.style.opacity = accretionDiskVisible ? '1' : '0';
    });
  
    updateBlackHole();
  });