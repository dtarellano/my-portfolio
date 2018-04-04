import { Container, Graphics } from 'pixi.js';
import { GlowFilter } from '@pixi/filter-glow';

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

  const leftPixels = () => {
    setInterval(() => {
      if (document.hasFocus()) {
        const randomColor = colors[Math.floor(Math.random() * 4)];
        let entry = Math.random() * (window.innerWidth - 50) + 1;
        let container = new PIXI.Container();
        let rectangle = new PIXI.Graphics();
        const size = 200;

        rectangle.beginFill(randomColor, 0.2);
        rectangle.drawRect(0, 0, 12, 12);
        rectangle.endFill();
        rectangle.x = 0;
        rectangle.y = entry;
        rectangle.filters = [new GlowFilter(12, 12, 2, randomColor, 1)];

        function setup() {
          app.ticker.add(delta => {
            if (rectangle.x >= 2000) {
              rectangle.clear();
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
          newRectangle.x = rectangle.x;
          newRectangle.y = rectangle.y;
          newRectangle.alpha = 0.8;
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
      }
    }, 3000);
  };
  leftPixels();

  const rightPixels = () => {
    setInterval(() => {
      if (document.hasFocus()) {
        const randomColor = colors[Math.floor(Math.random() * 4)];
        let entry = Math.random() * (window.innerHeight - 1) + 1;
        let rectangle = new PIXI.Graphics();
        let container = new PIXI.Container();
        const size = 200;

        rectangle.beginFill(randomColor, 0.2);
        rectangle.drawRect(0, 0, 12, 12);
        rectangle.endFill();
        rectangle.x = window.innerWidth;
        rectangle.y = entry;
        rectangle.filters = [new GlowFilter(12, 12, 2, randomColor, 1)];

        function setup() {
          app.ticker.add(delta => {
            if (rectangle.x < -2000) {
              rectangle.clear();
              container.removeChildren();
              return;
            }
            loop(delta);
          });
        }
        function loop(delta) {
          rectangle.x -= 3 + delta;

          let newRectangle = new PIXI.Graphics();

          newRectangle.beginFill(randomColor);
          newRectangle.drawRect(0, 0, 12, 12);
          newRectangle.endFill();
          newRectangle.x = rectangle.x;
          newRectangle.y = rectangle.y;
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
      }
    }, 3000);
  };
  rightPixels();

  const topPixels = () => {
    setInterval(() => {
      if (document.hasFocus()) {
        const randomColor = colors[Math.floor(Math.random() * 4)];
        let entry = Math.random() * (window.innerWidth - 1) + 1;
        let rectangle = new PIXI.Graphics();
        let container = new PIXI.Container();
        const size = 200;

        rectangle.beginFill(randomColor, 0.2);
        rectangle.drawRect(0, 0, 12, 12);
        rectangle.endFill();
        rectangle.x = entry;
        rectangle.y = 0;
        rectangle.filters = [new GlowFilter(12, 12, 2, randomColor, 1)];

        function setup() {
          app.ticker.add(delta => {
            if (rectangle.y > 2000) {
              rectangle.clear();
              container.removeChildren();
              return;
            }
            loop(delta);
          });
        }
        function loop(delta) {
          rectangle.y += 3 + delta;

          let newRectangle = new PIXI.Graphics();

          newRectangle.beginFill(randomColor);
          newRectangle.drawRect(0, 0, 12, 12);
          newRectangle.endFill();
          newRectangle.x = rectangle.x;
          newRectangle.y = rectangle.y;
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
      }
    }, 3000);
  };
  topPixels();

  const bottomPixels = () => {
    setInterval(() => {
      if (document.hasFocus()) {
        const randomColor = colors[Math.floor(Math.random() * 4)];
        let entry = Math.random() * (window.innerHeight - 1) + 1;
        let rectangle = new PIXI.Graphics();
        let container = new PIXI.Container();
        const size = 200;

        rectangle.beginFill(randomColor, 0.2);
        rectangle.drawRect(0, 0, 12, 12);
        rectangle.endFill();
        rectangle.x = entry;
        rectangle.y = window.innerWidth;
        rectangle.filters = [new GlowFilter(12, 12, 2, randomColor, 1)];

        function setup() {
          app.ticker.add(delta => {
            if (rectangle.y <= -2000) {
              rectangle.clear();
              container.removeChildren();
              return;
            }
            loop(delta);
          });
        }
        function loop(delta) {
          rectangle.y -= 3 + delta;
          let newRectangle = new PIXI.Graphics();

          newRectangle.beginFill(randomColor);
          newRectangle.drawRect(0, 0, 12, 12);
          newRectangle.endFill();
          newRectangle.x = rectangle.x;
          newRectangle.y = rectangle.y;
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
      }
    }, 3000);
  };
  bottomPixels();
  document.body.appendChild(app.view);
};

export default canvas;
