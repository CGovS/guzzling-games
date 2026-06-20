/* =====================================================
   GUZZLING GAMES — hub card list
   -----------------------------------------------------
   Single source of truth for the games shown on the hub.
   Add a game here as it ships; set status to 'live' and
   give it an href to make its card playable.
   Hrefs point at each game's current version folder.
   ===================================================== */

const GAMES = [
  {
    title: 'Liquid Logic',
    blurb: 'Jeopardy-style drinking trivia. ~5,000 audited questions, themed boards, live phone buzzers.',
    status: 'live',
    href: '../liquid-logic/v1.1/',
    accent: '#f39c12',
  },
  {
    title: 'Kings Cup',
    blurb: 'The classic card circle, digitized — draw a card, follow the rule, no deck required.',
    status: 'live',
    href: '../kings-cup/v1.1/',
    accent: '#e74c3c',
  },
  {
    title: 'Ride the Bus',
    blurb: 'Red-or-black, higher-or-lower, in-between, suit. Guess your way off the bus.',
    status: 'live',
    href: '../ride-the-bus/v1.1/',
    accent: '#3498db',
  },
  {
    title: 'Beer Football League',
    blurb: 'BFL league manager — enter scores (or track hit/miss shooting), with standings and a season-to-playoff bracket.',
    status: 'live',
    href: '../bfl/v1.1/',
    accent: '#e67e22',
  },
  {
    title: 'Most Likely To',
    blurb: 'Vote on who in the room is most likely to… last one to point drinks.',
    status: 'planned',
    accent: '#9b59b6',
  },
  {
    title: 'Power Hour',
    blurb: 'A timed playlist of prompts — one sip per minute, sixty minutes, chaos guaranteed.',
    status: 'planned',
    accent: '#2ecc71',
  },
  {
    title: 'Beer Pong Scoreboard',
    blurb: 'Track cups, rebuttals, and tournament brackets for table games on any phone.',
    status: 'planned',
    accent: '#1abc9c',
  },
];

const STATUS_LABEL = { live: 'Play now', planned: 'Coming soon' };

function render() {
  const grid = document.getElementById('games-grid');
  grid.innerHTML = GAMES.map(g => {
    const playable = g.status === 'live' && g.href;
    const card = `
      <article class="game-card ${g.status}" style="--accent:${g.accent}">
        <div class="game-card-body">
          <h3 class="game-title">${g.title}</h3>
          <p class="game-blurb">${g.blurb}</p>
        </div>
        <div class="game-card-foot">
          <span class="status-pill status-${g.status}">${STATUS_LABEL[g.status]}</span>
        </div>
      </article>`;
    return playable ? `<a class="game-link" href="${g.href}">${card}</a>` : card;
  }).join('');
}

render();
