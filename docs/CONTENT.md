# GasAdventure Content Reference

**Quick reference for all narrative content, scenes, puzzles, items, and endings.**

This document serves as a map for authors, designers, and future maintainers. All data is implemented in `/src/data/` as TypeScript exports.

---

## Scene Catalog

### Act I: Orientation

**Intake Reef (intake-reef)**
- **Type**: Main quest entrance
- **Puzzle**: Persona Alignment (3-tier dropdown)
- **Unlocks**: Spectral Transit Pass
- **Stakes**: Prove you respect bureaucratic process and worker dignity
- **Optional Extension**: Ghost Process Containment (intake-reef-ghost)
  - Side quest: collect spectral codes to prevent lobby lockdown
  - Reward: Intel on Mnem's splinter cells

**Patchwork Skyrail (patchwork-skyrail)**
- **Type**: Hub world
- **Function**: Radio-button transit board connecting all districts
- **Dynamic Events**: Clock-tick system triggers strikes, eclipses, storms
- **Stakes**: Control transit = control dream flow

---

### Act II: Disruption (Major Districts)

**Dropdown Basilica (dropdown-basilica)**
- **Type**: Main quest location
- **Puzzle**: Cascading Choir Harmony (nested dropdown)
- **Unlocks**: Dropdown Prism Sigil
- **Stakes**: Free the archived lullabies Mnem imprisoned
- **Optional Extension**: Overclocked Choir (dropdown-basilica-overclock)
  - Requires: 3 Choir Tokens from side quests
  - Reveals: Names of children whose memories Mnem erased
  - Reward: Basilica Codex (empathy item)

**Checkbox Arboretum (checkbox-arboretum)**
- **Type**: Main quest location
- **Puzzle**: Botanical Harmony Matrix (checkbox balance)
- **Unlocks**: Checkbox Choir Glyph
- **Stakes**: Harmonize hope and fear; Mnem tried to eliminate fear, you balance it
- **Optional Extension**: Garden Restoration (checkbox-arboretum-restoration)
  - Restore 3 dream-flora types
  - Reward: Portable buffs + Restored Garden Blessing (empathy item)

**Button Assembly Yards (button-assembly)**
- **Type**: Main quest location
- **Puzzle**: Button Labyrinth Negotiation (branching button paths)
- **Unlocks**: Button Mason Seal
- **Stakes**: Earn worker trust by respecting autonomy, not extracting labor
- **Optional Extension**: Union Mediation (button-assembly-mediation)
  - Resolve 3 union disputes
  - Reward: Union-Signed Contract (empathy item)

---

### Act III: Reckoning (Micro-scenes)

**Packet Tea Shop (packet-tea-shop)**
- **Type**: Optional lore hub
- **Mechanic**: Sliders adjust tea blends for hints, lore, NPC histories
- **Reveals**: Mnem's original protective oath and fear-based motives
- **Reward**: Tea Master's Blessing (empathy item)

**Debris Chorus (debris-chorus)**
- **Type**: Memorial scene
- **Mechanic**: Checkbox reconstruction of deleted dreams
- **Purpose**: Pure witness to Mnem's cruelty (no mechanical reward)
- **Reward**: Debris Codex Fragment (lore only)

**Spark Atlas Depot (spark-atlas-depot)**
- **Type**: Courier mission hub
- **Mechanic**: Radio-button dispatch puzzles
- **Purpose**: Smuggle memory-fragments from Mnem's archives
- **Reward**: Courier Credentials (reputation boost)

**Cloud Archive Ferries (cloud-archive-ferries)**
- **Type**: Timed rescue mission
- **Mechanic**: Menu puzzle under time pressure
- **Purpose**: Ferry dream-refugees away from deletion
- **Reward**: Ferry Captain's Mark (expands action log capacity)

---

### Act IV: Vault Decision

**Mnemonic Moon Vault (mnemonic-vault)**
- **Type**: Final confrontation
- **Requires**: All 3 sigils (Dropdown Prism, Checkbox Choir, Button Mason)
- **Mechanic**: Player chooses ending (Restore / Remix / Liberate)
- **Optional Dialogue**: Mnem's dialogue tree adapts based on empathy items collected

---

## Puzzle Reference

