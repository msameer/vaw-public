---
title: Configuration
parent: Customization
nav_order: 1
---

# Configuration

Each jar has its own file in the game's `config` folder, created with its defaults the first time the game or server starts. The files are read at start only, so **restart after editing**.

Times are in ticks where the name says so: 20 ticks make a second, and a Minecraft day is 24000 ticks.

## Core: `config/vaw.json5`

Every option is written into the file with its default and a comment explaining it. The file takes comments and trailing commas, JSON5-style.

- A value that is invalid or out of range is ignored with a warning in the log, and the default is used. Your file is left exactly as you wrote it.
- An option missing from the file is added back with its default.
- A file that cannot be read at all is never overwritten; the defaults are used until it is fixed.

### Hauling and errands

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `haulingMode` | `allays` | `allays`, `villagers`, `off` | Who carries output from workstation containers to village storage. Allays haul only if nobody has given them an item. `off` leaves every allay entirely vanilla. |
| `depositRange` | `48` | 8–128 | How far, in blocks, a villager walks to reach village storage. Vanilla pathfinding fails quietly on long routes, so raise it with care. |
| `childErrandsPerDay` | `2` | 0–8 | Errands a village child runs in a day, during working hours only. `0` turns children's errands off. |
| `waterAvoidance` | `32` | 0–64 | How dearly a working villager avoids water on its way, as a pathfinding cost per block of it. Vanilla's own is `8`, which a short cut across your fisherman's pond easily beats. It is a preference and never a wall: storage across a stream is still reached, just last. |
| `unreachableTimeoutTicks` | `200` | 40–2400 | How long a villager keeps trying to reach a chest or shelf it cannot get to, or an animal that cannot come to it. |
| `unreachableCooldownTicks` | `1200` | 100–24000 | How long such a chest, shelf or animal is skipped before it is tried again. A hauling villager or an errand-running child skips a chest or shelf for the rest of the day instead, unless the daylight cycle is off. |

### Restocking

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `restockCaps` | empty | 1–1024 per item | How many of an item a customer's shelf is filled to, by item id or by tag, such as `{"minecraft:wheat": 32, "#vaw:fuel": 32}`. The shelf asks for more whenever it holds less. An item's own entry wins over its tag's. An item you leave out keeps its usual cap (see *General Mechanics → Logistics*). |
| `restockMinOrders` | `{"minecraft:coal": 1, "minecraft:charcoal": 1}` | 1–1024 per item | The least of an item a villager carries to a shelf, by item id or tag, so the walk is worth it. A smaller amount waits until it has more, its inventory is full, or work ends. An item you leave out takes half its cap when the cap is 16 or more, and the whole cap below that. |

### Service areas

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `serviceAreas` | `{"minecraft:composter": 4, "minecraft:smoker": 16, "minecraft:loom": 16, "minecraft:barrel": 8}` | 1–64 per workstation | How far, in blocks, a villager works around its workstation, by the workstation's block id: the farmer's field around its composter (4 is a 9×9), the animals around a butcher's smoker or a shepherd's loom, and the water around a fisherman's barrel. A workstation you leave out keeps its default. Larger areas cost the server more to scan, the farmer's most of all. See *General Mechanics → Service Area*. |

`serviceAreas` replaces `workstationRange` and `fishingRange`. A file that still has them has their values carried over into `serviceAreas` the first time it loads, and the old options are removed.

### How hard villagers work

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `productivity` | `0.7` | 0.0–1.0 | The share of its time a villager spends working while it has work to do; the rest it takes as breaks. At `0.7` it works 70% of the time, a 5-second break after about 12 seconds of work. `1.0` means every task the moment it appears and no breaks — a farmer harvests a crop on the tick it ripens, clears its field, then stands still for the rest of the day. `0.0` means a villager that never starts work at all. With the MCA extension this is what a villager in a middling mood works at; see `moodProductivity` below. |
| `productivityOverrides` | `{}` | 0.0–1.0 per profession | Productivity for one profession, overriding the value above, for example `{"minecraft:farmer": 0.9}`. |
| `breakTicks` | `100` | 20–2400 | How long, in ticks, a break from work lasts. A villager below productivity `1.0` saves up the rest it owes and takes it in breaks this long. Replaces `idleTicks` and `tasksBetweenBreaks`. |

It changes how much of its time a villager works, never how fast it works once it has, and a break never holds up a delivery, a deposit or a hauler. See *General Mechanics → Productivity*.

