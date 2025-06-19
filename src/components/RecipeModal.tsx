
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat, ExternalLink } from 'lucide-react';
import { Recipe } from '@/data/recipes';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, isOpen, onClose }) => {
  if (!recipe) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
          <DialogDescription className="text-base">
            {recipe.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-lg"
          />

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-gray-500" />
              <Badge variant="outline" className="text-xs">{recipe.difficulty}</Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Ingredients</h3>
            <ul className="space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Instructions</h3>
            <div className="space-y-3">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <Button asChild className="w-full">
            <a href={recipe.externalLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Recipe on Website
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
