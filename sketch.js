function setup() {
  createCanvas(800,400);

  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon)
 imageMode(CENTER)
 image(polygon_image,polygon,polygon.x,polygon.y,40,40)
  
  ground = new Ground(600,height,800,20);
  slingshot = new SlingShot(this.polygon,{x=200,y=100});

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(360,235,30,40);
  box7 = new Box(390,235,30,40);
  box8 = new Box(420,235,30,40);
  box9 = new Box(390,235,30,40);
  




}

function draw() {
  background(255,255,255);  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ground.display();
  slingshot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}