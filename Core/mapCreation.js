export let map = [];

export const mapSizeX = 6;
export const mapSizeY = 6;

export function createMap() {
  map = [];
  const mapCenterX = Math.floor(mapSizeX / 2);
  const mapCenterY = Math.floor(mapSizeY / 2);
  for (let i = 0; i < mapSizeY; i++) {
    map.push([]);
  }
  for (let row = 0; row < mapSizeY; row++) {
    for (let column = 0; column < mapSizeX; column++) {
      map[row].push("0");
    }
  }
}
