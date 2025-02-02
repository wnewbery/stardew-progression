import { PropsWithChildren } from "react";
import { ReactNode } from "react";
import { GuideBirthdayInfo } from "../components/GuideBirthday";
import GuideDay from "../components/GuideDay";
import GuideSectionContainer from "../components/GuideSectionContainer";
import ChecklistItem from "../components/ChecklistItem";
import { Item } from "../components/ItemStackText";
import CommunityBundle from "../components/CommunityBundle";
import GuideBirthdays from "../components/GuideBirthdays";
import Building from "../components/Building";
import Wiki from "../components/Wiki";

const birthdays: GuideBirthdayInfo[] = [
  {
    day: 1,
    name: "Krobus",
    content: <>
      They are in the Sewers all day, but you will need to have got the Rusty Key from{' '}
      <Wiki>Gunther</Wiki> by donating 60 items to the Museum first, which is pretty
      likely by this point.
      You likely have a <Item>Wild Horseradish</Item>, <Item>Pumpkin</Item> or <Item>Diamond</Item> as a loved gift.
    </>
  },
  {
    day: 3,
    name: "Linus",
    content: <>
      A <Item>Yam</Item>, <Item>Coconut</Item> or <Item>Cactus Fruit</Item> are loved gifts.
      He will go to the Spa at 2pm then return home at 6pm.

    </>
  },
  {
    day: 7,
    name: "Caroline",
    content: <>
      <Item>Summer Spangle</Item> or <Item>Green Tea</Item> are loved gifts.
      She is likely to head to the tree south of the community centre at 2:40 pm then return home
      at 6:30pm.
    </>
  },
  {
    day: 10,
    name: "Sebastian",
    content: <>
      <Item>Frozen Tear</Item>  is a loved gift.
      He is likely to around his house all day.
    </>
  },
  {
    day: 14,
    name: "Harvey",
    content: <>
      <Item>Coffee</Item>, any <Item>Pickles</Item> or <Item>Wine</Item> are loved gifts.
      He is likely to be at the clinic until going to the saloon at 5:50 pm.
    </>
  },
  {
    day: 17,
    name: "Wizard",
    content: <>
      <Item>Purple Mushroom</Item>, <Item>Solar Essence</Item>, <Item>Void Essence</Item> or{' '}
      <Item>Super Cucumber</Item> are loved gifts.
      He will be at his tower.
    </>
  },
  {
    day: 20,
    name: "Evelyn",
    content: <>
      You probably have one of the following loved gifts:{' '}
      <Item>Beet</Item>,{' '}
      <Item>Tulip</Item>,{' '}
      <Item>Fairy Rose</Item> or{' '}
      <Item>Diamond</Item>.
      She is likely to be at home.
    </>
  },
  {
    day: 23,
    name: "Leah",
    content: <>
      <Item>Goat Cheese</Item> and <Item>Wine</Item> are loved gifts.
      She is likely to be at home until going to the saloon at 4 pm.
    </>
  },
  {
    day: 26,
    name: "Clint",
    content: <>
      A <Item>Gold Bar</Item>, <Item>Omni Geode</Item> or many of the gems are loved gifts;
      <Item>Amethyst</Item>, <Item>Aquamarine</Item>, <Item>Emerald</Item>,{' '}
      <Item>Ruby</Item> or <Item>Topaz</Item>.
      If the Community Center is restored already, he will likely go straight there,
      then the saloon at 5pm.
      Otherwise he will work the blacksmiths until 7pm then go to the saloon.
    </>
  }
];

interface DayProps {
  day: number;
  title?: string;
  children?: ReactNode;
}
function Day({ day, title, children }: DayProps) {
  return <GuideDay season="Winter" birthdays={birthdays} day={day} title={title} children={children} />;
}

