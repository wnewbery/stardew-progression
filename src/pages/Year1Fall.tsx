import { PropsWithChildren, ReactNode } from "react";
import { GuideBirthdayInfo } from "../components/GuideBirthday";
import GuideDay from "../components/GuideDay";
import GuideSectionContainer from "../components/GuideSectionContainer";
import ChecklistItem from "../components/ChecklistItem";
import ItemStackText, { GoldItem, GoldItems, Item } from "../components/ItemStackText";
import CommunityBundle from "../components/CommunityBundle";
import Building from "../components/Building";
import Wiki from "../components/Wiki";
import GuideBirthdays from "../components/GuideBirthdays";

const birthdays: GuideBirthdayInfo[] = [
  {
    day: 2,
    name: "Penny",
    content: <>
      If you have a spare <GoldItem>melon</GoldItem> or <GoldItem>poppy</GoldItem>{' '}
      they are the best you are likely to have.
      Otherwise a <GoldItem>diamond</GoldItem> or <GoldItem>emerald</GoldItem> or any Book.
      She is likely to head to the Library until 2pm, then be around town until 6:30pm
      before returning to her trailer.
    </>
  },
  {
    day: 5,
    name: "Elliott",
    content: <>
      If you have a <Item>duck feather</Item> already then that is a loved gift.
      Otherwise one of the <Wiki>Universal Likes</Wiki>.
      He is likely to leave his cabin to stand on the beach between
      12pm and 1:30pm, and 3pm and 6pm.
    </>
  },
  {
    day: 11,
    name: "Jodi",
    content: <>
      A <Item>Diamond</Item> is a loved gift,
      or complete the 2,500g Vault Bundle for a <Wiki>Chocolate Cake</Wiki>.
      Otherwise one of the <Wiki>Universal Likes</Wiki>.
      She is likely to be at home until 1:30pm then in town until 4pm before heading home again.
    </>
  },
  {
    day: 13,
    name: "Abigail",
    content: <>
      If you speed grew a <Item>pumpkin</Item> then that is a easy loved gift,
      otherwise <Item>pufferfish</Item>, <Item>amethyst</Item> and <Item>chocolate cake</Item> are
      also loved gifts.
      She is likely to head to the bus stop at 1pm then head home at 5pm, and in her room from 6:30pm.
    </>
  },
  {
    day: 15,
    name: "Sandy",
    content: <>
      You need to have reached the Desert to meet Sandy.
      A <Item>Daffodil</Item> or <Item>Sweet Pea</Item> are easy loved gifts.
      She will be at home until 3pm, by the pond until 5pm,
      the sand dragon until 6pm, the bus until 7pm,
      and then the trader until 7pm before heading home again.
    </>
  },
  {
    day: 18,
    name: "Marnie",
    content: <>
      A <Item>Diamond</Item> is a loved gift, otherwise one of the <Wiki>Universal Likes</Wiki>.
      She will be at home all day.
    </>
  },
  {
    day: 21,
    name: "Robin",
    content: <>
      <Item>Goat Cheese</Item> is a loved gift, otherwise one of the <Wiki>Universal Likes</Wiki>.
      She is likely to be at home until 5pm, then around the nearby mountain area.
    </>
  },
  {
    day: 24,
    name: "George",
    content: <>
      A <Item>Leek</Item> is a loved gift, otherwise a <Item>Daffodil</Item> or one of the <Wiki>Universal Likes</Wiki> except flowers.
      He will be at home all day.
    </>
  }
]

interface DayProps {
  day: number;
  title?: string;
  children?: ReactNode;
}
function Day({ day, title, children }: DayProps) {
  return <GuideDay season="Fall" birthdays={birthdays} day={day} title={title} children={children} />;
}

