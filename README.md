# Set Match Game

Find the sets, claim the match

## Change Logs

### 07/05/2024 - Inputting player answer

- Clicking cards adds green border to indicate select
- Clicking cards builds array that represents player's answer which is looked for in the answer key
- Problems with re-render of cards after player guess is checked
- **Cards should de-select (no green border) after player answer is checked**
- Re-consider where player guess is constructed?

### 30/04/2024 - Generate answer key

- Created new CardOnBoard class to inherit Card class and include number id (may revise this)
- Added functions to generate answer key
- Utilises functions that check complete uniqueness and complete similarity on the three Card properties to determine a valid Set
- Used transform translate CSS to place number ids (instead of position absolute)

### 29/04/2024 - Generate one random board

- Used classes to create Cards for the Deck
- Included method that shuffles the deck and selects 9 random cards
- Shape, shape colour, and background colour are properties of the instance of the Card class
- All Cards on the Board are always unique (no repeat Card on the Board)
- Used CSS to create triangle divs; used another div with position and z-index to mask the borders and maintain triangle shape
