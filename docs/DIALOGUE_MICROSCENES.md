# Micro-Scenes Branching Dialogue

**Scope**: Optional micro-scenes with heavy branching, red herrings, and lore rewards.
**Format**: Dialogue beats are written as nodes. Use tags for conditions and effects.

Legend:
- **[NODE]**: dialogue node identifier
- **[CHOICE]**: player choice text
- **[SET]**: flag/item changes
- **[GATE]**: requirement
- **[RED HERRING]**: branch that loops, delays, or misleads
- **[REWARD]**: tangible payoff (lore, item, clue)

---

## Debris Chorus (debris-chorus)

**Premise**: A memorial scene where Patch Kid Parr reconstructs deleted dreams. No mechanical reward, but big emotional/lore beats.

### Entry

**[NODE DBC-00]**
Narration (Parr): "The debris sings in fragments. It isn't a melody. It's a list."  
Chorus (whispered): "Names, not numbers. Names, not numbers."

- **[CHOICE]** "Ask the debris who erased them."
  - **[NODE DBC-01]**
    Chorus: "He archived the storms to protect the moon. He archived the moon to protect the storms."  
    Parr: "That's not an answer."
    - **[CHOICE]** "Press for a name."
      - **[NODE DBC-02]**
        Chorus: "Minister Mnem. He loved too tightly."
        - **[REWARD]** Lore: Mnem's motive reframed as protective obsession.
    - **[CHOICE]** "Let it stay vague." **[RED HERRING]**
      - **[NODE DBC-03]**
        Chorus repeats a different name each time. It never resolves.
        - **[RED HERRING]** Loop to DBC-00.

- **[CHOICE]** "Offer your own name to the chorus."
  - **[NODE DBC-04]**
    Chorus: "Patch Kid Parr. Witness accepted."
    - **[SET]** flag: `debris_witness = true`
    - **[CHOICE]** "Ask what witness requires."
      - **[NODE DBC-05]**
        Chorus: "Do not tidy. Do not translate. Keep the hurt intact."
        - **[REWARD]** Lore: Witness ethic.
    - **[CHOICE]** "Ask for a sign." **[RED HERRING]**
      - **[NODE DBC-06]**
        A single feather floats down. It disintegrates.
        - **[RED HERRING]** No effect.

- **[CHOICE]** "Rebuild a dream fragment by humming."
  - **[NODE DBC-07]**
    The debris harmonizes. Three notes answer back.
    - **[CHOICE]** "Name the three notes." (A/B/C)
      - **[NODE DBC-08A]**
        Chorus: "Correct. The lullaby was a map."
        - **[REWARD]** Lore: Hidden path to Spark Atlas Depot.
      - **[NODE DBC-08B]**
        Chorus: "No. That was the alarm sequence." **[RED HERRING]**
        - **[SET]** flag: `false_alarm = true`
        - **[RED HERRING]** loops to DBC-07.
      - **[NODE DBC-08C]**
        Chorus: "No. That was a child's bedtime trick." **[RED HERRING]**
        - **[RED HERRING]** loops to DBC-07.

- **[CHOICE]** "Stay silent and listen."
  - **[NODE DBC-09]**
    Chorus (fading): "Silence is also a promise."
    - **[SET]** flag: `debris_silence = true`
    - **[REWARD]** Lore: Silence as consent and mourning.

### Optional Re-Entry (if `debris_witness = true`)

**[NODE DBC-10]**
Chorus: "Witness returned. Do you carry the hurt or the lesson?"

- **[CHOICE]** "I carry the hurt."
  - **[NODE DBC-11]**
    Chorus: "Then you will not make it neat."  
    - **[REWARD]** Unlocks empathetic Mnem dialogue later.

- **[CHOICE]** "I carry the lesson."
  - **[NODE DBC-12]**
    Chorus: "Then you will try to fix what cannot be fixed." **[RED HERRING]**
    - **[RED HERRING]** soft rebuke; loops to DBC-10.

---

## Spark Atlas Depot (spark-atlas-depot)

**Premise**: Courier hub for smuggling memory-fragments. High-stakes dispatch puzzles, with decoy routes and false manifests.

### Entry

**[NODE SAD-00]**
Dispatcher (static): "You are early. That means you're late."  
Parr: "I'm here for the fragments."

- **[CHOICE]** "Show courier credentials." **[GATE: hasItem courier-credentials]**
  - **[NODE SAD-01]**
    Dispatcher: "Verified. Choose a rail."
    - **[CHOICE]** "Rail 7: Hush District"
      - **[NODE SAD-02]**
        Dispatcher: "Decoy. Rail 7 is smoke." **[RED HERRING]**
        - **[SET]** flag: `decoy_spotted = true`
        - **[RED HERRING]** loops to SAD-01.
    - **[CHOICE]** "Rail 9: Echo District"
      - **[NODE SAD-03]**
        Dispatcher: "Cargo safe. But the echo fights back."  
        - **[REWARD]** Lore: Memory fragments resist transport.
        - **[SET]** flag: `spark_echo_route = true`
    - **[CHOICE]** "Rail 13: Archivist Loop"
      - **[NODE SAD-04]**
        Dispatcher: "Too obvious. That's a trap." **[RED HERRING]**
        - **[RED HERRING]** loops to SAD-01.

- **[CHOICE]** "Ask why the timetable keeps changing."
  - **[NODE SAD-05]**
    Dispatcher: "Because Mnem listens for patterns. We draw a different map each night."
    - **[CHOICE]** "Ask for the true map."
      - **[NODE SAD-06]**
        Dispatcher: "There isn't one. Only trust."
        - **[REWARD]** Lore: Resistance uses trust-based routing.
    - **[CHOICE]** "Offer to carry a decoy."
      - **[NODE SAD-07]**
        Dispatcher: "Bold. Or foolish."
        - **[SET]** flag: `decoy_carrier = true`
        - **[RED HERRING]** decoy yields no reward but delays.

