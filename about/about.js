let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");



let mouse = {
  x: undefined,
  y: undefined
};

let numberOfCircle = 500;
let maxRadius = 40;
// let minRadius = 3;

let colorArray = ["#F8B195", "#F67280", "#C06C84", "#6C5B7B", "#355C7D"];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x - canvas.width;
  mouse.y = event.y;
  this.console.log(mouse);
});





window.addEventListener("resize", function () {
  canvas.width = this.window.innerWidth / 2;
  canvas.height = this.window.innerHeight;
  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.x + radius > innerWidth / 2 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //inner activity
    if (
      mouse.x - this.x < 30 &&
      mouse.x - this.x > -30 &&
      mouse.y - this.y < 30 &&
      mouse.y - this.y > -30
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius >= this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

let circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < numberOfCircle; i++) {
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}
console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  circleArray.forEach(element => {
    element.draw();
    element.update();
  });
}

init();
animate();

// Go Back funtion
function goBack() {
  window.history.back()
}