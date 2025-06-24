
import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  mood: string;
  ingredients: string[];
  instructions: string[];
  externalLink: string;
}

interface RecipesGridProps {
  recipes: Recipe[];
  favorites: string[];
  onToggleFavorite: (recipeId: string) => void;
  showRecipes: boolean;
  allRecipesLength: number;
}

const RecipesGrid: React.FC<RecipesGridProps> = ({
  recipes,
  favorites,
  onToggleFavorite,
  showRecipes,
  allRecipesLength,
}) => {
  if (!showRecipes) return null;

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2 font-playful">
          {allRecipesLength === 0 
            ? "No recipes found for this mood"
            : "No recipes match your dietary preferences"
          }
        </h3>
        <p className="text-gray-600 font-playful">
          {allRecipesLength === 0 
            ? "We're working on adding more recipes. Try selecting a different mood!"
            : "Try adjusting your dietary preferences or selecting a different mood!"
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          isFavorite={favorites.includes(recipe.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default RecipesGrid;
