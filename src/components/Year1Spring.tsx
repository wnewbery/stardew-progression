import GameData from "../data/GameData";
import ChecklistItem from "./ChecklistItem";
import CommunityBundle from "./CommunityBundle";
import ItemStackText from "./ItemStackText";
import ArtifactImage from "../assets/Artifact_tile.gif";
import Wiki from "./Wiki";
import Spoiler from "./Spoiler";

export default () => {
  return (
    <div className="space-y-8 columns-xl">
      <h2 className="text-2xl font-bold">First Year Spring</h2>
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Advice</h3>
        <ChecklistItem id="first_year_completable">
          If you want to guarantee completing the first year is possible, you must select this when <i>starting the game</i>.{' '}
          You need to by <ItemStackText item="red_cabbage_seeds" /> from the Travelling Cart, and this setting guarantees it will be stocked at least once between Spring 7 and Winter 16.
        </ChecklistItem>
        <p>
          You should generally go to bed by 12pm to restore full energy.{' '}
          The exception is if you have a level up, which always restores full energy.{' '}
          Look for &quot;You've got some new ideas to sleep on.&quot; on the
        </p>
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
        <p>You can give each character 2 gifts a week.</p>
        <p>When deciding when to upgrade the watering can, check the weather forecast as if it is raining the next day, and you can collect it the day after, then no crops will be missed.</p>
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
          Not completely essential, but getting the Sardine now allows the Ocean Fish Bundle to be completed in the summer, otherwise you will need to wait until the fall.
        </ChecklistItem>
        <ChecklistItem id="night_fishing_bundle-eel">
          Try and catch an <ItemStackText item="eel" /> at the ocean after 4pm on rainy days.
          You will get another chance in the fall if not.
        </ChecklistItem>
        <ChecklistItem id="crab-pot-bundle-clam">
          Find 1 <ItemStackText item="clam" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="crab-pot-bundle-cockle">
          Find 1 <ItemStackText item="cockle" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="crab-pot-bundle-mussel">
          Find 1 <ItemStackText item="mussel" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="crab-pot-bundle-oyster">
          Find 1 <ItemStackText item="oyster" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="dye_bundle-sea_urchin">
          Find 1 <ItemStackText item="sea_urchin" /> on the east beach after repairing the bridge for the community centre.
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
        <ChecklistItem id="spring_friend_caroline">
          <p>
            Befriend <a target="_blank" href="https://stardewvalleywiki.com/Caroline">Caroline</a> to 2 hearts by Spring 22.{' '}
            <ItemStackText item="daffodil" label="Daffodils" /> are a good gift as they are readily available and sell for less than Horseradish.
          </p>
          <p>Getting 2 hearts with Caroline allows access to the Sunroom where you can harvest Tea Leaves each day for the last week of the season.</p>
        </ChecklistItem>
        <ChecklistItem id="spring_friend_marnie">
          <p>
            Befriend <a target="_blank" href="https://stardewvalleywiki.com/Marnie">Marnie</a> to 2 hearts by the summer.{' '}
            <ItemStackText item="quartz" /> is a good gift that can be commonly found in the mines.
          </p>
          <p>Getting 2 hearts will allow access to her bedroom which is needed for a quest in the summer.</p>
        </ChecklistItem>
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
          Catch 1 <ItemStackText item="bream" /> from the river after 6pm, all seasons.
        </ChecklistItem>
      </section>
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Birthdays</h3>
        <ChecklistItem id="birthday_kent">
          Spring 4 is <a target="_blank" href="https://stardewvalleywiki.com/Kent">Kent's</a> birthday.{' '}
          The best gift is likely to be a <ItemStackText item="daffodil" />.{' '}
          He will be at or around his house until 10pm.
        </ChecklistItem>
        <ChecklistItem id="birthday_lewis">
          Spring 7 is <a target="_blank" href="https://stardewvalleywiki.com/Lewis">Lewis'</a> birthday.{' '}
          The best gift you are likely to have is a <ItemStackText item="parsnip" /> planted at the start.{' '}
          He is likely to be by around his house or the town square.
        </ChecklistItem>
        <ChecklistItem id="birthday_vincent">
          Spring 10 is <a target="_blank" href="https://stardewvalleywiki.com/Vincent">Vincent's</a> birthday.{' '}
          The best gift you are likely to have is a <ItemStackText item="daffodil" />.{' '}
          He is likely to go to the Museum then around town.
        </ChecklistItem>
        <ChecklistItem id="birthday_haley">
          Spring 14 is <a target="_blank" href="https://stardewvalleywiki.com/Haley">Haley's</a> birthday.{' '}
          The best gift you are likely to have is a <ItemStackText item="daffodil" />.{' '}
          She is likely to go to the fountain around 12pm then heading home 4:30pm.
        </ChecklistItem>
        <ChecklistItem id="birthday_pam">
          Spring 18 is <a target="_blank" href="https://stardewvalleywiki.com/Pam">Pam's</a> birthday.{' '}
          The best gift you are likely to have is a <ItemStackText item="parsnip" />, otherwise a <ItemStackText item="salmonberry" />.{' '}
          She is likely to go to JojaMart at 12pm then the saloon at 4pm.
        </ChecklistItem>
        <ChecklistItem id="birthday_shane">
          Spring 20 is <a target="_blank" href="https://stardewvalleywiki.com/Shane">Shane's</a> birthday.{' '}
          The best gift you are likely to have is a <ItemStackText item="salmonberry" />.{' '}
          He is likely to be at Marnie's, then go to the General Store at 12pm then the saloon at 5pm.
        </ChecklistItem>
        <ChecklistItem id="birthday_pierre">
          Spring 26 is <a target="_blank" href="https://stardewvalleywiki.com/Pierre">Pierre's</a> birthday.{' '}
          The best gift you are likely to have is a <ItemStackText item="parsnip" />, <ItemStackText item="daffodil" /> or <ItemStackText item="dandelion" />.{' '}
          He is likely to be at the General Store until 5pm then the saloon.
        </ChecklistItem>
        <ChecklistItem id="birthday_emily">
          Spring 27 is <a target="_blank" href="https://stardewvalleywiki.com/Emily">Emily's</a> birthday.{' '}
          If you are lucky you may have a loved gift; any gem except Diamond, or Cloth.{' '}
          Otherwise a <ItemStackText item="daffodil" /> or <ItemStackText item="quartz" />.{' '}
          She is likely to be at home until 3:30pm then the saloon.
        </ChecklistItem>
      </section>
      <section className="space-y-8">
        <h3 className="text-xl font-bold">Day Guide</h3>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 1</h4>
          <p>
            The first day is going to be very important to get a good start for the rest of the year.
            The main goal is to get the first crops planted.
          </p>
          <ChecklistItem id="spring1_clearing">
            Clear space for at least 30 crops.{' '}
            Considering using a layout close to water and compact enough for a scarecrow.
          </ChecklistItem>
          <p>See <a target="_blank" href="https://stardewvalleywiki.com/File:Scarecrow_Range.png" className="break-all">https://stardewvalleywiki.com/File:Scarecrow_Range.png</a> for a good indication of the scarecrow range.</p>
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
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 2</h4>
          <ChecklistItem id="spring2_crops">Make sure get in the habit of making sure every crop is watered every day.</ChecklistItem>
          <ChecklistItem id="spring_fishing_pole">Visit Willy by the ocean before 5pm to get the fishing pole.</ChecklistItem>
          <p>Nothing else critical today, can clear farm space, gather wood, plant any mixed seeds find, or carry on fishing.</p>
          <p>Main thing is to just ensure use up all your energy, and don't sleep late unless you got a skill level up.</p>
          <p>I sold most of the fish at this stage to rush towards 2,000g for the upgraded backpack.</p>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 3 and 4</h4>
          <p>Nothing special about these days, keep working on objectives especially trees and friendships.</p>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 5</h4>
          <p>A very busy day, just try to get the main things done first.</p>
          <ChecklistItem id="spring5_parsnips">
            The first days parsnips are ready to harvest.{' '}
          </ChecklistItem>
          <ChecklistItem id="spring5_journal_getting_started">
            Harvesting the parsnips should have completed the &quot;Getting Started&quot; journal entry from which you can claim 100g.
          </ChecklistItem>
          <ChecklistItem id="spring5_parsnips_keep">
            Keep gold <ItemStackText item="parsnip" quality="gold" label="Parsnips" /> for the community centre, a silver or regular one for Lewis's birthday and consider one for quests.{' '}
            You will still grow more for the Spring Crops Bundle.
          </ChecklistItem>
          <p>I've had zero gold out of 24 parsnips, so certainly expect to be planting a lot more.</p>
          <ChecklistItem id="spring5_caroline_gift">
            As going to the General Store it is an easy opportunity to give Caroline a <ItemStackText item="daffodil" />.
          </ChecklistItem>
          <ChecklistItem id="spring5_parsnips_trade">
            Take the parsnips you are going to sell to the General Store, as you can get the money immediately that way.{' '}
            Then buy enough seeds to replace those that you harvested as probably still need gold ones, and it is a fast way to level up the farming skill.
          </ChecklistItem>
          <ChecklistItem id="spring5_start_saving">Keep in mind you want 1,000g on Spring 7 (just 2 more days!) in case the Travelling Cart has the red cabbage seeds on the first possible visit at the highest possible price.</ChecklistItem>
          <ChecklistItem id="backpack_upgrade">
            <p>If after buying seeds you have 2,000g you can get the upgraded backpack, which will make fishing and visiting the mine easier.</p>
            <p>Getting the seeds is far more important if you can't get it now, just keep saving.</p>
          </ChecklistItem>
          <ChecklistItem id="unlock_community_centre">
            Visit the community centre before 1pm for Lewis to unlock it for you in  a cutscene event.
          </ChecklistItem>
          <ChecklistItem id="view_community_centre_tablet">
            After the cutscene you need to try and view the strange tablet inside the centre in the bottom left room.{' '}
            You won't be able to read it, but trying will attract the attention of the wizard soon.
          </ChecklistItem>
          <ChecklistItem id="spring5_plant_crops">
            Plant the seeds you just got, and ensure everything is watered.
          </ChecklistItem>
          <ChecklistItem id="spring5_mining">
            Visit the mine and aim for floor 5 and getting at least 20 copper for a furnace.{' '}
            Floor 10 is possible if get very lucky, but be careful of time and you probably need the upgraded backpack.
          </ChecklistItem>
          <section className="space-y-4">
            <h4 className="text-lg font-bold">Mines Advice</h4>
            <p>Keep <ItemStackText item="quartz" /> as gifts for Marnie, and consider keep each of the other gems for quests and museum, but if you are short of money they do sell well.</p>
            <p>Most of the other loot is not valuable to sell, and has other uses.</p>
            <p>The elevator only unlocks every 5 levels, generally want to aim to complete floors in multiples of 5. Be careful of the time.</p>
            <p>Any <ItemStackText item="spring_onion" label="Spring Onions" /> will be useful for energy, and you can also make <ItemStackText item="field_snack" />.</p>
            <p>kill any insects you see as they are easy and 125 of them will give a good weapon from the guild.</p>
            <p>Smashing boxes can also yield some useful items.</p>
          </section>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 6</h4>
          <ChecklistItem id="spring_scarecrow">
            <p>You should have gained Farming Level 1, so make a <ItemStackText item="scarecrow" /> to protect your crops.</p>
            <p>See <a target="_blank" href="https://stardewvalleywiki.com/File:Scarecrow_Range.png" className="break-all">https://stardewvalleywiki.com/File:Scarecrow_Range.png</a> for a good indication of the scarecrow range.</p>
          </ChecklistItem>
          <ChecklistItem id="spring_furnace">
            If you got enough copper, make the <ItemStackText item="furnace" /> to smelt the copper ore into more useful <ItemStackText item="copper_bar" />.{' '}
            Don't worry if can't yet, keep collecting copper ore and make it when you can.
          </ChecklistItem>
          <ChecklistItem id="spring6_foragables">As it is Saturday it is the last day before forageables are cleared and reset, so be sure to collect them.</ChecklistItem>
          <ChecklistItem id="spring6_marnie_gift">
            Hopefully got at least one <ItemStackText item="quartz" /> in the mine to gift to <Wiki>Marnie</Wiki>.
          </ChecklistItem>
          <ChecklistItem id="spring6_wizard">If you did the Community Centre cutscene, you should have a letter from the wizard and can visit him to unlock the Community Centre bundles.</ChecklistItem>
          <p>Now the Community Centre is fully unlocked, you can work on the Spring Foraging Bundle.</p>
          <p>I would save the spring seeds from the bundle to make Tea Saplings later.</p>
          <ChecklistItem id="spring6_saving">Another reminder that tomorrow the Travelling Cart might have the elusive red cabbage seeds. You need up to 1,000g for them so if you are short consider fishing and selling fish.</ChecklistItem>
          <ChecklistItem id="spring6_wood">Otherwise keep working on cutting trees for that foraging level and getting 300 wood.</ChecklistItem>
          <ChecklistItem id="spring6_more_fishing">If you run low on energy early in the day, fishing is a good low energy activity and is good at making money.</ChecklistItem>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 7</h4>
          <ChecklistItem id="spring7_cart_red_cabbage_seeds">
            The Travelling Cart may have red cabbage seeds so be sure to visit it. None of the other items it may sell are important right now.
          </ChecklistItem>
          <ChecklistItem id="birthday_lewis">
            Spring 7 is <a target="_blank" href="https://stardewvalleywiki.com/Lewis">Lewis'</a> birthday.{' '}
            The best gift you are likely to have is a <ItemStackText item="parsnip" /> planted at the start.{' '}
            He is likely to be by around his house or the town square.
          </ChecklistItem>
          <ChecklistItem id="spring7_gift_reset">
            The limit of 2 gifts per villager each week resets on Sunday, so you can give {' '}
            another <ItemStackText item="daffodil" /> to <Wiki>Caroline</Wiki> and {' '}
            another <ItemStackText item="quartz" /> to <Wiki>Marnie</Wiki>.
          </ChecklistItem>
          <ChecklistItem id="spring7_wood">Hopefully are able to get up to 300 wood.</ChecklistItem>
          <ChecklistItem id="beach_bridge_repair">
            <p>Take the 300 wood to the south east beach to repair the bridge and access the coral and sea urchin.</p>
            <p>Keep at least one <ItemStackText item="sea_urchin" /> for the community centre, and <ItemStackText item="coral" /> is useful for crafting.</p>
          </ChecklistItem>
          <ChecklistItem id="dye_bundle-sea_urchin">
            Find 1 <ItemStackText item="sea_urchin" /> for the community centre.
          </ChecklistItem>
          <ChecklistItem id="spring13_savings_target">
            Aim to have at least 2,000g to buy at least 20 <ItemStackText item="strawberry_seeds" /> on Spring 13.{' '}
            Better yet as many as you can water, maybe 3,000g for 30 or more.
          </ChecklistItem>
          <ChecklistItem id="fiberglass_fishing_pole">
            If you have the money and as many crops as you can manage you might start considering the <ItemStackText item="fiberglass_rod" /> for fishing.{' '}
            It costs 1,800g and can use <Wiki>Bait</Wiki> items which in its basic form <ItemStackText item="bait" /> is commonly found or can be made using <ItemStackText item="bug_meat" /> and will make fish bit much faster.
          </ChecklistItem>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 8</h4>
          <p>
            Nothing special, keep working on trees for foraging level, gifts, quests, mining, fishing etc.{' '}
            If you feel you can manage maybe plant more parsnips to get extra levels and money before Strawberry (cash crop) season on Spring 13.
          </p>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 9</h4>
          <ChecklistItem id="spring9_parsnips">
            <p>
              Spring 9 is the last day want to be planting parsnips,{' '}
              as they will be ready to harvest on Spring 13 which is the Egg Festival when can buy Strawberry Seeds.
            </p>
            <p>
              Unfortunately you can't sell Parsnips Spring 13 as the store is closed.{' '}
              However if have still not managed to get the 5 gold ones, will need to keep planting.
            </p>
          </ChecklistItem>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 10</h4>
          <ChecklistItem id="birthday_vincent">
            Spring 10 is <a target="_blank" href="https://stardewvalleywiki.com/Vincent">Vincent's</a> birthday.{' '}
            The best gift you are likely to have is a <ItemStackText item="daffodil" />.{' '}
            He is likely to go to the Museum then around town.
          </ChecklistItem>
          <ChecklistItem id="spring_tree_tappers">
            <p>
              You should get Foraging Level 4 sometime soon. Once you do make at least 3 <ItemStackText item="tapper" />{' '}
              and place them on trees to get{' '}
              <ItemStackText item="maple_syrup" />,{' '}
              <ItemStackText item="oak_resin" /> and {' '}
              <ItemStackText item="pine_tar" />.
            </p>
            <p>
              While you could use the <ItemStackText item="copper_bar" /> for tool upgrades,{' '}
              you probably won't have enough spare money at this point,{' '}
              and you will get plenty more copper after Spring 13 when money is a little more free.
            </p>
          </ChecklistItem>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 11</h4>
          <ChecklistItem id="robin_axe">
            <p>You will get a quest in the mail to find Robin's lost axe.</p>
            <Spoiler>
              <p>The axe is in the south east of the forest, just east of where the Spring Onions grow.</p>
            </Spoiler>
          </ChecklistItem>
        </section>
        <section className="space-y-4">
          <h4 className="text-lg font-bold">Day 12</h4>
          <ChecklistItem id="spring12_cart_red_cabbage_seeds">
            If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.
          </ChecklistItem>
        </section>
      </section>
    </div>
  );
};

