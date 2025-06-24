
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import MoodDisplay from '@/components/MoodDisplay';
import RecipesGrid from '@/components/RecipesGrid';
import Footer from '@/components/Footer';
import FavoritesList from '@/components/FavoritesList';
import { getRecipesByMood } from '@/data/recipes';
import { filterRecipesByDietaryPreferences, getFilteredRecipeCount } from '@/utils/dietaryFilter';

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

      <Header
        allergies={allergies}
        dislikes={dislikes}
        onUpdateAllergies={setAllergies}
        onUpdateDislikes={setDislikes}
        favoritesCount={favorites.length}
        onShowFavorites={showFavoritesList}
        selectedMood={selectedMood}
        onResetMood={resetMood}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {!selectedMood && !showFavorites ? (
          <WelcomeSection
            selectedMood={selectedMood}
            onMoodSelect={handleMoodSelect}
            onRandomMood={handleRandomMood}
          />
        ) : showFavorites ? (
          <FavoritesList 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite}
            onBack={() => setShowFavorites(false)}
          />
        ) : (
          <div className="space-y-8">
            <MoodDisplay selectedMood={selectedMood!} filterMessage={filterMessage} />
            <RecipesGrid
              recipes={filteredRecipes}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              showRecipes={showRecipes}
              allRecipesLength={allRecipes.length}
            />
          </div>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default Index;
