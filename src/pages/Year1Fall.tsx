import { PropsWithChildren, ReactNode } from "react";
import { GuideBirthdayInfo } from "../components/GuideBirthday";
import GuideDay from "../components/GuideDay";
import GuideSectionContainer from "../components/GuideSectionContainer";
import ChecklistItem from "../components/ChecklistItem";
import { GoldItem, GoldItems, Item, Items } from "../components/ItemStackText";
import CommunityBundle from "../components/CommunityBundle";
import Building from "../components/Building";
import Wiki from "../components/Wiki";
import GuideBirthdays from "../components/GuideBirthdays";
import Spoiler from "../components/Spoiler";

const birthdays: GuideBirthdayInfo[] = [
  {
    day: 2,
    name: "Penny",
    content: <>
      If you have a spare <GoldItem>melon</GoldItem> or <GoldItem>poppy</GoldItem>{' '}
      they are the best you are likely to have.
      Otherwise a <Item>diamond</Item> or <Item>emerald</Item> or any Book.
      She is likely to head to the Library until 2pm, then be around town until 6:30pm
      before returning to her trailer.
    </>
  },
  {
    day: 5,
    name: "Elliott",
    content: <>
      If you have a <Item>duck feather</Item> already, or you got a <Item>Lobster</Item> in an
      ocean Crab Pot then those are loved gifts.
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
      She will be at home at her shop until 3pm, by the pond until 5pm,
      the sand dragon until 6pm, the bus until 7pm,
      and then the trader until 7pm before heading home again.
      Note that if you never visited yet, it seems you must do so before she leaves the shop so
      that you get the introduction cutscene. If you come in the evening you can talk to her
      with Emily but she will not accept gifts.
    </>
  },
  {
    day: 18,
    name: "Marnie",
    content: <>
      A <Item>Diamond</Item> is a loved gift, otherwise one of the <Wiki>Universal Likes</Wiki>.
      She also visits the clinic today at 12:30 until 4.
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
    <GuideSectionContainer title={title} href={id}>
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
        <ChecklistItem id="dye_bundle-duck_feather">
          Save a <Item>Duck Feather</Item> for the Dye Bundle.
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
          Also need a <Wiki>Pig</Wiki> to get a <Item>Truffle</Item> for the Chef's Bundle and
          that means getting a Deluxe Barn.
        </p>
        <Building id="deluxe_barn" />
        <ChecklistItem id="fall_pig">
          Buy at least 1 <Wiki>Pig</Wiki> for 16,000g.
        </ChecklistItem>
        <ChecklistItem id="fall_sheep">
          Buy at least 1 <Wiki>Sheep</Wiki> for 8,000g.
        </ChecklistItem>
        <ChecklistItem id="fall_sheers">
          You will need <Wiki>Sheers</Wiki> by the time the sheep are grown in order to collect wool,
          which should take 5 days.
          You can also use Wool for the Animal Bundle if you didn't complete it already.
        </ChecklistItem>
        <ChecklistItem id="fall_loom">
          You will need a <Wiki>Loom</Wiki> to turn the <Item>Wool</Item> into <Item>Cloth</Item>.
          You can use that for the Artisan Bundle if you didn't complete it already.
        </ChecklistItem>
        <ChecklistItem id="chefs_bundle-truffle">
          Save a <Item>Truffle</Item> for the Chef's Bundle.
        </ChecklistItem>
        <ChecklistItem id="fall_oil_maker">
          You can use an <Wiki>Oil Maker</Wiki> to make <Item>Truffle Oil</Item> from <Items>Truffle</Items>.
        </ChecklistItem>
        <p>
          And finally a <Wiki>Rabit</Wiki> to get a <Item>Rabbit's Foot</Item> for the Enchanter's Bundle.
        </p>
        <Building id="deluxe_coop" />
        <ChecklistItem id="fall_rabbit">
          Buy at least 1 <Wiki>Rabit</Wiki> for 8,000g.
        </ChecklistItem>
        <ChecklistItem id="enchanters_bundle-rabits_foot">
          Save a <Item>Rabbit's Foot</Item> for the Enchanter's Bundle.
        </ChecklistItem>
      </GuideSection>
      <GuideSection title="Fishing">
        <p>
          Fishing can continue to be a good money maker, and you can now complete some more bundles.
          Keep making <Item>Deluxe Bait</Item> from <Item>Moss</Item>.
          If you run out of <Item>Bait</Item> and <Item>Bug Meat</Item> its still much cheaper to buy
          the basic bait for 5g from the fishing shop.
          Harvest any mossy trees you see while travelling around.
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
        <Day day={1}>
          <p>As always the start of the season will be extremely busy with planting new crops.</p>
          <ChecklistItem id="fall1_rare_seeds">
            <p>
              Any <Items>rare_seed</Items> you got from the cart should be planted as the{' '}
              <Items>Sweet Gem Berry</Items> they grow into is by far the highest return.
              If you have or can make any <Item>Quality Fertilizer</Item> then that is best for these,
              but definitely use at least <Item>Basic Fertilizer</Item>.
            </p>
            <p>
              Since these take 24 days to grow, I used some <Items>Quality Sprinkler</Items> I got
              for free so can plant them a bit out of the way with a Scarecrow and just leave them
              alone for the season.
            </p>
          </ChecklistItem>
          <ChecklistItem id="fall1_beets">
            For the quest you might have started already you need 10 <Items>beet</Items>, but you
            need to reach the Desert to get the seeds.
          </ChecklistItem>
          <ChecklistItem id="fall1_corn">
            You need 5 <GoldItems>corn</GoldItems> for the the Quality Crops Bundle, and you want
            1 for the Fall Crops Bundle. If you are on target from Spring then you might not need
            any extras.
          </ChecklistItem>
          <ChecklistItem id="fall1_pumpkin">
            <p>
              If you managed to get 5 each of <GoldItems>parsnip</GoldItems>,{' '}
              <GoldItems>melon</GoldItems> and <GoldItems>corn</GoldItems> then you won't need
              <GoldItems>pumpkin</GoldItems> for the Quality Crops Bundle.
              Otherwise this is your chance to recover that, and will need to plant a large amount,
              be sure to use fertilizer to maximize the chance of gold crops.
            </p>
            <p>
              Pumpkins take 13 days to grow, so there will be a chance for a 2nd harvest if needed.
            </p>
            <p>
              Otherwise you need one for the Fall Crops Bundle some extra for gifts and quests,
              and they are one of the most profitable crops in Fall just behind Cranberries.
            </p>
          </ChecklistItem>
          <ChecklistItem id="fall1_wheat">
            Carry on growing <Item>Wheat</Item>.
          </ChecklistItem>
          <ChecklistItem id="fall1_fairy_rose">
            Plant some <Item>Fairy Rose</Item> near the bees.
          </ChecklistItem>
          <ChecklistItem id="fall1_other_crops">
            The other single-harvest crops for Fall to grow a small amount of are{' '}
            <Item>amaranth</Item>, <Item>yam</Item> and <Item>bok choy</Item>.
            You can use <Item>Basic Fertilizer</Item> for these, but if you have any <Item>Quality Fertilizer</Item>
            then that is better.
          </ChecklistItem>
          <ChecklistItem id="fall1_other_crops_multi">
            And a small amount of the mult-harvest Fall crops <Items>eggplant</Items> and <Items>grape</Items>.
            <Item>Speed-Gro</Item> will get 1 extra harvest for grapes.
            Grapes are notable that you can use a Keg to make <Item>Wine</Item> to sell for a lot more,
            but consider how many Kegs you have and how much extra Wine could realistically make.
          </ChecklistItem>
          <ChecklistItem id="fall1_broccoli">
            Seeds for <Item>broccoli</Item> are not sold, but you might have got some free ones so plant those.
          </ChecklistItem>
          <ChecklistItem id="fall1_cranberries">
            If you plant <Items>cranberries</Items> on the first day then Speed-Gro won't get any
            extra harvests, so just use <Item>Basic Fertilizer</Item> to boost quality.
            This is the best cash crop for the season that can buy more seeds for,
            so plant as many as you can.
          </ChecklistItem>
        </Day>

        <Day day={2}>
          <ChecklistItem id="fall2_livestock">
            Now all the crops are planted for the season, I would start focusing on the Livestock section.
            You will need a lot of wood, carrying on with mining when luck is good is a good way to get the stone.
          </ChecklistItem>
          <ChecklistItem id="fall2_special_orders">
            <p>
              The first time you enter the town there is a cutscene showing Lewis and Robin installing
              a new <Wiki>Special Orders</Wiki> board for bigger quests than the one at the store.
              Unhelpfully also further away from the farm...
            </p>
            <p>
              These orders reset each Monday and count down regardless if accepted or not, so there is
              no benefit in waiting to accept.
            </p>
            <p>
              If you start an order but run out of time, you can recover any items already provided from
              the Lost &amp; Found.
              Although not made clear, for most quests you must obtain the items <em>after</em> starting
              the quest, you can not just provide items you already had stored.
            </p>
            <p>
              You can also have multiple active quests at once, but you can only accept <em>one of the options</em> each week.
            </p>
            <p>
              From now on check the orders board every Monday. They are worth doing as provide gold and
              friendship rewards, as well as some special items.
            </p>
          </ChecklistItem>
          <ChecklistItem id="fall2_robins_project">
            I'm going to mention Robin's Project quest as I believe it will always be one of the initial
            ones, which means Fall 2 at the earliest and 6 days at most to complete.

            If this is the case, then only bother with it if you have an additional source of{' '}
            <Item>hardwood</Item> to the Secret Woods, as going every day you can only get 72 (6x12).
            For example you planted a <Wiki>Mahogany Tree</Wiki>.
            Otherwise you are probably better off with the other quest option.

            The quest will be repeated again sometime in the future.
          </ChecklistItem>
        </Day>
        <Day day={3}>
          <ChecklistItem id="fall3_marnie_cows">
            Marnie wants some <Item>amaranth</Item> for her cows.
            If you planted some on the first day they should be ready on Monday Fall 8th,
            so she will just have to wait for now.
          </ChecklistItem>
        </Day>
        <Day day={4}>
          <ChecklistItem id="fall4_wheat">
            First harvest of <Item>Wheat</Item> (plus some <Item>Hay</Item>),
            which can be made into <Item>Beer</Item> for more income.
          </ChecklistItem>
          <ChecklistItem id="fall4_bok_choy">
            Also first harvest of <Item>Bok Choy</Item>, keep some for quests and
            sell any extras.
          </ChecklistItem>
          <ChecklistItem id="fall4_replant">
            Then replant both.
          </ChecklistItem>
        </Day>
        <Day day={5}></Day>
        <Day day={6}>
          <ChecklistItem id="fall6_eggplants">
            First harvest of <Items>eggplant</Items>, save one for the crops bundle.
          </ChecklistItem>
        </Day>
        <Day day={7}></Day>
        <Day day={8}>
          <ChecklistItem id="fall8_blackberries">
            Fall 8 to 11 is <Item>Blackberry</Item> season, so you can collect a lot from the bushes each day.
            You should keep some for the bundle and any quests.
            They don't sell for much so might as well keep them as a gift or for energy, or make
            them into <Item>Jelly</Item>.
          </ChecklistItem>
          <ChecklistItem id="fall8_livestock">
            Going into the second week hopefully have the Big Coop and working on the Big Barn for goats
            as really want to get the Greenhouse for winter.
          </ChecklistItem>
          <ChecklistItem id="fall8_amaranth">
            First harvest of <Item>Amaranth</Item>, save some for quests and use one for Marnie's cows quest.
          </ChecklistItem>
          <ChecklistItem id="fall8_marnie">
            Give Marnie her <Item>amaranth</Item>.
          </ChecklistItem>
          <ChecklistItem id="fall8_cranberries">
            First harvest of <Items>cranberries</Items>, save some for quests and sell the rest for an influx of money.
            That should help with the buildings and buying the animals.
          </ChecklistItem>
          <ChecklistItem id="fall8_linus_basket">
            <p>
              You will get a quest in the Mail from Linus to find his basket.
              There is no cash reward but might as well still do it while out and about.
            </p>
            <Spoiler>
              Look west of the bus stop near the tunnel.
            </Spoiler>
          </ChecklistItem>
        </Day>
        <Day day={9}></Day>
        <Day day={10}></Day>
        <Day day={11}>
          <ChecklistItem id="fall11_yams">
            First harvest of <Items>yam</Items>, save one for the crops bundle.
          </ChecklistItem>
        </Day>
        <Day day={12}></Day>
        <Day day={13}>
          <ChecklistItem id="fall13_cranberries">
            Second harvest of <Items>cranberries</Items> so another big influx of money.
            Hopefully at this point already got enough money for all the animals,
            and going forward will be saving for the Vault Bundles to reach the Desert.
          </ChecklistItem>
        </Day>
        <Day day={14}>
          <ChecklistItem id="fall14_pumpkins">
            First harvest of <Items>pumpkin</Items>, save one for the crops bundle which should complete it.
          </ChecklistItem>
          <CommunityBundle bundle="fall_crops_bundle" />
        </Day>
        <Day day={15}></Day>
        <Day day={16}>
          <ChecklistItem id="fall16_shop_closed">
            Note that with the fair the shop will be closed today, and then will be closed on
            Wednesday as normal as well. So best buy any seeds you need already.
          </ChecklistItem>
          <ChecklistItem id="fall16_stardew_valley_fair">
            The <Wiki>Stardew Valley Fair</Wiki> is happening today in the town between 9am and 3pm.
            There is a number of useful items you can buy using "Star Tokens", but them most useful of
            them is the <Item>Stardrop</Item> which will <em>permanently</em> increase your max energy.
          </ChecklistItem>
          <ChecklistItem id="fall16_fish_minigame">
            The fishing minigame is in my opinion the easiest way to get Star Tokens,
            it costs 50g a time to play, you can repeat it as many times as you want and it gives easily
            500+ tokens a time.
            You can also play the other games as desired.
          </ChecklistItem>
          <ChecklistItem id="fall16_showcase">
            You will be invited to showcase you best items, with the potential to win up to 1,000 tokens.
            The scoring is pretty complicated, so check the wiki if you really want to put together a
            display for 1st place.
          </ChecklistItem>
        </Day>
        <Day day={17}></Day>
        <Day day={18}>
          <ChecklistItem id="fall18_cranberries">
            Another big <Item>Cranberries</Item> harvest. You should also by now have a good daily
            income of <Item>Cheese</Item> and <Item>Mayonnaise</Item> from your animals.
            Keep saving up for the animals and vault as needed.
          </ChecklistItem>
        </Day>
        <Day day={19}></Day>
        <Day day={20}></Day>
        <Day day={21}></Day>
        <Day day={22}>
          <ChecklistItem id="fall22_lastweek">
            Going into the last week hopefully you have the Fall bundles completed and just wrapping up some last bits.
            Make sure you prioritise any crops or fish that must be done in Fall.
            The animals can be finished in Winter if
          </ChecklistItem>
          <ChecklistItem id="fall_heaters">
            Going into winter your Coop and Barn will need a <Item>Heater</Item> each to keep the animals happy.
            You can get one by completing the Fodder Bundle, you will need to buy the other.
          </ChecklistItem>
          <CommunityBundle bundle="fodder_bundle" />
          <p>
            If you have spare money and resources, the first house upgrade is interesting as it
            gives you a kitchen for cooking many food options.
          </p>
          <Building id="farmhouse_upgrade_1" />
          <p>
            If you were able to get a <Item>Red Cabbage</Item> in Summer it should be possible to complete the Dye Bundle.
            Otherwise will be growing it next season using the Greenhouse.
          </p>
          <CommunityBundle bundle="dye_bundle" />
          <p>Should be finishing off all the Pantry bundles for the Greenhouse.</p>
          <CommunityBundle bundle="spring_crops_bundle" />
          <CommunityBundle bundle="summer_crops_bundle" />
          <CommunityBundle bundle="fall_crops_bundle" />
          <CommunityBundle bundle="quality_crops_bundle" />
          <CommunityBundle bundle="animal_bundle" />
          <CommunityBundle bundle="artisan_bundle" />
        </Day>
        <Day day={23}></Day>
        <Day day={24}></Day>
        <Day day={25}>
          <ChecklistItem id="fall25_sweetgem_berry">
            If you planted <Items>Rare Seed</Items> on the first day then the{' '}
            <Item>Sweet Gem Berry</Item> harvest should be ready today!
            Keep at least one for the Secret Woods quest.
          </ChecklistItem>
        </Day>
        <Day day={26}></Day>
        <Day day={27}>
          <ChecklistItem id="fall_spirits_eve">
            The <Wiki>Spirits Eve</Wiki> is happening today between 10 pm and 11:50pm.
            The main thing here is a a prize in the maze which can either use as a loved gift or sell.
            Unfortunately it also blocks access to the town all day, but it would also be too late to plant new fall seeds anyway.
          </ChecklistItem>
        </Day>
        <Day day={28}>
          <ChecklistItem id="fall28_end">
            Last day of the season, hopefully completed everything that was needed this season and are ready to start the Winter.
          </ChecklistItem>
          <ChecklistItem id="fall28_cranberries">
            Today should also be the last harvest of <Item>Cranberries</Item> bringing in some more
            money to start Winter with.
          </ChecklistItem>
          <ChecklistItem id="fall28_greenhouse_seeds">
            <p>
              You might consider buying seeds for the greenhouse, as they will not be sold in Winter.
              There is a total of 120 tiles for crops, although some would likely be used for sprinklers.
              There is also space for 18 fruit trees around the edges.
            </p>
            <p>
              An interesting choice is <Item>Cranberries</Item> as they have the highest
              gold per day return and can keep the same plant into future seasons.
              Another option is <Items>Pumpkin</Items> which are nearly as good but with a 13
              day base growing time and sprinklers, will need checking on less often.
            </p>
          </ChecklistItem>
        </Day>
      </section>
    </div>
  );
}