interface GuideSectionProps {
  title: string;
}
function GuideSection({ title, children }: PropsWithChildren<GuideSectionProps>) {
  let id = '/year1-winter/' + title.toLowerCase().replace(/ /g, '_');
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
      <h2 className="text-2xl font-bold">First Year Winter</h2>

      <GuideSection title="Previous Progress">
        <p>
          You really should have the following completed already,
          they won't be mentioned again for this season.
          If not you will need to look to for if and how they can be completed.
        </p>
        <ChecklistItem id="chefs_bundle-truffle">
          Have upgraded the barn, got pigs, and saved at least one <Item>Truffle</Item> for
          the Chef's Bundle.
        </ChecklistItem>
        <ChecklistItem id="chefs_bundle-fiddlehead_fern">
          Have saved a <Item>Fiddlehead Fern</Item> for the Chef's Bundle.
        </ChecklistItem>
        <ChecklistItem id="chefs_bundle-poppy">
          Have saved a <Item>Poppy</Item> for the Chef's Bundle.
        </ChecklistItem>
        <ChecklistItem id="field_research_bundle-purple_mushroom">
          Have saved a <Item>Purple Mushroom</Item> for the Field Research Bundle.
        </ChecklistItem>
        <ChecklistItem id="enchanters_bundle-pomegranate">
          Have saved a <Item>Pomegranate</Item> for the Enchanter's Bundle.
        </ChecklistItem>
        <p>All the following bundles should be fully completed.</p>
        <CommunityBundle bundle="spring_foraging_bundle" />
        <CommunityBundle bundle="summer_foraging_bundle" />
        <CommunityBundle bundle="fall_foraging_bundle" />
        <CommunityBundle bundle="construction_bundle" />
        <CommunityBundle bundle="exotic_foraging_bundle" />
        <CommunityBundle bundle="spring_crops_bundle" />
        <CommunityBundle bundle="summer_crops_bundle" />
        <CommunityBundle bundle="fall_crops_bundle" />
        <CommunityBundle bundle="quality_crops_bundle" />
        <CommunityBundle bundle="animal_bundle" />
        <CommunityBundle bundle="artisan_bundle" />
        <CommunityBundle bundle="river_fish_bundle" />
        <CommunityBundle bundle="lake_fish_bundle" />
        <CommunityBundle bundle="ocean_fish_bundle" />
        <CommunityBundle bundle="night_fishing_bundle" />
        <CommunityBundle bundle="crab_pot_bundle" />
        <CommunityBundle bundle="blacksmiths_bundle" />
        <CommunityBundle bundle="geologists_bundle" />
        <CommunityBundle bundle="adventurers_bundle" />
        <CommunityBundle bundle="fodder_bundle" />
      </GuideSection>
      <GuideSection title="Winter Objectives">
        <p>Last of the bundles to finish off, which should be these.</p>
        <CommunityBundle bundle="winter_foraging_bundle" />
        <CommunityBundle bundle="specialty_fish_bundle" />
        <CommunityBundle bundle="dye_bundle" />
        <CommunityBundle bundle="chefs_bundle" />
        <CommunityBundle bundle="dye_bundle" />
        <CommunityBundle bundle="field_research_bundle" />
        <CommunityBundle bundle="enchanters_bundle" />
      </GuideSection>
      <GuideBirthdays season="Winter" birthdays={birthdays} />
      <section className="space-y-8">
        <h3 className="text-xl font-bold">Day Guide</h3>
        <Day day={1}>
          <ChecklistItem id="winter1_heaters">
            Make sure you have a <Item>Heater</Item> for both the Coop and Barn.
          </ChecklistItem>
          <ChecklistItem id="winter1_greenhouse">
            You should have the Greenhouse so can grow some crops indoors.

            Note, this is not a solution if you previously missed things like the quality crops,
            as you need those to complete the Pantry Bundles in order to get the Greenhouse.
          </ChecklistItem>
          <ChecklistItem id="winter1_desert">
            You should have access to the desert already, so at some point head over there to
            catch a <Item>Sandfish</Item> for the Specialty Fish Bundle if you have not already.
          </ChecklistItem>
          <ChecklistItem id="winter1_cooking">
            To make some cooked items for the Chef's Bundle you can either upgrade the Farmhouse
            to get a kitchen, or you can use a <Item>Cookout Kit</Item>.
          </ChecklistItem>
          <Building id="farmhouse_upgrade_1" />
          <ChecklistItem id="winter1_rice">
            You need <Item>Rice</Item> to make a <Item>Maki Roll</Item>.
            You can buy rice from the store, or build a Mill to make it from <Item>Unmilled Rice</Item>.
          </ChecklistItem>
          <Building id="mill" />
          <ChecklistItem id="winter1_red_cabbage">
            If you have a <Item>Red Cabbage</Item> already then you should be able to have completed the Dye Bundle.
            If you have the <Item>Red Cabbage Seeds</Item> then you can grow them in the Greenhouse.
            If you still don't have them, keep checking the cart.
            With the guaranteed 1st year completable the cart will have them at least once in time
            to be grown, but if you didn't visit or didn't buy on that day it won't guarantee to
            repeat them.
          </ChecklistItem>
          <ChecklistItem id="winter1_forage">
            New forage items so be sure to keep a look out.
            Notably want to complete the Winter Foraging Bundle and get a{' '}
            <Item>Nautilus Shell</Item> on the beach to complete the Field Research Bundle.
          </ChecklistItem>
          <ChecklistItem id="winter1_rabitsfoot">
            Keep looking after your animals to get a <Item>Rabbit's Foot</Item> for the
            Enchanter's Bundle, which you should then be able to complete.
          </ChecklistItem>
        </Day>
      </section>
    </div>
  );
};

