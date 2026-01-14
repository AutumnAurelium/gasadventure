# Button Assembly Yards Dialogue

Branching dialogue for the union floor and foreman negotiation. Nodes are grouped by area; use any subset.

## Floor Chatter (Union Floor)

### F1: Coil Bench
Worker A: "If the clamp bites my sleeve one more time, I'm trading it for a manual press."
Worker B: "Manual press gets you a slow burn and no audit trail. But the humidity meter won't stop screaming."
Player: "Humidity meter?"
Worker B: "Yeah, it hates the dream-resin. Too damp and the buttons swell. Too dry and they crack. We walk the line."
- Player: "You make it sound like a choice."
  - Worker A: "Everything is a choice. Some just carry debt."
- Player: "What happens when it cracks?"
  - Worker B: "We recycle. The resin remembers. It hates waste."

### F2: Scrap Bin
Worker C: "Lost a palmprint again. Some kid sneezed on the sensor."
Worker D: "At least it's not the old biometric. That thing remembered your bad days."
Player: "You keep the old ones?"
Worker D: "We keep what we can. Mnem called it hoarding; we call it continuity."
- Player: "Continuity of what?"
  - Worker C: "Of us. Of the hands that built this place before the protocols."
- Player: "Mnem cared about protocol."
  - Worker D: "Mnem cared about compliance. Not the same thing."

### F3: Break Rack
Worker E: "Did you hear? Shift three swapped the coolant filter with tea leaves."
Worker F: "The foreman pretended not to see. Rituals are a kind of union."
Player: "Tea leaves in coolant?"
Worker E: "It smells like a kitchen now. Keeps us honest."
- Player: "Does it do anything?"
  - Worker F: "It reminds the system we're humans. The machine forgets unless you force it."
- Player: "Sounds like sabotage."
  - Worker E: "Sounds like care."

### F4: Labeling Station
Worker G: "You aligned the glyphs backward."
Worker H: "On purpose. They sort faster that way."
Player: "Isn't that a violation?"
Worker G: "Depends who you ask. It's a tradition from before the audits."
- Player: "Traditions matter here."
  - Worker H: "More than bonuses."
- Player: "Audits are strict."
  - Worker G: "Audits can be educated."

### F5: Maintenance Ladder
Worker I: "Nail the plate or we lose pressure."
Worker J: "Nailing is how we lose fingers."
Player: "Why not stop the line?"
Worker I: "Line doesn't stop. We do. For each other."
- Player: "Who decided that?"
  - Worker J: "Us. That's what a union is."
- Player: "That's risky."
  - Worker I: "So is trusting you."

## Foreman Negotiation (Branching)

### A0: Entry
Foreman: "You want the seal. Before we talk, say why you're here."
- Player: "I need your help to save the moon." -> A1
- Player: "I respect your right to choose." -> A2
- Player: "Mnem hurt you too." -> A3

### A1: Expedience
Foreman: "Need is not respect. What do you offer the floor?"
- Player: "Freedom from Mnem's control." -> A4
- Player: "The satisfaction of doing what's right." -> A5
- Player: "I'll make it worth your while." -> A6

### A2: Autonomy
Foreman: "Words are cheap. We have a dispute. Should we build Mnem's dream compliance buttons?"
- Player: "That's your decision, not mine." -> A7
- Player: "No, that would help Mnem." -> A8
- Player: "Build them, but sabotage the code." -> A9

### A3: Victim Frame
Foreman: "We are not victims. We made choices under constraints."
- Player: "You're right. I apologize." -> A10
- Player: "Fine. Let's focus on stopping Mnem." -> A11

### A4: Conditional Freedom
Worker: "If we choose to stay autonomous and not help you, do you respect that?"
- Player: "Yes, absolutely." -> A7
- Player: "I'd be disappointed, but yes." -> A12
- Player: "That would be a mistake." -> A13

### A5: Moral Pitch
Foreman: "Morality doesn't pay runtime costs. What else?"
- Player: "Then I have nothing." -> A14
- Player: "You deserve more than this." -> A2

### A6: Transaction
Foreman: "We are not for sale. That is the lesson."
- Player: "Understood. Your choice matters." -> A2
- Player: "Then tell me the price." -> A14

### A7: True Autonomy
Foreman: "That answer means you can hear us."
Worker: "So you won't steer us even if we drag the line?"
- Player: "I won't steer your hands." -> A15
- Player: "I'll ask, not order." -> A16

### A8: Strategic Override
Foreman: "You say respect, then override. That is not respect."
- Player: "You're right. I overstepped." -> A7
- Player: "It's for the greater good." -> A14

### A9: Clever Subversion
Foreman: "Clever isn't the same as consent."
- Player: "You're right. It's your call." -> A7
- Player: "You can thank me later." -> A14

### A10: Recovery
Foreman: "Apologies are maintenance, not absolution."
Worker: "We can talk, but we set the pace."
- Player: "Set it. I'll follow." -> A2
- Player: "I need urgency." -> A1

### A11: Expedience Redirect
Foreman: "You keep sliding back to urgency."
- Player: "Because the moon is dying." -> A1
- Player: "You're right. I can slow down." -> A2

### A12: Grudging Respect
Foreman: "Disappointment is human. Control is not."
Worker: "We like that you admit it."
- Player: "Then I can live with your no." -> A15
- Player: "Then let's call it a yes." -> A14

### A13: Paternalism
Foreman: "You sound like Mnem."
- Player: "That's not my intent." -> A7
- Player: "Then maybe you need a stronger hand." -> A14

### A14: Cold End
Foreman: "We are done. Come back when you hear us."
(End, no seal. Optional hint: the seal is not granted for urgency, moral pitch, or transaction.)

### A15: Seal Offered
Foreman: "We don't grant seals for sympathy. We grant them for respect."
Worker: "Take it. It means you can walk our floor."
(End, seal granted. Optional hint: autonomy kept the line open.)

### A16: Shared Process
Foreman: "Ask, then listen. We'll consider your ask."
Worker: "That's a negotiation, not a command."
Foreman: "Seal granted. The rest is earned."
(End, seal granted. Optional hint: process matters as much as outcome.)

## Optional Add-Ons (Union Lore Threads)

### L1: The Last Strike
Worker: "We don't talk about the last strike because we still live in it."
Player: "What happened?"
Worker: "We slowed the line by a breath. The dream archive screamed like we'd burned it."
- Player: "So you stopped."
  - Worker: "We adapted. We learned to cut noise without breaking hearts."

### L2: Seal Meaning
Player: "What does the seal actually do?"
Foreman: "It says the floor trusts your hands won't force theirs."
Worker: "It doesn't say you're right."

### L3: Shop Myth
Worker: "There's a button we never press. It says 'Override.'"
Player: "Why keep it?"
Worker: "So we remember who asked for it."

