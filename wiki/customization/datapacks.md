---
title: Datapacks
parent: Customization
nav_order: 2
---

# Datapacks

Most of Villagers at Work is data rather than code, so a datapack can tune it, or teach it about another mod, without touching a jar. There are two kinds of files: **tags**, and **data files** in the mod's own formats. Both are re-read by `/reload`.

## Tags

Add to a tag the vanilla way, with a file at `data/vaw/tags/<block|item|entity_type|damage_type>/<name>.json`. Your entries join the defaults; `"replace": true` would drop them. For another mod's ids, write `{"id": "othermod:thing", "required": false}` so the tag still loads when that mod is absent.

```json
{
  "values": [
    { "id": "othermod:oak_crate", "required": false }
  ]
}
```

### Blocks

| Tag | What it is for | Default |
| :---- | :---- | :---- |
| `vaw:shelves` | Blocks that count as a shelf when placed against a workstation. | The twelve vanilla shelves |
| `vaw:chests` | Chests that bind to a workstation, as a buffer, an armory or a terminal. | Chest, trapped chest, `#minecraft:copper_chests` |
| `vaw:storage_targets` | Village storage when standing alone, and a terminal when touching a workstation. The block must hold items. | `#minecraft:copper_chests` |
| `vaw:workstation_containers` | Workstations with an inventory of their own: villagers deposit into it, haulers empty it. | Barrel |
| `vaw:leash_phaseable` | Blocks a leashed animal passes through while it stays shut, such as another mod's gates. | `#minecraft:fence_gates` |
| `vaw_after_work:seat_blocks` | With Villagers after Work: blocks a villager sits on to rest after work, and lies across two of side by side, such as another mod's chairs. A villager leans back only on a wool carpet; on any other block here it sits upright. | Carpets |
| `vaw:keep_clear_around` | Blocks a farmer plants nothing around, on their sides or their corners, so it can walk its field without touching them, or so a stem has room for its fruit. | Cactus, melon and pumpkin stems |

### Items

| Tag | What it is for | Default |
| :---- | :---- | :---- |
| `vaw:farmer_tools` | Tools the farmer works with, and what the toolsmith makes for it. Tilling needs a hoe. | Hoes, and knives from Farmer's Delight or any mod using `#c:tools/knife` |
| `vaw:butcher_tools` | Tools the butcher culls with, and what the toolsmith makes for it. | Axes; with Farmer's Delight, its knives instead |
| `vaw:animal_feed` | What counts as feed on the butcher's shelf. Which species it feeds is set per animal by the `breeding` files below. | The vanilla foods of cows, sheep, goats, pigs, rabbits and chickens |
| `vaw:compostable_surplus` | Seeds the farmer may compost into bone meal. Keep food out of it. | Wheat, beetroot, melon, pumpkin and torchflower seeds, pitcher pods |
| `vaw:smeltable_ore` | Raw ores the armorer smelts. Each needs a blast furnace recipe. | Raw iron, raw gold, raw copper |
| `vaw:armorer_ingots` | Ingots the armorer works straight from its shelf, without smelting. | Iron, gold and copper ingots |
| `vaw:fuel` | Fuel for the armorer's blast furnace and the butcher's smoker. Vanilla decides how long each burns. | Coal and charcoal, bamboo, dried kelp blocks, blaze rods |
| `vaw:crop_items` | Items a farmer picks up when they lie in its field. | Vanilla crops, their seeds and cuttings, and Farmer's Delight's when it is installed |
| `vaw:bottles` | Bottles: one is worth a trip, so a villager never waits to carry more of them to a shelf or a Chef's kitchen. | Glass bottles, potions (water bottles among them), honey bottles, and Farmer's Delight's milk bottle |
| `vaw_more:chef_never_converts` | With More Villagers at Work: what the Chef only puts into a meal that takes it as it is, never into another ingredient. Its cabinet still takes it for those meals. | Honey bottles, so honey never becomes sugar |
| `vaw:villager_reserve` | What a villager keeps for itself and never deposits or delivers. The farmer and the butcher have rules of their own, and with the MCA extension MCA villagers keep only seeds. | Bread, carrots, potatoes, beetroots, wheat, and the seeds villagers plant |

