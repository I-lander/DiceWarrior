import { map, mapSizeX, mapSizeY } from "./mapCreation.js";

export class TileMap {
  constructor() {
    this.map = map;
  }
  draw(ctx) {
    ctx.save();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeRect( 100,  100, 100, 100);
    ctx.restore();
    for (let row = 0; row < mapSizeY; row++) {
      for (let column = 0; column < mapSizeX; column++) {
        let tile = this.map[row][column];

        if (tile === "0") {
          ctx.save();
          ctx.strokeStyle = "white";
          ctx.lineWidth = 1;
          ctx.strokeRect(column * 100, row * 100, 100, 100);
          ctx.restore();
        }
      }
    }
  }
}
