
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';
import MoodSelector from './MoodSelector';

interface WelcomeSectionProps {
  selectedMood: string | null;
  onMoodSelect: (moodId: string) => void;
  onRandomMood: () => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  selectedMood,
  onMoodSelect,
  onRandomMood,
}) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-fun">
          Welcome to MoodMeal! 
          <span className="inline-block ml-2 animate-bounce">🍽️</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 font-playful">
          Discover recipes that perfectly match your current mood. 
          From comfort food to energizing meals, we've got you covered!
        </p>
        <Button 
          onClick={onRandomMood}
          variant="outline"
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600 mb-8 font-playful"
        >
          <Shuffle className="w-5 h-5 mr-2" />
          Surprise Me! Random Recipe
        </Button>
      </div>
      <MoodSelector selectedMood={selectedMood} onMoodSelect={onMoodSelect} />
    </div>
  );
};

export default WelcomeSection;
