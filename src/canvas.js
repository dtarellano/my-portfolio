import * as PIXI from 'pixi.js';

const canvas = () => {
  let app = new PIXI.Application({
    width: 1280,
    height: 800,
    backgroundColor: 0x343434
  });
  app.renderer.view.style.display = 'block';
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);
  let rectangle = new PIXI.Graphics();
  rectangle.beginFill(0x66ccff);
  rectangle.drawRect(0, 0, 64, 64);
  rectangle.endFill();
  rectangle.x = 170;
  rectangle.y = 0;
  app.stage.addChild(rectangle);

  function setup() {
    //Start the game loop by adding the `gameLoop` function to
    //Pixi's `ticker` and providing it with a `delta` argument.
    app.ticker.add(delta => gameLoop(delta));
  }

  function gameLoop(delta) {
    //Move the cat 1 pixel
    rectangle.x += 5;
  }
  setup();
  document.body.appendChild(app.view);
};

export default canvas;