### Entity types

| Tag | What it is for | Default |
| :---- | :---- | :---- |
| `vaw:farm_animals` | Animals butchers breed and cull, and shepherds shear. | Cow, pig, sheep, goat, rabbit, chicken |
| `vaw:shearable_override` | Other animals a shepherd may shear. They must work with vanilla shears. | Empty |
| `vaw_after_work:seats` | With Villagers after Work: things a villager sits on to rest after work, as a player sits on a cushion. | Cushions |
| `vaw:carryable` | Animals the butcher carries to the smoker rather than leading them. | Chicken, rabbit |

> **Be careful:** many modded creatures fight back. Adding one to `vaw:farm_animals` can get your butcher killed.

### Damage types

| Tag | What it is for | Default |
| :---- | :---- | :---- |
| `vaw:pricks` | Damage from brushing against a plant. A villager at work takes none of it, and no villager panics at it. | Cactus, sweet berry bush |

## Data files

Every data file is a JSON file at `data/<namespace>/vaw/<kind>/<name>.json`, where `<namespace>` is your pack's own. Ids are registry ids such as `minecraft:wheat`, and where an item is asked for, `#` marks an item tag, such as `#minecraft:hoes`.

- **To change a file the mod ships**, put yours at the same path, for example `data/vaw/vaw/crop/wheat.json`. Yours replaces it.
- **To add something new**, use a new file in your own namespace.
- **Two files describing the same thing**, such as the same crop, soil, profession, animal or trader item, are not both used: the first is kept, and the other is refused with a warning in the log naming both files. Replace a file at its own path instead.
- **A file that is wrong** is skipped with a warning in the log saying why, and never stops the reload. An id that names nothing is warned about and has no effect.
- **Files for another mod** can carry Fabric's `fabric:load_conditions`, so they load only when that mod does and stay silent otherwise. This is how the bundled Farmer's Delight support works:

```json
{
  "fabric:load_conditions": [
    { "condition": "fabric:all_mods_loaded", "values": ["farmersdelight"] }
  ],
  "block": "farmersdelight:rice_panicles",
  "mode": "break_produce",
  "tools": ["#farmersdelight:tools/knives", "#minecraft:hoes", "empty_hand"]
}
```

### `requirement_set`: what a profession needs on its shelf

One file per profession, listing groups of items in order. A missing mandatory group is what the error icon shows.

| Field | Required | What it does |
| :---- | :---- | :---- |
| `profession` | yes | The profession, such as `minecraft:toolsmith`. Only the twelve professions the mod works with are accepted. |
| `groups` | yes | The groups, checked in order. |
| `groups[].kind` | yes | `all_of`: every member. `one_of`: any one member. `at_least_one_of_all`: each member is optional, but an empty shelf is an error. `exclusive_sets`: one complete set out of several, given as `sets`. |
| `groups[].members` | yes, except for `exclusive_sets` | The items, or `#tags`. A potion is named by what it holds, such as a water bottle: `{"item": "minecraft:potion", "potion": "minecraft:water"}`. A plain `minecraft:potion` means any potion. |
| `groups[].sets` | for `exclusive_sets` | A list of sets, each a list of members written as above. |
| `groups[].mandatory` | no, default `true` | Whether the villager is blocked without this group. |
| `groups[].icon` | no | The item the error icon shows when this group is missing. Must be an item, not a tag. |
| `groups[].per_use` | no | How many of a member one piece of work uses, such as `{"minecraft:stick": 2}`. Default 1. |
| `groups[].max` | no | The member's cap: how deep the slot is stocked, such as `{"minecraft:iron_ingot": 16}`. The shelf asks for more whenever it holds less. Default: the member's `per_use`, and it may never be below it. `restockCaps` in the config overrides it per item. |
| `groups[].keep_last` | no | `true`, or a list of members: the last item of each stack stays on the shelf, so everyone can see what the shelf is for. |
| `groups[].needed_with` | no | A list of items or `#tags`: the group counts only while the shelf holds one of them. The armorer's fuel is needed with raw ore, and not with ingots. |
| `groups[].never_ordered` | no | A list of members that meet the group but that no villager or trader brings: they are yours to stock. The armorer's ingots. |
| `groups[].always_ordered` | no | A list of members the shelf asks for whenever it holds less than their cap, even before you have stocked them once, and even in an optional group. The beekeeper's bone meal. A member can't be both this and `never_ordered`. |

