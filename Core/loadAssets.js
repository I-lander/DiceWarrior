const SOUNDS = [];

const IMAGES = [];

export const ASSETS = [];

export let ASSETS_COUNT = SOUNDS.length + IMAGES.length;

function loadingCallback(canvasScreen) {
  if (--ASSETS_COUNT === 0) {
  }
}

function loadAudio(url) {
  return new Promise((resolve) => {
    const audio = new Audio(url);
    audio.addEventListener("canplaythrough", () => resolve(audio), false);
  });
}

function loadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = url;
    image.addEventListener("load", () => resolve(image), false);
  });
}

export async function loadAssets() {
  for (let i = 0; i < SOUNDS.length; i++) {
    let sound = SOUNDS[i];
    const ext = sound === "mainLoop" ? "mp3" : "wav";
    ASSETS[sound] = loadAudio(`./src/sounds/${sound}.${ext}`);
  }

  for (let i = 0; i < IMAGES.length; i++) {
    let image = IMAGES[i];
    ASSETS[image] = loadImage(`./src/images/${image}.png`);
  }

  for (const [name, asset] of Object.entries(ASSETS)) {
    ASSETS[name] = await asset;
  }
}
