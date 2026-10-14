---
title: Installation / Uninstallation
nav_order: 9
---

# Installation / Uninstallation

Villagers at Work is a Fabric mod, and on Minecraft 26.1.2 it runs on NeoForge too, through Sinytra Connector ([below](#on-neoforge)). Everything it does runs on the server, so players with a vanilla game can join a server that has it, Bedrock players included. The mod is one jar for the server and for a player's game alike; everything else here is optional.

## The jars

| Jar | What it is | Needs | Where it goes |
| :---- | :---- | :---- | :---- |
| `vaw-<version>+<minecraft>.jar` | **The mod.** Every profession, hauling, the signals and the datapacks. On a player's own game it also draws the tool a villager works with in its hand, arms uncrossed and swinging as it works, and in its place whatever the villager is taking to a shelf; a server never loads that part, and a player without the mod sees the villagers work bare-handed. | Fabric Loader 0.19.3 or newer, Fabric API, Fabric Language Kotlin 1.13.14 or newer, Java 25. One jar for each Minecraft release: 26.1.2, 26.2 or 26.3. | The server, and your own game for single player or to see the tools in the villagers' hands. |
| `vaw-human-era.zip`, `vaw-human-era-fa.zip` | **Optional.** Resource packs for [Human Era](https://modrinth.com/resourcepack/human-era-villagers-illagers) villagers: they swing their tools, hold out the item they are trading, and dress More Villagers at Work's Chef and beekeeper in their clothes, which come out scrambled on Human Era's villagers without them. The second is for Human Era's Fresh Animations add-on. They have their own project, [Villagers at Work - Human Era Villagers Compat](https://www.curseforge.com/minecraft/texture-packs/vaw-hevi-compat), because they are versioned by Human Era rather than by the mod. | Human Era, Entity Model Features, and the mod on the player's game. | A player's own `resourcepacks/` folder, **above** Human Era. |
| `vaw-after-work-<version>+<minecraft>.jar` | **Optional.** [Villagers after Work]({{ site.baseurl }}{% link after-work.md %}), a separate mod: the village's evening, with dinner at its campfires, rest on its cushions, and children at bedtime. | The mod itself, and what it needs. One jar for each Minecraft release. | Beside the mod: the server, or your own game for single player. |
| `vaw-more-<version>+<minecraft>.jar` | **Optional.** [More Villagers at Work]({{ site.baseurl }}{% link more-villagers.md %}), a separate mod: professions of its own, the Chef and the beekeeper. | The mod itself, and [Farmer's Delight](https://modrinth.com/mod/farmers-delight-refabricated) for the Chef: without it there is no Chef. One jar for each Minecraft release. | Beside the mod, **on the server and on every player's game**: players cannot join a server that has it without it. |
| `vaw-mca-<version>+<minecraft>.jar` | **Optional.** The [MCA Reborn]({{ site.baseurl }}{% link integrations/mca-reborn.md %}) extension, from its own project, [Villagers at Work - MCA Reborn Extension](https://www.curseforge.com/minecraft/mc-mods/villagers-at-work-mca-reborn-extension), where its source is published beside the jar as an additional download. It is GPLv3, as MCA Reborn is; the mod itself is not. | MCA Reborn 8.1.11 or newer, and the mod itself. One jar for 26.1.2 and one for 26.2, the releases MCA Reborn itself supports; there is none for 26.3 until MCA has one. | Wherever MCA Reborn is installed: the server, and every player's game. |

Farmer's Delight needs no jar of its own: its support is built into the mod and turns itself on when Farmer's Delight is installed.

## On NeoForge

On Minecraft 26.1.2 the same jars run on NeoForge through [Sinytra Connector](https://modrinth.com/mod/connector). Install Connector and what it asks for, Forgified Fabric API among them, and Fabric Language Kotlin **1.13.14+kotlin.2.4.20**: the 1.14 releases need a newer Fabric Loader than Connector has. **If your launcher's NeoForge is older than 26.1.2.112**, as GDLauncher's 26.1.2.109 is, install Forgified Fabric API **0.155.2+26.1.2+3.5.5**: the newer 3.5.7 needs 26.1.2.112 and stops the game with a list of errors at start. Then add the mod's jars as above, in the same places. Villagers after Work runs there too, and so does the MCA extension, beside MCA Reborn's NeoForge version.

Two things are Fabric only for now:

- **Farmer's Delight support.** Farmer's Delight has no NeoForge release for 26.1 yet, and its Fabric port does not start under Connector.
- **Minecraft 26.2 and 26.3.** Connector supports 26.1 only; the mod follows when it does.

## What goes where

| How you play | On the server, or your own game | On each player's game | What players see |
| :---- | :---- | :---- | :---- |
| **Single player** | The mod | — | Everything. |
| **Single player with MCA Reborn** | The mod, MCA Reborn and the MCA extension | — | Everything, with MCA villagers holding their tools and saying what they need. |
| **A server, players on vanilla Java** | The mod | Nothing | Villagers at work, the error icon and the particles. Tools in hands for any player who adds the mod to their own game, which needs Fabric. |
| **A server with MCA Reborn** | The mod, MCA Reborn and the MCA extension | MCA Reborn, the MCA extension and the mod: the extension needs the mod beside it. | Everything, with MCA villagers holding their tools and saying what they need. |
| **A server with More Villagers at Work** | The mod and More Villagers at Work, and Farmer's Delight for Chefs | The same as the server: More Villagers at Work needs the mod beside it, and Farmer's Delight on the server needs it on every player's game too. | Everything, Chefs included when Farmer's Delight is installed. |
| **Bedrock players through Geyser** | The mod, next to Geyser | Nothing: Bedrock cannot take mods | Villagers at work and both particles. Bedrock does not show the error icon, so a blocked villager shows only the angry particles. MCA Reborn is not available to them. |
| **Opening a single player world to LAN** | Your game, as for single player | As for a server | As for a server. |

## Villager breeders

With Villagers after Work installed, villagers have children only at night, two well-fed villagers in beds side by side (see [Villagers after Work]({{ site.baseurl }}{% link after-work.md %})). A villager breeder built for the game without the mod stops breeding. Turn off `bedtimeBreeding` to keep it working (see [Configuration]({{ site.baseurl }}{% link customization/configuration.md %})).

## Uninstallation

**Before you uninstall:** a tool a villager has taken from its shelf — the hoe in a farmer's hands, the axe a butcher uses — is held by the mod, not in the villager's vanilla inventory, and stays with the villager until it dies, when it drops, or, if the villager loses its job, until it takes it to storage. Uninstalling the mod removes those tools. An allay that was hauling keeps whatever it held in its hand; take it with an empty hand, as from any allay. Tools still on shelves, and everything else — shelves, chests, storage, your farms — stay exactly as they were.
