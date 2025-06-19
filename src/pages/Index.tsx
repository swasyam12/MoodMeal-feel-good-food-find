
import React, { useState } from 'react';
import MoodSelector from '@/components/MoodSelector';
import RecipeCard from '@/components/RecipeCard';
import { getRecipesByMood } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { ChefHat, Heart } from 'lucide-react';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showRecipes, setShowRecipes] = useState(false);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setShowRecipes(false);
    // Small delay for smooth transition
    setTimeout(() => setShowRecipes(true), 100);
  };

  const resetMood = () => {
    setSelectedMood(null);
    setShowRecipes(false);
  };

  const selectedRecipes = selectedMood ? getRecipesByMood(selectedMood) : [];
  const moodEmojis: { [key: string]: string } = {
    happy: '😊',
    stressed: '😰',
    tired: '😴',
    bored: '😑',
    sad: '😢',
    excited: '🤩'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-xl">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  MoodMeal
                </h1>
                <p className="text-sm text-gray-600">Food that matches your feeling</p>
              </div>
            </div>
            {selectedMood && (
              <Button 
                variant="outline" 
                onClick={resetMood}
                className="hover:bg-orange-50"
              >
                Change Mood
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {!selectedMood ? (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Welcome to MoodMeal! 
                <span className="inline-block ml-2 animate-bounce">🍽️</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover recipes that perfectly match your current mood. 
                From comfort food to energizing meals, we've got you covered!
              </p>
            </div>
            <MoodSelector selectedMood={selectedMood} onMoodSelect={handleMoodSelect} />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Mood Display */}
            <div className="text-center py-8">
              <div className="text-6xl mb-4">{moodEmojis[selectedMood]}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Perfect recipes for when you're feeling{' '}
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  {selectedMood}
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                We've curated these recipes to match your current mood perfectly
              </p>
            </div>

            {/* Recipes Grid */}
            {showRecipes && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {selectedRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}

            {selectedRecipes.length === 0 && showRecipes && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No recipes found for this mood
                </h3>
                <p className="text-gray-600">
                  We're working on adding more recipes. Try selecting a different mood!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for food lovers everywhere</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
