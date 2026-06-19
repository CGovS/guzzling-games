# Guzzling Games

A growing collection of free, browser-based party and drinking games — no app, no setup.

Live site: the master hub lives in [`v1.0/`](v1.0/) and links out to each game.

## Games

| Game | Folder | What it is |
| --- | --- | --- |
| Liquid Logic | [`liquid-logic/v1.0/`](liquid-logic/v1.0/) | Jeopardy-style drinking trivia (~5,000 questions, themed boards, optional LAN phone buzzers) |
| Kings Cup | [`kings-cup/v1.0/`](kings-cup/v1.0/) | The classic card-circle, digitized |
| Ride the Bus | [`ride-the-bus/v1.0/`](ride-the-bus/v1.0/) | Four-card guessing gauntlet |
| BFL Stat Sheet | [`bfl/v1.0/`](bfl/v1.0/) | Beer Football League hit/miss tracker, standings, and season-to-playoff bracket |

## Structure

- Each game is self-contained in its own `<game>/v1.0/` folder and versioned independently.
- The master hub (`v1.0/`) is data-driven from `v1.0/hub.js`.
- Site is fully static and deploys via GitHub Pages.

## Notes

Phone buzzers (Liquid Logic) require running the local Node relay from the Liquid Logic repo on the same WiFi; without it, the game falls back to keyboard + moderated play.

For entertainment only. 21+. You never need alcohol to play — any beverage works. Drink responsibly.