```json
{
  "profession": "minecraft:toolsmith",
  "groups": [
    { "kind": "all_of", "members": ["minecraft:stick"], "per_use": { "minecraft:stick": 2 } },
    { "kind": "one_of", "icon": "minecraft:iron_ingot",
      "members": ["#minecraft:iron_tool_materials", "#minecraft:stone_tool_materials"] }
  ]
}
```

### `crop`: how the farmer harvests a plant

One file per plant block.

| Field | Required | What it does |
| :---- | :---- | :---- |
| `block` | yes | The plant. |
| `mode` | yes | `break_and_replant`: harvest and replant from the drops, like wheat. `break_produce`: break the produce and leave the plant, like melons, or, with `stacking`, cane and bamboo. `pick_in_place`: pick it without breaking it, like sweet berries. `base`: never harvested itself, only the plant under produce that is, like rice under its panicles. |
| `tools` | yes, except for `base` | What it is harvested with, best first: items, `#tags`, or `"empty_hand"`. The farmer uses the first it has; with none of them, it leaves the plant alone. |
| `seed` | for `break_and_replant` | The item that replants it. Without one the crop is never replanted or sown. |
| `stacking` | no, default `false` | For `break_produce`: the plant grows in segments, harvested once it is two tall, leaving the bottom one. |
| `pick_loot_table` | for `pick_in_place` | The loot table picking rolls. |
| `after_pick_property`, `after_pick_value` | for `pick_in_place` | The block-state property picking resets, and the value it resets to. The plant is ripe when the property is above that value. |
| `pick_sound` | no | A sound to play on picking. |

```json
{
  "block": "minecraft:sweet_berry_bush",
  "mode": "pick_in_place",
  "pick_loot_table": "minecraft:harvest/sweet_berry_bush",
  "after_pick_property": "age",
  "after_pick_value": "1",
  "tools": ["empty_hand"],
  "pick_sound": "minecraft:block.sweet_berry_bush.pick_berries"
}
```

To stop the farmer harvesting a plant, you do not need a datapack: list it in the `doNotHarvest` [configuration]({{ site.baseurl }}{% link customization/configuration.md %}) option.

### `tillable`: ground the farmer may till

| Field | Required | What it does |
| :---- | :---- | :---- |
| `source` | yes | The ground. |
| `result` | yes | The farmland it becomes. |
| `priority` | no, default `0` | Higher is tilled first, so a better soil is preferred. |

```json
{ "source": "farmersdelight:rich_soil", "result": "farmersdelight:rich_soil_farmland", "priority": 10 }
```

### `breeding`: what an animal is bred with

| Field | Required | What it does |
| :---- | :---- | :---- |
| `entity` | yes | The animal. It must also be in `vaw:farm_animals`. |
| `food` | yes | The item or `#tag` it is fed and bred with. A butcher tends the species whose food is on its shelf. |

```json
{ "entity": "minecraft:cow", "food": "#minecraft:cow_food" }
```

### `variant_key`: how an animal's variants are told apart

A butcher always leaves at least one of each variant, and a shepherd tells its sheep apart by colour this way.

| Field | Required | What it does |
| :---- | :---- | :---- |
| `entity` | yes | The animal. |
| `accessor` | yes | `none` for an animal without variants, `dye_color` for a colour, or `variant`. |
| `nbt` | no | The saved-data key the variant is read from. Defaults to `Color` for `dye_color` and `variant` for `variant`. |

