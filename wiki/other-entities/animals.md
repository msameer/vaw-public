---
title: Animals
parent: Other entities
nav_order: 2
---

# Animals

Animals are claimed by individual workstations rather than by area, so two butchers never manage the same cow and never both cull it.

Each animal worker handles **two species of animals**. Culling never takes a species below four, so a herd can never be wiped out.

**To absolutely protect an animal, give it a name tag.** Named animals are never touched by anything in this mod, ever. Moving an animal outside the workstation's range works too, but name tags survive wandering.

## Leashing

When a butcher culls a large animal, it leads it to the smoker on a lead rather than killing it in the pen.

**Leashed animals pass through fence gates without the gate opening.** That is what keeps your herd contained — there is never an open gate for the others to walk out of. Villagers in this mod never open gates at all.

Small animals like rabbits and chicken are carried instead, which sidesteps fences entirely.

This works with modded gates too, including Macaw's, via a datapack tag.

**A pen with no gate is culled over the fence instead.** If there is no way for the animal to walk out — a pen of walls, trapdoors, or fences with no gate in them — the butcher kills it where it stands and takes the drops over the fence, and no lead is ever attached.

**You choose how it gets there**, with the `cullingMode` setting:

| `lead_teleport` | The default. It walks the animal out through a gate that stays shut, and an animal that cannot reach the gate — boxed into a corner by the rest of the herd — is lifted past it rather than given up on, so one always reaches the smoker. |
| :---- | :---- |
| `lead` | The same walk without the lift. In a pen with a herd in it, an animal the others box into a corner never reaches the gate and is culled where it stands. |
| `over_fence` | No leads at all. Every animal is killed in its pen and the drops come over the fence. |
