---
title: Healing
sidebar:
  order: 4
---

Vanilla villagers never heal. A villager hurt by a zombie, a fall or a stray arrow stays hurt for the rest of its life unless you throw a potion at it yourself.

Give a cleric a brewing stand, a shelf and the ingredients, and the village takes care of that itself.

## The brewing stand is the village infirmary

A cleric that brews leaves the potions **in the stand**, and a stand holds three. You can count the stock from across the village, because the bottles are drawn on the block exactly as they are when you brew yourself.

A villager that drops to **half health or below** walks to the nearest brewing stand holding a potion that would heal it, drinks one on the spot, and goes back to what it was doing. If it is still under half health and a potion is still standing there, it drinks that one too.

**The empty bottle goes back to the fisherman** straight after the drink: the villager takes it to the nearest fisherman's shelf with room for it, one bottle by itself, and you don't need to stock the shelf. The fisherman fills the bottles there with water for the clerics, so the potions go round. With no fisherman's shelf with room, the bottle goes to permanent storage on the villager's next deposit run.

## Whose stands, and which potions

**Only a stand bound to a shelf**, with a cleric working it. Your own brewing stand is never touched, whatever you leave in it.

**Only a potion that actually heals.** A stand part-way through the chain, holding water bottles or awkward potions, is left alone, and so is anything else you put in one.

| Potion | What it restores |
| :---- | :---- |
| Healing | 2 hearts, instantly |
| Regeneration | 9 hearts, over 45 seconds |

A villager has 10 hearts, so regeneration is much the better of the two — but healing is the one the village can keep making on its own, because the farmer grows the melons for it. See [Cleric](/supply-chain/cleric/).

## Who goes for a potion

Every villager the mod already gives something to do looks after itself:

| Villager | Goes for a potion |
| :---- | :---- |
| Working villagers | Yes |
| Children | Yes |
| Unemployed villagers and nitwits | Only when they are your haulers |

**Villagers the mod does not touch stay untouched.** With `haulingMode` set to `allays` your unemployed villagers and nitwits are pure vanilla, and they stay that way: they will not go for a potion and they will not heal, exactly as they do not today.

## Running away comes first

A villager being chased runs. Going for a potion is not an escape route: it waits until the panic is over. In practice you will see villagers drinking **after** a night attack rather than during one, which is also when a potion is worth spending.

A villager that cannot reach the stand — a door shut, a wall built — gives up and gets on with its day.

## It is meant to be rare

Water bottles come out of the fisherman's junk catch, roughly one cast in a hundred, so an infirmary fills over days rather than minutes. That is the point. Villagers rarely get hurt in vanilla, and the supply is rare to match.

If you want it faster, put water bottles in the cleric's brewing stand yourself.

## With MCA Reborn

MCA villagers are not helpless the way vanilla ones are: they mend slowly on their own, and a hurt villager carrying food will eat it. The infirmary still earns its place. Mending at that rate takes minutes, a well-traded MCA villager has a far deeper health bar to refill, and a guard walking out of a raid cannot wait that long — so guards go for a potion before they go for armour. See [MCA Reborn](/integrations/mca-reborn/).
