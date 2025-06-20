
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Mood {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
}

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (moodId: string) => void;
}

const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    emoji: '😊',
    color: 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300',
    description: 'Feeling bright and cheerful'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    emoji: '😰',
    color: 'bg-red-100 hover:bg-red-200 border-red-300',
    description: 'Need something comforting'
  },
  {
    id: 'tired',
    name: 'Tired',
    emoji: '😴',
    color: 'bg-blue-100 hover:bg-blue-200 border-blue-300',
    description: 'Looking for energy boost'
  },
  {
    id: 'bored',
    name: 'Bored',
    emoji: '😑',
    color: 'bg-purple-100 hover:bg-purple-200 border-purple-300',
    description: 'Want something exciting'
  },
  {
    id: 'sad',
    name: 'Sad',
    emoji: '😢',
    color: 'bg-gray-100 hover:bg-gray-200 border-gray-300',
    description: 'Need comfort food'
  },
  {
    id: 'excited',
    name: 'Excited',
    emoji: '🤩',
    color: 'bg-orange-100 hover:bg-orange-200 border-orange-300',
    description: 'Ready for adventure'
  }
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onMoodSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-fun">How are you feeling today?</h2>
        <p className="text-gray-600 text-lg font-playful">Choose your mood and we'll suggest the perfect meal for you!</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {moods.map((mood) => (
          <Card
            key={mood.id}
            className={`cursor-pointer transition-all duration-200 transform hover:scale-105 border-2 ${
              selectedMood === mood.id 
                ? `${mood.color} shadow-lg scale-105` 
                : `bg-white hover:bg-gray-50 border-gray-200`
            }`}
            onClick={() => onMoodSelect(mood.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">{mood.emoji}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1 font-fun">{mood.name}</h3>
              <p className="text-sm text-gray-600 font-playful">{mood.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
