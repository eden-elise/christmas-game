# Our Conversation Cards

A simple, beautiful web app for meaningful conversations — made with love for long-distance calls and cozy moments together.

## Why I Made This

Distance is hard. Sometimes on our calls, we fall into the same routines — "how was your day?" and comfortable silences. I wanted something to help us go deeper, laugh more, and learn things about each other we might never think to ask.

So I made this for us. A little deck of cards we can flip through together — on lazy Sunday calls, when we're missing each other, or just when we want to feel closer.

Pick a deck. Flip a card. Answer honestly. It's that simple.

## The Decks

| Deck | What It's For |
|------|---------------|
| **Get to Know You** | The sweet stuff — things I want to know about you |
| **Spicy** | For when we want to turn up the heat |
| **Philosophical** | Big questions to ponder together |
| **Childhood & Nostalgia** | Trips down memory lane |
| **Dreams & Future** | Where we're going, what we're building |

## How to Use

### Online
If this is hosted somewhere, just open the link! Pick a deck and start flipping.

### Running Locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder. You can host these anywhere — GitHub Pages, Netlify, Vercel, or just open `index.html` in a browser.

## Adding New Cards

Want to add more questions or create a new deck? It's easy!

Open `src/data/decks.ts` and:

**To add a new question to an existing deck:**
```typescript
{ id: 'gtk-13', question: "Your new question here?" },
```

**To create a whole new deck:**
```typescript
{
  id: 'your-deck-id',
  name: 'Your Deck Name',
  description: 'What this deck is about',
  icon: '🎯',  // Pick an emoji!
  color: {
    primary: '#hexcolor',      // Main accent color
    secondary: '#hexcolor',    // Lighter accent
    background: '#hexcolor',   // Page background (light side)
    backgroundEnd: '#hexcolor', // Page background (dark side of gradient)
    text: '#hexcolor',         // Text on cards
    cardBack: '#hexcolor',     // Back of the card
  },
  cards: [
    { id: 'yd-1', question: "First question?" },
    { id: 'yd-2', question: "Second question?" },
    // Add as many as you want!
  ],
},
```

## Tech Stack

- React 18 + TypeScript
- Vite for fast development
- Pure CSS (no frameworks) for animations and theming
- CSS Custom Properties for dynamic deck themes

---

*Merry Christmas. I love you.*
