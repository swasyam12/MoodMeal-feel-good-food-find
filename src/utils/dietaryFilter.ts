
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

export const filterRecipesByDietaryPreferences = (
  recipes: Recipe[],
  allergies: string[],
  dislikes: string[]
): Recipe[] => {
  if (allergies.length === 0 && dislikes.length === 0) {
    return recipes;
  }

  return recipes.filter(recipe => {
    const recipeText = [
      recipe.title.toLowerCase(),
      recipe.description.toLowerCase(),
      ...recipe.ingredients.map(ingredient => ingredient.toLowerCase()),
      ...recipe.tags.map(tag => tag.toLowerCase())
    ].join(' ');

    // Check for allergies (strict filtering)
    const hasAllergy = allergies.some(allergy => 
      recipeText.includes(allergy.toLowerCase())
    );

    // Check for dislikes
    const hasDislike = dislikes.some(dislike => 
      recipeText.includes(dislike.toLowerCase())
    );

    return !hasAllergy && !hasDislike;
  });
};

export const getFilteredRecipeCount = (
  totalRecipes: number,
  filteredRecipes: number,
  allergies: string[],
  dislikes: string[]
): string | null => {
  if (allergies.length === 0 && dislikes.length === 0) {
    return null;
  }

  const filtered = totalRecipes - filteredRecipes;
  if (filtered > 0) {
    return `${filtered} recipe${filtered !== 1 ? 's' : ''} filtered out based on your preferences`;
  }

  return null;
};
