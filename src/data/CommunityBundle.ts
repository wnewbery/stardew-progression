import CommunityItem from "./CommunityItem";
import Reward from "./Reward";

export default class CommunityBundle {
  constructor(
    public id: string,
    public label: string,
    public reward: Reward,
    public items: CommunityItem[]
  ) {

  }
}