---
title: Villagers after Work
---

- **A separate mod that needs Villagers at Work.** Install its jar beside the mod (see [Installation](/installation/)).
- **When work ends, villagers gather**: cooks grill dinner on campfires, the others eat, rest and gather, and well-fed couples may have a child that night.

## Setting it up

Villagers use what they find within 32 blocks of themselves (`afterWorkRange`).

| Place | What it is for |
| :---- | :---- |
| Bell | Villagers gather around it. |
| Campfire | Dinner, and villagers gather around it, indoors or out. It needs a carpet or cushion two blocks out on at least one side. A campfire under a beehive is left alone, for the bees. |
| Jukebox | Villagers gather around it while it plays. With music discs on a shelf beside it, they play them in the evening and put them back at bedtime. |
| Cushion, carpet | A seat, but only at a table or around a campfire: any other is decoration. Two side by side around a campfire are for lying back. Cushions need 26.3. |

- **Seats from furniture mods** can be added with the `vaw:seats` and `vaw:seat_blocks` tags (see [Datapacks](/customization/datapacks/)).

## Dinner

- **Campfires are lit when work ends**, by the first villagers to arrive. Villagers never step on a campfire or right beside it.
- **A campfire seats four**, one on each side, two blocks out. A diner sits if there is a seat there, and stands if not.
- **The butcher, the fisherman and the farmer cook**, spreading their food over the campfires. Each diner eats the piece on its side when it is done.
- **Each diner gets food it eats**: with MCA Reborn, a vegetarian gets no meat or fish.
- **Each cook keeps 8 food for dinner** (`dinnerFoodKept`), from what would have gone to storage, so orders come first. A farmer short of 8 bakes bread from its wheat.
- **With a Chef's kitchen taking bread, all the farmer's bread goes to the Chef**: it keeps none for dinner and bakes none for it.
- **With a [Chef](/more-villagers/chef/), the butcher and the fisherman give it half their dinner** as the evening begins.
- **When work ends, workers store the food they carry**, except a cook's dinner.
- **Leftovers a villager carries go to storage before bed**, like any food it carries.

| Cook | Brings |
| :---- | :---- |
| Butcher | Raw meat |
| Fisherman | Raw fish |
| Farmer | Potatoes, and food eaten as it is, such as berries, to throw to the hungry |

## Dinner tables

- **With [More Villagers at Work](/more-villagers/)'s Chef, villagers also dine at tables.**
- **A table is a row of blocks with seats two blocks out**, a block of room between:
  - **A low table**: bottom slabs, with carpets or cushions around it.
  - **A high table**: full blocks, with chairs around it. A cushion on a stair is a chair.
- **Each table block with a seat facing it is a place for a meal.** Meals stand on bottom slabs.
- **The Chef sets every empty place when work ends**, and clears the empty trays before bed or first thing in the morning. With no table near its kitchen, it keeps one meal ready instead.
- **Hungry villagers eat at a set table before going to a campfire**, a bite or a serving at a time.
- **Resting villagers sit at the tables too**, the hungrier the more often. A well-fed villager eats at most two bites in an evening.

## Food for everyone else

- **The farmer throws the hungry what no fire can cook**, such as bread, carrots or berries: a piece each, to one at random. Never to a well-fed villager or another farmer.

## Eating

- **Villagers eat where you can see it**, with the food in hand when Villagers at Work is in your game too.
- **No cooked food is wasted**: food nobody took from a fire, or that a farmer threw, is taken up and eaten by the nearest hungry villager, and soon after by anyone.
- **Food heals**: each food point brings back half a heart.
- **A villager is well fed at 12 food points**, as your hunger bar counts them, such as a steak and a baked potato. It stays well fed until it has a child, and leaves dinner to the hungry.
- **A hungry villager eats what it carries first.**

## Resting

- **Villagers not at dinner rest or gather**: on a seat, at a campfire, around a jukebox or around a bell, each as likely, wherever there is room. A jukebox and a bell each have room for 6 (`musicGatherers`, `bellGatherers`).
- **They sit only on seats at a table or around a campfire**, any free one equally likely.
- **They lie and lean back only around a campfire**; everywhere else they sit upright.
- **Nobody takes a seat someone is on**, or walks through a seated villager.

| Seat | How a villager rests there |
| :---- | :---- |
| A carpet | Sits upright, or around a campfire leans back on its hands. |
| A cushion, or a seat from a furniture mod | Sits upright. |
| Two cushions side by side, around a campfire | Lies back across both, or sits on one and leans back on the other. |
| Two carpets side by side, around a campfire | Lies back across both. |

- **Model packs and MCA**: villagers sit and lie the same way under Fresh Animations and Human Era, and MCA villagers with the MCA extension. Without Villagers at Work in your game, a seated villager is drawn standing on its seat.

## Children

- **Children join in now and then**: they sit, bounce on cushions, or jump to the music, on seats at a table or around a campfire only.

## During the day

- **An unemployed villager takes a break now and then**: it sits or gathers for half a minute to a minute, at most every few minutes. Workers never stop work for one.

## Bedtime

- **Villagers go to bed one by one**, up to a minute after bedtime.
- **No villager keeps food overnight**: before bed it stores what it carries in the nearest chest within 48 blocks. (Only while `bedtimeBreeding` is on.)
- **The last villager up puts out the campfires** once the food on them is done. A campfire left burning goes out by itself once everyone around it is in bed, and sleeping through the night puts them out too.
- **Records go back on the jukebox's shelf** at bedtime.

## Breeding

- **Villagers have children at night, in bed.** Two well-fed villagers in beds side by side have a 20% chance a night (`bedtimeBreedingChance`), if there is a free bed for the child within 48 blocks.
- **All three beds must be under a roof**: anything solid above, glass included.
- **A child costs both parents their meal**, so they must be well fed again before the next.
- **It is the only way villagers breed** while `bedtimeBreeding` is on, as it is by default. Turn it off to have villagers breed as in vanilla (see [Configuration](/customization/configuration/)).
- **Under MCA Reborn**, the two must be married, and the child comes after MCA's pregnancy.
