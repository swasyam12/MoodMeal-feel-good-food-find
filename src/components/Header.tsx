
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Star } from 'lucide-react';
import DietaryPreferences from './DietaryPreferences';

interface HeaderProps {
  allergies: string[];
  dislikes: string[];
  onUpdateAllergies: (allergies: string[]) => void;
  onUpdateDislikes: (dislikes: string[]) => void;
  favoritesCount: number;
  onShowFavorites: () => void;
  selectedMood: string | null;
  onResetMood: () => void;
}

const Header: React.FC<HeaderProps> = ({
  allergies,
  dislikes,
  onUpdateAllergies,
  onUpdateDislikes,
  favoritesCount,
  onShowFavorites,
  selectedMood,
  onResetMood,
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-xl">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent font-cursive">
                MoodMeal
              </h1>
              <p className="text-sm text-gray-600 font-playful">Food that matches your feeling</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DietaryPreferences
              allergies={allergies}
              dislikes={dislikes}
              onUpdateAllergies={onUpdateAllergies}
              onUpdateDislikes={onUpdateDislikes}
            />
            <Button 
              variant="outline" 
              onClick={onShowFavorites}
              className="hover:bg-orange-50 font-playful"
            >
              <Star className="w-4 h-4 mr-2" />
              Favorites ({favoritesCount})
            </Button>
            {selectedMood && (
              <Button 
                variant="outline" 
                onClick={onResetMood}
                className="hover:bg-orange-50 font-playful"
              >
                Change Mood
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
