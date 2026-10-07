---
title: Logistics
parent: General Mechanics
nav_order: 2
---

# Logistics

Villagers produce items as they do their job either by harvesting, fishing, crafting, or smelting. If any of their products are needed by other villagers, the villager holds the items in their internal inventory and delivers them to their customer’s shelf’s slot that needs a refill or top-up. On the way it carries the item in its hand in place of its tool, where the mod on a player's game, or MCA Reborn, draws it. Surplus goes to storage.  
Harvesting and fishing are ongoing activities. Crafting and smelting are on demand.

## Restocking

**Each shelf is filled to a cap**, the most it holds of an item, and asks for more whenever it holds less. A villager bringing an item brings as much as it carries, up to the cap.

| Customer | Item | Cap |
| :---- | :---- | :---- |
| Butcher | Feed | 16, on top of the one kept to say which feed |
| Cartographer | Sugar cane | 18 |
| Toolsmith, weaponsmith, fisherman, fletcher | Sticks | 64 |
| Leatherworker, librarian | Leather | 64 |
| Fisherman, fletcher | String | 64 |
| Fletcher | Feathers | 64 |
| Librarian | Paper | 64 |
| Cleric | Rotten flesh | 64 |
| Butcher, armorer | Fuel | 64 |
| Toolsmith | Iron, copper and other tool materials | 16 |
| Everyone else | Everything else | One job's worth |

**A trip is worth it from the min order up.** A villager walks over only with at least that many: half the cap when the cap is 16 or more, and the whole cap below that. It holds on to a smaller amount until it has more, and never puts it in storage meanwhile. **When its inventory is full or its working day ends, it delivers whatever it has**, so a shelf that ran out is restocked by the end of the day at the latest.

**Fuel goes in a real load during the day.** A delivery of fuel carries at least as much as burns for as long as one coal: a coal or charcoal is enough, but bamboo goes 32 at a time, half a stack. A bamboo burns out in a quarter of the time an ingot takes to smelt, so one or two delivered would smelt nothing. **When the working day ends, whatever there is goes, fuel included**: a farmer with 20 bamboo gives them to the armorer waiting for fuel rather than putting them away.

You can change any cap or min order, per item, with `restockCaps` and `restockMinOrders` (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %})).

## Villager Inventory

Every villager has internal inventory. Once the villager’s inventory is full, the villager looks for a permanent storage to deposit their products and empty their inventory, otherwise, the villager stops working.

## Workstation Inventory

Some workstations have internal inventory. In vanilla, the fisherman’s barrel is the only one fitting this description. A villager prioritizes depositing their products into their workstation inventory over holding them in their internal inventory. When their workstation is full, the villager will seek permanent storage to empty their inventory. If haulers are available they will be ones responsible for emptying workstation inventory into permanent inventory.

## Buffer Chests

**A plain chest touching a workstation** is a local drop-off. Buffer chests work the same way as the workstation inventory but have priority. They also provide a solution for workstations without internal inventory. Haulers empty buffer chests into permanent storage.

## Armory

**An armory** is a chest (wood or copper) on the workstation of an armorer, weaponsmith, fletcher or leatherworker. It holds finished gear waiting for a guard, and is never hauled or emptied into permanent storage. With no guard mod installed nothing takes from it, so it is stocked once and stays on display. Without one, the weaponsmith, fletcher and leatherworker have nowhere to put what they make and ask for one; the armorer's is optional, since it has its smelting to do. They do not use their internal inventory. The villager shall check their armory first and craft a new item only if the needed item is not in the armory.  
Any of the four may use an **armor stand** beside its workstation as an armory instead of the chest. It shall work the same way, and it holds one set: the armour on the stand, the shield in its off hand, and a sword or bow in its main hand. **A stand is shared by one armour maker and one weapon maker**: put it between an armorer and a weaponsmith and it shows a swordsman's full kit, or between a leatherworker and a fletcher making bows for an archer's. Two armour makers, or two weapon makers, cannot share one. A stand has priority over adjacent chests, except for a fletcher's arrows, which always go in its chest.  
**A chest is shared the same way**: one touching an armorer's and a weaponsmith's workstations is the armory of both. A chest touching two armour makers, or two weapon makers, is neither's armory.

## Permanent Storage

**Copper chests** are where village output ends up. Copper chests play a special role in vanilla Minecraft as copper golems use them to sort inventory.

Copper chests come in two flavours, decided purely by where you put them:

| Placement | What it does |
| :---- | :---- |
| **Touching a workstation** | **Terminal.** This station has opted out of hauling entirely.  Does not apply to weaponsmith, armorer, leatherworker or fletcher as it would be an armory in this case. |
| **Standing alone** | **Village storage.** The destination for deposit runs and haulers. |

A terminal copper chest is also how you hand a station over to another mod entirely. Run a Create belt or a pipe from a pipe mod off it and Villagers at Work will never touch those items again.

## Haulers

Haulers collect from workstation containers and carry the contents to village storage, so villagers never leave their stations.

**Villagers at work keep out of your water.** This mod walks villagers much further than vanilla does, and vanilla's pathfinding treats a pond as a cheap short cut, so a working village wades through the pool you dug for your fisherman. Routes here weigh water heavily and go round it instead. It is a preference and not a wall — storage genuinely across a stream is still reached — and `waterAvoidance` sets how strong it is.

**Full containers come first.** A hauler goes to a chest or barrel with no empty slot before anything else and takes whatever is in it, to make room, so a buffer chest can never jam. Otherwise it picks a container at random.

**During working hours they haul only full stacks.** A hauler will not cross the village for three carrots; it leaves them until the station has made a stack of them, and takes only the full stacks. **After working hours they haul the rest.**

There are two kinds, chosen with the `haulingMode` config:

- **Allays** — collect directly from workstation containers, deliver to the nearest independent copper chest, and park at a note block when idle. They do not sleep, so they clear the day's backlog overnight.  
- **Unemployed villagers and nitwits** — same job, but they sleep at night.

Haulers skip terminal copper chests and armories — those are destinations, not cargo.

Children too from time to time will deliver items to customer shelves or to permanent storage.

## Watching it work

**A chest stands open while someone is using it**, and closes when they have finished, exactly as it does for you. A lid lifting across the village is a villager depositing, an allay unloading or a child on an errand, and it is the quickest way to see whether your logistics are actually running. Barrels open too.

## Changing a Villager's Job

Break a villager’s workstation, place another, and it takes the new job still holding the old job’s tool — a butcher who becomes a shepherd is standing there with an axe.

The villager puts that tool down. It leaves with everything else it no longer needs: into the workstation inventory or a buffer chest if there is one, otherwise to permanent storage on its next deposit run. The tool is yours and is never destroyed, so a villager with a full inventory keeps holding it until it has somewhere to put it. With its hands free, it takes or makes the tool its new job needs.

Between the two jobs — the old workstation broken and the new one not placed yet — the villager has no job and nowhere to deposit anything, so it puts the tool away rather than stand around wielding it. You will not see it holding anything. Nothing is lost: it still has the tool, it drops it if it dies, and it brings it back out as soon as it takes a job again. If that new job uses the tool it keeps it, and if it does not, the tool is put down as above. 
