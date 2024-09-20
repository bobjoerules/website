let myCanvas
let scale = 90
let rotates = 0
function setup() {
  backCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas = createCanvas(windowWidth, windowHeight);
  textSize(32);
  console.log(windowWidth)
  myCanvas.canvas.style.scale = '90%';
}

function draw() {
  background("#181818");
  let lines = 13;
  repeatFunctionNTimes(lines);
  noStroke()
  fill(0,40,104)
  rect(0, 0, windowWidth * (11/24), windowHeight / 2 + 30)
  stars();
}

function repeatFunctionNTimes(n) {
  let spacing = windowHeight / n;
  for (let i = 0; i < n; i++) {
    strokeCap(SQUARE);
    strokeWeight(spacing);
    if (i % 2 === 0){
      stroke('crimson');
    } else {
    stroke('white');
    }
    let y = i * spacing + 30;
    line(0, y, windowWidth, y);
  }
}
function keyPressed() {
  if (key === 'e') {
    myCanvas.canvas.style.filter = 'grayscale()';
  }
  if (key === 'w') {
    myCanvas.canvas.style.filter = 'grayscale(0)';
  }
  if (key === 'i') {
    scale += 2
  }
  if (key === 'o') {
    scale -= 2
  }
  if (key === 'q') {
    myCanvas.canvas.style.filter = 'grayscale() sepia() hue-rotate(90deg) saturate(150%)';
  }
  if (key === 'b') {
    myCanvas.canvas.style.filter = 'blur(10px)';
  }
  if (key === 'n') {
    myCanvas.canvas.style.filter = 'blur(0px)';
  }
  if (key === 'k') {
    rotates += 2
  }
  if (key === 'l') {
    rotates -= 2
  }
  myCanvas.canvas.style.rotate = rotates + 'deg';
  myCanvas.canvas.style.scale = scale + '%';
}
function stars() {
  for (let o = 0; o < 5; o++) {
    for (let i = 0; i < 6; i++) {
      let negat = 42.5 - windowWidth/110
      let will = (windowWidth / 1400)
      let hill = (windowHeight / 750)
      let size = 1.5
      strokeCap(SQUARE);
      stroke('white');
      strokeWeight(1);
      fill('white');
      beginShape();
      vertex(50 * size + i * 110 * will - negat , 35 * size + o * 80 * hill - 5 - negat); 
      vertex(55 * size + i * 110 * will - negat , 45 * size + o * 80 * hill - 5 - negat);
      vertex(65 * size + i * 110 * will - negat , 45 * size + o * 80 * hill - 5 - negat);
      vertex(57.5 * size + i * 110 * will - negat , 52.5 * size + o * 80 * hill - 5 - negat);
      vertex(60 * size + i * 110 * will - negat , 62.5 * size + o * 80 * hill - 5 - negat);
      vertex(50 * size + i * 110 * will - negat , 57.5 * size + o * 80 * hill - 5 - negat); 
      vertex(40 * size + i * 110 * will - negat , 62.5 * size + o * 80 * hill - 5 - negat); 
      vertex(42.5 * size + i * 110 * will - negat , 52.5 * size + o * 80 * hill - 5 - negat); 
      vertex(35 * size + i * 110 * will - negat , 45 * size + o * 80 * hill - 5 - negat); 
      vertex(45 * size + i * 110 * will - negat , 45 * size + o * 80 * hill - 5 - negat); 
      endShape(CLOSE);
    }
  } 
  for (let o = 0; o < 4; o++) {
    for (let i = 0; i < 5; i++) {
      let negat = 42.5 - windowWidth/110
      let test = windowWidth * (11/24) / 4
      let will = (windowWidth / 1400)
      let hill = (windowHeight / 750)
      let size = 1.5
      strokeCap(SQUARE);
      stroke('white');
      strokeWeight(1);
      fill('white');
      beginShape();
      vertex(50 * size + i * 110 * will + 55 * will - negat , 35 * size + o * 80 * hill + 35 * hill - negat); 
      vertex(55 * size + i * 110 * will + 55 * will - negat , 45 * size + o * 80 * hill + 35 * hill - negat);
      vertex(65 * size + i * 110 * will + 55 * will - negat , 45 * size + o * 80 * hill + 35 * hill - negat);
      vertex(57.5 * size + i * 110 * will + 55 * will - negat , 52.5 * size + o * 80 * hill + 35 * hill - negat);
      vertex(60 * size + i * 110 * will + 55 * will - negat , 62.5 * size + o * 80 * hill + 35 * hill - negat);
      vertex(50 * size + i * 110 * will + 55 * will - negat , 57.5 * size + o * 80 * hill + 35 * hill - negat); 
      vertex(40 * size + i * 110 * will + 55 * will - negat , 62.5 * size + o * 80 * hill + 35 * hill - negat); 
      vertex(42.5 * size + i * 110 * will + 55 * will - negat , 52.5 * size + o * 80 * hill + 35 * hill - negat); 
      vertex(35 * size + i * 110 * will + 55 * will - negat , 45 * size + o * 80 * hill + 35 * hill - negat); 
      vertex(45 * size + i * 110 * will + 55 * will - negat , 45 * size + o * 80 * hill + 35 * hill - negat); 
      endShape(CLOSE);
    }
  } 
}