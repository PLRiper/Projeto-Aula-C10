var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["50a48743-b6e5-4f8c-bb30-83e766c570cf","87a8d1cd-7b48-45c0-83c7-76facd7371c6","82391411-87df-49e9-9fb1-461da79cde57"],"propsByKey":{"50a48743-b6e5-4f8c-bb30-83e766c570cf":{"name":"computer","sourceUrl":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png","frameSize":{"x":252,"y":422},"frameCount":1,"looping":true,"frameDelay":2,"version":"siSqHEMKUKFQKPPHR8lGKlEhG26prtCC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":422},"rootRelativePath":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png"},"87a8d1cd-7b48-45c0-83c7-76facd7371c6":{"name":"jogador1","sourceUrl":"assets/api/v1/animation-library/gamelab/qlB4XRMjWhG4H3chPaxZHMsKo.lkG4KD/category_people/kid_15_walking.png","frameSize":{"x":217,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"qlB4XRMjWhG4H3chPaxZHMsKo.lkG4KD","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":217,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qlB4XRMjWhG4H3chPaxZHMsKo.lkG4KD/category_people/kid_15_walking.png"},"82391411-87df-49e9-9fb1-461da79cde57":{"name":"ball1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"}}};
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

var raqueteJogador = createSprite(360,200,10,100);
raqueteJogador.setAnimation("jogador1");
raqueteJogador.scale=0.4;

var raqueteComputador = createSprite(50,200,10,100);
raqueteComputador.setAnimation("computer");
raqueteComputador.scale=0.4;

var bola = createSprite(200,200,10,10);
bola.setAnimation("ball1");
bola.scale=0.1;

raqueteJogador.shapeColor="purple";
raqueteComputador.shapeColor="pink";
bola.shapeColor="purple";


function draw(){
  background("white");
  // operador lógico ||(ou)
  if (bola.isTouching (raqueteJogador) || bola.isTouching(raqueteComputador) ){
    playSound("assets/category_digital/boing_2.mp3");
  }
  
  
  drawSprites();
  drawnet();
  
  function drawnet() {
    for (var num=0; num<400; num= num+20) {
       line (200, num, 200, num+10);
    }
   
  }
  
  if(keyDown("up")){
    raqueteJogador.y=raqueteJogador.y-1;
  }
  if(keyDown("down")){
    raqueteJogador.y=raqueteJogador.y+1;
  }
  if(keyDown("space")){
    bola.velocityX=100;
    bola.velocityY=1;
  }
  
  raqueteComputador.y=bola.y;
  
  createEdgeSprites();
  
  bola.bounceOff(topEdge);
  bola.bounceOff(bottomEdge);
  bola.bounceOff(raqueteJogador);
  bola.bounceOff(raqueteComputador);
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
