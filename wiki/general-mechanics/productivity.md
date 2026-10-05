---
title: Productivity
parent: General Mechanics
nav_order: 3
---

# Productivity

Villagers work at a human pace rather than a machine's.

**Productivity is the share of its time a villager spends working while it has work to do.** At `0.7` it works 70% of that time and rests the other 30%, saving the rest up into short breaks: a 5-second break after about 12 seconds of work. When there is nothing to do it simply idles, and that idle time counts as rest.

> **It changes how much of the day they work, never how fast they work.** A villager that has taken a job on sees it through at its usual speed. A farmer walking to a plot is not walking any slower.

## The dial

`productivity` runs from `0` to `1`, and you can set it for the whole village or **per profession** — see *Customization → Configuration*. It means the same for every profession, whether its tasks take a second, like a farmer's, or a minute, like a smith's.

| Set it to | What you get |
| :---- | :---- |
| `1` | Every task the moment it appears, and no breaks. The behaviour the mod had before any of this. |
| `0.7` | The default. A 5-second break after about 12 seconds of work. |
| `0.5` | Half the time working: a 5-second break after every 5 seconds of work. |
| Lower | Ever more time on breaks, the same 5 seconds each, coming sooner. |
| `0` | A villager that never starts new work at all. It will stand at a fully stocked station doing nothing. |

The length of a break is `breakTicks` (100, 5 seconds).

## Mood

Without MCA Reborn every villager of a profession works at the same productivity. **With the MCA extension, mood counts**: the productivity you set is what a villager in a middling mood works at, a happy villager works harder and an unhappy one less. An overjoyed villager works at your value plus `moodProductivity` (`0.2` by default), a miserable one at your value minus it, and never above `1` or below `0`. So a village you keep happy gets more done, and one you neglect gets less. Set `moodProductivity` to `0` in the extension's config to leave mood out of it — see [MCA Reborn]({{ site.baseurl }}{% link integrations/mca-reborn.md %}).

## What it does not touch

**Deliveries and deposits are never held up by a break.** Once a villager is carrying something a customer ordered, it takes it there, and it rests afterwards. Otherwise a blocked station would wait on a villager that could not be bothered to walk over with the item that unblocks it.

**Haulers are not paced either.** Allays and hauling villagers run on their own rules — see *Logistics*.

**An animal already in hand is never treated as new work**, so a butcher walking a cow to its smoker always finishes the walk.

> **What productivity changes** is how the work there *is* gets spread across the day.
