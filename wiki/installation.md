---
title: Installation / Uninstallation
nav_order: 9
---

# Installation / Uninstallation

Villagers at Work is a Fabric mod. Everything it does runs on the server, so players with a vanilla game can join a server that has it, Bedrock players included. The other two jars are optional.

## The jars

| Jar | What it is | Needs | Where it goes |
| :---- | :---- | :---- | :---- |
| `vaw-core-<version>+<minecraft>.jar` | **The mod.** Every profession, hauling, the signals and the datapacks. | Fabric Loader 0.19.5 or newer, Fabric API, Fabric Language Kotlin 1.14.1 or newer, Java 25. One jar for each Minecraft release: 26.1.2, 26.2 or 26.3. | The server, or your own game for single player. |
| `vaw-client-<version>+<minecraft>.jar` | **Optional.** Draws the tool a villager works with in its hand, arms uncrossed and swinging as it works, and in its place whatever the villager is taking to a shelf. Without it the villagers work bare-handed; nothing else changes. | Fabric API and Fabric Language Kotlin. | A player's own game. It is never needed on a server. |
| `vaw-human-era.zip`, `vaw-human-era-fa.zip` | **Optional.** Resource packs for [Human Era](https://modrinth.com/resourcepack/human-era-villagers-illagers) villagers: they swing their tools and hold out the item they are trading. The second is for Human Era's Fresh Animations add-on, and is an additional file under the first. They have their own project, [Villagers at Work - Human Era Villagers Compat](https://www.curseforge.com/minecraft/texture-packs/vaw-hevi-compat), because they are versioned by Human Era rather than by the mod. | Human Era, Entity Model Features, and the client jar. | A player's own `resourcepacks/` folder, **above** Human Era. |
| `vaw-mca-<version>+<minecraft>.jar` | **Optional.** The [MCA Reborn]({{ site.baseurl }}{% link integrations/mca-reborn.md %}) extension, from its own project, [Villagers at Work - MCA Reborn Extension](https://www.curseforge.com/minecraft/mc-mods/villagers-at-work-mca-reborn-extension), where its source is published beside the jar as an additional download. It is GPLv3, as MCA Reborn is; the mod itself is not. | MCA Reborn 8.1.11 or newer, and the mod itself. One jar for 26.1.2 and one for 26.2, the releases MCA Reborn itself supports; there is none for 26.3 until MCA has one. | Wherever MCA Reborn is installed: the server, and every player's game. |

Farmer's Delight needs no jar of its own: its support is built into the mod and turns itself on when Farmer's Delight is installed.

## What goes where

| How you play | On the server, or your own game | On each player's game | What players see |
| :---- | :---- | :---- | :---- |
| **Single player** | The mod | — | Everything. Add the client jar to see tools in the villagers' hands. |
| **Single player with MCA Reborn** | The mod, MCA Reborn and the MCA extension | — | Everything, with MCA villagers holding their tools and saying what they need. |
| **A server, players on vanilla Java** | The mod | Nothing | Villagers at work, the error icon and the particles. Tools in hands for any player who adds the client jar, which needs Fabric. |
| **A server with MCA Reborn** | The mod, MCA Reborn and the MCA extension | MCA Reborn, the MCA extension and the mod: the extension needs the mod beside it. The client jar is optional. | Everything, with MCA villagers holding their tools and saying what they need. |
| **Bedrock players through Geyser** | The mod, next to Geyser | Nothing: Bedrock cannot take mods | Villagers at work and both particles. Bedrock does not show the error icon, so a blocked villager shows only the angry particles. MCA Reborn is not available to them. |
| **Opening a single player world to LAN** | Your game, as for single player | As for a server | As for a server. |

## Uninstallation

**Before you uninstall:** a tool a villager has taken from its shelf — the hoe in a farmer's hands, the axe a butcher uses — is held by the mod, not in the villager's vanilla inventory, and stays with the villager until it dies, when it drops. Uninstalling the mod removes those tools. An allay that was hauling keeps whatever it held in its hand; take it with an empty hand, as from any allay. Tools still on shelves, and everything else — shelves, chests, storage, your farms — stay exactly as they were.
