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

  setInterval(() => {
    let rectangle = new PIXI.Graphics();
    rectangle.beginFill(0x21a85e);
    rectangle.drawRect(0, 0, 64, 64);
    rectangle.endFill();
    rectangle.x = 170;
    rectangle.y = 0;
    app.stage.addChild(rectangle);
    function setup() {
      app.ticker.add(delta => loop(delta));
    }
    function loop(delta) {
      rectangle.x += 5 + delta;
    }
    setup();
  }, 1000);
  document.body.appendChild(app.view);
};

export default canvas;
