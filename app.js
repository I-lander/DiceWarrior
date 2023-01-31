import { loop } from "./Core/loop.js";
import { loadAssets } from "./Core/loadAssets.js";
import { createMap } from "./Core/mapCreation.js";
import { TileMap } from "./Core/tileMap.js";
import { screenInit } from "./Core/screenInit.js";

export const mainCanvas = document.getElementById("mainCanvas");
export const ctx = mainCanvas.getContext("2d");
export let isPause = false;
export let tileMap;

async function initWorld() {
  await loadAssets(mainCanvas);
  createMap();
  tileMap = new TileMap();
  screenInit(mainCanvas);
  loop();
}
initWorld();
