import { Deck } from '../data/types';

interface DeckCardProps {
  deck: Deck;
  onClick: () => void;
}

export function DeckCard({ deck, onClick }: DeckCardProps) {
  return (
    <div
      className="deck-card"
      onClick={onClick}
      style={{ '--deck-color': deck.color.primary } as React.CSSProperties}
    >
      <div className="deck-card__icon">{deck.icon}</div>
      <h2 className="deck-card__name">{deck.name}</h2>
      <p className="deck-card__description">{deck.description}</p>
      <p className="deck-card__count">{deck.cards.length} cards</p>
    </div>
  );
}
