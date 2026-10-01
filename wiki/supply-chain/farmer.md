---
title: Farmer
parent: Supply Chain
nav_order: 5
---

# Farmer

The busiest profession in the mod. Within a **9×9 area centred on its composter**, its [service area]({{ site.baseurl }}{% link general-mechanics/service-area.md %}), it will:

- Harvest and immediately replant crops  
- **Till** new ground to expand its own field, if it has a hoe  
- **Plant the sugar cane, bamboo, cactus and sweet berries it carries**, if it has a hoe, anywhere in the field they will grow, so a cane or bamboo farmer expands its field the way a wheat farmer tills. It never plants one where anyone is standing. `plantPerennials` turns this off, and the farmer then harvests these plants but never plants a new one  
- Harvest melons, pumpkins, sugar cane, bamboo, cactus, sweet berries and glow berries, none of which vanilla farmers touch  
- **Pick up crops lying in its field**: seeds, produce and cuttings that were dropped or spilled, which it then plants, delivers or stores like its own harvest. It leaves anything you have just thrown for a moment, and never picks up what isn't a crop  
- Compost surplus seeds into bone meal, then use about half of it on its own crops and send the rest to storage

> **Tilling is careful.** It will not till without seed to sow the new plot with, will not till in the dark (so your mushroom farm on Rich Soil is safe), will not till out of water range, and will not touch a block that already has a crop on it.  
>   
> **Planting is careful too.** Water in a field is nearly always there to keep farmland moist, and bamboo or cactus takes its plot for good — so while it has dry ground to plant on, the farmer leaves ground near water alone. Sugar cane only grows beside water, so it is planted there as it always was. Set `plantCuttingsNearWater` if you want the water's edge open to everything.  
>   
> **Nothing is planted around a cactus.** The farmer leaves the eight squares around a cactus empty, corners included, and plants a cactus only where those eight hold no crop and no farmland, so there is always a way through the field, a lane at least one square wide between any two cacti. A crop already growing there is harvested and not replanted.  
>   
> **A cactus never hurts a farmer at work.** Even with a lane between them, a villager turning a corner brushes the cactus beside it, so while it works a farmer takes nothing from a cactus or a berry bush — and neither does any other villager at work. After work a cactus hurts as it always has, but **no villager panics at one**: in vanilla the first brush sent a villager running about among the cacti until they killed it, and now it takes the one hit and walks on. A zombie still sends it running.  
>   
> **The working farmer will not drop food for other villagers for breeding.**

**Tools:**

| Hoe | Optional |
| :---- | :---- |
| Farmer's Delight’s Knife | Optional |

**The hoe is what grows the field.** A farmer with a hoe tills new ground and plants cuttings on open ground, as above. A farmer without one keeps the field it has and never makes it bigger: it harvests and replants, sows farmland that is already there, and harvests cane, bamboo, cactus and berries, but it never tills and never plants anything on open ground. It shows no icon for the missing hoe.

The toolsmith makes a hoe for every farmer, so by default every field grows. To choose which fields grow yourself, turn off `toolsmithMakesHoes` (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %})): the toolsmith then leaves hoes to you, and only a farmer you give a hoe to, on its shelf, grows its field. A small farm you tilled yourself stays that size with a farmer you give no hoe.

**Consumables:**

| Gold nuggets | Optional |
| :---- | :---- |

It replants from its own harvest and needs nothing else to farm. An empty plot gets the crop most of the plots around it grow, so a gap in a row of carrots gets a carrot and rows extend themselves; with nothing around it, it gets the first seed the farmer carries. A crop whose harvest gives no seed, like Farmer's Delight tomatoes, is replanted from its produce: when a plot in a tomato row needs one, the farmer makes tomato seeds from one of its tomatoes, and only then. It keeps back one seed for each plot of farmland standing empty, and one cane or bamboo for each plot of ground that would hold one, counting only plots it can get to; everything else goes to its customers and to storage. It leaves the squares around a melon or pumpkin stem you plant empty, so the stem has room for its fruit. Gold nuggets are the one thing you can add: with nuggets on its shelf the farmer turns its own melon slices into **glistering melon slices** for the cleric, which a master farmer already sells. Without them it simply grows melons.

**Suppliers:**

| Toolsmith | Tools |
| :---- | :---- |

**Customers:** 

| Butcher | Crops for feed Bamboo for fuel |
| :---- | :---- |
| Cartographer | Sugar cane |
| Armorer | Bamboo for fuel |
| Cleric | Glistering melon slices |

Cactus and bamboo are planted from what the farmer is carrying, the same way cane is, and go in looking the way you would have placed them: bamboo as a green shoot, not a bare stick.
