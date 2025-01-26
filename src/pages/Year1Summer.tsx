import { PropsWithChildren, ReactNode } from "react";
import ChecklistItem from "../components/ChecklistItem";
import CommunityBundle from "../components/CommunityBundle";
import ItemStackText, { GoldItems, Item, Items } from "../components/ItemStackText";
import GuideSectionContainer from "../components/GuideSectionContainer";
import Spoiler from "../components/Spoiler";
import Building from "../components/Building";
import Wiki from "../components/Wiki";
import { GuideBirthdayInfo } from "../components/GuideBirthday";
import GuideDay from "../components/GuideDay";
import GuideBirthdays from "../components/GuideBirthdays";

export const birthdays: GuideBirthdayInfo[] = [
  {
    day: 4,
    name: "Jas",
    content: <>
      If you are lucky you might have found a <ItemStackText item="ancient_doll" /> loved gift,
      otherwise a <ItemStackText item="daffodil" />.
      She is likely to leave Marnie's Ranch at 11am until 3pm to go to the tree
      west of the house in the forest.
    </>
  },
  {
    day: 8,
    name: "Gus",
    content: <>
      If you are lucky you might have found a <ItemStackText item="diamond" /> loved gift,
      otherwise a <ItemStackText item="daffodil" />.
      He is likely to go to the store until 11am then in his Saloon.
    </>
  },
  {
    day: 10,
    name: "Maru",
    content: <>
      She has a lot of loved gifts, so use the one of the highest quality you have spare.
      <ItemStackText item="cauliflower" />,{' '}
      <ItemStackText item="strawberry" />,{' '}
      <ItemStackText item="battery_pack" />,{' '}
      <ItemStackText item="diamond" /> or{' '}
      <ItemStackText item="gold_bar" />.
      She is likely to be at her house or nearby to the east.
    </>
  },
  {
    day: 13,
    name: "Alex",
    content: <>
      The best gift you are likely to have is one of the <Wiki>Universal Likes</Wiki>,
      such as a <ItemStackText item="sweet_pea" />.
      He is likely to be at the beach until 12pm then at the ice cream stand until 5pm.
    </>
  },
  {
    day: 17,
    name: "Sam",
    content: <>
      The best gift you are likely to have is one of the <Wiki>Universal Likes</Wiki>,
      such as a <ItemStackText item="sweet_pea" />.
      He is likely to leave his house at 10am then go to JojaMart until 4pm.
    </>
  },
  {
    day: 19,
    name: "Demetrius",
    content: <>
      The best gift you are likely to have is a <ItemStackText item="strawberry" /> loved gift,
      otherwise one of the <Wiki>Universal Likes</Wiki>.
      He is likely to go to the saloon at 4pm.
    </>
  },
  {
    day: 22,
    name: "Dwarf",
    hide: true,
    content: <>
      He loves a range of gems from the mines which you should have available
      and is always int he mines to the east of the main entrance.{' '}
      <em>However</em> you need a Steel Pickaxe to get in and you need to have learned Dwarvish
      which is unlikely at this point.
    </>
  },
  {
    day: 24,
    name: "Willy",
    content: <>
      He has a lot of loved gifts, so use the one of the highest quality you have spare.
      <ItemStackText item="catfish" />,{' '}
      <ItemStackText item="sturgeon" />,{' '}
      <ItemStackText item="octopus" />,{' '}
      <ItemStackText item="mead" />,{' '}
      <ItemStackText item="diamond" /> or{' '}
      <ItemStackText item="gold_bar" />.
      He is likely to be at his shop or by the beach fishing.
    </>
  },
  {
    day: 26,
    name: "Leo",
    hide: true,
    content: <>
      You are unlikely to have made it to Ginger Island at this point.
    </>
  }
]

