import CommunityBundle from "./CommunityBundle";
import Reward from "./Reward";

export default class CommunityRoom {
  constructor(
    public id: string,
    public label: string,
    public reward: Reward,
    public bundles: CommunityBundle[]
  ) {

  }
}