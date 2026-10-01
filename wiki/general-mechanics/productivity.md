---
title: Productivity
parent: General Mechanics
nav_order: 3
---

# Productivity

Villagers work at a human pace rather than a machine's.

**Productivity is how readily a villager takes on work it has just noticed.** A ripe crop is picked up on an unhurried pass rather than the instant it ripens, and what a villager passes over is left to pile up until it comes back to it. After a stretch of tasks it takes a break.

> **It changes how readily they start, never how fast they work.** A villager that has taken a job on sees it through at its usual speed. A farmer walking to a plot is not walking any slower.

## The dial

`productivity` runs from `0` to `1`, and you can set it for the whole village or **per profession** — see *Customization → Configuration*.

| Set it to | What you get |
| :---- | :---- |
| `1` | Every task the moment it appears, and no breaks. The behaviour the mod had before any of this. |
| `0.7` | The default. Villagers get the day's work done without pouncing on it. |
| Lower | Work piles up visibly and gets done in longer, later stretches, with more time spent idle between them. |
| `0` | A villager that never starts new work at all. It will stand at a fully stocked station doing nothing. |

Lowering it also brings the breaks sooner and makes them longer, so a lazy villager both starts less often and rests more once it has.

## What it does not touch

**Deliveries and deposits are never paced.** Once a villager is carrying something a customer ordered, it takes it there. Otherwise a blocked station would wait on a villager that could not be bothered to walk over with the item that unblocks it.

**Haulers are not paced either.** Allays and hauling villagers run on their own rules — see *Logistics*.

**An animal already in hand is never treated as new work**, so a butcher walking a cow to its smoker always finishes the walk.

> **What productivity changes** is how the work there *is* gets spread across the day.
