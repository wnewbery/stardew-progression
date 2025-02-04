import ChecklistItem from "../components/ChecklistItem";
import CommunityBundle from "../components/CommunityBundle";
import ItemStackText from "../components/ItemStackText";
import ArtifactImage from "../assets/Artifact_tile.gif";
import Wiki from "../components/Wiki";
import Spoiler from "../components/Spoiler";
import { PropsWithChildren, ReactNode } from "react";
import GuideSectionContainer from "../components/GuideSectionContainer";
import GuideDay from "../components/GuideDay";
import { GuideBirthdayInfo } from "../components/GuideBirthday";
import GuideBirthdays from "../components/GuideBirthdays";

const birthdays: GuideBirthdayInfo[] = [
  // Kent didn't move in yet
  // {
  //   day: 4,
  //   name: "Kent",
  //   content: <>
  //     A <ItemStackText item="daffodil" /> is a loved gift.
  //   </>
  // }
  {
    day: 7,
    name: "Lewis",
    content: <>
      The best gift you are likely to have is a <ItemStackText item="parsnip" /> planted at the start.{' '}
      He is likely to be by around his house or the town square.
    </>
  },
  {
    day: 10,
    name: "Vincent",
    content: <>
      The best gift you are likely to have is a <ItemStackText item="daffodil" />.{' '}
      He is likely to go to the Museum then around town.
    </>
  },
  {
    day: 14,
    name: "Haley",
    content: <>
      The best gift you are likely to have is a <ItemStackText item="daffodil" />.{' '}
      She is likely to go to the fountain around 12pm then heading home 4:30pm.
    </>
  },
  {
    day: 18,
    name: "Pam",
    content: <>
      The best gift you are likely to have is a <ItemStackText item="salmonberry" />.{' '}
      She is likely to go to JojaMart at 12pm then the saloon at 4pm.
    </>
  },
  {
    day: 20,
    name: "Shane",
    content: <>
      The best gift you are likely to have is a <ItemStackText item="salmonberry" />.{' '}
      He is likely to be at Marnie's, then go to the General Store at 12pm then the saloon at 5pm.
    </>
  },
  {
    day: 26,
    name: "Pierre",
    content: <>
      The best gift you are likely to have is a <ItemStackText item="parsnip" />, <ItemStackText item="daffodil" /> or <ItemStackText item="dandelion" />.{' '}
      He is likely to be at the General Store until 5pm then the saloon.
    </>
  },
  {
    day: 27,
    name: "Emily",
    content: <>
      If you are lucky you may have a loved gift; any gem except Diamond, or Cloth.{' '}
      Otherwise a <ItemStackText item="daffodil" /> or <ItemStackText item="quartz" />.{' '}
      She is likely to be in her room until 12p, then around the house until 3:30pm when she goes to work at the saloon.
    </>
  }
]

interface DayProps {
  day: number;
  title?: string;
  children?: ReactNode;
}
function Day({ day, title, children }: DayProps) {
  return <GuideDay season="Spring" birthdays={birthdays} day={day} title={title} children={children} />;
}

interface GuideSectionProps {
  title: string;
}
function GuideSection({ title, children }: PropsWithChildren<GuideSectionProps>) {
  let id = '/year1-winter/' + title.toLowerCase().replace(/ /g, '_');
  return (
    <GuideSectionContainer title={title} href={id}>
      {children}
    </GuideSectionContainer>
  );
}

