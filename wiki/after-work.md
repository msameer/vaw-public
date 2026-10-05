---
title: Villagers after Work
nav_order: 10
---

# Villagers after Work

**A separate mod, and it needs Villagers at Work.** Install its jar beside the mod (see [Installation]({{ site.baseurl }}{% link installation.md %})). Everything on this page happens only with it installed.

When the working day ends, villagers gather. Give the village campfires, cushions and a jukebox, and the evening becomes a meal and a party. The butcher, the fisherman and the farmer cook what they kept back from the day, the others sit around the fire and eat, and villagers who have eaten well may have a child that night.

## Setting it up

There are several places you can set up for villagers to relax after work. A villager goes to whichever it finds within 32 blocks of itself (`afterWorkRange`). Villagers gather around a bell, a campfire or a jukebox.

| Place | What it is for |
| :---- | :---- |
| Bell | Villagers gather around it. |
| Campfire | Dinner, and villagers gather around it. Any campfire or soul campfire standing on the ground under open sky, with a carpet or cushion on at least one side, two blocks out. A campfire with no carpet or cushion beside it is left alone, such as campfires built into a roof or used as lights, and so is one under a roof or a beehive. |
| Jukebox | While it plays, villagers gather around it. **With a shelf beside it holding music discs**, an unemployed villager takes the jukebox for the evening as soon as work ends: it puts a disc from the shelf on, picked at random, puts on another when one ends, and at bedtime walks back to the jukebox, puts the disc back on the shelf and goes to bed. |
| Cushion, carpet | Villagers sit on it to rest, and one on a campfire's side, two blocks out, is a seat at dinner. **Two side by side are for lying back**, and two cushions for leaning back as well. Carpets work the same as cushions and they work on every release; cushions arrived in 26.3. |

Seats from furniture mods can be added through a datapack, with the `vaw_after_work:seats` and `vaw_after_work:seat_blocks` tags (see [Datapacks]({{ site.baseurl }}{% link customization/datapacks.md %})).

## Dinner

**The campfires are lit when work ends**, by the first villagers to come to them, whether or not anyone cooks: a campfire is somewhere to gather as well as to eat. **Villagers never step on a campfire**, lit or not, nor on the squares right beside it, and nobody lights one while someone stands in it.

**A campfire seats four, one on each side, two blocks out**, with a block's room between each and the fire: put a cushion or a carpet there for that side. A villager takes a free place at the campfire with the fewest diners, the nearest of those, sits down if there is a seat there and stands if not, and waits. A butcher, fisherman or farmer comes with food and puts a piece on every side of the fire, whoever is waiting there. **Cooks spread their food over the campfires**: each goes first to a campfire where someone it can feed is waiting, and otherwise to the one with the least food on it, so no campfire stands empty while another is full. When a piece is done, the villager on that side takes it, eats it where it is, and then makes room for the next; one done with nobody waiting is taken up by a hungry villager.

**Each diner gets food it eats.** Under MCA Reborn a vegetarian never gets meat or fish: it waits for the farmer's baked potatoes, and when nothing on the fire suits it the farmer throws it raw food it can eat, such as bread or a carrot, which it eats at its place.

Each cook keeps 8 food items for dinner (`dinnerFoodKept`). It is only what would otherwise have gone to storage, so the village's orders always come first, and everything over it goes to storage, during the day as well. **When work ends, a cook stores everything it carries but its tools and its dinner, and every other villager with a job stores its food**. **A farmer short of 8 food bakes bread from its wheat** to make its dinner up, three wheat to a loaf, so a farmer growing only wheat brings 8 bread.

| Cook | Brings |
| :---- | :---- |
| Butcher | Raw meat from its culls |
| Fisherman | Raw fish from its catch |
| Farmer | Potatoes |

Any food a cook carries that cooks on a campfire is cooked, other mods' foods included. What is cooked at dinner is eaten there, and never reaches a customer or storage.

## Food for everyone else

**The farmer throws to hungry villagers what no fire can cook**: once every campfire has food on all its sides, or when its dinner is food that does not cook on a campfire, such as bread or carrots, it walks up to the villagers short of food and throws them a piece each, never to another farmer, or to a villager already well fed. What nobody takes it keeps for the next evening. At work it still shares nothing.

## Eating

**Villagers eat where you can see it**, with particles and the sound of eating, and with the client jar the food in their hand. A villager eats what it takes from a campfire, and what it picks up, until it is well fed. **Food a fire finishes with nobody waiting on its side is not wasted**: a hungry villager takes it up from beside the fire and eats it. **It eats sitting down or at its place by a fire**, and stays put until it has finished.

**Food heals a villager as it heals you**, over time rather than at a bite: each food point a villager eats brings back half a heart, until it is whole.

