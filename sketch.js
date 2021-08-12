var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var select_sprites;
var red_leaf, red_leafImg
var orange_leaf, orange_leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  red_leafImg = loadImage("redImage.png")
  orange_leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  select_sprites = Math.round(random(1, 3));

if (frameCount % 80 == 0) {
  if (select_sprites == 1){
    createApples();
  }
  else if (select_sprites == 2){
    createLeaves();
  }
  else if(select_sprites == 3){
    createRedLeaves();
  }
  else {
    createOrangeLeaves();
  }
  }

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 3
  apple.lifetime = 300
  apple.scale = 0.05
    } 

    function createLeaves(){
      leaf = createSprite(random(50, 350), 40, 10, 10);
      leaf.addImage(leafImg);
      leaf.velocityY = 3;
      leaf.lifetime = 300
      leaf.scale = 0.05
        } 

    function createRedLeaves() {
      red_leaf = createSprite(random(50, 350), 40, 10, 10);
      red_leaf.addImage(red_leafImg);
      red_leaf.velocityY = 3;
      red_leaf.lifetime = 300
      red_leaf.scale = 0.05
        }


        function createOrangeLeaves() {
          orange_leaf = createSprite(random(50, 350), 40, 10, 10);
          orange_leaf.addImage(orange_leafImg);
          orange_leaf.velocityY = 3;
          orange_leaf.lifetime = 300
          orange_leaf.scale = 0.05
        }