export default () => {
  return (
    <div className="space-y-section max-w-4xl">
      <h1 className="text-2xl font-bold">First Year Spring</h1>
      <GuideSection title="Contents">
        <ul>
          <li>
            <ul>
              {Array.from({ length: 27 }, (_, i) => (
                <li key={i}><a href={`#/year1-spring/${i + 1}`}>Day {i + 1}</a></li>
              ))}
            </ul>
          </li>
        </ul>
      </GuideSection>
      <GuideSection title="Advice">
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
      </GuideSection>
      <GuideSection title="Community Centre Objectives">
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
        <ChecklistItem id="crab_pot_bundle-clam">
          Find 1 <ItemStackText item="clam" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="crab_pot_bundle-cockle">
          Find 1 <ItemStackText item="cockle" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="crab_pot_bundle-mussel">
          Find 1 <ItemStackText item="mussel" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="crab_pot_bundle-oyster">
          Find 1 <ItemStackText item="oyster" /> on the beach for the community centre.
        </ChecklistItem>
        <ChecklistItem id="dye_bundle-sea_urchin">
          Find 1 <ItemStackText item="sea_urchin" /> on the east beach after repairing the bridge for the community centre.
        </ChecklistItem>
        <p>At least 3 or 4 community bundles to be completed fully.</p>
        <CommunityBundle bundle="spring_crops_bundle" />
        <CommunityBundle bundle="spring_foraging_bundle" />
        <p>
          With some luck in the mines in the Spring you can get{' '}
          a <ItemStackText item="crab" /> from killing Rock Crabs on mine floors 1-29 and{' '}
          a <ItemStackText item="clam" />, <ItemStackText item="cockle" />, <ItemStackText item="mussel" />and <ItemStackText item="oyster" /> from the beach.
        </p>
        <CommunityBundle bundle="crab_pot_bundle" />
        <p>
          Probably the easiest is if you get some mushrooms (probably from the mushroom cave),
          tap trees and a cave carrot from the mines.
        </p>
        <CommunityBundle bundle="exotic_foraging_bundle" />
        <p>If you do really well in the mines, all the Boiler Room bundles may be possible as well.</p>
        <CommunityBundle bundle="blacksmiths_bundle" />
        <CommunityBundle bundle="geologists_bundle" />
        <CommunityBundle bundle="adventurers_bundle" />
      </GuideSection>
      <GuideSection title="Other Objectives">
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
      </GuideSection>
      <GuideSection title="Optional Community Centre Objectives">
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
      </GuideSection>
      <GuideBirthdays season="Spring" birthdays={birthdays} />

      <section className="space-y-section">
        <h3 className="text-xl font-bold">Day Guide</h3>
        <Day day={1}>
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
        </Day>
        <Day day={2}>
          <ChecklistItem id="spring2_crops">Make sure get in the habit of making sure every crop is watered every day.</ChecklistItem>
          <ChecklistItem id="spring_fishing_pole">Visit Willy by the ocean before 5pm to get the fishing pole.</ChecklistItem>
          <p>Nothing else critical today, can clear farm space, gather wood, plant any mixed seeds find, or carry on fishing.</p>
          <p>Main thing is to just ensure use up all your energy, and don't sleep late unless you got a skill level up.</p>
          <p>I sold most of the fish at this stage to rush towards 2,000g for the upgraded backpack.</p>
        </Day>
        <Day day={3}>
          <p>Nothing special about today, keep working on objectives especially trees and friendships.</p>
        </Day>
        <Day day={4}>
        </Day>
        <Day day={5}>
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
        </Day>
        <Day day={6}>
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
        </Day>
        <Day day={7}>
          <ChecklistItem id="spring7_cart_red_cabbage_seeds">
            The Travelling Cart may have red cabbage seeds so be sure to visit it. None of the other items it may sell are important right now.
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
        </Day>
        <Day day={8}>
          <p>
            Nothing special, keep working on trees for foraging level, gifts, quests, mining, fishing etc.{' '}
            If you feel you can manage maybe plant more parsnips to get extra levels and money before Strawberry (cash crop) season on Spring 13.
          </p>
        </Day>
        <Day day={9}>
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
        </Day>
        <Day day={10}>
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
        </Day>
        <Day day={11}>
          <ChecklistItem id="robin_axe">
            <p>You will get a quest in the mail to find Robin's lost axe.</p>
            <Spoiler>
              <p>The axe is in the south east of the forest, just east of where the Spring Onions grow.</p>
            </Spoiler>
          </ChecklistItem>
        </Day>
        <Day day={12}>
          <ChecklistItem id="spring12_cart_red_cabbage_seeds">
            If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.
          </ChecklistItem>
          <ChecklistItem id="spring12_sell">
            The shop is closed tomorrow so make sure put anything you want to sell in the shipping chest before sleeping.
          </ChecklistItem>
        </Day>
        <Day day={13}>
          <p>
            Spring 13 is the Egg Festival, start is by entering the town between 9am and 2pm.{' '}
            If you miss it you can quit and reload without saving.
          </p>
          <ChecklistItem id="spring13_harvest">
            Harvest any crops that are ready and water the soil ready to plant the strawberries after the festival.{' '}
            One seed costs 100g so you can have an idea of how many you can afford.{' '}
            Note that the shop is closed today so you can't sell anything.
          </ChecklistItem>
          <ChecklistItem id="spring13_festival">
            Once ready head to the festival in town. There is no advantage to being early, but make sure you are there before 2pm.
          </ChecklistItem>
          <ChecklistItem id="spring13_festival_chat">
            At the festival talk to everyone before starting the egg hunt.{' '}
            This is a good way to complete the Introductions objective if you missed anyone, but also just talking increases your friendship levels slightly.
          </ChecklistItem>
          <ChecklistItem id="spring13_buy_strawberries">
            Buy as many <ItemStackText item="strawberry_seeds" /> as you can afford and are able to water, I would go with at least 20, ideally 30+.
          </ChecklistItem>
          <ChecklistItem id="spring13_egg_hunt">
            Once finished you can start the egg hunt. Do as well as you can but winning the price is not essential.
            <Spoiler>The prize if you collect at least 9 eggs is a <ItemStackText item="straw_hat" /> cosmetic clothing item.</Spoiler>
          </ChecklistItem>
          <ChecklistItem id="spring13_plant_strawberries">
            After the egg hunt make sure all the strawberries are planted and watered.
          </ChecklistItem>
        </Day>
        <Day day={14}>
          <ChecklistItem id="spring14_cart_red_cabbage_seeds">
            If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.
          </ChecklistItem>
          <p>Some things to be making sure have been working on so far as well as catching up on anything missed previously.</p>
          <p>The two spring bundles. Keeping the spring seeds to make tea saplings.</p>
          <CommunityBundle bundle="spring_crops_bundle" />
          <CommunityBundle bundle="spring_foraging_bundle" />
          <p>If you managed to get the crab, you can complete the Crab Pot Bundle as well.</p>
          <CommunityBundle bundle="crab_pot_bundle" />
          <ChecklistItem id="museum_cauliflower_seeds">Also donating to the museum can get 9 Cauliflower Seeds as a reward.</ChecklistItem>
          <ChecklistItem id="spring14_parsnips">If you didn't get the 5 gold parsnips needed yet, you need to keep planting them until you do before the end of Spring.</ChecklistItem>
          <p></p>
          <p>You probably can not do all of the following now, but start working on them over the rest of the season.</p>
          <ChecklistItem id="spring_crab_pots">
            Place <ItemStackText item="crab_pot" /> either in the forest pond or the mountain lake where they are easy to check, and maybe the ocean if you have the crab too.{' '}
            You can move them between the ponds and ocean occasionally to get different items, but you need to check them every day.
          </ChecklistItem>
          <ChecklistItem id="axe_copper">
            If you have the money spare and come metal after making the tree taps,
            you might consider upgrading your Axe so that you can remove the large tree stumps for
            {' '}<ItemStackText item="hardwood" /> at the blacksmith for
            2,000g and 5 <ItemStackText item="copper_bar" />.
          </ChecklistItem>
          <ChecklistItem id="axe_steel">
            <p>
              If you get some iron from the mine and lots of money, you can further upgrade to a Steel Axe.
              This will allow you to remove the large logs, including the one in the North West of the Forest
              which blocks access to the <Wiki>Secret Woods</Wiki>.
            </p>
            <p>
              This is important as it renews the <ItemStackText item="hardwood" /> stumps everyday which you will
              be needing soon for farm buildings such as a Stable to greatly increase movement speed.
            </p>
            <p>
              Costs 5,000g and 5 <ItemStackText item="iron_bar" label="Iron Bars" />.
            </p>
          </ChecklistItem>
          <ChecklistItem id="pickaxe_copper">
            <p>
              Once you get to level 40 in the mines the starting pickaxe will need 3 hits for each
              rock which will rapidly use up energy. Consider upgrading to the Copper Pickaxe for
              2,000g and 5 <ItemStackText item="copper_bar" /> which can break them in 2 hits.
            </p>
            <p>It can also remove the large rocks on the farm.</p>
          </ChecklistItem>
          <ChecklistItem id="pickaxe_steel">
            If you can spare another 5,000g and 5{' '}
            <ItemStackText item="iron_bar" label="Iron Bars" /> then the Steel Pickaxe can break
            rocks until floor 80 in 1 hit, saving a lot of energy.
          </ChecklistItem>
        </Day>
        <Day day={15}>
          <ChecklistItem id="spring_salmonberries">
            <p>
              Spring 15 to 18 is <ItemStackText item="salmonberry" /> season which can be harvested
              by shaking the bushes which does not use energy.
              Hopefully you also have level 4 foraging so each bush will get 2 berries!
              Potentially you can get over 100 in the season without spending any energy.
            </p>
            <p>
              Salmonberries sell for very little, only 5g,
              but using them to make <ItemStackText item="jelly" /> using a{' '}
              <ItemStackText item="preserves_jar" /> raises this to 60g!
            </p>
            <p>
              They are also useful as gifts for <Wiki>Demetrius</Wiki>, <Wiki>Jodi</Wiki>,{' '}
              <Wiki>Kent</Wiki>, <Wiki>Leah</Wiki>, <Wiki>Linus</Wiki>, <Wiki>Pam</Wiki>,{' '}
              <Wiki>Robin</Wiki>, <Wiki>Sandy</Wiki> and <Wiki>Shane</Wiki>.
              And every character except <Wiki>Sebastian</Wiki> likes <ItemStackText item="jelly" />.
            </p>
          </ChecklistItem>
          <ChecklistItem id="spring_keep_salmonberries">
            <p>
              Keep at least 2 Salmonberries to make <ItemStackText item="wine" /> using a
              <ItemStackText item="keg" /> for the Enchanter's Bundle and when aged to
              silver quality for The Missing Bundle.
            </p>
            <p>Wine is also a <em>loved</em> gift for <Wiki>Harvey</Wiki> and <Wiki>Leah</Wiki>.</p>
          </ChecklistItem>
        </Day>
        <Day day={16}>
          <ChecklistItem id="spring16_salmonberries">Keep collecting <ItemStackText item="salmonberry" />.</ChecklistItem>
          <ChecklistItem id="spring16_cauliflower">
            <p>
              Spring 16 is the last day you can plant Cauliflower as Spring crops will die at the end of the season.
              With <ItemStackText item="speed_gro" /> you can plant on Spring 18.
            </p>
            <p>
              If you still don't have a <ItemStackText item="cauliflower" quality="gold" />,
              you should plant more now, possibly with <ItemStackText item="basic_fertilizer" /> to
              increase quality chances.
            </p>
          </ChecklistItem>
          <ChecklistItem id="museum_cauliflower_seeds">
            If you didn't get the 9 Cauliflower Seeds from the museum yet, now would be a good time to take your donations.
          </ChecklistItem>
        </Day>
        <Day day={17}>
          <ChecklistItem id="spring17_salmonberries">Keep collecting <ItemStackText item="salmonberry" />.</ChecklistItem>
          <p>Keep working on objectives.</p>
        </Day>
        <Day day={18}>
          <ChecklistItem id="spring18_salmonberries">
            Spring 18 is the last day you can collect <ItemStackText item="salmonberry" />.
          </ChecklistItem>
        </Day>
        <Day day={19}>
          <ChecklistItem id="spring19_jodi_cauliflower">
            Jodi will ask for a <ItemStackText item="cauliflower" /> in the mail.
            This doesn't need to be done today.
          </ChecklistItem>
          <ChecklistItem id="spring19_cart_red_cabbage_seeds">
            If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.
          </ChecklistItem>
          <ChecklistItem id="spring19_cart_rare_seed">
            If you have spare money, you might consider buying a <ItemStackText item="rare_seed" /> as the cart won't have many at a time.
            These costs 1,000g each but after 24 days in the Fall will sell for at least 3,000g so is a long term investment.
          </ChecklistItem>
        </Day>
        <Day day={20}>
        </Day>
        <Day day={21}>
          <ChecklistItem id="spring21_cart_red_cabbage_seeds">
            If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.
          </ChecklistItem>
          <ChecklistItem id="spring21_blue_jazz">Last day to plant Blue Jazz.</ChecklistItem>
        </Day>
        <Day day={22}>
          <ChecklistItem id="spring22_last_day">
            Last day to plant Kale, Potatoes, Rice and Tulips.
          </ChecklistItem>
          <ChecklistItem id="spring22_tea">
            Each day of the last week of spring can can harvest <ItemStackText item="tea_leaves" /> from a Tea Bush.
            If you got to two hearts with Caroline, she has one in her Sunroom in the General Store.
          </ChecklistItem>
          <ChecklistItem id="spring22_caroline_tea_sapling">
            If you go to Caroline's sunroom between 9 and 5 on a day that is not raining there
            will be a cutscene event.
            The next day she will send you the recipe to turn your{' '}
            <ItemStackText item="spring_seeds" /> into Tea Saplings so you can grow your own
            tea for Summer.
            Note that Tea Saplings do not need tilled ground or to be watered.
          </ChecklistItem>
        </Day>
        <Day day={23}>
          <ChecklistItem id="spring23_parsnip_seeds">
            Last day to buy Parsnip Seeds, last day to plant is Spring 24.
            If you didn't get the 5 gold ones yet, buy as many as you can and fertilize them.
          </ChecklistItem>
          <ChecklistItem id="spring23_tea">
            Harvest <ItemStackText item="tea_leaves" /> from the sunroom if you are able.
          </ChecklistItem>
        </Day>
        <Day day={24}>
          <p>You won't be able to harvest Tea Leaves today as the shop is locked.</p>
          <ChecklistItem id="spring24_flower_festival">
            The Flower Festival is in the forest to the south before 2pm.
          </ChecklistItem>
          <ChecklistItem id="spring24_parsnips">
            Last day to plant Parsnips so plant any seeds you have.
          </ChecklistItem>
        </Day>
        <Day day={25}>
          <ChecklistItem id="spring25_tea">
            Harvest <ItemStackText item="tea_leaves" /> from the sunroom if you are able.
          </ChecklistItem>
          <ChecklistItem id="spring25_regrow">
            At the end of the season all Spring crops will die, so as your Strawberries and other plants
            with multiple harvests complete, you can stop watering them to save some time and
            energy.
          </ChecklistItem>
        </Day>
        <Day day={26}>
          <ChecklistItem id="spring26_cart_red_cabbage_seeds">
            If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.
          </ChecklistItem>
          <ChecklistItem id="spring26_tea">
            Harvest <ItemStackText item="tea_leaves" /> from the sunroom if you are able.
          </ChecklistItem>
          <ChecklistItem id="spring_silo">
            If you get Robin to build a Silo today, it will be ready for the summer to start
            collecting <ItemStackText item="hay" /> for animals.
            It costs <ItemStackText item="stone" count={100} />,{' '}
            <ItemStackText item="clay" count={10} /> and{' '}
            <ItemStackText item="copper_bar" count={5} />.
          </ChecklistItem>
          <ChecklistItem id="spring26_stable">
            Also consider working on hardwood for a stable once you get the upgraded for the extra mobility of a horse.
            It needs 10,000g,{' '}
            <ItemStackText item="hardwood" count={100} /> and{' '}
            <ItemStackText item="iron_bar" count={5} />.
            But probably don't buy it until you have brought the Summer crop seeds.
          </ChecklistItem>
        </Day>
        <Day day={27}>
          <ChecklistItem id="spring27_tea">
            Harvest <ItemStackText item="tea_leaves" /> from the sunroom if you are able.
          </ChecklistItem>
          <ChecklistItem id="spring27_watering_can">
            If you have the money and spare copper, today as with rain is a good day to upgrade your watering can.
            The reason is that since all the crops will die at the end of the season,
            you do not need to water them on Spring 28.
          </ChecklistItem>
        </Day>
        <Day day={28}>
          <ChecklistItem id="spring28_last_day">
            Final day of spring, so harvest any remaining crops but you do not need to water them, as everything will die anyway.
          </ChecklistItem>
          <ChecklistItem id="spring28_cart_red_cabbage_seeds">
            If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.
          </ChecklistItem>
          <ChecklistItem id="spring28_tea">
            Harvest <ItemStackText item="tea_leaves" /> from the sunroom if you are able.
          </ChecklistItem>
        </Day>
      </section>
    </div>
  );
};

