import data from "../../community_checklist.yaml";
import CommunityBundle from "./CommunityBundle";
import CommunityItem from "./CommunityItem";
import CommunityRoom from "./CommunityRoom";
import Reward from "./Reward";

let rooms = data.map((yroom: any) => {
  let bundles = yroom.bundles.map((ybundle: any) => {
    let reward = new Reward(ybundle.reward);
    let items  = ybundle.items.map((yitem: any) =>
      new CommunityItem(ybundle.id, yitem));
    return new CommunityBundle(ybundle.id, ybundle.label, reward, items);
  });
  return new CommunityRoom(yroom.id, yroom.label, bundles);
});

class CommunityData {
  public get bundles() {
    return this.rooms.flatMap(room => room.bundles);
  }

  public constructor(
    public rooms: CommunityRoom[]
  ) {

  }

  public getBundle(id: string) {
    for (let room of this.rooms) {
      for (let bundle of room.bundles) {
        if (bundle.id === id) {
          return bundle;
        }
      }
    }
    throw new Error(`No community bundle with ID ${id}.`);
  }
}
export default new CommunityData(rooms);
