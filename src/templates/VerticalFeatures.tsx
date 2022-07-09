import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { GemTheme } from '../gem/Gem';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="The best MMORPG ever"
    subtitle="is waiting for YOU to be unearthed"
    description="From the creators of other acclaimed masterpieces such as Last Fantasy XIV, Penultima Online, Planet of
     Combatsmith and Habbo Hotel, comes this fast-paced, action-packed, artisan survival massive multiplayer online 
     text-based game that will keep your tits all uncalmed down"
  >
    <VerticalFeatureRow
      title="Get down on your knees"
      icons={['garlic', 'beer', 'carrot', 'christian-cross', 'mushroom']}
      subtitle="Bend Over and Get Ready to Pull Out!"
      description="Easy to get into, but hard to master, garlic picking is no joke! Evolve your character with thousands
       of skill combinations and perks that suit to your own unique personal playstyle!"
      image="/assets/images/features/farm.jpg"
      imageAlt="Watch out for you lower back!"
      gemTheme={GemTheme.Emerald}
      decoratedVariant={[1, 1]}
      reverse
    />
    <VerticalFeatureRow
      title="Collect. Craft. Survive."
      icons={['bong', 'craft-work', 'hammer', 'chainsaw', 'command-line']}
      subtitle="You never have Too Many Ajos"
      description="While you hone your garlic harvesting skills, you will hoard the infinite treasures this vast open world has to offer.
       Combine the fruits of nature to create tools and weapons you'll need to grow and survive in this unforgiving world of adventure"
      image="/assets/images/features/craft.jpg"
      imageAlt="For all of you PvE Carebears"
      gemTheme={GemTheme.Topaz}
      decoratedVariant={[3, 2]}
    />
    <VerticalFeatureRow
      title="Intense PvP action"
      icons={['robbery', 'battle', 'among-us', 'sex-offender', 'burning-house']}
      subtitle="Fight for your Ajos!"
      description="Challenge your friends to honor duels where you go all-in, risking it all! Raid your enemies'
       strongholds to steal their most precious possesions, or participate in the server-wide factional warfare where you protect your King!"
      image="/assets/images/features/pvp.jpg"
      imageAlt="Fuck them up!"
      gemTheme={GemTheme.Ruby}
      decoratedVariant={[0, 0]}
      reverse
    />
    <VerticalFeatureRow
      title="Explore the unknown"
      icons={['campfire', 'portal', 'treasure-chest', 'jewel', 'bat']}
      subtitle="Will you Risk it All?"
      description="Enter the dark world, a parallel dimension full of wonders and perils, where you will  search for the
      riches of the fallen kings. The more you delve into it, the greater the rewards, but the juicier you'll become for
      the predators that lurk the darkness. Beware of the vampire!"
      image="/assets/images/features/explorer.jpg"
      imageAlt="Get rich or die trying!"
      gemTheme={GemTheme.Turquoise}
      decoratedVariant={[0, 2]}
      margin="my-10"
    />
  </Section>
);

export { VerticalFeatures };
