function setup() {
    createCanvas(650, 500);
    background(220);
  }
  
  function draw() {
   
    stroke("purple");
    fill("purple");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 25);
    }
  }
  