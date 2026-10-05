---
title: Butcher
parent: Supply Chain
nav_order: 2
---

# Butcher

Manages a herd. Breeds animals, and culls the surplus for meat and other byproducts. Assigned species are claimed per smoker, so two butchers never fight over the same cow.

Items on the shelf also determine the activities done by the butcher:

| Stock this | Enables |
| :---- | :---- |
| Axe or Farmer's Delight knife | Culling |
| wheat, carrots, seeds… | Breeding |
| Fuel | Cooking the meat |

**It feeds first, then culls.** It feeds every grown animal of its herd that is ready to breed, one feed each: one that has just grown up, one you have just added to the pen, and one whose breeding cooldown has run out. Only when there is nothing left to feed, or not enough feed, does it cull, and only the adults above 4 per species (`perSpeciesFloor`). A cull costs no feed, and it never culls an animal that is in love.

Which species it tends is decided by what feed you stock — wheat means cows, sheep or goats; carrots mean pigs or rabbits. The last item of each feed stays on the shelf to say so, and is never fed, so a butcher down to its last wheat breeds nothing and shows wheat above its head until the farmer brings more.

The culling tool is what makes it a butcher. Without one it breeds nothing and shows the tool it is missing above its head until the toolsmith makes it one, feed or no feed. To tend a classic cramming farm instead, turn on `breedOnlyButchers` (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %})): a butcher with feed and no tool then feeds and breeds indefinitely and never culls.

To cull, the butcher **brings the animal to the smoker**: small animals like rabbits and chicken are carried, larger ones are led on a lead. It never enters the pen and never opens a gate — a leashed animal passes through the gate while it stays shut. Nothing else in the village can hunt an animal on that walk: a cat will not take a rabbit out of the butcher's hands, and a wolf will not take a sheep off its lead. Nor is it distracted: an animal the butcher is bringing in ignores you, even with its food in your hand. It walks the animal right up to the smoker and stands there with it for a moment before killing it, rather than doing it on the way past; `cullPauseTicks` sets how long. If the working day ends before it gets there, it culls the animal wherever the two of them are, rather than keep it on its lead or in its arms until morning.

> **Animals it will never touch:** anything with a name tag, anything on your lead, tamed animals, anything wearing a saddle or armour, babies, and mooshrooms. It also always leaves at least one of each colour or variant, and never reduces a species below four.

**With Villagers after Work installed**, after work it cooks meat for the village at the campfires near it, from culls it kept back (see [Villagers after Work]({{ site.baseurl }}{% link after-work.md %})).

**Tools:** 

| Axe or Farmer’s Delight Knife | Mandatory, unless `breedOnlyButchers` is on |
| :---- | :---- |

**Consumables:**

| Feed (Crops) | Optional |
| :---- | :---- |
| Fuel | Optional |

**Suppliers:**

| Farmer | Crops for feed, Bamboo for fuel |
| :---- | :---- |
| Toolsmith | Culling tool |

**Customers:**

| Leatherworker | Leather |
| :---- | :---- |
| Fletcher | Feathers |
| Librarian | Leather |

**The culling tool is mandatory; feed and fuel are optional.** With `breedOnlyButchers` on, every item is optional, but the shelf must hold at least one of them for the butcher to be able to work.