**A food is worth to a villager what it is worth to you.** A villager is **well fed** once it has eaten 12 food points, as your hunger bar counts them: a steak and a baked potato, for example. It stays well fed from one day to the next until it has a child, so a villager fed a little every evening is ready in a few days. A well-fed villager takes no more: it leaves dinner to the hungry, its place at the fire and the food on its side included, and what it already carries it eats once it is hungry again. **A hungry villager eats what it carries first**, sitting down, and waits at a fire only when it has nothing of its own, or nowhere to sit.

## Resting

Villagers not at dinner rest, and how depends on what they rest on:

| Place | How a villager rests there |
| :---- | :---- |
| A single carpet | Sits upright, or leans back on its hands, as often one as the other. |
| A single cushion, or a seat from a furniture mod | Sits upright. |
| Two cushions side by side | Lies back across both, hands behind its head, or sits on one and leans back with its hands on the other, as often one as the other. |
| Two carpets side by side | Lies back across both, hands behind its head. It never leans back there. |

It rests on two side by side only when both are free, and nobody else sits or lies on either while it is there. **A villager sits and lies only on cushions, carpets and seats**, never on the ground. A diner on a carpet at a campfire's side may lean back too, and one on a cushion there sits upright. The client jar shows them sitting, leaning back with their hands on the ground or on the cushion behind them, and with their hands behind their heads. Without it, a seated villager stands on its seat, and one lying back lies with its arms crossed.

Villagers sit and lie back the same way under model packs that animate them, such as Fresh Animations and Human Era: a villager leaning back rests its hands on the ground behind it under them too, and one lying back has its hands behind its head. With the MCA extension, MCA villagers sit, lean and lie back the same way, their heads lifted off their hands as they lie.

**What a villager not at dinner does is a roll with even chances** between resting on a seat, standing at a campfire, standing around a playing jukebox and standing around a bell, among those that have room. A campfire has room for as many villagers as it has free sides: a side with no carpet or cushion and nobody on it, where the villager stands. A playing jukebox has room for 6 (`musicGatherers`), and so does a bell (`bellGatherers`). When nowhere has room, the rest share the jukebox and the bell evenly. Around a bell or a jukebox it moves from spot to spot, until the music stops or it has had enough. A rest and a gathering both last half a minute to a minute, and then it rolls again.

## Children

**Children join in now and then.** In the evening a child may sit on a single cushion or carpet, simply seated, bounce on a cushion as children bounce on beds (on cushions only, never on carpets or other seats), or stand around a playing jukebox and jump to the music. A hungry child eats food it carries once it sits down. The rest of the time it plays as children do.

## During the day

**An unemployed villager with nothing to do takes a break now and then** during working hours: it sits on a free seat, or stands around a bell, a campfire or a jukebox that is playing, for half a minute to a minute, then goes back to wandering the village. It is occasional, never its day: a villager takes at most a break every few minutes. A villager hauler with something to carry goes and carries it (see [Logistics]({{ site.baseurl }}{% link general-mechanics/logistics.md %})), and villagers with a job never stop work for one. Nothing is cooked or lit for a break.

## Bedtime

**Villagers go to bed one by one**, each in its own time, up to a minute after bedtime. Nobody goes to bed before its time. **Before bed, a villager puts out every campfire within 32 blocks of it that no villager still up is sitting or standing around**, walking over to each, so the last one up leaves none burning all night. **Food still cooking on a campfire is not left on it**: the villager waits beside the fire until the food is done, takes it, and then puts the fire out. Food that has not cooked in its time it takes off raw. After bedtime cooks put food on a campfire only for a villager waiting there. **Once every villager around a campfire has gone to bed, a campfire still burning goes out by itself** within a few seconds, once any food on it has had its time to cook. Nobody lights a campfire after bedtime; they light them again after the next day's work. A villager playing records walks back to the jukebox and puts the disc back on the shelf before it goes to bed, and a disc left in a jukebox with a shelf beside it is put back by the last villager up.

## Breeding

**Villagers have children at night, in bed.** Two well-fed villagers sleeping in beds side by side have a 20% chance each night (`bedtimeBreedingChance`) of a child, if there is a free bed for it within 48 blocks. Both must be grown up, and neither can have had a child in the last five minutes. A child costs both parents their meal, so they must be well fed again before the next.

**This is the only way villagers breed** while `bedtimeBreeding` is on, as it is by default, and under MCA Reborn the only way villagers have children on their own. A villager breeder built for the game without the mod stops breeding. Turn `bedtimeBreeding` off, and villagers breed as they did before the mod, and under MCA Reborn as MCA has them (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %})).

Under MCA Reborn the two must also be married to each other, and the child is born after MCA's pregnancy.
