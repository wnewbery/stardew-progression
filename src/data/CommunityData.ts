import data from "../../community_checklist.yaml";
import CommunityBundle from "./CommunityBundle";
import CommunityItem from "./CommunityItem";
import CommunityRoom from "./CommunityRoom";
import Reward from "./Reward";

let rooms = data.map((yroom: any) => {
  let bundles = yroom.bundles.map((ybundle: any) => {
    let items  = ybundle.items.map((yitem: any) =>
      new CommunityItem(ybundle.id, yitem.id, yitem.label, yitem.description));
    let reward = new Reward(ybundle.reward.label, ybundle.reward.description);
    return new CommunityBundle(ybundle.id, ybundle.label, reward, items);
  });
  let reward = new Reward(yroom.reward.label, yroom.reward.description);
  return new CommunityRoom(yroom.id, yroom.label, reward, bundles);
});

class CommunityData {
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
