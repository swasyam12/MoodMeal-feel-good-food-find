
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, ChefHat, ExternalLink, Eye, Heart } from 'lucide-react';
import RecipeModal from './RecipeModal';

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

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite?: boolean;
  onToggleFavorite?: (recipeId: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isFavorite = false, onToggleFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite?.(recipe.id);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative">
        {/* Favorite Button */}
        {onToggleFavorite && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 left-2 z-10 p-1 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={handleFavoriteClick}
          >
            <Heart 
              className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} transition-colors`}
            />
          </Button>
        )}

        <div className="relative overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge className={getDifficultyColor(recipe.difficulty)}>
              {recipe.difficulty}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{recipe.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => setIsModalOpen(true)}
              >
                <Eye className="w-4 h-4 mr-1" />
                Quick View
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="flex-1"
              >
                <Link to={`/recipe/${recipe.id}`}>
                  Full Recipe
                </Link>
              </Button>
            </div>
            <Button asChild className="w-full" size="sm">
              <a href={recipe.externalLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                View on Website
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <RecipeModal 
        recipe={recipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default RecipeCard;
