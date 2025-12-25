import { decks } from '../data/decks';
import { DeckCard } from './DeckCard';

interface HomeProps {
  onSelectDeck: (deckId: string) => void;
}

export function Home({ onSelectDeck }: HomeProps) {
  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">Our Conversation Cards</h1>
        <p className="home__subtitle">Pick a deck and let's talk about something new</p>
      </header>

      <div className="home__decks">
        {decks.map((deck) => (
          <DeckCard
            key={deck.id}
            deck={deck}
            onClick={() => onSelectDeck(deck.id)}
          />
        ))}
      </div>

      <footer className="footer">
        Made with <span className="footer__heart">♥</span> for us
      </footer>
    </div>
  );
}
