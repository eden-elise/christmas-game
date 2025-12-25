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
    text: string;         // Text color for UI elements on background
    cardBack: string;     // Card back color
    questionText: string; // Text color for questions (readable on white)
  };
  cards: Card[];
}
