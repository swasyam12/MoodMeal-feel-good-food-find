
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Clock, Users, ChefHat, ArrowLeft, ExternalLink } from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-4 h-4" />
          Back to Recipes
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
            <p className="text-gray-600 text-lg mb-6">{recipe.description}</p>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-500" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-gray-500" />
                <Badge variant="outline">{recipe.difficulty}</Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button asChild className="w-full">
              <a href={recipe.externalLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Recipe Instructions
              </a>
            </Button>
          </div>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Instructions</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Ingredients</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecipeDetail;
