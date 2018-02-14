import * as PIXI from 'pixi.js';

const canvas = () => {
  let app = new PIXI.Application({ width: 1280, height: 800 });
  document.body.appendChild(app.view);
};

export default canvas;
