import { useState } from 'react';
import { Home } from './components/Home';
import { CardView } from './components/CardView';
import { decks } from './data/decks';

function App() {
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);

  const selectedDeck = selectedDeckId
    ? decks.find(d => d.id === selectedDeckId)
    : null;

  if (selectedDeck) {
    return (
      <CardView
        deck={selectedDeck}
        onBack={() => setSelectedDeckId(null)}
      />
    );
  }

  return <Home onSelectDeck={setSelectedDeckId} />;
}

export default App;
