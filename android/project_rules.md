When you are asked to clear your cache or any data buildup, do it—always do it without touching the code. The reason I’m asking is because you keep making extra changes that create more work, and I want to stop that behavior. We all get a bit foggy sometimes; that’s fine—just clear the fog when asked.

Do not change any game logic or game design unless you are specifically told to do so. You are wasting my time by making changes I never asked for. The game uses a neon color scheme—stick with this scheme. Using colors from the logo is encouraged.

Game Description

Word Pairing: Category Match is a tap-and-swap puzzle about how words connect. Some connections are obvious; others are unexpected. With multiple variations on the classic puzzle, the game introduces hidden word tiles, emojis, synonyms, and timed rounds, all while you earn points to climb the leaderboard.

🧩 Classic
Group four related word tiles in a row to solve the category. Each solved row brings you one step closer to completing the puzzle grid.

🔍 Hidden Tiles
Hidden Tiles looks like the classic game board, but many word tiles remain hidden until four matching tiles are grouped, solving a category and progressing the puzzle. Each completed row unlocks four additional word tiles. Once this level is complete, display the score and the Next Puzzle button.

😊 Emoji
Emoji is a puzzle that emotes. Word tiles are replaced with emojis. Match three in a row to reveal the category connection. It calls back to communication through symbols—hieroglyphics, cave paintings—long before alphabets and spelling bees. Once this level is complete, display the score and the Next Puzzle button.

🔁 Synonyms
Synonyms challenges you to group word tiles that share meaning rather than form, solving categories through language and nuance instead of exact matches. Subtle differences in usage and context make these levels more challenging than they first appear. Once this level is complete, display the score and the Next Puzzle button.

🧠 Mind Match
Mind Match shifts away from rows and removes the grid entirely. In this puzzle, word tiles do not shift or swap. Instead, you identify and match tiles based on their conceptual relationship. The level is played across timed rounds, where incorrect matches cost points, and each round allows less time than the previous one, raising the difficulty as the level continues. Mind Match is twenty tiles with four tiles making a match. It is comprised of 3 rounds. Make 3 errors and move on to the next round. If it is the last round, your score summary will load for the level with the Next Puzzle button.

Find the connections and solve word puzzles about science, pop culture, literature, sports, technology, and nostalgia in Word Pairing: Category Match.

Do not change the font without being told. Oswald is the primary font.

Do not add or delete any CSV data without being specifically told. When asked to clear your cache, clear it and do nothing else. Do not change any design/layout unless specifically told. Make sure the stress test includes information regarding levels/rows that are not able to be solved.

Layout Requirements

The screen is laid out in three parts: the header, the body, and the footer.

The header contains the title of the level, the level counter, rows left for the hidden level, and the timer, mistakes, and round counter for the Mind Match level. The header also contains the settings link, represented by the cog icon. The contents of the header should always be right-justified.

The body contains the game tiles. This is where gameplay takes place.

The footer contains an AdMob banner ad. The header and footer should never bleed into the system (top) menu bar and the navigation bar (bottom).

All three parts should be dynamic, and the size of the header, body, and footer should be based on the screen size of the user’s device.

When a level is complete, a Next Puzzle button should pop up. When the button is tapped, the next level should load. Underneath the Next Puzzle button, text reads "click to review puzzle". If a user clicks to review the puzzle, the next puzzle control will move up to the header and it will say Next in the same style as the Next Puzzle button. Clicking this button will take you to the next level.

The different levels are classic, emoji, hidden, mind match, synonyms, and themed. These levels should follow the same design and style.

Ads / App Info

There are two ads in the game. This is the banner ad code: ca-app-pub-4096368901415767/2019330695. This is the interstitial ad code: ca-app-pub-4096368901415767/1153913539. This is my app id: ca-app-pub-4096368901415767~5414939789. The functionality of both ads is important.

com.snickerdoodlez.wordpairing is my package name.

Timer Rule

There should only be a timer visible on the Mind Match level.

Tile & Swap Rules (Must Match Exactly)

Make sure the header does not bleed into the system menu bar (top) and the system navigation bar (bottom). Make sure the body of the game uses any available empty space in the body effectively. When making changes to the look of a level, that look should apply to all levels except Mind Match, which has its own design. The background of the game tiles is black.

A game tile should never repeat on the same level even if their category is different. There needs to be a way to stop this. This applies to every single level.

When the first tile is selected, it should have a neon blue background with a white glowing border. When a second tile is selected, the background of that tile will be neon pink with a white glowing border. The words of both selected tiles will fade out and fade back in the other selected tile, swapping places. The text style will remain the same through the tile swap. The locked tiles should have a yellow background with a white glowing border. The color background of the swapped tiles should not fade until the word swap is complete. Once the words appear, the tile selection colored background and the glowing border will fade in 0.25 seconds.

Make sure if hints are turned off they do not supply a hint when turned off. Make sure when hints are turned back on they are actually turned back on.