```json
{ "entity": "minecraft:rabbit", "accessor": "variant", "nbt": "RabbitType" }
```

### `workstation_tool`: which tool a workstation needs, and who makes it

| Field | Required | What it does |
| :---- | :---- | :---- |
| `workstation` | yes | The workstation block. |
| `tool_tag` | yes | The tag of tools it uses, such as `#vaw:farmer_tools`. |
| `made_by` | yes | The profession that makes them. When it is `minecraft:toolsmith`, the toolsmith forges one for a station whose shelf has none. |

```json
{ "workstation": "minecraft:composter", "tool_tag": "#vaw:farmer_tools", "made_by": "minecraft:toolsmith" }
```

### `armory_stock`: what a maker keeps in its armory

For the armorer, weaponsmith, fletcher and leatherworker. A maker works only while its armory holds less than this.

| Field | Required | What it does |
| :---- | :---- | :---- |
| `profession` | yes | The maker. |
| `pieces` | yes | What it keeps, restocked in this order. |
| `pieces[].key` | yes | A name for the piece. |
| `pieces[].items` | yes | The item or `#tag` that counts as this piece, whatever it is made of. |
| `pieces[].count` | no, default `1` | How many to keep. |

```json
{
  "profession": "minecraft:fletcher",
  "pieces": [
    { "key": "bow", "items": "minecraft:bow" },
    { "key": "arrows", "items": "minecraft:arrow", "count": 64 }
  ]
}
```

### `enchantable_output`: what a maker's enchanted books go on

A maker with an enchanted book on its shelf puts it on the next matching thing it makes, and librarians deliver books only to makers listed here.

| Field | Required | What it does |
| :---- | :---- | :---- |
| `profession` | yes | The maker. |
| `items` | yes | The items or `#tags` of its output that take a book. |

```json
{
  "profession": "minecraft:toolsmith",
  "items": ["#minecraft:hoes", "#minecraft:axes", "#c:tools/knife", "#farmersdelight:tools/knives"]
}
```

### `trader_offer`: what the village may buy from the wandering trader

Only raw materials: tools, weapons, armour and enchanted books are never offered, whatever a file says. These offers are the village's own and never appear in the trades players see.

| Field | Required | What it does |
| :---- | :---- | :---- |
| `item` | yes | The item. |
| `count` | no, default `1` | How many one purchase gives. |
| `price` | no, default `1` | Its price in emeralds, 1–64. The `traderPrices` configuration option overrides it. |

```json
{ "item": "minecraft:raw_iron", "count": 3, "price": 1 }
```

### `exchange`: what the cleric turns into what

| Field | Required | What it does |
| :---- | :---- | :---- |
| `profession` | yes | `minecraft:cleric`. |
| `input` | yes | What it takes from its shelf. |
| `output` | yes | What it makes. |

The rate is set in the [configuration]({{ site.baseurl }}{% link customization/configuration.md %}), with `clericLapisPerStack` or `clericUseVanillaRates`.

### `guard_supplier`: which makers equip which guards

For a guard mod (see [Extension API]({{ site.baseurl }}{% link customization/extension-api.md %})). Used only while a guard mod is installed.

| Field | Required | What it does |
| :---- | :---- | :---- |
| `guard_type` | yes | The guard, as the guard mod names it. |
| `suppliers` | yes | The makers whose armories it takes gear from. |

```json
{ "guard_type": "mca:archer", "suppliers": ["minecraft:leatherworker", "minecraft:fletcher"] }
```

## The bundled Farmer's Delight pack

Villagers at Work comes with a built-in datapack for Farmer's Delight, on by default. Every file in it loads only when Farmer's Delight is installed, so without it the pack does nothing. It teaches the farmer to harvest rice, tomatoes and tomatoes on ropes, and to till Rich Soil. It can be turned off like any other datapack.
