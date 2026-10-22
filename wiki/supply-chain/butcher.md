---
title: Butcher
sidebar:
  order: 2
---

Manages a herd. Breeds animals, and culls the surplus for meat and other byproducts. Assigned species are claimed per smoker, so two butchers never fight over the same cow.

Items on the shelf also determine the activities done by the butcher:

| Stock this | Enables |
| :---- | :---- |
| Farmer's Delight knife, or an axe without Farmer's Delight | Culling |
| wheat, carrots, seeds… | Breeding |

**Fuel goes in its smoker, not on its shelf.** With fuel there, it cooks the meat.

- The farmer puts bamboo straight into the smoker.
- Fuel you put on its shelf goes into the smoker, and what doesn't fit goes to storage.
- That leaves room on its shelf for two feeds, so it can tend two species.
- It shows the fuel icon only when it has meat to cook and the smoker is cold and empty.

**It culls first, then feeds.**

- It culls every species down to 4 grown animals (`perSpeciesFloor`), keeping the meat in its pockets.
- Then it feeds every grown animal left that is ready to breed, one feed each.
- A cull costs no feed, and it never culls an animal that is in love.

**It works the herd over the fence, and the animal it picked comes over to it.** When the animal it means to feed or cull is too far inside a big pen to reach, that one animal walks over to the fence where the butcher is heading, and the rest of the herd stays where it is: nothing is held out to draw them. Once it is fed, or on its lead, it is free to wander off again. If that animal cannot get to the fence, walled in or boxed in by the herd, the butcher leaves it alone for a while (`unreachableCooldownTicks`) and takes another of the same kind, since any one will do, or gets on with its other species and its eggs.

**It picks up eggs and meat lying in its area**, raw or cooked, once its herd needs nothing.

- Eggs of every kind, chickens' and Alex's Mobs' emus' alike.
- It leaves one pocket slot free for its next cull.
- A Chef's kitchen gets what it has room for; the rest goes to storage.
- Anything else lying there, such as a feather, it leaves alone.

**Seeds it picks up go on its shelf**, as much as fits: when it has no animal ready to eat them, and all of them when work ends. What does not fit stays in its pockets.

Which species it tends is decided by what feed you stock — wheat means cows, sheep or goats; carrots mean pigs or rabbits. The last item of each feed stays on the shelf to say so, and is never fed, so a butcher down to its last wheat breeds nothing and shows wheat above its head until the farmer brings more.

**Its culling tool is a Farmer's Delight knife where Farmer's Delight is installed, and an axe where it is not**, never the other one. The knife is what gives Farmer's Delight's extra drops, ham among them. A butcher holding an axe in a world with Farmer's Delight puts the axe in storage and takes the knife from its shelf, or shows a knife until the toolsmith makes it one.

The culling tool is what makes it a butcher. Without one it breeds nothing and shows the tool it is missing above its head until the toolsmith makes it one, feed or no feed. To tend a classic cramming farm instead, turn on `breedOnlyButchers` (see [Configuration](/customization/configuration/)): a butcher with feed and no tool then feeds and breeds indefinitely and never culls.

To cull, the butcher **brings the animal to the smoker**: small animals like rabbits and chicken are carried, larger ones are led on a lead. It never enters the pen and never opens a gate — a leashed animal passes through the gate while it stays shut. Nothing else in the village can hunt an animal on that walk: a cat will not take a rabbit out of the butcher's hands, and a wolf will not take a sheep off its lead. Nor is it distracted: an animal the butcher is bringing in ignores you, even with its food in your hand. It walks the animal right up to the smoker and stands there with it for a moment before killing it, rather than doing it on the way past; `cullPauseTicks` sets how long. The same setting is the longest it waits by the fence: for an animal it went to that does not come over, after which it takes another, and for one on its lead that cannot get out of the pen, which it then lifts over the fence. If the working day ends before it gets there, it culls the animal wherever the two of them are, rather than keep it on its lead or in its arms until morning.

> **Animals it will never touch:** anything with a name tag, anything on your lead, tamed animals, anything wearing a saddle or armour, babies, and mooshrooms. It also always leaves at least one of each colour or variant, and never reduces a species below four.

**With Villagers after Work installed**, after work it cooks meat for the village at the campfires near it, from culls it kept back (see [Villagers after Work](/after-work/)).

**With [More Villagers at Work](/more-villagers/) installed**, it brings a Chef's kitchen the meat its meals are made from, up to a stack of each, once its customers' shelves are seen to. **The Chef gets its meat first**: each kind goes to the Chef until its kitchen holds a stack of it, as with every ingredient, and only then to storage, smoked and stored as before. Once it has culled and fed, its round goes:

- Storage gets the meat the Chef has no room for, raw.
- All of one meat goes into the smoker at once, as much as the fuel there cooks.
- When the batch is done it takes it out, puts the next kind in, and takes the smoked meat to the Chef, with any raw meat the Chef takes. **It smokes as much of each meat as the Chef's meals take smoked**: of the Chef's feasts and pies that take a meat raw or cooked, the share that take it cooked is the share it smokes, and the rest it brings raw. With one meal needing smoked ham and two needing raw ham, a third of its ham is smoked. With Farmer's Delight alone, the honey-glazed ham, the roast chicken and the shepherd's pie take their meat cooked, so all its ham, chicken and mutton is smoked, and the eggs, which the roast chicken and the cake take raw, are never smoked. A meat no meal takes, beef or pork, is smoked and stored as before, and so is all of it with no Chef. With Villagers after Work, its dinner stays raw for the campfire.

**Tools:** 

| Farmer’s Delight Knife, or an Axe without Farmer’s Delight | Mandatory, unless `breedOnlyButchers` is on |
| :---- | :---- |

**Consumables:**

| Feed (Crops) | Optional |
| :---- | :---- |
| Fuel | Optional, in its smoker |

**Suppliers:**

| Farmer | Crops for feed, and bamboo into its smoker |
| :---- | :---- |
| Toolsmith | Culling tool |

**Customers:**

| Leatherworker | Leather |
| :---- | :---- |
| Fletcher | Feathers |
| Librarian | Leather |
| [Chef](/more-villagers/chef/) | Meat, eggs |

**The culling tool is mandatory; feed and fuel are optional.** With `breedOnlyButchers` on, every item is optional, but the shelf must hold at least one of them for the butcher to be able to work.
