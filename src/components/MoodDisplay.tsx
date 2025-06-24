
import React from 'react';

interface MoodDisplayProps {
  selectedMood: string;
  filterMessage: string | null;
}

const moodEmojis: { [key: string]: string } = {
  happy: '😊',
  stressed: '😰',
  tired: '😴',
  bored: '😑',
  sad: '😢',
  excited: '🤩'
};

const MoodDisplay: React.FC<MoodDisplayProps> = ({ selectedMood, filterMessage }) => {
  return (
    <div className="text-center py-8">
      <div className="text-6xl mb-4">{moodEmojis[selectedMood]}</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2 font-fun">
        Perfect recipes for when you're feeling{' '}
        <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-cursive">
          {selectedMood}
        </span>
      </h2>
      <p className="text-gray-600 text-lg font-playful">
        We've curated these recipes to match your current mood perfectly
      </p>
      {filterMessage && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 font-playful text-sm">ℹ️ {filterMessage}</p>
        </div>
      )}
    </div>
  );
};

export default MoodDisplay;
