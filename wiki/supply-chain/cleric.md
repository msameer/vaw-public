---
title: Cleric
parent: Supply Chain
nav_order: 4
---

# Cleric

The village's doctor, and its enchanting supplier. The cleric has two kinds of work, and **a station does one of them** — which one is decided entirely by what you put on its shelf.

- **The exchange** — rotten flesh into lapis lazuli, for the librarian.  
- **Brewing** — a brewing stand really brews, so a cleric with the right ingredients brews potions and leaves them in the stand for hurt villagers. See [Healing]({{ site.baseurl }}{% link general-mechanics/healing.md %}).

## Rotten flesh into lapis

A cleric already buys rotten flesh for emeralds and sells lapis for emeralds, so the mod simply joins the two halves of a trade you would otherwise do by hand.

It only works on demand, and **lapis never goes to storage** — rotten flesh is scarce, so the cleric holds its stock until a librarian actually needs it.

## Brewing

A brewing stand holds three bottles and takes one ingredient at a time, exactly as it does for you — **blaze powder included**, because it is the fuel. That takes a shelf slot, so each brewing station does one step of the chain:

| Shelf | Brews |
| :---- | :---- |
| Water bottle, nether wart, blaze powder | Awkward potion |
| Awkward potion, glistering melon slice, blaze powder | Potion of healing |
| Awkward potion, ghast tear, blaze powder | Potion of regeneration |

So an automated supply of healing potions needs **two clerics**: one making awkward potions, one finishing them. Regeneration needs a third, and the lapis exchange a fourth. As everywhere else in the mod, the answer to wanting more is another workstation.

**The awkward cleric supplies the finishing cleric**, exactly as any other supplier restocks a customer's shelf.

**It brews in threes, as you would.** A cleric fills the stand's three bottles first and only then adds the ingredient, so one nether wart or one glistering melon slice makes three potions rather than one. It will not start a fresh batch while potions are still standing in the stand, so a stand drains to empty before it refills.

**Potions do not stack in vanilla**, so a shelf slot holds one water bottle or one awkward potion, and filling a stand takes three separate deliveries. With water bottles as scarce as they are, a batch is the work of days rather than hours. If a pack you play with lets potions stack, deliveries follow suit and arrive together.

**You say what a station is, and the shelf remembers.** A cleric with an empty shelf does the exchange, and the fisherman brings it rotten flesh as it always has. Put nether wart on a clear shelf instead and it is an awkward station; put glistering melon slices on one and it finishes awkward potions into healing ones. The last wart and the last melon slice are never brewed with, so the shelf goes on saying what it is for and its suppliers go on coming. No other villager decides for it.

**A ghast tear is spent like anything else.** It is far too rare to leave sitting on a shelf as a label, so a regeneration station makes one batch of three and then waits for you to say what it should do next: another tear, or melon slices to go back to healing.

**What comes from where.** Water bottles are the fisherman's junk catch and glistering melon slices come from the farmer, given gold nuggets. Nether wart, ghast tears, blaze powder and the gold are yours to supply — they are nether goods and village gold, and nothing in a village makes them.

**Tools:** None

**Consumables:**

| Rotten flesh | Mandatory for the exchange |
| :---- | :---- |
| Water bottle | Mandatory for Awkward potion maker |
| Nether wart | Mandatory for Awkward potion maker |
| Awkward potion | Mandatory for Healing and Regeneration makers |
| Glistering melon slice | Mandatory for Healing potion maker |
| Ghast tear | Mandatory for Regeneration potion maker |
| Blaze powder | Mandatory for brewing |

**Suppliers:**

| Fisherman | Rotten flesh and water bottles from junk catch |
| :---- | :---- |
| Farmer | Glistering melon slices |
| Cleric | Awkward potions |
| MCA Guards | Rotten flesh from looting kills |
| You | Nether wart, ghast tears, blaze powder |

**Customers:**

| Librarian | Lapis Lazoli |
| :---- | :---- |
| Cleric | Awkward potions |

Potions are not delivered anywhere. They stay in the stand, and hurt villagers come to them.
