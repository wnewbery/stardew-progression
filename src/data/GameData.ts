import itemsData from "../../items.yaml";
import communityData from "../../community_bundles.yaml";

import CommunityBundle from "./CommunityBundle";
import CommunityRoom from "./CommunityRoom";
import GameItem from "./GameItem";

let items: GameItem[] = [];
let itemsMap: Map<string, GameItem>;
let rooms: CommunityRoom[];

function load() {
  items = (itemsData as any[]).map(x => new GameItem(x));
  itemsMap = new Map(items.map(x => [x.id, x]));

  rooms = (communityData as any[]).map((yroom: any) => {
    let bundles = yroom.bundles.map((ybundle: any) => new CommunityBundle(ybundle));
    return new CommunityRoom(yroom.id, yroom.label, bundles);
  });
}
export default {
  load,
  item: (id: string) => {
    var x = itemsMap.get(id.toLocaleLowerCase());
    if (x) return x;
    else throw new Error(`Unknown item ${id}.`);
  },
  bundle(id: string) {
    for (let room of rooms) {
      for (let bundle of room.bundles) {
        if (bundle.id === id) {
          return bundle;
        }
      }
    }
    throw new Error(`No community bundle with ID ${id}.`);
  },
  get bundles() {
    return rooms.flatMap(room => room.bundles);
  }
}
