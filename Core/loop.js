import { isPause, tileMap } from "../app.js";
import { ctx } from "../app.js";

let lastFrameTimeMs = 0;
let lastFrameBeforePause = 0;
let maxFPS = 90;
let deltaFactor = 10;
let delta;
let pauseDelta;

export function loop(timestamp) {
  if (isPause) {
    pauseDelta = timestamp - lastFrameBeforePause;
    lastFrameTimeMs = timestamp;
    requestAnimationFrame(loop);
    return;
  }

  if (timestamp < lastFrameTimeMs + 1000 / maxFPS) {
    requestAnimationFrame(loop);
    return;
  }

  delta = (timestamp - lastFrameTimeMs) / deltaFactor;
  lastFrameTimeMs = timestamp;
  lastFrameBeforePause = timestamp;
  ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  // Game loop start here
  tileMap.draw(ctx);

  pauseDelta = 0;
  requestAnimationFrame(loop);
}
