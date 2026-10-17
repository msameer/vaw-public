---
title: Service Area
sidebar:
  order: 5
---

A working villager provides two services, and each reaches a distance of its own from its workstation:

- **Work**: the job itself. For most professions that happens at the workstation: taking from its own shelf, crafting or smelting there, and using the chest, armor stand or brewing stand beside it. Four professions also work the ground around it: the farmer's field, the butcher's and shepherd's animals, and the fisherman's water. How far that ground reaches is their **work range**.
- **Delivery**: taking what it makes to the villagers that ordered it, and its surplus to storage. Every profession delivers, and its **delivery range** is how far from its workstation a customer's shelf or a storage chest may be. It is `depositRange`, 48 blocks by default, and the same for every profession.

A villager is supplied the same way: a producer delivers to it if it is within the producer's delivery range. An armorer cannot serve a toolsmith 1000 blocks away; two stations more than 48 blocks apart never trade.

| Profession | Workstation | Work range | Delivery range |
| :---- | :---- | :---- | :---- |
| Farmer | Composter | Its field: the square around the composter on the composter's level, 4 blocks each way (a 9×9), where it harvests, tills, plants and picks up dropped crops | 48 blocks |
| Butcher | Smoker | Where it counts, breeds and culls animals: a box 16 blocks each way around the smoker, above and below as well as around | 48 blocks |
| Shepherd | Loom | Where it looks for sheep to shear: a box 16 blocks each way around the loom, like the butcher's | 48 blocks |
| Fisherman | Barrel | Where it looks for water to fish in: the square 8 blocks each way around the barrel, from 3 blocks below it to 2 above | 48 blocks |
| Armorer | Blast furnace | At the workstation, with its armory beside it | 48 blocks |
| Toolsmith | Smithing table | At the workstation. The stations whose missing tools it forges must be within its delivery range | 48 blocks |
| Librarian | Lectern | At the workstation. The shelves it takes enchanted books to must be within its delivery range | 48 blocks |
| Cartographer | Cartography table | At the workstation | 48 blocks |
| Cleric | Brewing stand | At the workstation. Hurt villagers come to its brewing stand from up to 48 blocks away (see [Healing](/general-mechanics/healing/)) | 48 blocks |
| Weaponsmith | Grindstone | At the workstation, with its armory beside it | 48 blocks |
| Fletcher | Fletching table | At the workstation, with its armory beside it | 48 blocks |
| Leatherworker | Cauldron | At the workstation, with its armory beside it | 48 blocks |

The weaponsmith, fletcher and leatherworker work in any world. Their armories are for guards, so with no guard mod such as MCA Reborn installed they stock them once and stop.

A few other ranges are fixed rather than set here. A hauler, allay or villager, empties workstation containers and fills storage within 48 blocks of itself. A village child runs errands for stations within 24 blocks of itself. An MCA guard looks for gear in armories within 48 blocks of itself.

**Animals and water are shared out, never shared.** Two butchers whose work ranges overlap never manage the same species, and each animal belongs to the nearest one with room for it (see [Animals](/other-entities/animals/)). Moving an animal out of every butcher's range protects it, though a name tag is surer.

## Changing them

**Work range** is set in `serviceAreas` in the core config, by the workstation's block id. A workstation from another mod that stands in for a vanilla one works the range of its profession's vanilla workstation unless you give it its own.

**Delivery range** is `depositRange`, one value for every profession. Vanilla pathfinding fails quietly on long routes, so raise it with care (see [Logistics](/general-mechanics/logistics/)).

Both are described in [Configuration](/customization/configuration/).
