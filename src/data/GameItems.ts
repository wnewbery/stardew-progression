import data from "../../items.yaml";
import GameItem from "./GameItem";

let items = (data as any[]).map(x => new GameItem(x));
let map = new Map(items.map(x => [x.id, x]));

export default {
  get: (id: string) => {
    var x = map.get(id.toLocaleLowerCase());
    if (x) return x;
    else throw new Error(`Unknown item ${id}.`);
  }
}
