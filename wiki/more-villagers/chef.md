---
title: Chef
sidebar:
  order: 1
---

Cooks Farmer's Delight's **meals you can place on a table**: feasts such as roast chicken and shepherd's pie, pies and cakes, and those of its [Delight addons](/integrations/delight-addons/), from what the village brings to its kitchen. It needs [Farmer's Delight](https://modrinth.com/mod/farmers-delight-refabricated): without it, More Villagers at Work runs with no Chef.

## The kitchen

| Block | What it is for |
| :---- | :---- |
| Cabinet, with a shelf touching it | **The job site, and the pantry.** Any of Farmer's Delight's cabinets, but only with a shelf touching it, on top or on any side, as every station's shelf: a cabinet you keep things in never makes a chef, and a Chef whose cabinet has lost its shelf gives it up. Its ingredients and its finished meals are kept inside, and when its suppliers have filled every slot, the Chef carries what it cooks until there is room. |
| Other cabinets touching it | **More pantry.** Farmer's Delight's cabinets in a row or stack touching the Chef's, on a side, above or below, are part of its pantry, up to 16, a stove or a basket in the row too, except one with a shelf touching it and any past it. |
| Shelf | **Its tools**: a bucket and a Farmer's Delight knife, and the cooking pot and skillet you give it. |
| Stoves | **Its cooking.** Every Farmer's Delight stove touching the cabinet, on any of its four sides. It lights one when it cooks on it, and puts them all out when work ends. |
| Baskets | **Optional.** A Farmer's Delight basket in the row, or touching a stove or cutting board, catches what drops as usual, and the Chef cooks from what it caught. Nobody puts anything in it. |

**It cooks only meals that stand on a table**, never a bowl meal such as a stew (but see [With Display Delight](#with-display-delight)), and **makes everything that leads to one, as much as one of each meal takes.** Whenever it can make a meal that is wanted, it makes it, picking one at random among those it can, so a pantry with more kinds of food gives more kinds of meals. Otherwise it makes the next thing a meal takes, however many steps back, even when no meal is wanted: it bakes potatoes on a stove, or in a skillet standing on one, cooks rice in the pot, bakes pie crusts, dries kelp, and with a cutting board cuts fish into slices and rolls them. Each goes into its pantry for the next recipe, so in time it has everything a meal takes. It makes first what it has least of, and makes nothing it already has enough of for one of each meal, or has no room for. Meals made in the pot, such as a stuffed pumpkin, need the pot: put it on its shelf or on one of its stoves. **One of the pot and the skillet is always on a stove, and the other on its shelf**: it swaps them when it needs the other, never has both on its stoves, and leaves them as they are when work ends. With only one of them, it keeps it on a stove, and takes a pot off its only stove just while it grills there.

**Its stoves go out when work ends.** Anything still cooking on a stove or in the skillet stays there, and the Chef lights the stove again the next day to finish it; near the end of work it starts no skillet batch it can't finish in time.

**It cuts on a cutting board** once you place a Farmer's Delight cutting board touching any of its pantry's cabinets, on top of one too, and it has a Farmer's Delight knife, on its shelf, where the toolsmith brings it, or set in its board. It cuts as you would, a kelp roll into slices for a rice roll medley, with the knife in hand just for the cut, and when it is done it sets the knife in its cutting board, where it takes it from next time.

**Milk it makes itself.** When its cabinet has no milk bottles, it takes the bucket from its shelf and milks a cow, a goat or a mooshroom **within 48 blocks of its cabinet**, even while a meal is cooking, and cooks with the milk in the bucket. It milks over a fence as a butcher works. You can change how far it goes with `chefMilkingRange` (see [Configuration](/customization/configuration/)). With empty bottles to spare it fills four with a bucket of milk instead. Its cabinet keeps up to four milk bottles and four honey bottles. It empties every water bottle for its glass. **Milk comes first: it keeps four bottles for its milk**, counting the milk bottles in its cabinet, **and takes its other empty bottles to a [beekeeper](/more-villagers/beekeeper/)**, whose honey they came in.

## Without Villagers after Work

It keeps **one meal** ready: in its cabinet, or set out on top of another cabinet touching its own, for you to take. When you take it, it cooks another.

## With Villagers after Work

It cooks for the village's [dinner tables](/after-work/#dinner-tables) instead, and keeps nothing back for you: **a meal for every place on a table**. They wait in its cabinet until the evening, when it carries them out and sets the tables. **Before it goes to bed it clears the empty trays** off the tables and takes their bowls back to its cabinet, so the tables are bare in the morning; an empty tray still there when it gets up it clears first thing, before work, and one it cannot get to it clears the next evening as it sets the tables.

**With no table near its kitchen, it keeps one meal ready** in its cabinet, as it does without Villagers after Work, rather than cooking nothing, but never sets it out on another cabinet. Once you build a table, that meal goes on it in the evening with the rest, and it cooks for every place again.

## With Display Delight

- **Its foods are table meals too**: stews and soups set alone, and burgers, sandwiches, kebabs and cookies piled on a plate, up to six.
- **The Chef cooks them** as it cooks its feasts and pies, so its menu takes in most of Farmer's Delight's foods.
- **Its pantry takes what they need**, sticks for barbecue sticks and melon popsicles (sticks ready made, never logs or planks) and ink sacs for squid ink pasta among them, and with Ocean's Delight: Expanded straw for the rope its stuffed cod takes.
- **It makes its plates from bowls**: a bowl makes a plate, and two bowls make four small plates. It keeps as many bowls as plates and as small plates.
- **Diners leave their bowls and bottles at the table**, and the Chef takes them back with the empty plates before bed.
- Display Delight is for Minecraft 26.1 and 26.2.

## Its clothes and hat

A chef dresses for the kitchen: a **white double-breasted chef's jacket** with a red neckerchief, a dark apron and checked trousers. With MCA Reborn and its extension, MCA chefs dress the same way.

It wears a **chef's hat** from the start of work until bed: it keeps it on through the evening, while it sets and clears the tables, takes it off as it goes to bed and keeps it in its pockets, and puts it back on when work starts. The shepherd makes one from wool of any colour whenever the chef has no hat, on its head or in its pockets, and puts it on the chef's head itself. You can craft one too, from five wool of any colours in the shape of a helmet, and it comes out white whatever the wool; leave it in the chef's cabinet and a chef with no hat puts it on. The hat comes off when the villager loses the job, and it never drops. With MCA Reborn and its extension, MCA chefs wear it too, as a white cap.

## Trades

It sells **every meal its kitchen could make** and milk bottles, at **one emerald for each ingredient** the village brings, so a simple meal is cheap and a feast is dear. It never sells what its suppliers bring it: bread is the farmer's, and honey the beekeeper's. The more experienced the chef, the more elaborate the meals it offers.

**Tools:**

| Bucket | Mandatory for milk |
| :---- | :---- |
| Cooking Pot | Optional: for meals made in the pot |
| Skillet | Optional: on a stove, it cooks in it what it would grill there |
| Farmer's Delight Knife | Optional: for cutting |

**Consumables:** what its meals are made from, kept in its cabinet, and anything you put there yourself, such as mushrooms or honey.

**Suppliers:**

| Farmer | Crops, and bread it bakes for the chef |
| :---- | :---- |
| Butcher | Meat, and the eggs it finds in its area |
| Fisherman | Fish, bowls and water bottles |
| Shepherd | Chef's hats |
| Toolsmith | Bucket, Farmer's Delight Knife |
| [Beekeeper](/more-villagers/beekeeper/) | Honey bottles |
| [Lumberjack](/more-villagers/lumberjack/) | Apples |

The farmer, the butcher and the fisherman bring **up to a stack of each ingredient**, once their own needs and the shelves waiting on them are met, and before what is left goes to storage. The butcher's meat and the fisherman's fish are no different: the Chef gets a stack of each kind first, and they bring it however little they have: the fisherman as soon as it has any, the butcher once it has culled and fed its herd and smoked a batch. **The fisherman brings the Chef half of the fish it catches that the Chef uses as soon as it catches them**, each fish at even odds, so with Villagers after Work the Chef gets fish during the day and not only what is left once the fisherman's 8 for dinner are kept. The butcher smokes as much of each meat as the Chef's meals take smoked, and brings the rest raw: with Farmer's Delight alone its ham, chicken and mutton come smoked and its eggs raw, and once the Chef has a cutting board and a knife a third of its mutton comes raw, for the chops it cuts.

## Compatibility

**Chef's Delight can be installed beside it.** Its chef and cook only trade, and their workstations are the cooking pot and the skillet, never a cabinet. A villager with no job may take the pot or the skillet standing on your Chef's stove as its workstation, though, and loses it again when your Chef takes it off the stove.
