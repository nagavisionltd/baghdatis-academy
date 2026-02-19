# 🎾 Baghdatis Academy: Pixel Pathway
**Game Design Document (GDD) & AI Developer Instructions**

## 1. Project Overview & Aesthetic
* **Genre:** Top-down Sports Action RPG (inspired by *Mario Tennis GBC*, *Super Tennis SNES*, and *Golf Story*).
* **Target Platforms:** Desktop (Keyboard/Controller) & Mobile (Horizontal orientation, virtual joystick + 2 action buttons).
* **Visual Style:** * **Overworld:** Crisp, vibrant 16-bit pixel art (resembling a sunny Mediterranean resort / City of Dreams).
  * **Matches:** Fluid 32-bit sprite animations for tennis action.
* **Audio:** Upbeat 16-bit chiptunes mixed with modern synth. Signature sound effects include clean racket "pops" and Marcos's famous crowd-roaring fist pumps.

## 2. Core Gameplay Loop & Engine Instructions
**AI DEV INSTRUCTION:** Build the core loop in a 2D engine (Godot or Unity 2D). The game requires three distinct states:
1. **Explore State:** Top-down 8-directional movement. Player interacts with NPCs, accesses the pro shop, and explores the Academy.
2. **Train State (Minigames):** Isolated arcade modules that update the player's global RPG stats (Power, Agility, Stamina, Touch, Serve).
3. **Compete State:** The actual tennis match engine.
   * *Physics:* Needs realistic ball trajectory, gravity, and bounce logic.
   * *Controls:* D-pad/Joystick to move. Button A = Topspin/Flat. Button B = Slice/Drop shot. A+B = Lob. 
   * *RPG Influence:* A player's "Agility" stat dictates their run speed; "Power" dictates ball velocity.

## 3. The Campaign: "City of Dreams Pathway"
The story mode mirrors the real-life academy pathway:
* **Stage 1: Discover:** Player arrives at the resort as a rookie. Marcos acts as the mentor. Focus on movement and basic swings.
* **Stage 2: Compete:** Play local academy tournaments. Player begins allocating XP to build a specific playstyle (e.g., Aggressive Baseliner).
* **Stage 3: Excel:** Travel to pixelated international courts. Stamina management becomes crucial.
* **Stage 4: Data-Driven Pro:** Unlock the "Biomechanics Lab" to fine-tune decimal-point stats. The Final Boss is an exhibition match against a prime, 2006-era Marcos Baghdatis.

---

## 4. Training Minigames (Real-World Skill Development)
**AI DEV INSTRUCTION:** Implement these 5 minigames to serve as the primary method for players to level up their RPG stats. Each must teach a real-world tennis concept.

### Minigame 1: "The Split-Step Sprint"
* **Stat Leveled:** Agility / Court Coverage
* **Real-World Skill:** The *Split-Step*. Players must learn to hop and balance just as the opponent hits the ball to explode in any direction.
* **Mechanic:** A ball machine fires rapidly to the extreme corners. The player *cannot* run fast enough to reach them normally. However, if the player taps the "Action" button at the exact millisecond the machine fires (the split-step), they get a massive burst of speed to reach the ball.

### Minigame 2: "Borrow the Pace" (Marcos's Specialty)
* **Stat Leveled:** Reflexes / Defense
* **Real-World Skill:** Compact backswings. Marcos is famous for taking the pace of a heavy serve and using short, relaxed preparation to block it back (similar to Agassi).
* **Mechanic:** 130mph serves are blasted at the player. If the player "holds" the swing button (a long backswing), they will hit the ball late and fail. The player must use rapid, quick taps of the button to execute a compact block-return and redirect the ball into targets. 

### Minigame 3: "Topspin Target Smash"
* **Stat Leveled:** Power / Heavy Spin
* **Real-World Skill:** Brushing *up* on the back of the ball to create a heavy dipping shot, rather than just hitting it flat.
* **Mechanic:** A rhythm-based timing bar appears during the swing. The player must release the button exactly as the swing path moves from "Low" to "High". Perfect timing generates heavy topspin, making the ball dive over the net and smash wooden barrels placed in the corners.

### Minigame 4: "Service Toss Tower"
* **Stat Leveled:** Serve Accuracy
* **Real-World Skill:** A consistent, stable ball toss is the foundation of a great serve. 
* **Mechanic:** A balancing minigame. The player must keep a swaying meter perfectly centered as they toss the ball up. If the meter is centered, the ball hangs perfectly at the peak, granting the player a guaranteed "Ace" target reticle to aim in the service box.

### Minigame 5: "The Fighting Spirit" 
* **Stat Leveled:** Stamina / Mental Toughness
* **Real-World Skill:** Managing emotions and breathing between points.
* **Mechanic:** After a grueling rally, the player's stamina bar flashes red. A breathing slider appears. The player must match the rhythm of the expanding/contracting circle to steady their heart rate. A perfect success triggers Marcos's signature "Fist Pump," restoring extra stamina for the next point.

---

## 5. Art Assets: Game Cover & Home Screen

*(Note for user: As a text-based AI, I cannot generate the physical image files directly, but I have formatted the exact visual layouts and AI Image Prompts below so you can generate them using your preferred image AI, using your uploaded `marcos-sprite.jpg` as the character reference).*

### A. Home Screen UI Mockup (ASCII Layout)

```text
=============================================================================
|                                                                           |
|          [ ☁️ ]                 [ ☀️ ]                  [ ☁️ ]            |
|                                                                           |
|                  BAGHDATIS ACADEMY: PIXEL PATHWAY                         |
|                                                                           |
|                                                                           |
|                                                                           |
|             [PRESS START]                                                 |
|                                                                           |
|                                                                           |
|      (Pixel Marcos Sprite)                                                |
|           \O/                                                             |
|            |                                                              |
|           / \         🎾 (Bouncing pixel ball)                            |
|                                                                           |
| [NEW GAME]   [LOAD JOURNEY]   [BIOMECHANICS LAB]   [MULTIPLAYER]          |
|                                                                           |
|___________________________________________________________________________|
| City of Dreams Resort | V 1.0.0 | Music: [||||||||||]                     |
=============================================================================