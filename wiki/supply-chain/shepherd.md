---
title: Shepherd
sidebar:
  order: 10
---

Shears sheep over the fence and deposits the wool. It claims up to eight sheep, taking **uniquely coloured ones only**, and never one on a lead. A sheep it holds that is too far inside a big pen to reach walks over to the fence to be shorn, and no other sheep comes with it. One that cannot get to the fence stays its sheep, so its colour is still kept from the butcher: the shepherd shears the others meanwhile and tries that one again a little later (`unreachableCooldownTicks`). It also shears any other shearable animal you have opted in (see [Animal Mods](/integrations/animal-mods/)), one species at a time per shepherd, just as butchers share out species.

**It unwinds wool into string** for any villager whose shelf asks for string, at its loom and only when asked: four string to a wool, the same the recipe costs the other way. It brings exactly what the shelf is short of, so a shelf never ends up with more than a stack, and keeps wool back only for string it is about to make: a shelf only a few string short waits until it is short of enough to be worth the trip (see [Logistics](/general-mechanics/logistics/)), and meanwhile all its wool goes to its chest as usual.

**With [More Villagers at Work](/more-villagers/) installed, it makes their hats**: the Chef's from five wool and the beekeeper's from four, of any colours, and always white. It makes them from the wool it carries, at its loom, whenever one of them has no hat, neither on its head nor in its pockets, then walks over and puts the hat on its head: one hat each, and no spare. While one of them needs a hat, it keeps that much wool for it, whatever the colours, rather than putting it in its chest.

It makes its own shears from iron (vanilla trade), so iron on the shelf is as good as shears: it asks for shears and forges them from whatever iron the armorer brings. It forges a beekeeper's spare shears from the same iron and takes them to its shelf.

**Tools:**

| Shears | Mandatory without iron |
| :---- | :---- |

**Consumables:**

| Iron Ingots | Optional |
| :---- | :---- |

**Suppliers:**

| Armorer | Iron Ingots |
| :---- | :---- |

**Customers:**

| Fletcher | String |
| :---- | :---- |
| Fisherman | String |
| [Chef](/more-villagers/chef/) | Chef's hats |
| [Beekeeper](/more-villagers/beekeeper/) | Beekeeper's hats, shears |
