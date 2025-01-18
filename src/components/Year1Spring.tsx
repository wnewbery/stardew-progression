import GameData from "../data/GameData";
import ChecklistItem from "./ChecklistItem";
import CommunityBundle from "./CommunityBundle";
import ItemStackText from "./ItemStackText";
import ArtifactImage from "../assets/Artifact_tile.gif";

export default () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">First Year Spring</h2>
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Advice</h3>
        <ChecklistItem id="first_year_completable">
          If you want to guarantee completing the first year is possible, you must select this when <i>starting the game</i>.{' '}
          You need to by <ItemStackText item="red_cabbage_seeds" /> from the Travelling Cart, and this setting guarantees it will be stocked at least once between Spring 7 and Winter 16.
        </ChecklistItem>
        <p>
          Getting the farming level up early will help get the needed quality crops for the community centre,{' '}
          but also getting better quality crops to gift or sell which will give more friendship or gold.{' '}
          While parsnips don't give the most gold, they are cheap and grow fast.
        </p>
        <p>You can check the weather forecast on the TV to see if it will rain the next day, which means crops will not need watering, and may help with time planning.</p>
        <p>There is no advantage to giving the community centre higher quality items than required, so if you only have a gold or an iridium item it might be worth waiting to get a regular item and sell or gift the better one.</p>
        <p>Try and do quests as they give extra money and friendship.</p>
        <p>Try and keep at least one of each item in case the shops Help Wanted asks for one.{' '}
          You need to find the villager and complete the quest before the end of the next day, which may not be enough time to get some items fresh.
        </p>
        <p>Be sure to plant your crops with enough time, they will die if they are not completed before the end of the season. </p>
        <p><ItemStackText item="field_snack" /> is a good item to gain extra energy, you can get the seeds while cutting down trees, or by <i>shaking</i> a tree which <i>does not use energy</i>.</p>
        <p><ItemStackText item="spring_onion" /> have a chance to spawn in the south by the sewer <i>every day</i> and while not worth much to sell, they are a cheap source of energy.</p>
      </section>
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Community Centre Objectives</h3>
        <ChecklistItem id="red_cabbage_seed">
          Check the Travelling Cart in the forest every Friday and Sunday after Spring 7 until Winter 16 for a <ItemStackText item="red_cabbage_seeds" />.
          You can't buy this seed from town until year 2, and you need it for the Dye Bundle in the community centre.
        </ChecklistItem>
        <ChecklistItem id="quality_crops_bundle-parsnip">
          Grow and harvest 5 <ItemStackText item="parsnip" quality="gold" label="Parsnips" />.{' '}
          Planting lots of parsnips is also a good way to level the farming skill.
        </ChecklistItem>
        <ChecklistItem id="exotic_foraging_bundle-cave_carrot">
          You may find a <ItemStackText item="cave_carrot" /> in the mines for the community centre.
        </ChecklistItem>
        <ChecklistItem id="geologists_bundle-quartz">
          Find 1 <ItemStackText item="quartz" /> in the mines for the community centre, rest can be sold or gifted.
        </ChecklistItem>
        <ChecklistItem id="geologists_bundle-earth_crystal">
          Find 1 <ItemStackText item="earth_crystal" /> in the mines for the community centre, rest can be sold or gifted.
        </ChecklistItem>
        <ChecklistItem id="ocean_fish_bundle-sardine">
          Catch 1 <ItemStackText item="sardine" /> from the ocean before 7pm in spring, fall or winter.{' '}
          Not completely essential, but getting the Sardine now allows the Ocean Fish Bundle to be completed in the summer, otherwise you will need to wait until the fall.        </ChecklistItem>
        <ChecklistItem id="night_fishing_bundle-eel">
          Try and catch an <ItemStackText item="eel" /> at the ocean after 4pm on rainy days.
          You will get another chance in the fall if not.
        </ChecklistItem>
        <p>Two community bundles to be completed fully.</p>
        <CommunityBundle bundle="spring_crops_bundle" />
        <CommunityBundle bundle="spring_foraging_bundle" />
      </section>
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Other Objectives</h3>
        <ChecklistItem id="spring_fix_beach_bridge">
          Gather 300 <ItemStackText item="wood" /> to fix the bridge in the south east beach to access
          {' '}<ItemStackText item="coral" /> and <ItemStackText item="sea_urchin" />.
        </ChecklistItem>
        <ChecklistItem id="spring_foraging_level">
          Cut down as many trees as possible to get foraging skill to at least level 4 before Spring 15.{' '}
          This will give you two <ItemStackText item="salmonberry" /> rather than one, and will be needing the wood.
        </ChecklistItem>
        <ChecklistItem id="introductions">Chat to all the villagers.</ChecklistItem>
      </section>
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Optional Community Centre Objectives</h3>
        <p>There are several bundles you can start but not complete, and you can still get the fish later. </p>
        <ChecklistItem id="river_fish_bundle-sunfish">
          Catch 1 <ItemStackText item="sunfish" /> from the river before 7pm, possible in the summer as well.
        </ChecklistItem>
        <ChecklistItem id="river_fish_bundle-catfish">
          Catch 1 <ItemStackText item="catfish" /> from the river when raining, possible in the fall as well.
        </ChecklistItem>
        <ChecklistItem id="river_fish_bundle-shad">
          Catch 1 <ItemStackText item="shad" /> from the river when raining, possible in the summer and fall as well.
        </ChecklistItem>
        <ChecklistItem id="lake_fish_bundle-largemouth_bass">
          Catch 1 <ItemStackText item="largemouth_bass" /> from the mountain lake before 7pm, all seasons.
        </ChecklistItem>
        <ChecklistItem id="lake_fish_bundle-carp">
          Catch 1 <ItemStackText item="carp" /> from the mountain lake, spring, summer or fall.
        </ChecklistItem>
        <ChecklistItem id="lake_fish_bundle-bullhead">
          Catch 1 <ItemStackText item="bullhead" /> from the mountain lake, all seasons.
        </ChecklistItem>
        <ChecklistItem id="night_fishing_bundle-bream">
          Catch 1 <ItemStackText item="bream" /> from the ocean after 6pm, all seasons.
        </ChecklistItem>
      </section>
      <section>
        <h3 className="text-xl font-bold">Day Guide</h3>
        <section>
          <h4 className="text-lg font-bold">Day 1</h4>
          <p>
            The first day is going to be very important to get a good start for the rest of the year.
            The main goal is to get the first crops planted.
          </p>
          <ChecklistItem id="spring1_clearing">
            Clear space for at least 30 crops.{' '}
            Considering using a layout close to water and compact enough for a scarecrow.
          </ChecklistItem>
          <p>See <a target="_blank" href="https://stardewvalleywiki.com/File:Scarecrow_Range.png">https://stardewvalleywiki.com/File:Scarecrow_Range.png</a> for a good indication of the scarecrow range.</p>
          <ChecklistItem id="spring1_storage">
            Cut down trees to get at least 50 <ItemStackText item="wood" /> to build a <ItemStackText item="chest" />.{' '}
            You only have 12 inventory slots so will very quickly run out of space.
          </ChecklistItem>
          <ChecklistItem id="spring1_forage">
            <p>
              Forage as much as possible on the way to the General Store before it closes at 5pm.
            </p>
            <p>
              You want to increase your skill, but also want some things to sell, gift or use for energy.{' '}
              Going south through the forest and then the beach is probably a good bet.
            </p>
            <p>
              Get in the habit to always take your hoe and look out for artifacts to collect.{' '}
              <img src={ArtifactImage} />
            </p>
          </ChecklistItem>
          <ChecklistItem id="spring1_seeds">
            <p>
              Buy at least 3 each of Bean Starters, Cauliflower Seeds, and Potato Seeds.{' '}
              Then as many parsnip seeds as you can afford and want to water, possible up to 30 total crops.{' '}
              This allows some extra in case crows eat some or get early gift quests.
            </p>
            <p>
              Sell foraged items to help with this.{' '}
              You may want to keep spring onions for energy as they don't sell for much, and one of each flower for early gifts.{' '}
              Also remember you already had 15 parsnip seeds to start with.
            </p>
          </ChecklistItem>
          <ChecklistItem id="spring1_visiting">
            You probably still have some time but little energy, Sebastian will be in the mountains during the evening and several villagers are in the Saloon.
          </ChecklistItem>
          <ChecklistItem id="spring1_planting">
            Be sure to plant and water all the seeds you got before the end of the day.
          </ChecklistItem>
        </section>
      </section>
    </div>
  );
};