### Farming

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `fieldUseChance` | `0.5` | 0.0–1.0 | The chance that each bone meal the farmer makes goes on its own crops rather than to storage. |
| `doNotHarvest` | `[]` | block ids | Plants a farmer leaves alone, for example `["minecraft:sweet_berry_bush"]`. A listed plant is never harvested or sown, and never tilled under or replanted over. |
| `plantPerennials` | `true` | true/false | Lets the farmer plant the crops it harvests without uprooting: sugar cane, bamboo, cactus, sweet berry bushes, and Farmer's Delight rice beside rice already growing. Off, it still harvests them but never plants a new one. |
| `plantCuttingsNearWater` | `false` | true/false | Lets the farmer plant cane, bamboo or cactus on ground near water while dry ground is still free. Off, it keeps cuttings off the pond that is there to keep your farmland moist. Sugar cane only grows beside water, so it is planted there either way. |
| `toolsmithMakesHoes` | `true` | true/false | Lets the toolsmith make a hoe for every farmer. The hoe is what grows a field: a farmer without one harvests, replants and sows the farmland already there, but never tills or plants on open ground. Off, a farmer gets a hoe only from you, on its shelf, so you choose which fields grow. |

### Animals

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `cullPauseTicks` | `40` | 0–200 | How long, in ticks, a butcher stands at its smoker with the animal before killing it. `0` kills the moment it arrives. |
| `speciesPerAnimalWorker` | `2` | 1–8 | How many species one butcher manages. |
| `perSpeciesFloor` | `4` | 0–64 | How many adults of each species a butcher keeps: it culls those above it once there is nothing to feed. `0` lets a butcher cull a species to extinction. |
| `breedOnlyButchers` | `false` | true/false | Lets a butcher with feed and no culling tool breed its animals and never cull them, for a cramming farm; the toolsmith then leaves it without a tool. Off, a butcher without its culling tool breeds nothing and shows the tool it is missing until the toolsmith makes it one. |
| `cullingMode` | `lead_teleport` | `lead_teleport`, `over_fence` | How a butcher gets a large animal to its smoker. `lead_teleport` walks it out through a gate that stays shut and lifts one that cannot reach the gate past it, so an animal always reaches the smoker; `over_fence` never takes a lead at all. Small animals are carried whatever this says. `lead`, the walk without the lift, is gone: a config that says `lead` works as `lead_teleport`. |
| `censusRescanSeconds` | `5` | 1–300 | How often an animal worker recounts the animals it manages. |

### Fishing

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `fishingJunkChance` | `0.5` | 0.0–1.0 | The chance that a fisherman's catch is junk (string, sticks, leather, bones and the like) rather than fish. A player's fishing is about `0.1`, at which a fisherman cannot even replace its own rod. Villagers only: your own fishing is unchanged. |

### Crafting, enchanting and trade

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `workDurationTicks` | `100` | 20–1200 | How long a villager works to craft or exchange one batch. |
| `allowedEnchantments` | `["*"]` | enchantment ids | Enchantments a librarian may put on books. `"*"` allows every enchantment. |
| `clericUseVanillaRates` | `false` | `true`, `false` | Use vanilla's trade rates for the cleric's rotten flesh to lapis exchange. |
| `clericLapisPerStack` | `9` | 1–64 | Lapis made from a stack of rotten flesh when `clericUseVanillaRates` is `false`: about 7 flesh per lapis, against vanilla's 32. |
| `traderPrices` | `{}` | item id → 1–64 emeralds | What the village pays the wandering trader, for example `{"minecraft:raw_iron": 2}`. Empty uses the prices in the datapack (see [Datapacks]({{ site.baseurl }}{% link customization/datapacks.md %})). |


### Signals and performance

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `bindingRescanTicks` | `20` | 5–1200 | How often a villager re-checks the shelf and chests around its workstation. A villager with no workstation is not checked. |
| `signalIntervalSeconds` | `4` | 1–60 | How often a villager missing more than one mandatory item repeats its angry particles. |

## Villagers after Work: `config/vaw-after-work.json5`

Only with the Villagers after Work jar installed. It is written and read as the core's file is.

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `afterWorkRange` | `32` | 8–64 | How far from itself, in blocks, a villager looks after work for campfires, jukeboxes, bells, cushions and seats. Each is a place of its own; there is no area to set up. |
| `musicGatherers` | `6` | 1–64 | How many villagers at most stand around a playing jukebox. Once every seat, campfire side, the jukebox and the bell are full, the rest share the jukebox and the bell evenly. |
| `bellGatherers` | `6` | 1–64 | How many villagers at most stand around a bell, as `musicGatherers` for a jukebox. |
| `dinnerFoodKept` | `8` | 0–64 | How much food a butcher, fisherman or farmer keeps for dinner. Everything else it carries but its tools goes to storage when work ends. `0` keeps nothing, so nobody cooks at dinner and the farmer shares nothing. It replaces `eveningFoodKept`: a value you changed there is carried over. |
| `bedtimeBreeding` | `true` | true/false | Villagers have children only at night, two well-fed villagers in beds side by side. Off, villagers breed as they do without the mod, and under MCA Reborn as MCA has them. **Turn it off to keep a villager breeder working.** |
| `bedtimeBreedingChance` | `0.2` | 0.0–1.0 | The chance each night that such a pair has a child. |

