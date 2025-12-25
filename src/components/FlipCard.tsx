import { Card } from '../data/types';

interface FlipCardProps {
  card: Card;
  isFlipped: boolean;
  onFlip: () => void;
  deckIcon: string;
}

export function FlipCard({ card, isFlipped, onFlip, deckIcon }: FlipCardProps) {
  return (
    <div className="flip-card-container">
      <div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={onFlip}
      >
        {/* Back of card (visible first) */}
        <div className="flip-card__face flip-card__back">
          <div className="flip-card__back-pattern" />
          <span className="flip-card__back-icon">{deckIcon}</span>
          <span className="flip-card__back-text">Tap to reveal</span>
        </div>

        {/* Front of card (question side) */}
        <div className="flip-card__face flip-card__front">
          <p className="flip-card__question">{card.question}</p>
        </div>
      </div>
    </div>
  );
}
