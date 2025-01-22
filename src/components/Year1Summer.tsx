import { PropsWithChildren, ReactNode } from "react";
import ChecklistItem from "./ChecklistItem";
import CommunityBundle from "./CommunityBundle";
import ItemStackText from "./ItemStackText";
import GuideSectionContainer from "./GuideSectionContainer";

interface DayProps {
  day: number;
  children: ReactNode;
}
function Day({ day, children }: DayProps) {
  return (
    <GuideSectionContainer className="space-y-4" href={`/year1-summer/${day}`}>
      <summary className="text-lg font-bold">Day {day}</summary>
      {children}
    </GuideSectionContainer>
  );
}

interface GuideSectionProps {
  title: string;
}
function GuideSection({ title, children }: PropsWithChildren<GuideSectionProps>) {
  let id = '/year1-summer/' + title.toLowerCase().replace(/ /g, '_');
  return (
    <GuideSectionContainer className="space-y-4" href={id}>
      <summary className="text-lg font-bold">{title}</summary>
      {children}
    </GuideSectionContainer>
  );
}

export default () => {
  return (
    <div className="space-y-8 columns-xl min-h-full">
      <h2 className="text-2xl font-bold">First Year Summer</h2>
      <GuideSection title="Spring Catchup">
        <p>
          You should continue to work on the following if you missed any.
        </p>
        <ChecklistItem id="robin_axe">Find Robin's lost axe.</ChecklistItem>
        <ChecklistItem id="beach_bridge_repair">Repair the bridge to the south east beach.</ChecklistItem>
        <ChecklistItem id="fiberglass_fishing_pole">Get the Fiberglass Fishing Pole.</ChecklistItem>
        <ChecklistItem id="spring_friend_caroline">Befriend Caroline to 2 hearts to access her Tea Leaves.</ChecklistItem>
        <ChecklistItem id="spring_friend_marnie">Befriend Marnie to 2 hearts for a quest later.</ChecklistItem>
        <ChecklistItem id="backpack_upgrade">Get the upgraded backpack.</ChecklistItem>
        <ChecklistItem id="spring_crab_pots">Place the free pots from the Crab Pot Bundle.</ChecklistItem>
        <ChecklistItem id="axe_copper">Get the Copper Axe.</ChecklistItem>
        <ChecklistItem id="axe_steel">Get the Steel Axe for hardwood.</ChecklistItem>
        <ChecklistItem id="pickaxe_copper">Get the Copper Pickaxe.</ChecklistItem>
        <ChecklistItem id="pickaxe_steel">Get the Steel Pickaxe.</ChecklistItem>
        <ChecklistItem id="spring_silo">Build a Silo to store Hay.</ChecklistItem>
        <ChecklistItem id="spring26_stable">
          Keep saving up for a stable to get a horse.
          It needs 10,000g,{' '}
          <ItemStackText item="hardwood" count={100} /> and{' '}
          <ItemStackText item="iron_bar" count={5} />.
          But probably don't buy it until you have brought the Summer crop seeds.
        </ChecklistItem>
        <CommunityBundle bundle="spring_crops_bundle" />
        <CommunityBundle bundle="spring_foraging_bundle" />
        <CommunityBundle bundle="crab_pot_bundle" />
      </GuideSection>
      <GuideSection title="Community Centre Objectives">
        <ChecklistItem id="quality_crops_bundle-melon">
          Grow and harvest 5 <ItemStackText item="melon" quality="gold" label="Melons" />.
        </ChecklistItem>
        <ChecklistItem id="fall_crops_bundle-corn">
          You can grow a <ItemStackText item="corn" /> in the summer, although you can not
          grow the rest of the Fall Crops Bundle until fall.
        </ChecklistItem>
        <ChecklistItem id="river_fish_bundle-shad">
          Catch 1 <ItemStackText item="shad" /> from the river when raining, possible in the fall as well.
        </ChecklistItem>
        <ChecklistItem id="chefs_bundle-poppy">
          Grow 1 <ItemStackText item="poppy" /> for the Chef's Bundle.
        </ChecklistItem>
        <ChecklistItem id="dye_bundle-sunflower">
          Grow 1 <ItemStackText item="sunflower" /> for the Dye Bundle.
        </ChecklistItem>
        <p>You should be able to complete the following bundles during summer.</p>
        <CommunityBundle bundle="summer_foraging_bundle" />
        <CommunityBundle bundle="construction_bundle" />
        <CommunityBundle bundle="exotic_foraging_bundle" />
        <CommunityBundle bundle="summer_crops_bundle" />
        <CommunityBundle bundle="lake_fish_bundle" />
        <CommunityBundle bundle="ocean_fish_bundle" />
        <CommunityBundle bundle="specialty_fish_bundle" />
        <CommunityBundle bundle="blacksmiths_bundle" />
        <CommunityBundle bundle="geologists_bundle" />
        <CommunityBundle bundle="adventurers_bundle" />
      </GuideSection>
    </div>
  );
}
