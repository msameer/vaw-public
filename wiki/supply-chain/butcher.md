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
| Farmer's Delight knife, or an axe without Farmer's Delight | Culling |
| wheat, carrots, seeds… | Breeding |
| Fuel | Cooking the meat |

**It feeds first, then culls.** It feeds every grown animal of its herd that is ready to breed, one feed each: one that has just grown up, one you have just added to the pen, and one whose breeding cooldown has run out. Only when there is nothing left to feed, or not enough feed, does it cull, and only the adults above 4 per species (`perSpeciesFloor`). A cull costs no feed, and it never culls an animal that is in love.

**It works the herd over the fence, and the animal it picked comes over to it.** When the animal it means to feed or cull is too far inside a big pen to reach, that one animal walks over to the fence where the butcher is heading, and the rest of the herd stays where it is: nothing is held out to draw them. Once it is fed, or on its lead, it is free to wander off again. If that animal cannot get to the fence, walled in or boxed in by the herd, the butcher leaves it alone for a while (`unreachableCooldownTicks`) and takes another of the same kind, since any one will do, or gets on with its other species and its eggs.

Which species it tends is decided by what feed you stock — wheat means cows, sheep or goats; carrots mean pigs or rabbits. The last item of each feed stays on the shelf to say so, and is never fed, so a butcher down to its last wheat breeds nothing and shows wheat above its head until the farmer brings more.

**Its culling tool is a Farmer's Delight knife where Farmer's Delight is installed, and an axe where it is not**, never the other one. The knife is what gives Farmer's Delight's extra drops, ham among them. A butcher holding an axe in a world with Farmer's Delight puts the axe in storage and takes the knife from its shelf, or shows a knife until the toolsmith makes it one.

The culling tool is what makes it a butcher. Without one it breeds nothing and shows the tool it is missing above its head until the toolsmith makes it one, feed or no feed. To tend a classic cramming farm instead, turn on `breedOnlyButchers` (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %})): a butcher with feed and no tool then feeds and breeds indefinitely and never culls.

To cull, the butcher **brings the animal to the smoker**: small animals like rabbits and chicken are carried, larger ones are led on a lead. It never enters the pen and never opens a gate — a leashed animal passes through the gate while it stays shut. Nothing else in the village can hunt an animal on that walk: a cat will not take a rabbit out of the butcher's hands, and a wolf will not take a sheep off its lead. Nor is it distracted: an animal the butcher is bringing in ignores you, even with its food in your hand. It walks the animal right up to the smoker and stands there with it for a moment before killing it, rather than doing it on the way past; `cullPauseTicks` sets how long. If the working day ends before it gets there, it culls the animal wherever the two of them are, rather than keep it on its lead or in its arms until morning.

> **Animals it will never touch:** anything with a name tag, anything on your lead, tamed animals, anything wearing a saddle or armour, babies, and mooshrooms. It also always leaves at least one of each colour or variant, and never reduces a species below four.

**With Villagers after Work installed**, after work it cooks meat for the village at the campfires near it, from culls it kept back (see [Villagers after Work]({{ site.baseurl }}{% link after-work.md %})).

**With [More Villagers at Work]({{ site.baseurl }}{% link more-villagers.md %}) installed**, it brings a Chef's kitchen the meat its meals are made from, up to a stack of each, once its customers' shelves are seen to. **The Chef gets its meat first**: each kind goes to the Chef until its kitchen holds a stack of it, as with every ingredient, and only then to storage, smoked and stored as before. It takes the Chef what it has as soon as it has it, however little. **It smokes as much of each meat as the Chef's meals take smoked**: of the Chef's feasts and pies that take a meat raw or cooked, the share that take it cooked is the share it smokes, and the rest it brings raw. With one meal needing smoked ham and two needing raw ham, a third of its ham is smoked. With Farmer's Delight alone, the honey-glazed ham, the roast chicken and the shepherd's pie take their meat cooked, so all its ham, chicken and mutton is smoked, and the eggs, which the roast chicken and the cake take raw, are never smoked. A meat no meal takes, beef or pork, is smoked and stored as before, and so is all of it with no Chef. With Villagers after Work, its dinner stays raw for the campfire. **It picks up the eggs laid in its area** while a Chef's kitchen has room for eggs, and takes them there.

**Tools:** 

| Farmer’s Delight Knife, or an Axe without Farmer’s Delight | Mandatory, unless `breedOnlyButchers` is on |
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
| [Chef]({{ site.baseurl }}{% link more-villagers/chef.md %}) | Meat, eggs |

**The culling tool is mandatory; feed and fuel are optional.** With `breedOnlyButchers` on, every item is optional, but the shelf must hold at least one of them for the butcher to be able to work.
