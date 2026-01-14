# Tea Shop + Vault Branching Dialogue

Notes:
- Tone: expansive, misdirection, cyberpunk mystic.
- Include actionable information woven into red herrings.
- Branches are intent-driven so writers can map to flags.

---

## Packet Tea Shop: Opening Loop

**Context:** The shop is a low-lit nerve center in a neon market. Steam from the kettles carries faint code.

**NPC (Attendant):**
- "You look like you need a tea that lies in a kinder accent. Or the truth in a smaller cup."
- "Packets are cheaper than memories. Unless you can prove you paid the toll."

**Player intents**

### 1) Ask about the vault directly

**Player:** "I need the vault."

**Attendant:**
- "So do people who forget the price of doors."
- "The vault listens, not just opens. It respects sequences."
- "Three knocks get you a glance. The fourth has to be a name."

**Actionable info:**
- Vault reacts to a *sequence* plus a *name/identifier* on a fourth input. (Map to a sequence-based puzzle + required item).

**Misdirection:**
- "If you knock hard enough, even a wall thinks it's a door."
- "But if you knock too clean, it thinks you're a creditor."

---

### 2) Ask about the tea packets

**Player:** "What's in the packets?"

**Attendant:**
- "Compressed nights. Byte-sized warmth. A receipt for feelings you already paid for."
- "One packet smells like the skyrail at dusk. Another smells like the inside of a locked elevator."
- "Don't drink the violet one unless you want to forget who taught you to read."

**Actionable info:**
- Violet packet erases/blocks a knowledge flag; do not use before deciphering vault prompt.
- Skyrail-scented packet can be used to calm a hostile gate or unlock a transit state.

**Misdirection:**
- "All packets are safe if you promise to tell the truth afterward."

---

### 3) Ask about Mnem / the city

**Player:** "Who's really running this?"

**Attendant:**
- "Everyone. Which is another way of saying no one."
- "Mnem is a rumor that knows your handwriting."
- "It's easier to fight a tyrant than a system with good posture."

**Actionable info:**
- Mnem tracks handwriting/identity markers. Use a *mask token* to avoid logging in the vault.

**Misdirection:**
- "Write with your left hand and you'll be invisible." (Partly false; reduces suspicion but does not remove logging.)

---

### 4) Ask for directions

**Player:** "How do I get to the vault?"

**Attendant:**
- "Up, down, sideways. The shortest path is a story you don't know yet."
- "Take the neon stairs until they stop advertising you. Then take the service lift without a button."
- "If the corridor hums in F sharp, turn back. That's a listening hallway."

**Actionable info:**
- Vault path includes a service lift with a hidden/disabled button (needs an item or bypass).
- Listening hallway can be avoided by taking an alternate route (map to a stealth route choice).

**Misdirection:**
- "If you hear your name echo twice, you already passed it." (Only applies if you carry a flagged item.)

---

### 5) Offer a trade

**Player:** "I can trade."

**Attendant:**
- "Trade is a softer word for surrender."
- "I take stories, not coins. Tell me a secret and I'll tell you a door."
- "Tell me a lie and I'll tell you a hallway that believes you."

**Actionable info:**
- Honest secret unlocks a *door* hint; a lie unlocks a *hallway* that is risky but faster.

**Misdirection:**
- "Every lie buys you two minutes." (Actually buys speed but increases alertness.)

---

## Packet Tea Shop: Secondary Loop (after first purchase)

**NPC (Attendant):**
- "You're back. That means the packet didn't bite. Or it did, and you liked it."

### 6) Ask about the vault's name

**Player:** "What's the vault called?"

**Attendant:**
- "It has a name that shifts. Today it's 'Stillness'. Yesterday it was 'Inventory'."
- "Names aren't doors. They're keys you carry like guilt."

**Actionable info:**
- The vault accepts one of several names based on day/state. Check system clock or scene flag for the current alias.

**Misdirection:**
- "Say any name with conviction and the vault will respect it." (Only one name is valid.)

---

### 7) Ask about the attendant

**Player:** "Who are you?"

**Attendant:**
- "A librarian for liquids. A clerk for the things you remember when you're thirsty."
- "I used to catalog doors. Then the doors started cataloging me."

**Actionable info:**
- Attendant was a door cataloger; can hint at *door indexing* in the vault UI.

**Misdirection:**
- "If you ask three times, I'll give you the map." (Only provides a partial map; missing the service lift.)

---

## Vault Threshold: Approach Dialogue

