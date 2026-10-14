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
| Jukebox | While it plays, villagers gather around it. **With a shelf beside it holding music discs**, villagers gather around it in the evening even while it is silent, and the first to arrive puts a disc from the shelf on, picked at random; whoever is around puts another on when one ends. At bedtime the last villager up walks over, puts the disc back on the shelf and goes to bed. |
| Cushion, carpet | **A seat at a table or around a campfire**: villagers sit on it to rest, and one on a campfire's side, two blocks out, is a seat at dinner. It is at a table two blocks out from one of its blocks, with a block's room between (see [Dinner tables](#dinner-tables)), and around a campfire within three blocks of one villagers dine at. **Any other cushion, carpet or chair is decoration**, and villagers and children leave it alone. **Two side by side around a campfire are for lying back**, and two cushions for leaning back as well. Carpets work the same as cushions and they work on every release; cushions arrived in 26.3. |

Seats from furniture mods can be added through a datapack, with the `vaw_after_work:seats` and `vaw_after_work:seat_blocks` tags (see [Datapacks]({{ site.baseurl }}{% link customization/datapacks.md %})).

## Dinner

**The campfires are lit when work ends**, by the first villagers to come to them, whether or not anyone cooks: a campfire is somewhere to gather as well as to eat. **Villagers never step on a campfire**, lit or not, nor on the squares right beside it, and nobody lights one while someone stands in it.

**A campfire seats four, one on each side, two blocks out**, with a block's room between each and the fire: put a cushion or a carpet there for that side. A villager takes a free place at the campfire with the fewest diners, the nearest of those, sits down if there is a seat there and stands if not, and waits. A butcher, fisherman or farmer comes with food and puts a piece on every side of the fire, whoever is waiting there. **Cooks spread their food over the campfires**: each goes first to a campfire where someone it can feed is waiting, and otherwise to the one with the least food on it, so no campfire stands empty while another is full. When a piece is done, the villager on that side takes it, eats it where it is, and then makes room for the next; one done with nobody waiting is taken up by a hungry villager.

**Each diner gets food it eats.** Under MCA Reborn a vegetarian never gets meat or fish: it waits for the farmer's baked potatoes, and when nothing on the fire suits it the farmer throws it raw food it can eat, such as bread or a carrot, which it eats at its place.

Each cook keeps 8 food items for dinner (`dinnerFoodKept`). It is only what would otherwise have gone to storage, so the village's orders always come first, and everything over it goes to storage, during the day as well; with a Chef in the village, the butcher's and the fisherman's go to the Chef until its kitchen holds a stack of each, and only then to storage, and their 8 stay with them. **The fisherman takes the Chef half of the fish the Chef uses as it catches them**, each fish at even odds, before it keeps any for dinner, so its 8 come from the other half. **When work ends, a cook stores everything it carries but its tools and its dinner, and every other villager with a job stores its food**. The farmer's spare seeds are the exception: it puts them in its composter first, as seeds never go to storage. Before that it takes customers what they are waiting for, even short of a full load, keeping only its dinner: the farmer's bamboo goes to an armorer with no fuel. **A farmer short of 8 food bakes bread from its wheat** to make its dinner up, three wheat to a loaf, so a farmer growing only wheat brings 8 bread. **With a [Chef]({{ site.baseurl }}{% link more-villagers/chef.md %}) in the village, the butcher and the fisherman share their dinner with it**: as the evening begins each takes half of what it kept to the Chef's kitchen, if the kitchen uses it, and keeps the other half to cook. Half the kitchen has no room for, a stack of it there already, goes to storage instead.

| Cook | Brings |
| :---- | :---- |
| Butcher | Raw meat from its culls |
| Fisherman | Raw fish from its catch |
| Farmer | Potatoes, and whatever else it grows that can be eaten as it is, such as berries and melon slices, to throw to the hungry. Never its golden carrots, which are the Chef's |

Any food a cook carries that cooks on a campfire is cooked, other mods' foods included. What is cooked at dinner is eaten there, and never reaches a customer or storage.

## Dinner tables

**With [More Villagers at Work]({{ site.baseurl }}{% link more-villagers.md %})'s Chef, the village dines at tables too.** A table is a row of blocks as long as you like, with **seats around it two blocks out, a block's room between each seat and the table**, as at a campfire, and **its top half a block above the seat**:

- **A low table** of bottom slabs, with carpets or cushions on the floor around it.
- **A high table** of full blocks, with chairs around it: a cushion on a stair is a chair.

Each block of the table with a seat on any of its four sides, two blocks out, is a place for a meal. The block between may be air, grass or flowers, or a carpet, but nothing taller, and a seat right beside the table is no place at it. Furniture from other mods counts too once it is in the seat tags (see [Datapacks]({{ site.baseurl }}{% link customization/datapacks.md %})). **A meal stands on a bottom slab**, which it otherwise would not, and with Villagers at Work in your game as well it is drawn sitting on the slab rather than floating above it.

**The Chef sets the tables when work ends**: it brings a meal from its kitchen for every empty place, and joins the evening. With no table near its kitchen it keeps one meal ready there instead, which goes on the first table you build. **When the evening ends, before it goes to bed, it clears away the empty trays**, taking their bowls back to its kitchen, so the tables are bare in the morning. Only a tray with nothing left on it is cleared, so nobody's meal is taken away. **An empty tray still there in the morning**, one finished after it went to bed or one it could not get to, **is the first thing it clears when it gets up**, before work. One it still cannot get to it clears the next evening as it sets the tables. Any meal eaten a bite or a serving at a time counts, other mods' included, and a cake you put on a table is eaten too.

**A set table comes before a campfire.** A hungry villager with nothing of its own to eat takes a free seat at a meal it eats and sits there, eating it **a bite or a serving at a time** until it is well fed or the meal is gone, then gets up for the next diner. **A villager sitting at a table faces it the whole time**, turning its head only a little to glance at whoever passes. A serving that comes in a bowl leaves the bowl with the tray, for the Chef to take back.

**At a set table the hungry come first, then anyone.** A villager resting may sit down at a set table too, as it takes any seat, but how likely it is to depends on how hungry it is: **a villager that is well fed takes a place at a meal it eats a quarter as often as any other seat, and one that is hungry four times as often.** With as many places at the tables as other seats about, a well-fed villager sits at a table about one rest in five, and a hungry one about four in five. **Whoever sits at a set place eats from the meal there**, a bite or a serving at a time, well fed or not, until it gets up or the meal is gone. **A villager that is well fed eats at most two bites or servings in an evening**, whichever tables it sits at, and then sits there without eating; a hungry one eats until it is well fed, and what it eats from then on counts towards its two. So the food on the tables goes mostly to the hungry, and is still eaten in a village that has had its fill at the fires.

## Food for everyone else

**The farmer throws to hungry villagers what no fire can cook**: once every campfire has food on all its sides, or when its dinner is food that does not cook on a campfire, such as bread or carrots, it walks up to the villagers short of food and throws them a piece each, berries and the like included, never to another farmer, to a villager already well fed, or to one still carrying food of its own to eat. **Farmers spread their throws**: each picks one of the hungry at random, so several farmers never all throw to the same villager. What nobody takes it puts in storage before bed. At work it still shares nothing.

## Eating

**Villagers eat where you can see it**, with particles and the sound of eating, and the food in their hand when Villagers at Work is installed in your game as well. A villager eats what it takes from a campfire, and what it picks up, until it is well fed. **No cooked food is wasted**: food a fire finishes with nobody waiting on its side is taken up from beside the fire and eaten, by a hungry villager first, one sitting or waiting at that fire included, and after a few seconds by any villager, well fed or not. **The same goes for what a farmer threw** that the villager it was thrown to never took up, such as berries that rolled off beside a carpet: after a few seconds a hungry villager goes and takes it up, and a few seconds later any villager does. **One villager goes for each piece, the nearest**, and if it cannot come, the next nearest goes ten seconds later. **It eats sitting down or at its place by a fire**, and stays put until it has finished.

**Food heals a villager as it heals you**, over time rather than at a bite: each food point a villager eats brings back half a heart, until it is whole.

**A food is worth to a villager what it is worth to you.** A villager is **well fed** once it has eaten 12 food points, as your hunger bar counts them: a steak and a baked potato, for example. It stays well fed from one day to the next until it has a child, so a villager fed a little every evening is ready in a few days. A well-fed villager takes no more: it leaves dinner to the hungry, its place at the fire and the food on its side included, and eats nothing it carries. Food it eats from beside a fire or at a set table while well fed still heals it, but does not count towards a child. **A hungry villager eats what it carries first**, sitting down, and waits at a fire only when it has nothing of its own, or nowhere to sit.

## Resting

Villagers not at dinner rest, and how depends on what they rest on and where. **Villagers lie and lean back only around a campfire**: on the seats within three blocks of a campfire villagers dine at, its own seats among them. Anywhere else, along a dinner table or in a house, every seat is sat on upright, one villager to a seat, and two side by side are simply two seats.

| Place | How a villager rests there |
| :---- | :---- |
| A single carpet | Sits upright. Around a campfire it may lean back on its hands instead, as often one as the other. |
| A single cushion, or a seat from a furniture mod | Sits upright. |
| Two cushions side by side, around a campfire | Lies back across both, hands behind its head, or sits on one and leans back with its hands on the other, as often one as the other. |
| Two carpets side by side, around a campfire | Lies back across both, hands behind its head. It never leans back there. |

Around a campfire it rests on two side by side only when both are free, and nobody else sits or lies on either while it is there. **A villager sits and lies only on cushions, carpets and seats**, never on the ground. A diner on a carpet at a campfire's side may lean back too, and one on a cushion there sits upright. Villagers at Work, installed in your game as well, shows them sitting, leaning back with their hands on the ground or on the cushion behind them, and with their hands behind their heads. Without it, a seated villager stands on its seat, and one lying back lies with its arms crossed.

Villagers sit and lie back the same way under model packs that animate them, such as Fresh Animations and Human Era: a villager leaning back rests its hands on the ground behind it under them too, and one lying back has its hands behind its head. With the MCA extension, MCA villagers sit, lean and lie back the same way, their heads lifted off their hands as they lie.

**What a villager not at dinner does is a roll with even chances** between resting on a seat at a table or around a campfire, standing at a campfire, standing around a jukebox (one that plays, or one with music discs on a shelf beside it) and standing around a bell, among those that have room. A campfire has room for as many villagers as it has free sides: a side with no carpet or cushion and nobody on it, where the villager stands. A jukebox has room for 6 (`musicGatherers`), and so does a bell (`bellGatherers`). When nowhere has room, the rest share the jukebox and the bell evenly. Around a bell or a jukebox it moves from spot to spot, until the music stops or it has had enough. A rest and a gathering both last half a minute to a minute, and then it rolls again.

**Nobody heads for a seat someone else is sitting on, nor walks through them.** A villager whose seat is taken on its way there goes to another free seat at once, or does something else, and one that can't get to its seat at a table tries another seat there.

**A villager resting takes any free seat at a table or around a campfire within 32 blocks of itself (`afterWorkRange`), each as likely as any other**: a single cushion, carpet or chair, or two side by side around a campfire, which count as one. A seat at neither is decoration, never sat on; with no such seat free, a villager stands at a campfire or around a jukebox or a bell instead. Only a place at a set table is likelier or less likely, by how hungry the villager is (see [Dinner tables](#dinner-tables)). So the village spreads over every seat it has, the chairs at its tables among them, and a villager that gets up after a rest may well sit down somewhere else next. A seat it cannot get to it leaves alone for a while.

## Children

**Children join in now and then.** In the evening a child may sit on a single cushion or carpet, simply seated, bounce on a cushion as children bounce on beds (on cushions only, never on carpets or other seats), or stand around a playing jukebox and jump to the music. Like grown-ups, children sit and bounce only on seats at a table or around a campfire, never on decoration. A hungry child eats food it carries once it sits down. The rest of the time it plays as children do.

## During the day

**An unemployed villager with nothing to do takes a break now and then** during working hours: it sits on a free seat at a table or around a campfire, or stands around a bell, a campfire or a jukebox that is playing, for half a minute to a minute, then goes back to wandering the village. It is occasional, never its day: a villager takes at most a break every few minutes. A villager hauler with something to carry goes and carries it (see [Logistics]({{ site.baseurl }}{% link general-mechanics/logistics.md %})), and villagers with a job never stop work for one. Nothing is cooked or lit for a break.

## Bedtime

**Villagers go to bed one by one**, each in its own time, up to a minute after bedtime. Nobody goes to bed before its time. **No villager keeps food to the next day**: before bed, every villager carrying food, with a job or without, puts it in the nearest storage chest within 48 blocks, the same chests the workers store in, and everyone starts the morning with empty pockets. A cook's dinner left over goes the same way. Nothing is lost: with no storage in reach, or none with room, it keeps its food. **If you sleep through the night** before a villager has put its food away, it takes it to storage as soon as it gets up, before anything else it does that morning. This is while `bedtimeBreeding` is on, as it is by default; with it off villagers keep their food as they do without the mod, since a villager breeder feeds them through their pockets. **Before bed, a villager puts out every campfire within 32 blocks of it that no villager still up is sitting or standing around**, walking over to each, so the last one up leaves none burning all night. **If you sleep through the night** while villagers are still up, the campfires about them go out as the night ends. **Food still cooking on a campfire is not left on it**: the villager waits beside the fire until the food is done, eats it, with any cooked food left lying beside the fire, and then puts the fire out. Food that has not cooked in its time it takes off raw. After bedtime cooks put food on a campfire only for a villager waiting there. **Once every villager around a campfire has gone to bed, a campfire still burning goes out by itself** within a few seconds, once any food on it has had its time to cook. Food it drops then stays where it lies until villagers eat it the next evening. Nobody lights a campfire after bedtime; they light them again after the next day's work. A villager playing records walks back to the jukebox and puts the disc back on the shelf before it goes to bed, and a disc left in a jukebox with a shelf beside it is put back by the last villager up.

## Breeding

**Villagers have children at night, in bed.** Two well-fed villagers sleeping in beds side by side have a 20% chance each night (`bedtimeBreedingChance`) of a child, if there is a free bed for it within 48 blocks. **All three beds must be under a roof**, the parents' and the child's: anything solid above the bed, glass included. A couple sleeping under the open sky has no children. Both must be grown up, and neither can have had a child in the last five minutes. A child costs both parents their meal, so they must be well fed again before the next.

**This is the only way villagers breed** while `bedtimeBreeding` is on, as it is by default, and under MCA Reborn the only way villagers have children on their own. A villager breeder built for the game without the mod stops breeding. Turn `bedtimeBreeding` off, and villagers breed as they did before the mod, and under MCA Reborn as MCA has them (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %})).

Under MCA Reborn the two must also be married to each other, and the child is born after MCA's pregnancy.
