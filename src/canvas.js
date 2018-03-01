import * as PIXI from 'pixi.js';

const canvas = () => {
  let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x343434
  });
  app.renderer.view.style.display = 'block';
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);

  const leftPixels = () => {
    setInterval(() => {
      let entry = Math.random() * (window.innerWidth - 1) + 1;
      let rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x21a85e);
      rectangle.drawRect(0, 0, 32, 32);
      rectangle.endFill();
      rectangle.x = 0;
      rectangle.y = entry;
      app.stage.addChild(rectangle);
      function setup() {
        app.ticker.add(delta => loop(delta));
      }
      function loop(delta) {
        rectangle.x += 5 + delta;
      }
      setup();
    }, 1000);
  };
  leftPixels();

  const rightPixels = () => {
    setInterval(() => {
      let entry = Math.random() * (window.innerHeight - 1) + 1;
      let rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x21a85e);
      rectangle.drawRect(0, 0, 32, 32);
      rectangle.endFill();
      rectangle.x = window.innerWidth;
      rectangle.y = entry;
      app.stage.addChild(rectangle);
      function setup() {
        app.ticker.add(delta => loop(delta));
      }
      function loop(delta) {
        rectangle.x -= 5 + delta;
      }
      setup();
    }, 3000);
  };
  rightPixels();

  const topPixels = () => {
    setInterval(() => {
      let entry = Math.random() * (window.innerWidth - 1) + 1;
      let rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x21a85e);
      rectangle.drawRect(0, 0, 32, 32);
      rectangle.endFill();
      rectangle.x = entry;
      rectangle.y = 0;
      app.stage.addChild(rectangle);
      function setup() {
        app.ticker.add(delta => loop(delta));
      }
      function loop(delta) {
        rectangle.y += 5 + delta;
      }
      setup();
    }, 3000);
  };
  topPixels();
  const bottomPixels = () => {
    setInterval(() => {
      let entry = Math.random() * (window.innerHeight - 1) + 1;
      let rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x21a85e);
      rectangle.drawRect(0, 0, 32, 32);
      rectangle.endFill();
      rectangle.x = entry;
      rectangle.y = window.innerWidth;
      app.stage.addChild(rectangle);
      function setup() {
        app.ticker.add(delta => loop(delta));
      }
      function loop(delta) {
        rectangle.y -= 5 + delta;
      }
      setup();
    }, 3000);
  };
  bottomPixels();
  document.body.appendChild(app.view);
};

export default canvas;