| Puzzle ID | Type | Location | Difficulty | Description |
|-----------|------|----------|------------|-------------|
| `persona-alignment` | Dropdown | Intake Reef | Tutorial | 3-tier dropdown testing respect for process |
| `choir-dropdown-harmony` | Dropdown | Dropdown Basilica | Intermediate | Cascading dependencies: comfort → protection → hope |
| `checkbox-botanical-harmony` | Checkbox | Checkbox Arboretum | Advanced | Balance hope/fear/reality without conflicts |
| `button-labyrinth-negotiation` | Button | Button Assembly | Expert | Branching moral test on worker autonomy |

**Puzzle Progression Philosophy**:
- Tutorial: Teaches core mechanic + thematic lesson
- Intermediate: Adds dependency logic
- Advanced: Introduces conflict resolution
- Expert: Combines mechanics with branching narrative

---

## Item Catalog

### Core Sigils (Required for Vault Access)

| Item ID | Name | Source | Narrative Weight |
|---------|------|--------|------------------|
| `spectral-transit-pass` | Spectral Transit Pass | Intake Reef persona puzzle | Authorization to move freely |
| `dropdown-prism-sigil` | Dropdown Prism Sigil | Basilica choir puzzle | Freed the imprisoned lullabies |
| `checkbox-choir-glyph` | Checkbox Choir Glyph | Arboretum harmony puzzle | Balanced hope and fear |
| `button-mason-seal` | Button Mason Seal | Assembly negotiation puzzle | Earned worker trust through solidarity |

### Empathy Items (Enhance Endings)

| Item ID | Name | Source | Unlock Condition |
|---------|------|--------|------------------|
| `tea-master-blessing` | Tea Master's Blessing | Packet Tea Shop | Trade kindness for lore |
| `union-signed-contract` | Union-Signed Contract | Button Assembly mediation | Resolve 3 union disputes |
| `basilica-codex` | Basilica Codex | Basilica overclock | Collect 3 Choir Tokens |
| `restored-garden-blessing` | Restored Garden Blessing | Arboretum restoration | Complete 3 restoration puzzles |

**Empathy Item Effect**: Collecting 3+ empathy items unlocks "enhanced" ending variants where Mnem can be redeemed/reformed rather than merely defeated.

### Side Quest Tokens

| Item ID | Name | Purpose |
|---------|------|---------|
| `ghost-process-intel` | Ghost Process Intel | Prevents lobby lockdown |
| `choir-token-1/2/3` | Choir Tokens | Required for basilica overclock |
| `debris-codex-fragment` | Debris Codex Fragment | Lore only (witness to harm) |
| `courier-credentials` | Courier Credentials | Reputation with resistance |
| `ferry-captains-mark` | Ferry Captain's Mark | Expands action log capacity |

---

## Ending Variations

All endings require **all 3 core sigils**. Failing to collect them results in the "Insufficient Sigils" failure ending.

### Standard Endings (No Empathy Items)

**Restore**: Return moon to original guardian function. Mnem steps down. Status quo restored with better oversight.

**Remix**: Distribute moon governance to collective councils. Mnem becomes "archivist of mistakes." Democratic but messy.

**Liberate**: Dismantle all central control. Chaotic freedom. Workers/caretakers coordinate locally.

### Enhanced Endings (3+ Empathy Items)

**Restore with Empathy**: Mnem helps dismantle his own system, stays on as monitored advisor. Redemption through accountability.

**Remix with Empathy**: Mnem designs safeguards against future consolidation. Restorative justice + systemic change.

**Liberate with Empathy**: Dissolve gently—archive lullabies, transplant gardens, distribute care. Freedom without abandonment.

### Failure Ending

**Insufficient Sigils**: Vault rejects access. Lockdown. Mission fails. Moon keeps dying.

---

## Story Progression Flowchart

```
START
  ↓
Intake Reef (persona puzzle) → Spectral Transit Pass
  ↓
Patchwork Skyrail (hub)
  ↓
[Branching district exploration - any order]
  ├→ Dropdown Basilica → Dropdown Prism Sigil
  ├→ Checkbox Arboretum → Checkbox Choir Glyph
  └→ Button Assembly → Button Mason Seal
  ↓
[Optional micro-scenes unlock empathy items]
  ├→ Packet Tea Shop → Tea Master's Blessing
  ├→ Basilica Overclock → Basilica Codex
  ├→ Arboretum Restoration → Restored Garden Blessing
  └→ Button Mediation → Union-Signed Contract
  ↓
Mnemonic Moon Vault (requires all 3 sigils)
  ↓
ENDING CHOICE: Restore / Remix / Liberate
  ↓
[Empathy items unlock enhanced variants]
```