interface DayProps {
  day: number;
  title?: string;
  children?: ReactNode;
}
function Day({ day, title, children }: DayProps) {
  return <GuideDay season="Summer" birthdays={birthdays} day={day} title={title} children={children} />;
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
    <div className="space-y-8 max-w-4xl">
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
          You can grow a <ItemStackText item="corn" /> for the Fall Crops Bundle and
          5 <ItemStackText item="corn" quality="gold" /> for the Quality Crops Bundle in the summer,
          although you can not grow the rest of the Fall Crops Bundle until fall.
        </ChecklistItem>
        <ChecklistItem id="chefs_bundle-poppy">
          Grow 1 <ItemStackText item="poppy" /> for the Chef's Bundle.
        </ChecklistItem>
        <ChecklistItem id="dye_bundle-sunflower">
          Grow 1 <ItemStackText item="sunflower" /> for the Dye Bundle.
        </ChecklistItem>
        <ChecklistItem id="summer_apples">
          Sometime during summer you should get the Apple Tree as will be needing to harvest
          at least 4 <ItemStackText item="apple" label="Apples" /> for the Artisan and Fodder
          Bundles in Fall. But planting it sooner means more apples.
        </ChecklistItem>
        <ChecklistItem id="summer_pomegranate">
          You also need a pomegranate tree as you need a <ItemStackText item="pomegranate" /> for
          the Enchanter's Bundle in Fall.
        </ChecklistItem>
        <p>You should be able to complete the following bundles during summer.</p>
        <CommunityBundle bundle="summer_foraging_bundle" />
        <CommunityBundle bundle="construction_bundle" />
        <CommunityBundle bundle="exotic_foraging_bundle" />
        <CommunityBundle bundle="summer_crops_bundle" />
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
      <GuideSection title="Raising Animals - Chickens by Mid Summer">
        <ChecklistItem id="bee_house">
          <p>
            Once you have an <ItemStackText item="iron_bar"></ItemStackText> from mining
            and a <ItemStackText item="maple_syrup" /> from the tree tap make a <Wiki>Bee House</Wiki>,
            maybe even two.
            After a while it will produce <ItemStackText item="honey" /> which is needed for the
            Artisan Bundle and you also use it to make <ItemStackText item="mead" />.
          </p>
          <p>
            Fully grown flowers around the bee house can increase the value of the honey produced.
          </p>
        </ChecklistItem>
        <p>
          To get started on chickens firstly you need to have a Silo to start
          storing <ItemStackText item="hay" /> and to feed the animals.
        </p>
        <Building id="silo" />
        <p>The next step is to build a Coop to house the first 4 chickens.</p>
        <Building id="coop" />
        <ChecklistItem id="summer_chickens">
          Once you have the Coop you can buy four chickens from <Wiki>Marnie</Wiki> for a total of
          3,200g.
          Make sure you get at least 1 brown and 1 white one, as you need both types of eggs for
          the Animal Bundle.
        </ChecklistItem>
        <ChecklistItem id="animal_happiness">
          <p>
            If animals are happy enough they will give better items, for example
            <ItemStackText item="large_egg" /> rather than <ItemStackText item="egg" />.
          </p>
          <p>
            Note that for Mayonnaise and Milk the quality does not depend on the input item quality,
            a normal input gives normal quality and "Large" input will give Gold quality.
            Its better to process all the animal products rather than selling them directly.
          </p>
          <p>
            To increase happiness you should interact with them every day, and feed them by
            moving Hay from the chute to the feeding trough or by letting them eat nearby grass
            outside.
            To eat grass the door needs to be open, you don't have to worry about anything killing
            your animals, but you might close it so they are all there in the morning for easy
            interaction.
          </p>
        </ChecklistItem>
        <ChecklistItem id="mayonnaise_machine">
          Make a <Wiki>Mayonnaise Machine</Wiki>, you should have all the materials already.
        </ChecklistItem>
        <p>Next after the chickens you should work towards getting cows for milk.</p>
        <Building id="barn" />
        <ChecklistItem id="summer_cows">
          You can buy cows from <Wiki>Marnie</Wiki> once you have a Barn for a total of 6,000g.
        </ChecklistItem>
        <ChecklistItem id="milk_pail">
          Buy a <Wiki>Milk Pail</Wiki> to collect milk from the cows.
        </ChecklistItem>
        <ChecklistItem id="cheese_press">
          Get a <Wiki>Cheese Press</Wiki> either from completing the Animal Bundle,
          or you should have the materials already.
        </ChecklistItem>
        <h3 className="text-lg font-bold">Stretch Goals</h3>
        <p>
          If you find you have completed  all the primary Summer objectives and have some spare gold,
          you might get a head start on getting ducks which will be needed for community bundles.
        </p>
        <Building id="big_coop" />
        <ChecklistItem id="summer_ducks">
          Each Duck costs 1,200g, you need at least 1 getting 4 would cost 4,800g.
          Ducks only drop feathers if their happiness is high enough.
          While a <Item>Duck Egg</Item> is worth more than an <Item>Egg</Item>, even at highest
          quality, it is still best to make <Item>Duck Mayonnaise</Item> and sell that.
        </ChecklistItem>
        <p>If still got more to do, another Silo could be useful.</p>
        <Building id="silo" number={2} />
      </GuideSection>
      <GuideSection title="Fishing">
        <p>
          As well as the fish needed for the community centre bundles, selling extra fish is a great way to
          earn gold to help pay for all those upgrades and buildings.
        </p>
        <ChecklistItem id="spring_fishing_pole">
          If you didn't already get the Fiberglass Fishing Pole and start using bait you should aas soon
          as possible for the 50% faster catching.
        </ChecklistItem>
        <ChecklistItem id="recycling_machine">
          Get a <Wiki>Recycling Machine</Wiki> to recycle <ItemStackText item="trash" />,{' '}
          <ItemStackText item="driftwood" />, <ItemStackText item="soggy_newspaper" />,{' '}
          <ItemStackText item="broken_cd" /> and <ItemStackText item="broken_glasses" /> into
          useful items.
        </ChecklistItem>
        <ChecklistItem id="fishing_level_5">
          If you didn't get already you should get to fishing level 5 soon.
          I recommend picking the Fisher Profession as the extra 25% value for selling fish
          will really help earn gold.
        </ChecklistItem>
        <ChecklistItem id="river_fish_bundle-shad">
          Catch 1 <ItemStackText item="shad" /> from the river when raining,
          for the River Fish Bundle.
          Possible in the fall as well.
        </ChecklistItem>
        <ChecklistItem id="specialty_fish_bundle-pufferfish">
          Catch 1 <ItemStackText item="pufferfish" /> from the ocean between 12-4pm while sunny
          for the Specialty Fish Bundle.
        </ChecklistItem>
        <ChecklistItem id="specialty_fish_bundle-ghostfish">
          Catch 1 <ItemStackText item="ghostfish" /> in the mines, or dropped by ghosts.
          For the Specialty Fish Bundle.
        </ChecklistItem>
        <ChecklistItem id="specialty_fish_bundle-woodskip">
          Catch 1 <ItemStackText item="woodskip" /> from the Secret Woods,
          for the Specialty Fish Bundle.
        </ChecklistItem>
        <p>You should be able to complete the following bundles during summer.</p>
        <CommunityBundle bundle="lake_fish_bundle" />
        <CommunityBundle bundle="ocean_fish_bundle" />
        <CommunityBundle bundle="crab_pot_bundle" />
        <ChecklistItem id="fishing_level_10">
          You should to get to fishing level 10 during summer, and the Angler Profession will
          increase the value of the fish you catch by 50%, earning even more gold.
        </ChecklistItem>
        <ChecklistItem id="iridium_rod">
          <p>
            Later in the summer after paying for the buildings and animals, consider getting
            the <ItemStackText item="iridium_rod" /> for 7,500g.
            This allows you to use a variety of <Wiki>Tackle</Wiki> to catch fish faster, reduce
            failures, or a few other effects. You can either make or buy these.
          </p>
          <p>
            The <ItemStackText item="trap_bobber" /> is cheap to make from
            a <ItemStackText item="copper_bar" /> and 10 <ItemStackText item="sap" />.
            It reduces how far the catch progress bar goes down so is very useful if you are
            struggling with difficult fish.
            Especially towards the end of the season if there is fish you must catch,
            for example the <ItemStackText item="pufferfish" />.
          </p>
          <p>
            The <ItemStackText item="dressed_spinner" /> is fairly cost effective to make if you
            are doing well in the mines to have spare <ItemStackText item="iron_bar" /> and get
            some <ItemStackText item="cloth" /> from recycling <ItemStackText item="soggy_newspaper" />.
          </p>
        </ChecklistItem>
        <ChecklistItem id="deluxe_bait">
          After the <Wiki>Green Rain</Wiki> event you should have plenty of <ItemStackText item="moss" />{' '}
          so you should consider using <ItemStackText item="deluxe_bait" /> so catch fish faster and
          for the larger fishing bar to reduce failures and increase quality.
        </ChecklistItem>
      </GuideSection>
      <GuideSection title="Mining">
        <p>In addition to the Mining Advice in the Spring section.</p>
        <ChecklistItem id="summer_mining_priority">
          <p>
            Mining is still not a priority as it takes a lot of time and energy, and does not not
            bring in much income compared to crops or fishing.
          </p>
          <p>
            You just need to do enough to mostly get <Items>copper_bar</Items> and{' '}
            <Items>iron_bar</Items> needed for some other things.
            A stretch goal would be to get <Items>gold_bar</Items> and complete the Boiler Room bundles.
          </p>
        </ChecklistItem>
        <ChecklistItem id="pickaxe_copper">
          You will really want the Copper Pickaxe after floor 40 as needing 3 hits per
          rock will consume a lot of energy.
        </ChecklistItem>
        <ChecklistItem id="pickaxe_steel">
          You should consider getting the Steel Pickaxe to help save energy by breaking rocks
          after floor 40 up to 80 in 1 hit
        </ChecklistItem>
        <ChecklistItem id="pickaxe_gold">
          Once you get gold a Gold Pickaxe is an option to break most rocks in the mines in 1 hit.
          However you do also need 10,000g and the farming and buildings are a priority.
        </ChecklistItem>
        <ChecklistItem id="mining_level_5">
          At mining level 5 you need to choose a profession.
          Personally I like Miner as the extra ore means extra bars and there is lots of stuff
          you will be crafting.
        </ChecklistItem>
        <ChecklistItem id="mining_floor_80">
          <p>
            You want to be getting down past floor 80 as will be needing <ItemStackText item="gold_bar" />{' '}
            for making various things.
          </p>
          <p>
            If you are still using the Copper Pickaxe, you can still break normal rocks with 2
            hits, but it takes <em>4 hits</em> to break the gold nodes.
          </p>
        </ChecklistItem>
        <ChecklistItem id="boiler_room">
          Completing all the Boiler Room bundles will repair the mine carts, which provides a far
          faster way to get to and from the farm to the mines using the cart by the Bus Stop.
        </ChecklistItem>
        <CommunityBundle bundle="blacksmiths_bundle" />
        <CommunityBundle bundle="geologists_bundle" />
        <CommunityBundle bundle="adventurers_bundle" />
      </GuideSection>

      <GuideSection title="Other Objectives">
        <p>There is a few buildings you should look to complete.</p>
        <Building id="silo" />
        <Building id="stable" />
        <Building id="coop" />
      </GuideSection>
      <GuideBirthdays season="Summer" birthdays={birthdays} />
      <section className="space-y-8">
        <h3 className="text-xl font-bold">Day Guide</h3>
        <Day day={1}>
          <p>
            Note that it is difficult to put a specific day on a lot of things to do in Summer.
            So be sure to keep an eye on the season objectives and work on those as you go.
          </p>
          <ChecklistItem id="summer1_melons">
            <p>
              The big challenge in Summer is getting the
              5 <ItemStackText item="melon" quality="gold" label="Melons" /> for the Quality Crops Bundle,
              as with the <ItemStackText item="parsnip" quality="gold" /> in the Spring.
              Just keep planting them until you get enough, maybe start with 30.
              You should be able to afford to make <ItemStackText item="basic_fertilizer" /> for all of them.
            </p>
            <p>
              Melons planted in a 3x3 pattern have a small chance to become a <Wiki>Giant Melon|Crops#Giant_Crops</Wiki>.
            </p>
          </ChecklistItem>
          <ChecklistItem id="summer1_corn">
            <ItemStackText item="corn" /> is both a Summer and Fall crop and once grown can be repeated
            harvested every 4 days. You need 5 <ItemStackText item="corn" quality="gold" /> for the
            Quality Crops Bundle so you should start on them now.

            At least 5 with <ItemStackText item="basic_fertilizer" /> would be a good start.
          </ChecklistItem>
          <ChecklistItem id="summer1_wheat">
            <p>
              At least 5 <ItemStackText item="wheat" /> would be good if not 10.
              If you use <ItemStackText item="speed_gro" /> for Wheat you reduce its growing time
              from 4 days to 3 days, and the Speed-Gro will stay until the end of <Wiki>Fall</Wiki>.
            </p>
            <p>
              You are aiming for about 1,000 <ItemStackText item="hay" /> by the end of Fall which
              you will get by cutting grass as well, so you will need to keep an eye on your
              progress and maybe ramp up growing more later.
            </p>
          </ChecklistItem>
          <ChecklistItem id="summer1_crops">
            <p>
              The other notable crops to plant are <ItemStackText item="hot_pepper" /> and
              <ItemStackText item="tomato" /> for the Summer Crops Bundle.
              And some <ItemStackText item="hops" /> and <ItemStackText item="radish" />.
            </p>
            <p>
              And at least one <ItemStackText item="sunflower" /> and <ItemStackText item="summer_spangle" />.
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
          <p>If you didn't build the Silo yet, I would really get working on it.</p>
          <Building id="silo" />
          <p>And start saving towards getting a coop.</p>
          <Building id="coop" />
          <p>
            Getting the stable as soon as possible is also good for the extra mobility,
            but don't get it at the expense of other objectives.
          </p>
          <Building id="stable" />
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
        <Day day={4}>
          <ChecklistItem id="summer4_wheat">
            <p>Any Wheat you planted should be ready now, so harvest that and plant more.</p>
            <p>
              The Wheat can be kept and made into <ItemStackText item="wheat_flour" /> once
              you build a <Wiki>Mill</Wiki>.
              The Hay can be stored in the <Wiki>Silo</Wiki> you built to feed the animals
              will be getting soon.
            </p>
          </ChecklistItem>
        </Day>
        <Day day={5} title="Day 5 (Friday) + Green Rain Info">
          <ChecklistItem id="summer5_hardwood">
            If you got the Steel Axe, days when visiting the cart are also good days to visit the
            nearby <Wiki>Secret Woods</Wiki> to collect <ItemStackText item="hardwood" />.
            The woods respawn the large stumps each day, and your farm alone won't have enough
            for the stable.
          </ChecklistItem>
          <ChecklistItem id="summer5_wheat">If you didn't use Speed-Gro the Wheat should be ready today.</ChecklistItem>
          <ChecklistItem id="green_rain">
            <p>
              Summer 5 is  the first possible day for the <Wiki>Green Rain</Wiki> event.
              You can tell the day before from the Weather Forecast.
              While it will happen once, which day is random, so complete the following items when it does happen.
            </p>
            <p>
              Many of the villagers are worried about the first Green Rain being dangerous,
              however it is not and you should carry on going about as normal.
            </p>
            <p>
              Many trees may turn into <Wiki>Green Rain Trees</Wiki> during this event.
              They will drop <Wiki>Mossy Seed</Wiki> which you can use to grow more later if desired.
              The next day these trees will revert to normal.
            </p>
          </ChecklistItem>
          <ChecklistItem id="green_rain_villagers">
            <p>
              Many of the villagers will spend the day at the Saloon so it a good opportunity to go
              there to talk for friendship points.
            </p>
            <p>Most of the others have modified schedules, so be aware if looking for them.</p>
          </ChecklistItem>
          <ChecklistItem id="green_rain_moss">
            <p>
              A lot of trees will become covered in <ItemStackText item="moss" /> which can be harvested by
              hitting the tree with an Axe or Scythe. No extra Moss is given for cutting the tree down.
              The large Weeds spawned by the event will also drop Moss.
            </p>
            <p>
              You should collect as much Moss as possible as it is used to make{' '}
              <ItemStackText item="speed_gro" /> and <ItemStackText item="deluxe_bait" />.
              You can also upgrade to a <Wiki>Deluxe Worm Bin</Wiki> if you have one.
            </p>
          </ChecklistItem>
          <ChecklistItem id="green_rain_worm_bin">
            If you have a <Wiki>Worm Bin</Wiki> you can upgrade it to a <Wiki>Deluxe Worm Bin</Wiki>{' '}
            using 30 <ItemStackText item="moss" />.
          </ChecklistItem>
        </Day>
        <Day day={6}>
        </Day>
        <Day day={7}>
          <ChecklistItem id="summer7_harvest">
            This should be the first harvest for <ItemStackText item="hot_pepper" /> and{' '}
            <ItemStackText item="radish" />. Keep a few for later and sell any extras.
          </ChecklistItem>
          <ChecklistItem id="summer7_squash">
            If you planted any <ItemStackText item="summer_squash" /> on the first day,
            they should be ready now and provide some good income.
          </ChecklistItem>
        </Day>
        <Day day={8}>
        </Day>
        <Day day={9}>
        </Day>
        <Day day={10}>
        </Day>
        <Day day={11}>
          <ChecklistItem id="summer11_luau">
            <p>
              Today is the <Wiki>Luau</Wiki> festival on the beach starting between 9am and 2pm.
              The main thing here is to add one of the eligible gold or iridium quality items to the
              pot luck soup for a friendship bonus with the entire town!
              Also a chance to talk to everyone for more friendship points.
            </p>
            <p>
              Note that in multiplayer <em>all players</em> must add an item!
            </p>
            <p>
              The best items to add you likely have are a gold or iridium
              <ItemStackText item="catfish" quality="gold" />,{' '}
              <ItemStackText item="cauliflower" quality="gold" /> or a{' '}
              <ItemStackText item="sturgeon" quality="gold" />.
            </p>
          </ChecklistItem>
        </Day>
        <Day day={12}>
          <ChecklistItem id="summer12_blueberries">
            Today should be the first <ItemStackText item="blueberry" /> harvest which you can sell for a
            big influx of gold.
          </ChecklistItem>
          <ChecklistItem id="summer12_animals">
            Coming up to mid season you should be near to completing the Silo, Coop and getting chickens.
            Once they are done start saving towards getting a Barn and cows soon.
          </ChecklistItem>
          <ChecklistItem id="summer12_bonus_forageables">
            Summer 12 to 14 is the{' '}
            <a target="_blank" href="https://stardewvalleywiki.com/https://stardewvalleywiki.com/The_Beach#Summer_Bonus_Foraging">
              Summer Bonus Foraging at The Beach
            </a>. So it is worth going past each day to collect the extra items.
          </ChecklistItem>
          <ChecklistItem id="summer12_rainbow_shell">
            You will want to save a <ItemStackText item="rainbow_shell" /> from the beach for
            the second part of the quest to meet <Wiki>Mr. Qi</Wiki>.
          </ChecklistItem>
          <ChecklistItem id="summer12_lightning_rod">
            Tomorrow is always a storm, although you might have one already.
            Make sure you have your <Items>lightning_rod</Items> ready to help
            reduce the number of crops destroyed by lightning, and also to get <Items>battery_pack</Items>.
          </ChecklistItem>
        </Day>
        <Day day={13}>
          <ChecklistItem id="summer13_lightning_rod">
            Today will be a storm and lightning will hopefully only strike your <Items>lightning_rod</Items>.
          </ChecklistItem>
          <ChecklistItem id="summer13_bonus_forageables">
            Summer Bonus Foraging at The Beach is continuing.
          </ChecklistItem>
          <ChecklistItem id="summer13_melons">
            <p>
              Today the <ItemStackText item="melon" label="Melons" /> should be ready to harvest.
              You need to get 5 gold ones for the Quality Crops Bundle, plus a few regular ones
              for other bundles and quests.
            </p>
            <p>
              If you didn't get enough you will need to plant more. If you have enough its still
              best to plant more unless you want to cut down on farming and watering,
              as melons provide the most gold per day of what you have available right now.
            </p>
          </ChecklistItem>
          <CommunityBundle bundle="summer_crops_bundle" />
          <ChecklistItem id="summer13_hops">
            This should also be the first <ItemStackText item="hops" /> harvest.
            They are not worth much to sell, keep them for when you have a keg to make{' '}
            <ItemStackText item="pale_ale" />.
          </ChecklistItem>
        </Day>
        <Day day={14}>
          <ChecklistItem id="summer14_lightning_rod">
            <p>
              After yesterday's storm you can collect a <Item>battery_pack</Item> from any Lightning Rods that were hit.
              You need one to finish a quest you may have found, and then carry on with the next steps as instructed.
            </p>
            <Spoiler>
              In the tunnel to the west (left) of the bus stop, look for a wall box between two of the lights.
            </Spoiler>
          </ChecklistItem>
          <ChecklistItem id="summer14_bonus_forageables">
            Last day for the Summer Bonus Foraging at The Beach.
          </ChecklistItem>
        </Day>
        <Day day={15}>
          <ChecklistItem id="summer15_checkpoint">
            <p>
              Half way through the season!
              Take a moment to check anything you missed and the progress on the seasons objectives.
              Especially if there is any crops or fish missing that must be obtained this season,
              as well as planting the trees in time to get the fruit in Fall.
            </p>
            <p>
              Other priorities are getting the chickens and cows started.
              And getting far enough in the mine to start getting{' '}
              <Items>gold_bar</Items> and hopefully be able to get
              some <Items>iridium_bar</Items> by next season.
            </p>
            <p>
              If you didn't get a <Item>rainbow_shell</Item> yet keep looking as well.
            </p>
          </ChecklistItem>
        </Day>
        <Day day={16}>
          <ChecklistItem id="summer16_last_melons">
            This is the last day you can plant melons without using Speed-Gro.
            However assume you planted them as soon as possible you should have
            plenty already growing.
          </ChecklistItem>
        </Day>
        <Day day={17}>

        </Day>
        <Day day={18}>

        </Day>
        <Day day={19}>
          <ChecklistItem id="summer19_red_cabbage">
            This is the last day you can plant red cabbage outside without using Speed-Gro.
            Otherwise you can plant them in the <Wiki>Greenhouse</Wiki>.
            Hopefully been checking the cart every Friday and Sunday, but it can still come
            later in the year, up to Winter 16!
          </ChecklistItem>
        </Day>
        <Day day={20}>
          <ChecklistItem id="summer20_blueberries">
            Should be another big harvest of <Items>blueberry</Items>.
          </ChecklistItem>
          <ChecklistItem id="summer20_trees">
            If you did not already, you want to be getting an <Wiki>Apple Sapling</Wiki> and{' '}
            <Wiki>Pomegranate Sapling</Wiki>.
          </ChecklistItem>
          <ChecklistItem id="summer20_trout_derby">
            The <Wiki>Trout Derby</Wiki> starts today, so if you are planning to fish might be
            an idea to do it there.
            The rewards are not critical or amazing, but they are a good bonus and you keep the
            fish.
          </ChecklistItem>
        </Day>
        <Day day={21}>
          <ChecklistItem id="summer21_red_cabbage">
            If you got the red cabbage seeds today and want to grow them, you will need at
            least <Wiki>Deluxe Speed-Gro</Wiki>.
            Otherwise wait until you have the <Wiki>Greenhouse</Wiki> available.
          </ChecklistItem>
          <ChecklistItem id="summer21_trout_derby">
            Second and final day of the <Wiki>Trout Derby</Wiki>.
          </ChecklistItem>
        </Day>
        <Day day={22}>
          <ChecklistItem id="summer22_tea">
            Start of the final week of the season, so be sure to visit <Wiki>Caroline</Wiki> to
            get the free <Items>tea_leaves</Items> as well as harvest any of your own.
            You can put the leaves in a <Wiki>Keg</Wiki> or <Wiki>Preserves Jar</Wiki>.
          </ChecklistItem>
          <ChecklistItem id="summer22_savings">
            <p>
              You want to be finishing the season with about 20,000g to get seeds etc. in the fall.
              If you have extra you might consider getting more upgrades early or saving for the
              vault bundles that needs a total of 42,500g and repairs the bus stop leading to the
              <Wiki>Desert</Wiki>.
            </p>
            <p>
              The desert will be needed eventually to get a <Item>sandfish</Item> and to
              access the <Wiki>Skull Cavern</Wiki>
            </p>
            <p>
              For tools you should already have a <Wiki>Steel Axe</Wiki> for a while for the needed
              hardwood. A <Wiki>Steel Pickaxe</Wiki> would be useful to clear the last of the
              rocks on the farm.
              Upgrading the <Wiki>Watering Can</Wiki> more will make watering crops easier, perhaps
              even to Gold (3x3 area). If you want to remember that you do need to water your
              summer/fall crops on day 28, and for Fall plan a crop layout that will work with it.
            </p>
            <p>
              It could also be worth upgrading your Backpack to the 36 slot version for 10,000g.
              A second <Wiki>Silo</Wiki> is another option, but you can also store the extra hay
              in chests, it just won't be automatic.
            </p>
          </ChecklistItem>
          <Building id="big_coop" />
        </Day>
        <Day day={23}>
          <ChecklistItem id="summer23_tea">
            Harvest any <Items>tea_leaves</Items>.
          </ChecklistItem>
        </Day>
        <Day day={24}>
          <ChecklistItem id="summer24_tea">
            Harvest any <Items>tea_leaves</Items>.
          </ChecklistItem>
        </Day>
        <Day day={25}>
          <ChecklistItem id="summer25_tea">
            Harvest any <Items>tea_leaves</Items>.
          </ChecklistItem>
          <ChecklistItem id="summer25_melons">
            Should be the day of the last Melon harvest, make sure you keep 5 <GoldItems>melon</GoldItems>{' '}
            for the Quality Crops Bundle, a regular one for the Summer Crops Bundle if you didn't
            hand it in already, and a few for quests.
          </ChecklistItem>
        </Day>
        <Day day={26}>
          <ChecklistItem id="summer26_tea">
            Harvest any <Items>tea_leaves</Items>.
          </ChecklistItem>
        </Day>
        <Day day={27}>
          <ChecklistItem id="summer27_tea">
            Harvest any <Items>tea_leaves</Items>.
          </ChecklistItem>
        </Day>
        <Day day={28}>
          <ChecklistItem id="summer28_tea">
            Harvest any <Items>tea_leaves</Items>.
          </ChecklistItem>
        </Day>
      </section>
    </div >
  );
}
