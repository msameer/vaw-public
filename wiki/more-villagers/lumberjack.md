---
title: Lumberjack
sidebar:
  order: 3
---

Fells and replants the trees around its chopping block, and supplies the village's wood. It needs no other mod.

## Its chopping block

| Block | What it is for |
| :---- | :---- |
| Chopping block | **The job site.** A log with an iron axe in it, crafted from an iron axe above a log. Villages never come with one. |
| Shelf | **Its axe**, which the toolsmith makes for it. |
| Composter touching it | **Optional: its own.** No farmer ever takes it. |

- **Any log makes one**, modded ones too. It shows the log it was made of, and keeps it when you break it.
- **Its name and its icon show its log**, as in *Birch Log Chopping Block*.
- **The axe in it is the lumberjack's own.** It pulls the axe out to fell, and sticks it back in when no tree is left and when work ends. It plants, composts and makes planks bare-handed.
- **The block shows no axe** while the axe is out, or while its lumberjack has none. With no lumberjack it shows an iron axe.

## Its trees

- **It works a 17×17 around its block**, 8 blocks each way. Set a bigger one for `vaw_more:chopping_block` in `serviceAreas` (see [Configuration](/customization/configuration/)).
- **A tree is logs touching leaves that grew there.** Leaves you place never count, so your builds are safe.
- **The whole tree comes down at once**, logs and leaves, when it chops one, and topples to the ground away from the lumberjack. Only the lumberjack fells trees this way; you chop as in vanilla.
- **It takes what an axe gets**: the logs, and the saplings, sticks and apples from the leaves.
- **Leaves still near another tree's logs stay**, as vanilla keeps them.

## Planting

- **It plants on a grid every 8 blocks from its chopping block**: 8 trees in a 17×17, far enough apart that their leaves never touch.
- **A grid spot takes a sapling** on open ground with sky above that the sapling grows on. It never removes anything to make room.
- **It picks a kind at random** from the saplings it has.
- **Dark oak and pale oak go in four at a time**, on a free 2×2 square, since one alone never grows.
- **A wild tree off the grid** is felled and not replanted, so the grove settles into rows.

## Its composter

- **A composter touching its chopping block is its own.** It composts the saplings it has no spot for.
- **When work ends it composts every spare sapling** before its evening.
- **It spends the bone meal like the farmer**: some on its saplings, the rest to the beekeepers and then storage (`fieldUseChance`).
- **Without a composter**, its spare saplings go to storage.

## Its wood

- **It keeps the toolsmith, weaponsmith and armorer in planks**, without being asked, of the wood already on their shelf.
- **It makes sticks** when a shelf asks for them. Both come from the logs it carries.
- **Logs and what nobody asked for go to storage.**
- **Its apples go to the [Chef](/more-villagers/chef/)**, with More Villagers at Work's Chef in the village.

## Trades

| Level | Sells |
| :---- | :---- |
| Novice | 16 sticks for an emerald; 8 oak planks for an emerald |
| Apprentice | 4 oak logs or 4 spruce logs for an emerald |
| Journeyman | 4 birch logs or 4 jungle logs for an emerald |
| Expert | An oak or a birch sapling for 2 emeralds |
| Master | A cherry sapling for 3 emeralds; 4 dark oak saplings for 8 |

It buys nothing.

**Tools:**

| Axe | Mandatory |
| :---- | :---- |

**Suppliers:**

| Toolsmith | Axe |
| :---- | :---- |

**Customers:**

| Toolsmith, weaponsmith | Planks, sticks |
| :---- | :---- |
| Armorer | Planks, for shields |
| Fletcher, fisherman | Sticks |
| [Chef](/more-villagers/chef/) | Apples |
| [Beekeeper](/more-villagers/beekeeper/) | Bone meal, with its own composter |
