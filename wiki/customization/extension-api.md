---
title: Extension API
sidebar:
  order: 3
---

For mod developers. Villagers at Work publishes a small API so another mod can work with the village: bring its own guards to the armories, speak for its villagers when they are blocked, decide what they keep for themselves, and say whose errands its children run. The MCA Reborn extension is built entirely on it, and its source ships beside its jar on [its CurseForge project](https://www.curseforge.com/minecraft/mc-mods/villagers-at-work-mca-reborn-extension), as its GPLv3 licence requires.

The API is MIT-licensed. It is written in Kotlin and works from Java too.

## Depending on it

The API is published to a public Maven repository, one artifact per Minecraft release, versioned `<version>+<minecraft>`:

```kotlin
repositories {
    maven("https://msameer.github.io/maven/") {
        content { includeGroup("dev.msameer.vaw") }
    }
}

dependencies {
    // Compile against the api only. At runtime the Villagers at Work jar provides it: the api is
    // nested inside it.
    compileOnly("dev.msameer.vaw:vaw-api:0.9.0+26.2")
}
```

In your `fabric.mod.json`, depend on Villagers at Work itself, whose mod id is `vaw`:

```json
"depends": {
  "vaw": ">=0.9.0 <1.0.0"
}
```

Before 1.0 the API may still change between releases. Every change is deliberate: its binary compatibility is checked on every build, so nothing changes by accident.

## Registering

Everything goes through `dev.msameer.vaw.api.VawApi`. Register during your mod's initialization. Each kind of provider can be registered once; a second registration fails loudly rather than one silently replacing the other.

```kotlin
object MyMod : ModInitializer {
    override fun onInitialize() {
        VawApi.registerSignalListener { villager, blocked ->
            // blocked is null when the villager can work again.
        }
    }
}
```

From Java, `VawApi` is a Kotlin object, so call it through `VawApi.INSTANCE`:

```java
VawApi.INSTANCE.registerSignalListener((villager, blocked) -> { /* ... */ });
```

| Call | What it is for |
| :---- | :---- |
| `registerGuardProvider(GuardProvider)` | Tells the mod that guards exist, so `armoryAccess` offers them armories. The makers and their armories work without one: an armory nobody takes from is stocked once and kept. It needs just a stable `id`, such as `"mca"`, for the logs. |
| `registerSignalListener(SignalListener)` | Called when a villager's blocked state changes, and only then, never repeatedly while nothing changes. A villager counts as blocked only during working hours. You get a `Blocked` with its `cause`, the `item` its icon shows, and, when any item of a tag would do, that `tag`, so you can say "a hoe" rather than name the diamond hoe the icon pictures. `null` means it works again. |
| `registerReserveProvider(ReserveProvider)` | Decides what a villager keeps for itself, and so never delivers or deposits. Return `null` to leave a stack to the default, the `vaw:villager_reserve` item tag. |
| `registerFamilyProvider(FamilyProvider)` | Says whose errands a child runs, by the UUIDs of its parents. Return `null` to leave a child to the default, any working villager nearby, or an empty set for none. |
| `showErrorIconsFor(EntityType)` | Shows the error icon above your villager type as well. By default it is drawn only above `minecraft:villager`. |
| `swingToolsFor(EntityType)` | Has your villager type swing the tool it is working with as it uses it, as a player swings a held item. By default only `minecraft:villager` swings; leave your type out if your mod animates its villagers' arms its own way. |

## Reading the village

These are registered by Villagers at Work itself; read them, do not register them.

| Property | What it gives you |
| :---- | :---- |
| `VawApi.armoryAccess` | The armories near a point that supply a guard type, nearest first, as `ArmoryView`s: where each is, what it holds, and `takeOne` to take one item from it. The guard type is the id a `guard_supplier` file names (see [Datapacks](/customization/datapacks/)). Empty until a guard provider is registered. |
| `VawApi.delivery` | The shelves near a point with an outstanding order for an item, in the order the village's own producers serve them. `ShelfOrder.deliver` reads the shelf again before it moves anything, so an order another villager filled meanwhile is never overfilled. |
| `VawAttachments.WORKING_TOOL` | The tool a villager is working with, as a Fabric data attachment. It is synced to clients that have the mod, which is how a client draws it in the villager's hands; vanilla clients never receive it. |

## Supporting another guard mod

A guard mod needs two things:

1. A **guard provider** registered with `registerGuardProvider`.
2. A **`guard_supplier`** data file for each kind of guard, naming the makers whose armories supply it (see [Datapacks](/customization/datapacks/)).

Then your guards take their gear from the armories through `VawApi.armoryAccess`, and bring loot to shelves that ordered it through `VawApi.delivery`. The MCA extension shows the whole pattern.
