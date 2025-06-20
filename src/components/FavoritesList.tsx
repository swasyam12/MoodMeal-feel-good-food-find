
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';
import RecipeCard from './RecipeCard';
import { recipes } from '@/data/recipes';

interface FavoritesListProps {
  favorites: string[];
  onToggleFavorite: (recipeId: string) => void;
  onBack: () => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites, onToggleFavorite, onBack }) => {
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="hover:bg-orange-50 font-playful"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2 font-cursive">
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
            Your Favorite Recipes
          </h2>
          <p className="text-gray-600 mt-1 font-playful">
            {favorites.length} recipe{favorites.length !== 1 ? 's' : ''} saved
          </p>
        </div>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2 font-fun">
            No favorites yet
          </h3>
          <p className="text-gray-600 mb-6 font-playful">
            Start exploring recipes and save your favorites by clicking the heart icon!
          </p>
          <Button onClick={onBack} className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 font-playful">
            Discover Recipes
          </Button>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
