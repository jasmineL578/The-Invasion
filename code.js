var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b7cda55d-6a6c-49fb-bb48-4acbfd9be8bc","a65a27c2-7ac6-4643-bb1f-d64a40fc92b4","6c6fac26-71df-4a6a-818a-da9f40585563","93040073-3374-4d1e-b6a3-2d1c2c4efe83","0b2ea0cb-ec8f-49e1-b373-529f13e5969f","1723bd52-a535-41c3-b632-d0720486d126","de60d270-21a5-48fe-8289-7fe0f36e2ee5"],"propsByKey":{"b7cda55d-6a6c-49fb-bb48-4acbfd9be8bc":{"name":"Rocket","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"gHh.VjoKNDOGPMI1N3HuR5QHf7LiKJmY","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b7cda55d-6a6c-49fb-bb48-4acbfd9be8bc.png"},"a65a27c2-7ac6-4643-bb1f-d64a40fc92b4":{"name":"ufo_1","sourceUrl":null,"frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"ckfMfmp4yjPsuf4GGj4Vvp4WWLgnRuAJ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/a65a27c2-7ac6-4643-bb1f-d64a40fc92b4.png"},"6c6fac26-71df-4a6a-818a-da9f40585563":{"name":"ufo_1_copy_1","sourceUrl":null,"frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"SUO8rLnproPZ6FY3MlxxasbFy9wtH4fl","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/6c6fac26-71df-4a6a-818a-da9f40585563.png"},"93040073-3374-4d1e-b6a3-2d1c2c4efe83":{"name":"Earth","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"sl18TM5GD_wcqZT..p6BgLFTMedbMhdb","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/93040073-3374-4d1e-b6a3-2d1c2c4efe83.png"},"0b2ea0cb-ec8f-49e1-b373-529f13e5969f":{"name":"asteroid","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"tvmhHjCynGxR0Z4dnz0_DxTXPyoiSK4W","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0b2ea0cb-ec8f-49e1-b373-529f13e5969f.png"},"1723bd52-a535-41c3-b632-d0720486d126":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"28PW3cBi_DaCpWx0yX4tbE0pM4aSYkmi","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/1723bd52-a535-41c3-b632-d0720486d126.png"},"de60d270-21a5-48fe-8289-7fe0f36e2ee5":{"name":"ammo","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"f6L76vfsVpmesJ.8trUYoEKuVKPxoBNU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/de60d270-21a5-48fe-8289-7fe0f36e2ee5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//game state
var PLAY=1;
//var END=0;
var gameState=PLAY;

//scene
var scene=createSprite(0,0,400,400);
scene.setAnimation("space");
scene.scale=2;

//earth
var earth=createSprite(200,600,20,20);
earth.setAnimation("Earth");
earth.scale=1.5;

//rocket 
var rocket=createSprite(200,320,20,20);
rocket.setAnimation("Rocket");
rocket.scale=2.5;


//create groups
var rocketGroup=createGroup ();
var ufoGroup=createGroup();
var giantUFOGroup=createGroup();
var asteroidGroup=createGroup();
var ammoGroup=createGroup();

var score=0;

function draw() {
  
  background("black");

  rocket.x=World.mouseX;


if (keyDown("space")){
  createAmmo();
}

//if (gameState===PLAY){
  
//}
//else if (gameState===END){
  
//}

if (ammoGroup.isTouching(ufoGroup)){
  ufoGroup.destroyEach();
  ammoGroup.destroyEach();
  score=score+5;
}
if (ammoGroup.isTouching(giantUFOGroup)){
  giantUFOGroup.destroyEach();
  ammoGroup.destroyEach();
  score=score+10;
}
if (ammoGroup.isTouching(asteroidGroup)){
  asteroidGroup.destroyEach();
  ammoGroup.destroyEach();
  score=score+1;
}





//random number
var enemy=randomNumber(1,3);


if (World.frameCount%60===0){
  if (enemy===1) {
    ufo();
  }
  else if (enemy===2){
    giantUFO();
  }
  else if (enemy===3){
    asteroid();
  }
  
}

  drawSprites();
  
  fill("white");
text("Score "+score,270,30);
  
}

function createAmmo(){
  var ammo=createSprite(200,300,5,20);
  ammo.x=360;
  ammo.velocityY=-4;
  ammo.lifetime=100;
   
  ammo.setAnimation("ammo");
  ammo.x = rocket.x;
  ammoGroup.add(ammo);
  
}

function ufo(){

if (World.frameCount%60===0)
  
  //spawn ufo
  var ufo=createSprite(200,100,20,20);
  ufo.setAnimation("ufo_1");
  ufo.scale=0.2;
  ufo.veloctiyY=4;
  ufo.lifetime=100;
   
  //random place
  ufo.y=randomNumber(300,100);
  ufoGroup.add(ufo);
  
  if (ammoGroup.isTouching(ufoGroup))
  ufoGroup.destroyEach();
  ammoGroup.destroyEach();
  score=score+5;
}





function giantUFO(){
  
if (World.frameCount%60===0)
  
  //spawn Giant ufo
 var giantUFO=createSprite(Math.round(random(100,300)),-50,20,20);
  giantUFO.setAnimation("ufo_1_copy_1");
  giantUFO.scale=0.3;
  giantUFO.veloctiyY=4;
  
  
  //random place
  giantUFO.y=randomNumber(200,100);
  giantUFOGroup.add(giantUFO);
  
  if (ammoGroup.isTouching(giantUFOGroup))
  giantUFOGroup.destroyEach();
  ammoGroup.destroyEach();
  score=score+10;
}



function asteroid(){
  if (World.frameCount%60===0)
  
  //spawn Giant ufo
 var asteroid=createSprite(0,180,20,20);
  asteroid.setAnimation("asteroid");
  asteroid.scale=0.5;
  asteroid.veloctiyY=4;
  asteroid.lifetime=50;
  
  //random place
  asteroid.y=randomNumber(400,100);
  asteroidGroup.add(asteroid);
  
  if (ammoGroup.isTouching(asteroidGroup))
  asteroidGroup.destroyEach();
  ammoGroup.destroyEach();
  score=score+1;
 
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
