import * as PIXI from 'pixi.js';
import * as FILTERS from 'pixi-filters';

const canvas = () => {
  const colors = [0x21a85e, 0x5e21a8, 0xccff33, 0xa82128];

  let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x343434
  });

  app.renderer.view.style.display = 'block';
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);
  // app.renderer.preserveDrawingBuffer = true;
  // app.renderer.clearBeforeRender = false;
  // app.renderer.transparent = true;
  // console.log(app);

  const leftPixels = () => {
    setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * 4)];
      let entry = Math.random() * (window.innerWidth - 50) + 1;
      let container = new PIXI.Container();
      let rectangle = new PIXI.Graphics();
      const size = 200;
      // rectangle.blendMode = PIXI.BLEND_MODES.MULTIPLY;
      rectangle.beginFill(randomColor, 0.2);
      rectangle.drawCircle(0, 0, 10);
      rectangle.endFill();
      rectangle.x = 0;
      rectangle.y = entry;
      rectangle.filters = [new FILTERS.GlowFilter(10, 10, 2, randomColor, 0.5)];

      function setup() {
        app.ticker.add(delta => {
          if (rectangle.x >= 2000) {
            container.removeChildren();
            return;
          }

          loop(delta);
        });
      }

      function loop(delta) {
        rectangle.x += 3 + delta;
        let newRectangle = new PIXI.Graphics();
        newRectangle.beginFill(randomColor);
        newRectangle.drawRect(0, 0, 12, 12);
        newRectangle.endFill();
        newRectangle.x = rectangle.x - 9;
        newRectangle.y = rectangle.y - 6;
        container.addChild(newRectangle);
        if (container.children.length > size) {
          container.removeChildAt(0);
        }
        let len = container.children.length;
        while (len--) {
          container.children[len].alpha -= 0.01;
        }
      }
      setup();
      app.stage.addChild(container);
      app.stage.addChild(rectangle);
    }, 3000);
  };
  leftPixels();
  //
  // const rightPixels = () => {
  //   setInterval(() => {
  //     let entry = Math.random() * (window.innerHeight - 1) + 1;
  //     let rectangle = new PIXI.Graphics();
  //     rectangle.beginFill(0x21a85e);
  //     rectangle.drawRect(0, 0, 24, 24);
  //     rectangle.endFill();
  //     rectangle.x = window.innerWidth;
  //     rectangle.y = entry;
  //     app.stage.addChild(rectangle);
  //     function setup() {
  //       app.ticker.add(delta => {
  //         if (rectangle.x < -10) {
  //           rectangle.clear();
  //           return;
  //         }
  //         loop(delta);
  //       });
  //     }
  //     function loop(delta) {
  //       rectangle.x -= 3 + delta;
  //     }
  //     setup();
  //   }, 3000);
  // };
  // rightPixels();
  //
  // const topPixels = () => {
  //   setInterval(() => {
  //     let entry = Math.random() * (window.innerWidth - 1) + 1;
  //     let rectangle = new PIXI.Graphics();
  //     rectangle.beginFill(0x21a85e);
  //     rectangle.drawRect(0, 0, 24, 24);
  //     rectangle.endFill();
  //     rectangle.x = entry;
  //     rectangle.y = 0;
  //     app.stage.addChild(rectangle);
  //     function setup() {
  //       app.ticker.add(delta => {
  //         if (rectangle.y > 900) {
  //           rectangle.clear();
  //           return;
  //         }
  //         loop(delta);
  //       });
  //     }
  //     function loop(delta) {
  //       rectangle.y += 3 + delta;
  //     }
  //     setup();
  //   }, 3000);
  // };
  // topPixels();
  //
  // const bottomPixels = () => {
  //   setInterval(() => {
  //     let entry = Math.random() * (window.innerHeight - 1) + 1;
  //     let rectangle = new PIXI.Graphics();
  //     console.log(rectangle);
  //     rectangle.beginFill(0x21a85e);
  //     rectangle.drawRect(0, 0, 24, 24);
  //     rectangle.endFill();
  //     rectangle.x = entry;
  //     rectangle.y = window.innerWidth;
  //     app.stage.addChild(rectangle);
  //     function setup() {
  //       app.ticker.add(delta => {
  //         if (rectangle.y <= -100) {
  //           rectangle.clear();
  //           return;
  //         }
  //         loop(delta);
  //       });
  //     }
  //     function loop(delta) {
  //       rectangle.y -= 3 + delta;
  //     }
  //     setup();
  //   }, 3000);
  // };
  // bottomPixels();
  document.body.appendChild(app.view);
};

export default canvas;