---

## Systemic Mechanics

### Spectral Stability Meter
- Optional errands keep meter stable
- Low stability → glitches invade core puzzles
- Repair requires completing side quests

### Reputation Tracks
- **Civic Workers** (concierge, union): shortcuts, dialogue variants
- **Spiritual Guardians** (tea master, caretakers): hints, buffs

### Temporal Windows (Clock Tick System)
- Every N player actions = 1 tick
- Certain ticks trigger events (strikes, eclipses, storms)
- Side quests can delay/accelerate ticks

### Dream Fragment Economy
- Spendable on: lore reveals, buffs, retry tokens, hidden UI skins

### Eclipse Mode (Hidden)
- Accessible through "impossible" sequences (e.g., mutually exclusive choices)
- Rewards: hidden lore, auto-solve tokens, alternate endings
- Documented obliquely for expert players

---

## Character Voice Guide

**Patch Kid Parr** (Player character narration)
- Anxious but brave
- Feels overshadowed by Pajama Sam
- Self-deprecating humor mixed with genuine courage
- Example: "Sam never had to fill out a persona alignment form. Lucky him."

**Minister Mnem** (Antagonist)
- Tired, defensive, convinced he was protecting children
- Not evil—just authoritarian paternalism gone wrong
- Can be reasoned with if player gathers empathy evidence
- Example: "I archived their nightmares to keep them safe. When did safety become tyranny?"

**Concierge Drone** (Tutorial NPC)
- Professional, by-the-book, but quietly rebelling
- Tests player's respect for process
- Example: "Compliance nebula achieved. You may proceed—respectfully."

**Tea Master Qori** (Wisdom NPC)
- Soft-spoken, compassionate, remembers Mnem before his fall
- Trades hints for kindness
- Example: "He was afraid, you know. Fear doesn't excuse harm, but understanding it is the first step."

**Button Union Foreman** (Solidarity Test NPC)
- Blunt, skeptical, fiercely protective of worker autonomy
- Example: "We're not components. We're craftspeople. Prove you understand the difference."

---

## Tone Calibration

**Whimsy**: Menu aesthetics, jargon ("compliance nebula", "checkbox choristers"), absurd bureaucracy

**Urgency**: Children losing memories, moon dimming, time-sensitive ferry rescues

**Earnestness**: NPCs have real stakes—jobs, identities, purposes. Not jokes.

**Compassion**: Mnem is redeemable if player gathers evidence. Punishment isn't justice.

**Playfulness**: Parr's narration is sardonic but warm. Fourth-wall-adjacent without breaking immersion.

---

## Future Expansion Notes

### Potential New Districts
- **Slider Sanctum**: Analog dream-tuning for advanced players
- **Toggle Cathedral**: Binary theological debates between dream philosophies
- **Input Fields of Testimony**: Write-in confessionals from children

### Potential New Mechanics
- **Multipath Vault Infiltration**: Different sigil combinations unlock alternate vault approaches
- **NPC Companion System**: Recruit choir conductor, caretaker, union rep as vault allies
- **Recursive Dream Layers**: Eclipse Mode expands into full parallel storyline

### Localization Considerations
- Bureaucratic jargon may need cultural adaptation
- Lullaby references should allow regional variants
- Pajama Sam homage may not translate universally

---

## Implementation Checklist

Data structures implemented in `/src/data/`:
- ✅ `types.ts` - Core TypeScript interfaces
- ✅ `scenes/` - All scene data (main + optional)
- ✅ `puzzles/` - All puzzle configurations
- ✅ `items/` - Sigils, empathy items, tokens
- ✅ `endings/` - All ending variations

**Pending Integration** (waiting for engine from ga-ks3.1):
- Scene rendering system
- Puzzle state machine
- Inventory management
- Action log feed
- Ending selection UI

---

## Credits & Acknowledgments

**Concept**: Inspired by Pajama Sam (Humongous Entertainment), menu-driven adventures, and bureaucratic absurdism as narrative medium.

**Narrative Design**: Codex (gasadventure crew)

**Core Tension**: Authoritarian paternalism vs. collective care; safety vs. autonomy; control vs. trust.

**Why This Matters**: Children's media often presents safety as the absence of danger. GasAdventure argues that safety is the *presence of tools to face danger*—and the trust that someone will be there when you wake up.

---

**Document Version**: 1.0
**Last Updated**: 2026-01-13
**Status**: Content complete, awaiting engine integration (ga-ks3.1)
