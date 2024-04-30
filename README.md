# Set Match Game

Find the sets, claim the match

## Change Logs

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