- **[CHOICE]** "Request a fragment for the children."
  - **[NODE SAD-08]**
    Dispatcher: "Which child? Which memory?"
    - **[CHOICE]** "A lullaby."
      - **[NODE SAD-09]**
        Dispatcher: "Wrong depot. Try the Basilica."
        - **[RED HERRING]** misdirect to choir content.
    - **[CHOICE]** "A storm story."
      - **[NODE SAD-10]**
        Dispatcher: "Storm stories belong to the ferries."
        - **[RED HERRING]** misdirect to Cloud Ferries.
    - **[CHOICE]** "A street map."
      - **[NODE SAD-11]**
        Dispatcher: "Correct. We move maps first."
        - **[REWARD]** Lore: Resistance prioritizes navigation over nostalgia.
        - **[SET]** flag: `map_fragment = true`

### Side Beat (if `decoy_spotted = true`)

**[NODE SAD-12]**
Dispatcher: "You saw through the decoy. That means you can see the real one."

- **[CHOICE]** "Then show me."
  - **[NODE SAD-13]**
    Dispatcher: "No. Only the ferries get full coordinates." **[RED HERRING]**
    - **[RED HERRING]** soft gate to Cloud Ferries.

- **[CHOICE]** "Why so secretive?"
  - **[NODE SAD-14]**
    Dispatcher: "Because every question is a broadcast."
    - **[REWARD]** Lore: Surveillance paranoia.

---

## Cloud Archive Ferries (cloud-archive-ferries)

**Premise**: Timed rescue mission. Ferries evacuate dream-refugees under pressure. Mnem's agents send false signals.

### Entry

**[NODE CAF-00]**
Ferry Captain: "Refugees aboard. Clock is bleeding. Choose the channel."

- **[CHOICE]** "Channel Blue: soft static"
  - **[NODE CAF-01]**
    Captain: "Blue is clear. For now."  
    - **[REWARD]** Lore: Safe channel is temporary.
    - **[CHOICE]** "Ask who is chasing."
      - **[NODE CAF-02]**
        Captain: "Mnem's auditors. They call it mercy."  
        - **[REWARD]** Lore: Auditors frame deletion as mercy.

- **[CHOICE]** "Channel Gold: bright silence"
  - **[NODE CAF-03]**
    Captain: "Gold is a trap. No waveform, no ferry." **[RED HERRING]**
    - **[RED HERRING]** loops to CAF-00 with a time penalty.

- **[CHOICE]** "Channel Violet: echo braid"
  - **[NODE CAF-04]**
    Captain: "Violet is haunted. But it hides us."  
    - **[SET]** flag: `ferry_violet = true`
    - **[CHOICE]** "Ask the ghosts for guidance."
      - **[NODE CAF-05]**
        Ghosts: "We guide only those who mourn us."  
        - **[GATE]** if `debris_witness = true` then proceed to CAF-06 else CAF-07.
      - **[NODE CAF-06]**
        Ghosts: "Take the low arc. The high arc is watched."
        - **[REWARD]** Lore: hidden route.
      - **[NODE CAF-07]**
        Ghosts: "We cannot hear you." **[RED HERRING]**
        - **[RED HERRING]** loops to CAF-04.

- **[CHOICE]** "Broadcast a false distress."
  - **[NODE CAF-08]**
    Captain: "Risky. But it could peel the auditors off."
    - **[CHOICE]** "Use the nursery rhyme." **[RED HERRING]**
      - **[NODE CAF-09]**
        Auditors respond faster. The rhyme is flagged.
        - **[RED HERRING]** time penalty; loop to CAF-00.
    - **[CHOICE]** "Use the union cadence."
      - **[NODE CAF-10]**
        Auditors hesitate. "Why are workers here?"
        - **[REWARD]** Lore: union cadence as masking.
        - **[SET]** flag: `ferry_masked = true`

### Mid-Run Choice (if `ferry_violet = true`)

**[NODE CAF-11]**
Captain: "We are in the blind zone. The refugees are frightened."

- **[CHOICE]** "Tell them the truth."
  - **[NODE CAF-12]**
    Parr: "We are running, not hiding."
    - **[REWARD]** Lore: transparency builds resilience.

- **[CHOICE]** "Tell them a story."
  - **[NODE CAF-13]**
    Parr tells a story about a moon that learned to share its light.
    - **[REWARD]** Lore: foreshadows Remix ending.

- **[CHOICE]** "Tell them to be quiet." **[RED HERRING]**
  - **[NODE CAF-14]**
    The refugees comply, but their fear spikes.
    - **[RED HERRING]** emotional cost, no reward.

### Exit

**[NODE CAF-15]**
Captain: "Docked. Nothing broke that you can't fix later."

- **[CHOICE]** "Ask what was lost."
  - **[NODE CAF-16]**
    Captain: "Time. We always lose time."
    - **[REWARD]** Lore: time as the real currency.

- **[CHOICE]** "Leave without asking."
  - **[NODE CAF-17]**
    Parr: "I keep walking so the ferries can keep floating."

---

## Notes on Red Herrings

- Red herrings should cost time, add noise, or misdirect to another scene without hard-locking progress.
- Avoid punishing the player with permanent loss; use soft penalties (time tick, temporary flags).
- Use red herrings to reinforce themes: secrecy, grief, and the cost of control.
