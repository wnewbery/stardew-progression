import itemsData from "../../items.yaml";
import communityData from "../../community_bundles.yaml";
import buildingsData from "../../data/buildings.yaml";

import CommunityBundle from "./CommunityBundle";
import CommunityRoom from "./CommunityRoom";
import GameItem from "./GameItem";
import Building from "./Building";
import normaliseId from "../NormaliseId";
import Villager from "./Villager";

const villagersData = import.meta.glob('../../data/villagers/*.yaml', { eager: true });

console.log(villagersData);

let items: GameItem[] = [];
let itemsMap: Map<string, GameItem>;
let rooms: CommunityRoom[];
let buildings: Building[];
let villagers: Villager[];
let villagersMap: Map<string, Villager>;

function load() {
  items = (itemsData as any[]).map(x => new GameItem(x));
  itemsMap = new Map(items.map(x => [x.id, x]));

  rooms = (communityData as any[]).map((yroom: any) => {
    let bundles = yroom.bundles.map((ybundle: any) => new CommunityBundle(ybundle));
    return new CommunityRoom(yroom.id, yroom.label, bundles);
  });

  buildings = (buildingsData as any[]).map(x => new Building(x));

  villagers = Object.keys(villagersData).map(filename => {
    let data = villagersData[filename].default as any;
    return new Villager(data);
  });
  villagersMap = new Map(villagers.map(x => [x.id, x]));
}
export default {
  load,
  item: (id: string) => {
    var x = itemsMap.get(normaliseId(id));
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
  },
  building(id: string) {
    var x = buildings.find(building => building.id === id);
    if (x) return x;
    else throw new Error(`Unknown building ${id}.`);
  },
  get buildings() {
    return buildings;
  },

  villager(id: string) {
    var x = villagersMap.get(normaliseId(id));
    if (x) return x;
    else throw new Error(`Unknown villager ${id}.`);
  },
  get villagers() {
    return villagers;
  },
}
