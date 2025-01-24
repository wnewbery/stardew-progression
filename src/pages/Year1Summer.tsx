import { PropsWithChildren, ReactNode } from "react";
import ChecklistItem from "../components/ChecklistItem";
import CommunityBundle from "../components/CommunityBundle";
import ItemStackText from "../components/ItemStackText";
import GuideSectionContainer from "../components/GuideSectionContainer";
import Spoiler from "../components/Spoiler";
import Building from "../components/Building";

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
      <GuideSection title="Summer Advice">
        <p>
          You have the option to get basic or Quality sprinklers.
          If you are planning on getting them you should plan your crop layout accordingly before planting.
          Personally I don't think they are worth it over just upgrading the watering can,
          and you probably won't be able to make Iridium Sprinklers in useful quantities yet.
        </p>
        <p>
          Summer lightning storms can kill your crops, so placing some Lightning Rods will help mitigate that.
          Their location doesn't matter, as long as they are on the farm.
          You can also collect battery packs from them after a storm.
          You need to get to Level 6 Foraging to unlock the recipe.
        </p>
      </GuideSection>
      <GuideSection title="Other Objectives">
        <p>There is a few buildings you should look to complete.</p>
        <Building id="silo" />
        <Building id="stable" />
        <Building id="coop" />
      </GuideSection>
      <section className="space-y-8">
        <h3 className="text-xl font-bold">Day Guide</h3>
        <Day day={1}>
          <ChecklistItem id="summer1_melons">
            The big challenge in Summer is getting the
            5 <ItemStackText item="melon" quality="gold" label="Melons" /> for the Quality Crops Bundle,
            as with the <ItemStackText item="parsnip" quality="gold" /> in the Spring.
            Just keep planting them until you get enough, maybe start with 30.
            You should be able to afford to make <ItemStackText item="basic_fertilizer" /> for all of them.
          </ChecklistItem>
          <ChecklistItem id="summer1_corn">
            <ItemStackText item="corn" /> is both a Summer and Fall crop and once grown can be repeated
            harvested every 4 days. You need 5 <ItemStackText item="corn" quality="gold" /> for the
            Quality Crops Bundle so you should start on them now.

            At least 5 with <ItemStackText item="basic_fertilizer" /> would be a good start.
          </ChecklistItem>
          <ChecklistItem id="summer1_crops">
            <p>
              The other notable crops to plant are <ItemStackText item="hot_pepper" /> and
              <ItemStackText item="tomato" /> for the Summer Crops Bundle.
              And some <ItemStackText item="hops" />, <ItemStackText item="radish" /> and
              <ItemStackText item="wheat" />.
              At least 5 of each would be good.
            </p>
            <p>
              And at least one <ItemStackText item="sunflower" />.
            </p>
          </ChecklistItem>
          <ChecklistItem id="summer1_blueberry">
            <p>
              Blueberries will be the summer cash crop. Each harvest gives 3 blueberries selling for at least
              150g total and they will keep growing all season.
              Ideally aim for at least 20 or 30, more if you can keep up with watering them.
            </p>
            <p>
              Ideally plant each one with a <ItemStackText item="speed_gro" /> as doing so on the first day
              gives an extra harvest.
              You might have some already, but even if you buy it for each seed for 100g each you still make
              back at least an extra 50g without extra watering, and if you get extra silver or gold ones
              you will make even more.
            </p>
            <p>
              That is much less than an entire extra plant though, so if you have run out of money
              the Speed-Gro is less important than the seeds.
            </p>
          </ChecklistItem>
          <ChecklistItem id="summer1_free_seeds">
            You might have also found some free seeds such as for <ItemStackText item="summer_squash" />{' '}
            or <ItemStackText item="starfruit" />, plant those as well.
          </ChecklistItem>
          <p>
            Summer has new forage items which as before use no energy to harvest.
            As you move about and if you have some spare time you should collect them.
          </p>
          <p>
            Each of the maps is actually limited to 6 normal forage items per week,
            and resets on Sunday morning. So if you are short on time trying to check each area
            at least once around Saturday is a good strategy.
          </p>
          <p>
            Summer also comes with new fish you will want to catch before the season is done,
            see the objectives.
          </p>
        </Day>
        <Day day={2}>
          <p>Nothing special, keep working on objectives.</p>
        </Day>
        <Day day={3}>
          <ChecklistItem id="summer3_earthquake">
            <p>
              Over night after day 2 there is an earthquake event.
              Notably this opens up the northern area with the railway and the Spa.
            </p>
            <p>
              When in the pool at the Spa you regenerate 10 energy per second.
              Unfortunately as the Spa is pretty far out of your way and it takes a lot of time
              to enter and leave, most of the time this is not worth it.
            </p>
            <p>
              In most cases it is probably better to just eat some food, or to do low energy tasks
              like fishing.
              Once you have a horse if you are out of energy and nearby it might be worth it
              occasionally.
            </p>
          </ChecklistItem>
          <ChecklistItem id="summer3_lewis_quest">
            <p>
              You will get a letter in the mail from Lewis asking you to find his shorts.
              This rewards 750g so is worth doing.
            </p>
            <Spoiler>
              Check Marnie's bedroom, this is why you needed to get her friendship to 2 hearts.
            </Spoiler>
          </ChecklistItem>
        </Day>
      </section>
    </div>
  );
}
