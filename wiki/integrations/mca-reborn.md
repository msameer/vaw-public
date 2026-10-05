---
title: MCA Reborn
parent: Integrations
nav_order: 2
---

# MCA Reborn

Integration with MCA Reborn is a separate extension. If Installed it adds the following functionality:

- **Spoken diagnostics.** Instead of reading a particle, your villagers tell you what is wrong — "I've nothing to cull with", "The chest is full". Rate-limited and proximity-gated so a village of blocked villagers does not spam you. Talk to a blocked villager and it tells you what it still needs, straight away, even if it has already said so; only you hear the answer.  
- **Held tools render properly**, including correct handedness for left-handed villagers, and the villager swings its tool as it works. A villager taking something to a shelf holds that instead. Note that the same functionality is provided for Vanilla via an optional Client jar.   
- **Happy villagers work harder.** A villager's MCA mood moves its productivity up or down from what you set, so keeping your village happy pays off in work done. See [Productivity]({{ site.baseurl }}{% link general-mechanics/productivity.md %}#mood).  
- **Vegetarians eat no meat.** With Villagers after Work, an MCA villager with the vegetarian trait never eats meat or fish: it gets the farmer's baked potatoes at dinner, or raw food the farmer throws it. See [Villagers after Work]({{ site.baseurl }}{% link after-work.md %}#dinner).  
- **Children as errand-runners** (optional) as mentioned in the [Haulers]({{ site.baseurl }}{% link general-mechanics/logistics.md %}#haulers) section, children may run errands in the village. When the MCA extension is installed, they do this only for their parents.  
- **Children at night.** With Villagers after Work installed and its `bedtimeBreeding` on, as it is by default, a married couple sleeping in beds side by side, both well fed, may start a pregnancy at night, and MCA villagers have children no other way. Turn it off and MCA villagers have children as MCA has them. See [Villagers after Work]({{ site.baseurl }}{% link after-work.md %}).  
- **MCA Chores.** MCA's own chore system is not touched by this mod.  
- **MCA's village storage coexists.** It is a separate system and the mod does not fight it. One neat arrangement: put both in the same building behind an iron door villagers cannot open, with only the copper chest exposed outside.

## MCA Guards

With MCA Reborn installed, guards stop being equipped from nowhere and start drawing gear from your village's armories. A guard walks to an armory, takes what it is missing, and leaves.

**Every guard wears a full set of armour**: helmet, chestplate, leggings and boots, whatever MCA's own kit for the village asks for. MCA still decides a guard's weapons, and its shield. The village's level in MCA, which rises with an armory and a blacksmith building, only changes what they hold, never how much armour they wear. **Swordsmen carry a shield only once the village has an MCA armory or blacksmith building**: before that MCA gives them none to ask for, so they neither take the armorer's shields nor say they need one.

**A guard that cannot get its gear says so.** When none of its armories holds a piece it is missing, a guard on duty tells you which — a helmet, a sword, a bow — the same way a blocked villager tells you what it needs, and it tells you again if you talk to it. A guard on its way to an armory that has the piece says nothing.

**A guard's gear wears out, as yours does.** Its armour wears as it is hit, its sword with every blow and its bow with every shot. A piece that breaks is gone, and the guard fetches another from the armories once the fight is over, so your makers keep working for as long as your guards fight. A sword that breaks mid-fight leaves the guard fighting bare-handed until then. Shields last, since guards never raise them.

**A hurt guard sees to itself first.** Healing comes before gearing up: a guard below half health goes for a potion and fetches its missing armour afterwards. MCA villagers mend slowly on their own, and a well-traded villager has a far deeper health bar than a vanilla one, so after a raid a potion is worth more than a helmet. See [Healing]({{ site.baseurl }}{% link general-mechanics/healing.md %}).

## Swordsmen

- **Armour and shields** from the armorer, made from whatever ore you stock  
- **Swords** from the weaponsmith

## Archers

- **Leather armour** from the leatherworker, dyed if you stock dye  
- **Bows and arrows** from the fletcher. An archer shoots only the arrows it carries and takes sixteen at a time once it runs out. With none left it puts its bow away and fights with its fists until the fight is over, then fetches more. Turn `archersUseArrows` off in the extension's config to have MCA hand them their arrows instead (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %}))