interface GuideSectionProps {
  title: string;
}
function GuideSection({ title, children }: PropsWithChildren<GuideSectionProps>) {
  let id = '/year1-fall/' + title.toLowerCase().replace(/ /g, '_');
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
      <h2 className="text-2xl font-bold">First Year Fall</h2>
      <GuideSection title="Previous Progress">
        <p>
          You really want to have the following completed already, if not you will need to look
          for other ways to complete them.
        </p>
        <ChecklistItem id="fall_apple_tree">
          Have planted an <Wiki>Apple Tree</Wiki> for the Artisan Bundle.
        </ChecklistItem>
        <ChecklistItem id="fall_pomegranate_tree">
          Have planted a <Wiki>Pomegranate Tree</Wiki> for the Artisan Bundle.
        </ChecklistItem>
        <ChecklistItem id="quality_crops_bundle-parsnip">
          Grow and harvest 5 <GoldItems>parsnip</GoldItems>.
        </ChecklistItem>
        <ChecklistItem id="quality_crops_bundle-melon">
          Grow and harvest 5 <GoldItems>melon</GoldItems>.
        </ChecklistItem>
        <ChecklistItem id="river_fish_bundle-sunfish">
          Catch a <Item>sunfish</Item>.
        </ChecklistItem>
        <ChecklistItem id="specialty_fish_bundle-pufferfish">
          Catch a <Item>pufferfish</Item>.
        </ChecklistItem>
        <CommunityBundle bundle="spring_foraging_bundle" />
        <CommunityBundle bundle="spring_crops_bundle" />
        <CommunityBundle bundle="summer_foraging_bundle" />
        <CommunityBundle bundle="summer_crops_bundle" />
        <p>
          And are also expecting the following to be completed, so will not mention them in further detail here.
        </p>
        <ChecklistItem id="fall_honey">
          Have bees making <Item>honey</Item> for the Artisan Bundle.
        </ChecklistItem>
        <ChecklistItem id="fall_jelly">
          Have a <Wiki>Preserves Jar</Wiki> and made <Item>jelly</Item> for the Artisan Bundle.
        </ChecklistItem>
        <Building id="silo" />
        <Building id="coop" />
        <ChecklistItem id="fall_chickens">
          At least 1 white and 1 brown chicken.
        </ChecklistItem>
        <Building id="barn" />
        <ChecklistItem id="fall_cows">
          At least 1 cow.
        </ChecklistItem>
        <Building id="stable" />
        <CommunityBundle bundle="construction_bundle" />
        <CommunityBundle bundle="exotic_foraging_bundle" />
        <CommunityBundle bundle="lake_fish_bundle" />
        <CommunityBundle bundle="ocean_fish_bundle" />
        <CommunityBundle bundle="crab_pot_bundle" />
        <p>All Boiler Room Bundles.</p>
        <CommunityBundle bundle="blacksmiths_bundle" />
        <CommunityBundle bundle="geologists_bundle" />
        <CommunityBundle bundle="adventurers_bundle" />
      </GuideSection>
      <GuideSection title="Community Centre Objectives">
        <CommunityBundle bundle="fall_foraging_bundle" />
        <CommunityBundle bundle="fall_crops_bundle" />
        <CommunityBundle bundle="quality_crops_bundle" />
        <CommunityBundle bundle="animal_bundle" />
        <CommunityBundle bundle="artisan_bundle" />
        <p>Complete the River Fish and Night Fishing Bundles now it is possible.</p>
        <CommunityBundle bundle="river_fish_bundle" />
        <CommunityBundle bundle="night_fishing_bundle" />
        <CommunityBundle bundle="fodder_bundle" />
        <CommunityBundle bundle="enchanters_bundle" />
        <ChecklistItem id="vault_bundles">
          Complete the Vault Bundles for 42,500g to reach the <Wiki>Desert</Wiki>.
        </ChecklistItem>
        <p>Get to the desert to complete bundles.</p>
        <CommunityBundle bundle="specialty_fish_bundle" />
        <p>If you managed to get the <Item>Red Cabbage</Item> already.</p>
        <CommunityBundle bundle="dye_bundle" />
      </GuideSection>
      <GuideSection title="Livestock">
        <p>
          You should already have chickens and cows, and thus be making mayonnaise and cheese.
          You should also have bees making honey.
        </p>
        <p>
          You will want about 1,000 <Item>hay</Item> going into Winter.
          Having 4 silos is the easiest way, but it is also possible to move the hay manually
          between 1 silo and a chest.
        </p>
        <Building id="silo" number={2} />
        <Building id="silo" number={3} />
        <Building id="silo" number={4} />
        <p>
          You need ducks to get a <Item>Duck Egg</Item> for the Animal Bundle, and
          a <Item>Duck Feather</Item> for the Dye Bundle.
        </p>
        <Building id="big_coop" />
        <ChecklistItem id="fall_ducks">
          Buy at least 1 <Wiki>Duck</Wiki> for 1,200g and be improving its happiness as feathers only
          drop at high happiness.
        </ChecklistItem>
        <p>
          Next will want to get a <Wiki>Goat</Wiki> so can get
          a <Item>Large Goat Milk</Item> for the Animal Bundle, and
          a <Item>Goat Cheese</Item> for the Artisan Bundle.
        </p>
        <Building id="big_barn"></Building>
        <ChecklistItem id="fall_goat">
          Buy at least 1 <Wiki>Goat</Wiki> for 4,000g and be improving its happiness as large milk
          only drops at high happiness.
        </ChecklistItem>
        <p>You can now complete the Animal Bundle using everything except Wool.</p>
        <CommunityBundle bundle="animal_bundle" />
        <ChecklistItem id="fall_artisan_bundle_cheeses">
          Save some <Item>Cheese</Item>, <Item>Goat Cheese</Item> and <Item>Honey</Item> for the Artisan Bundle.
        </ChecklistItem>
        <p>
          Finally need a <Wiki>Pig</Wiki> to get a <Item>Truffle</Item> for the Chef's Bundle and
          that means getting a Deluxe Barn.
        </p>
        <Building id="deluxe_barn" />
        <ChecklistItem id="fall_pig">
          Buy at least 1 <Wiki>Pig</Wiki> for 16,000g.
        </ChecklistItem>
        <ChecklistItem id="chefs_bundle-truffle">
          Save a <Item>Truffle</Item> for the Chef's Bundle.
        </ChecklistItem>
      </GuideSection>
      <GuideSection title="Fishing">
        <p>
          Fishing can continue to be a good money maker, and you can now complete some more bundles.
        </p>
        <p>
          If you didn't finish the Lake Fish Bundle already, make sure you save
          a <Item>Carp</Item> as you can't catch them in the Winter, and you can't
          catch <Item>Sturgeon</Item> this season.
        </p>
        <p>
          If you didn't finish the Ocean Fish Bundle already, make sure you save
          a <Item>Red Snapper</Item> and a <Item>Tilapia</Item> as you can't catch them in the
          Winter and you can't catch a <Item>Tuna</Item> this season.
        </p>
        <p>The River Fish Bundle and Night Fishing Bundle can be completed soon as you catch the fish.</p>
        <CommunityBundle bundle="river_fish_bundle" />
        <CommunityBundle bundle="night_fishing_bundle" />
        <p>Once you get to the Desert you can catch <Item>Sandfish</Item> and finish the Specialty Fish Bundle.</p>
        <CommunityBundle bundle="specialty_fish_bundle" />
      </GuideSection>
      <GuideBirthdays season="Fall" birthdays={birthdays} />
      <section className="space-y-8">
        <h3 className="text-xl font-bold">Day Guide</h3>
        <Day day={1}></Day>
        <Day day={2}></Day>
        <Day day={3}></Day>
        <Day day={4}></Day>
        <Day day={5}></Day>
        <Day day={6}></Day>
        <Day day={7}></Day>
        <Day day={8}></Day>
        <Day day={9}></Day>
        <Day day={10}></Day>
        <Day day={11}></Day>
        <Day day={12}></Day>
        <Day day={13}></Day>
        <Day day={14}></Day>
        <Day day={15}></Day>
        <Day day={16}></Day>
        <Day day={17}></Day>
        <Day day={18}></Day>
        <Day day={19}></Day>
        <Day day={20}></Day>
        <Day day={21}></Day>
        <Day day={22}></Day>
        <Day day={23}></Day>
        <Day day={24}></Day>
        <Day day={25}></Day>
        <Day day={26}></Day>
        <Day day={27}></Day>
        <Day day={28}></Day>
      </section>
    </div>
  );
}
