import React, { useState, useEffect } from 'react';
import MoodSelector from '@/components/MoodSelector';
import RecipeCard from '@/components/RecipeCard';
import FavoritesList from '@/components/FavoritesList';
import DietaryPreferences from '@/components/DietaryPreferences';
import { getRecipesByMood } from '@/data/recipes';
import { filterRecipesByDietaryPreferences, getFilteredRecipeCount } from '@/utils/dietaryFilter';
import { Button } from '@/components/ui/button';
import { ChefHat, Heart, Shuffle, Star } from 'lucide-react';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showRecipes, setShowRecipes] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [animatingEmoji, setAnimatingEmoji] = useState<string | null>(null);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedAllergies = localStorage.getItem('dietaryAllergies');
    const savedDislikes = localStorage.getItem('dietaryDislikes');
    
    if (savedAllergies) {
      setAllergies(JSON.parse(savedAllergies));
    }
    if (savedDislikes) {
      setDislikes(JSON.parse(savedDislikes));
    }
  }, []);

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem('dietaryAllergies', JSON.stringify(allergies));
  }, [allergies]);

  useEffect(() => {
    localStorage.setItem('dietaryDislikes', JSON.stringify(dislikes));
  }, [dislikes]);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setShowRecipes(false);
    setShowFavorites(false);
    
    // Trigger emoji animation
    setAnimatingEmoji(moodEmojis[moodId]);
    setTimeout(() => setAnimatingEmoji(null), 2000);
    
    // Small delay for smooth transition
    setTimeout(() => setShowRecipes(true), 100);
  };

  const handleRandomMood = () => {
    const moods = ['happy', 'stressed', 'tired', 'bored', 'sad', 'excited'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    handleMoodSelect(randomMood);
  };

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const resetMood = () => {
    setSelectedMood(null);
    setShowRecipes(false);
    setShowFavorites(false);
  };

  const showFavoritesList = () => {
    setShowFavorites(true);
    setShowRecipes(false);
  };

  const allRecipes = selectedMood ? getRecipesByMood(selectedMood) : [];
  const filteredRecipes = filterRecipesByDietaryPreferences(allRecipes, allergies, dislikes);
  const filterMessage = getFilteredRecipeCount(allRecipes.length, filteredRecipes.length, allergies, dislikes);

  const moodEmojis: { [key: string]: string } = {
    happy: '😊',
    stressed: '😰',
    tired: '😴',
    bored: '😑',
    sad: '😢',
    excited: '🤩'
  };

  const moodThemes: { [key: string]: string } = {
    happy: 'from-yellow-400 via-amber-300 to-orange-400',
    stressed: 'from-red-500 via-rose-400 to-pink-500',
    tired: 'from-blue-600 via-indigo-500 to-purple-600',
    bored: 'from-purple-600 via-violet-500 to-indigo-600',
    sad: 'from-gray-500 via-slate-400 to-blue-400',
    excited: 'from-orange-500 via-yellow-400 to-pink-500'
  };

  const currentTheme = selectedMood ? moodThemes[selectedMood] : 'from-orange-200 via-yellow-200 to-pink-200';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme} transition-all duration-1000`}>
      {/* Animated Emoji Overlay */}
      {animatingEmoji && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="text-8xl animate-bounce">{animatingEmoji}</div>
        </div>
      )}

      {/* Header */}
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
                onUpdateAllergies={setAllergies}
                onUpdateDislikes={setDislikes}
              />
              <Button 
                variant="outline" 
                onClick={showFavoritesList}
                className="hover:bg-orange-50 font-playful"
              >
                <Star className="w-4 h-4 mr-2" />
                Favorites ({favorites.length})
              </Button>
              {selectedMood && (
                <Button 
                  variant="outline" 
                  onClick={resetMood}
                  className="hover:bg-orange-50 font-playful"
                >
                  Change Mood
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {!selectedMood && !showFavorites ? (
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
                onClick={handleRandomMood}
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600 mb-8 font-playful"
              >
                <Shuffle className="w-5 h-5 mr-2" />
                Surprise Me! Random Recipe
              </Button>
            </div>
            <MoodSelector selectedMood={selectedMood} onMoodSelect={handleMoodSelect} />
          </div>
        ) : showFavorites ? (
          <FavoritesList 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite}
            onBack={() => setShowFavorites(false)}
          />
        ) : (
          <div className="space-y-8">
            {/* Mood Display */}
            <div className="text-center py-8">
              <div className="text-6xl mb-4">{moodEmojis[selectedMood!]}</div>
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

            {/* Recipes Grid */}
            {showRecipes && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe} 
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}

            {filteredRecipes.length === 0 && showRecipes && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2 font-playful">
                  {allRecipes.length === 0 
                    ? "No recipes found for this mood"
                    : "No recipes match your dietary preferences"
                  }
                </h3>
                <p className="text-gray-600 font-playful">
                  {allRecipes.length === 0 
                    ? "We're working on adding more recipes. Try selecting a different mood!"
                    : "Try adjusting your dietary preferences or selecting a different mood!"
                  }
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 font-playful">
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
