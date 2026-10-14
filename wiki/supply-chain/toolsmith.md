---
title: Toolsmith
parent: Supply Chain
nav_order: 11
---

# Toolsmith

Makes tools for other villagers, on demand. It watches nearby workstations, and when a station's shelf is missing its tool, it forges one and delivers it.

It makes hoes and Farmer's Delight knives for farmers, and culling tools for butchers. With `toolsmithMakesHoes` off it makes no hoes, and a farmer gets one only from you. Shears and fishing rods are not its job — shepherds and fishermen make their own.

**Stock better material and you get better tools.** It uses the best available, working down diamond → iron → copper→ stone →gold → wood planks. It never works flint, so it makes no flint knife.

**A tool it can't make never holds up one it can.** It makes whichever missing tool its materials allow: with only copper, a Chef missing both its bucket and its knife gets a copper knife, and the bucket waits until you stock iron.

**A butcher gets one kind of tool.** With Farmer's Delight installed it is a knife and never an axe; without it, an axe. Farmer's Delight has no stone or wooden knife, so with it a toolsmith stocked only with stone or planks makes a butcher nothing: give it ingots or diamonds.

**Tools:** None 

**Consumables:**

| Sticks | Mandatory |
| :---- | :---- |
| Ingots, stones or planks | Mandatory to have any of them |

**Suppliers:**

| Player | Planks |
| :---- | :---- |
| Armorer | Ingots |
| Fisherman | Sticks |

**Customers:**

| Farmer | Hoe, Farmer Delights Knife |
| :---- | :---- |
| Butcher | Farmer Delights Knife, or Axe without Farmer’s Delight |
| [Chef]({{ site.baseurl }}{% link more-villagers/chef.md %}) | Bucket, Farmer's Delight Knife |
| [Beekeeper]({{ site.baseurl }}{% link more-villagers/beekeeper.md %}) | Shears |
