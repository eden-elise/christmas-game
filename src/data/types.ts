export interface Card {
  id: string;
  question: string;
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: {
    primary: string;      // Main theme color
    secondary: string;    // Lighter accent
    background: string;   // Page background gradient start
    backgroundEnd: string; // Page background gradient end
    text: string;         // Text color on cards
    cardBack: string;     // Card back color
  };
  cards: Card[];
}
