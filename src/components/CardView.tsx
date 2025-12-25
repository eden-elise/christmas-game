import { useState, useCallback, useEffect } from 'react';
import { Deck } from '../data/types';
import { FlipCard } from './FlipCard';

interface CardViewProps {
  deck: Deck;
  onBack: () => void;
}

export function CardView({ deck, onBack }: CardViewProps) {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * deck.cards.length)
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [seenCards, setSeenCards] = useState<Set<string>>(new Set());

  const currentCard = deck.cards[currentIndex];

  // Apply theme colors
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', deck.color.primary);
    root.style.setProperty('--color-secondary', deck.color.secondary);
    root.style.setProperty('--color-background', deck.color.background);
    root.style.setProperty('--color-background-end', deck.color.backgroundEnd);
    root.style.setProperty('--color-text', deck.color.text);
    root.style.setProperty('--color-card-back', deck.color.cardBack);

    return () => {
      // Reset to default on unmount
      root.style.setProperty('--color-primary', '#e8a598');
      root.style.setProperty('--color-secondary', '#f5d5cf');
      root.style.setProperty('--color-background', '#fff5f3');
      root.style.setProperty('--color-background-end', '#ffe8e4');
      root.style.setProperty('--color-text', '#5c3d37');
      root.style.setProperty('--color-card-back', '#d4857a');
    };
  }, [deck]);

  const handleFlip = useCallback(() => {
    if (!isFlipped) {
      setIsFlipped(true);
      setSeenCards(prev => new Set(prev).add(currentCard.id));
    }
  }, [isFlipped, currentCard.id]);

  const drawNextCard = useCallback(() => {
    // Find unshuffled cards
    const unseenIndices = deck.cards
      .map((card, index) => ({ card, index }))
      .filter(({ card }) => !seenCards.has(card.id))
      .map(({ index }) => index);

    // If all cards seen, reset
    if (unseenIndices.length === 0) {
      setSeenCards(new Set());
      const randomIndex = Math.floor(Math.random() * deck.cards.length);
      setCurrentIndex(randomIndex);
    } else {
      // Pick random unseen card
      const randomUnseen = unseenIndices[Math.floor(Math.random() * unseenIndices.length)];
      setCurrentIndex(randomUnseen);
    }

    setIsFlipped(false);
  }, [deck.cards, seenCards]);

  const shuffleAndReset = useCallback(() => {
    setSeenCards(new Set());
    const randomIndex = Math.floor(Math.random() * deck.cards.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false);
  }, [deck.cards.length]);

  const remainingCards = deck.cards.length - seenCards.size;

  return (
    <div
      className="card-view"
      style={{
        background: `linear-gradient(135deg, ${deck.color.background} 0%, ${deck.color.backgroundEnd} 100%)`
      }}
    >
      <header className="card-view__header">
        <button className="card-view__back" onClick={onBack}>
          ← Back
        </button>
        <h1 className="card-view__title">
          <span>{deck.icon}</span>
          <span>{deck.name}</span>
        </h1>
        <span className="card-view__counter">
          {remainingCards} left
        </span>
      </header>

      <FlipCard
        card={currentCard}
        isFlipped={isFlipped}
        onFlip={handleFlip}
        deckIcon={deck.icon}
      />

      {!isFlipped && (
        <p className="flip-hint">Tap the card to reveal your question</p>
      )}

      <div className="card-view__actions">
        {isFlipped && (
          <button className="card-view__button" onClick={drawNextCard}>
            Next Card
          </button>
        )}
        <button
          className="card-view__button card-view__button--secondary"
          onClick={shuffleAndReset}
        >
          Shuffle Deck
        </button>
      </div>
    </div>
  );
}