## More Villagers at Work: `config/vaw-more.json5`

Only with the More Villagers at Work jar installed. It is written and read as the core's file is.

| Option | Default | Range | What it does |
| :---- | :---- | :---- | :---- |
| `chefMilkingRange` | `48` | 1–64 | How far from its cabinet, in blocks, the [Chef]({{ site.baseurl }}{% link more-villagers/chef.md %}) looks for a cow, goat or mooshroom to milk: a box this far each way, above and below as well as around, like a butcher's around its smoker. Vanilla pathfinding fails quietly on long routes, so raise it past 48 with care. |

## MCA extension: `config/villagers-at-work-mca.json`

Plain JSON. An option missing from the file keeps its default, and a file that cannot be read leaves every option at its default.

| Option | Default | What it does |
| :---- | :---- | :---- |
| `chat` | `true` | A blocked MCA villager says why in chat. |
| `voice` | `true` | And says it aloud, in MCA's own voice. With `chat` off and `voice` on, the line is only heard, which needs the extension installed on the client too. With both off, MCA villagers say nothing. |
| `answerWhenAsked` | `true` | A blocked MCA villager you talk to tells you what it needs, at once, whatever it has said before. Only you hear it, and the limits below do not apply to it. It follows `chat` and `voice`. |
| `showErrorIcon` | `false` | Also show the error icon above blocked MCA villagers, as vanilla villagers have it. |
| `cooldownMinutes` | `5` | How long a villager stays quiet after speaking. |
| `villageCap` | `3` | At most this many lines within `villageWindowSeconds` among the villagers of one village, so a village of blocked villagers does not flood the chat. |
| `villageWindowSeconds` | `60` | The window `villageCap` counts over. |
| `hearingRange` | `20` | How far, in blocks, a line is heard. A villager with nobody near enough to hear says nothing. |
| `dedupeRange` | `64` | Villagers this close together count as one village, both for `villageCap` and so one cause is said once rather than by every villager. |
| `moodProductivity` | `0.2` | How far an MCA villager's mood moves its productivity from the value set above: an overjoyed villager works at that value plus this, a miserable one at it minus this, and one in a middling mood at it exactly. `0` leaves mood out of it, so every villager of a profession works alike. From `0` to `1`. |
| `archersUseArrows` | `true` | Archers shoot only the arrows they carry and fetch them from the fletcher's armory. Off, MCA gives archers their arrows itself, as it does without the extension, and the fletcher's arrows stay where they are. |

## On a player's game: `config/villagers-at-work-client.json`

Only for the mod's client part, which a player's own game loads and a server never does. It draws the tool a villager works with in its hand. The villager uncrosses its arms to hold it, as a player holds an item, and swings it as it works. A fisherman's line runs from its rod to a bobber floating on the water, which a fish pulls under just before the catch. It works with model packs too: under a pack that gives villagers arms of their own, such as Human Era, with or without its Fresh Animations add-on, the tool goes in the hand the pack drew; under one that keeps the crossed arms, such as Fresh Animations, the villager's arms uncross and follow the pack's animation. Change these values only if a pack's villagers still hold the tool out of place.

Under Human Era the arms belong to the pack, which animates them itself, so the villager holds its tool but never swings it, and the item it shows you while trading floats in front of its chest, where vanilla draws it from the crossed arms the pack removed. Both are fixed by the Human Era compatibility packs, `vaw-human-era.zip` and, if you use Human Era's Fresh Animations add-on, `vaw-human-era-fa.zip`. They have their own project, [Villagers at Work - Human Era Villagers Compat](https://www.curseforge.com/minecraft/texture-packs/vaw-hevi-compat), since a Human Era release means a new pack rather than a new mod release, and they go **above** Human Era in your resource pack list. Their [source is here](https://github.com/msameer/villagers-at-work-human-era). If you set `custom` values in an earlier version, when the tool stood in the villager's crossed arms, the untouched defaults are ignored and the tool simply sits in the hand.

| Option | Default | What it does |
| :---- | :---- | :---- |
| `preset` | `"vanilla"` | `vanilla` holds the tool as a player holds an item, or `custom` adjusts it by the values below. |
| `custom.position` | `[0.0, 0.0, 0.0]` | How far to move the tool in the hand, in blocks: x, y and z. |
| `custom.rotation` | `[0.0, 0.0, 0.0]` | How far to turn it, in degrees about x, y and z. |
| `custom.scale` | `1.0` | Its size. |