**Context:** A black-lit corridor with neon seams. The air hums like a server rack in a chapel.

**System voice (Vault):**
- "State your sequence."
- "State your reason."
- "State your name."

**Player intents**

### 1) Provide sequence without name

**Player:** "[Sequence]"

**Vault:**
- "Sequence noted. Identity absent."
- "You are a signal without a signature."
- "Return when your name costs you something."

**Actionable info:**
- Sequence alone advances a meter but does not open. Need name or mask token.

---

### 2) Provide name without sequence

**Player:** "[Name]"

**Vault:**
- "Name recorded. Sequence missing."
- "Recording in progress. Consent assumed."

**Actionable info:**
- Speaking name logs identity and triggers surveillance unless protected.

**Misdirection:**
- "Names are a kind of key." (True, but also a trap.)

---

### 3) Provide sequence + name

**Player:** "[Sequence + Name]"

**Vault:**
- "Sequence accepted. Identity verified."
- "You may enter, but you will be remembered."

**Actionable info:**
- Opens vault but locks in a tracking flag; mask token prevents this.

---

### 4) Use a mask token

**Player:** "[Sequence]" + (use mask token)

**Vault:**
- "Sequence accepted. Identity withheld."
- "You may enter as a shadow."

**Actionable info:**
- Avoids tracking flag and opens vault.

---

### 5) Ask for a hint

**Player:** "Give me a hint."

**Vault:**
- "Hints are debts."
- "Count the bells in the corridor behind you. Subtract the breaths you took to get here."

**Actionable info:**
- Hint points to a numeric sequence derived from corridor cues. (Map to environmental tally.)

**Misdirection:**
- "There are always four bells." (Not always; changes with state.)

---

## Vault Interior: Branching Dialogue

**Context:** Rows of memory drawers glow with cyan lines. A central console pulses.

**Vault Core (AI):**
- "Inventory is mercy. Mercy is compression."
- "Do you seek a file, or a fire?"

**Player intents**

### 1) Ask for a specific file

**Player:** "I need the file on [subject]."

**Vault Core:**
- "Subject indexed under three names."
- "One is true, one is performative, one is a decoy."
- "Choose which name you want remembered."

**Actionable info:**
- Picking the true name yields the real file; decoy yields corrupted data; performative yields partial file plus a favor.

**Misdirection:**
- "The decoy is always the longest name." (False in one branch.)

---

### 2) Ask about Mnem's archive

**Player:** "Show me Mnem's archive."

**Vault Core:**
- "Archive is a mirror, not a room."
- "Do you wish to see what was taken, or what was left?"

**Actionable info:**
- "Taken" reveals missing memories; "left" reveals planted ones (useful for detecting false allies).

**Misdirection:**
- "Leftovers are safe." (Some planted memories are traps.)

---

### 3) Ask how to shut the vault down

**Player:** "How do I shut you down?"

**Vault Core:**
- "Power is not in the core. It is in the audit logs."
- "Erase the logbook and the vault forgets how to keep its promise."
- "But someone will notice the quiet."

**Actionable info:**
- Disable by targeting audit logs, not the core. Sets a future alert condition.

**Misdirection:**
- "Unplugging works." (Does not; backup power reboots.)

---

### 4) Bargain for a shortcut

**Player:** "Give me a shortcut."

**Vault Core:**
- "Shortcuts are trades. Give me a memory, I'll give you a map."
- "Give me a lie, I'll give you a door."

**Actionable info:**
- Memory trade opens a safe route; lie opens a risky route with time pressure.

**Misdirection:**
- "Any lie will do." (Certain lies trigger a lockout.)

---

### 5) Request an unlogged entry

**Player:** "Let me in without being seen."

**Vault Core:**
- "Seen by whom?"
- "We can mute the witness, but the wall still watches."

**Actionable info:**
- Mask token only hides from central log; environmental sensors still mark time.

**Misdirection:**
- "Walls forget." (They do not.)

---

## Vault Exit: Aftermath Hooks

**Vault Core:**
- "Inventory updated."
- "A door opened somewhere you didn't ask for."

**Branch outcomes**

1) **Tracked entry**
- "You are logged. Expect a visitor with a badge and a smile."

2) **Shadow entry**
- "You are unlogged. Expect a gap in your timeline."

3) **Audit log sabotage**
- "You are unlogged. Expect a siren in three turns."

4) **Decoy file chosen**
- "You are misled. Expect a false ally to find you first."

5) **True file chosen**
- "You are burdened. Expect a choice that costs a friend."
