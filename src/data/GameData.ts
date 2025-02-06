import itemsData from "../../data/items.yaml";
import communityData from "../../data/community_bundles.yaml";
import buildingsData from "../../data/buildings.yaml";

import CommunityBundle from "./CommunityBundle";
import CommunityRoom from "./CommunityRoom";
import GameItem from "./GameItem";
import Building from "./Building";
import normaliseId from "../NormaliseId";
import Villager from "./Villager";
import { BuildingData, BundleData, CommunityRoomData, ItemData, VillagerData, YamlImportType } from "./YamlTypes";

const villagersData = import.meta.glob<YamlImportType>('../../data/villagers/*.yaml', { eager: true });

let items: GameItem[] = [];
let itemsMap: Map<string, GameItem>;
let rooms: CommunityRoom[];
let buildings: Building[];
let villagers: Villager[];
let villagersMap: Map<string, Villager>;

function load() {
  items = (itemsData as ItemData[]).map(x => new GameItem(x));
  itemsMap = new Map(items.map(x => [x.id, x]));

  rooms = (communityData as CommunityRoomData[]).map(yroom => {
    const bundles = yroom.bundles.map((ybundle: BundleData) => new CommunityBundle(ybundle));
    return new CommunityRoom(yroom.id, yroom.label, bundles);
  });

  buildings = (buildingsData as BuildingData[]).map(x => new Building(x));

  villagers = Object.keys(villagersData).map(filename => {
    const data = villagersData[filename].default as VillagerData;
    return new Villager(data);
  });
  villagersMap = new Map(villagers.map(x => [x.id, x]));
}
export default {
  load,
  item: (id: string) => {
    const x = itemsMap.get(normaliseId(id));
    if (x) return x;
    else throw new Error(`Unknown item ${id}.`);
  },
  bundle(id: string) {
    for (const room of rooms) {
      for (const bundle of room.bundles) {
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
    const x = buildings.find(building => building.id === id);
    if (x) return x;
    else throw new Error(`Unknown building ${id}.`);
  },
  get buildings() {
    return buildings;
  },

  villager(id: string) {
    const x = villagersMap.get(normaliseId(id));
    if (x) return x;
    else throw new Error(`Unknown villager ${id}.`);
  },
  get villagers() {
    return villagers;
  },
}
