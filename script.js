import { test } from "./Player.js";
class moveable {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
export const player = new moveable(0, 0);

function run() {
  test();
    setTimeout(run, 0);
}

run();