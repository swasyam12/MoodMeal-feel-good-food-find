
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Settings } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DietaryPreferencesProps {
  allergies: string[];
  dislikes: string[];
  onUpdateAllergies: (allergies: string[]) => void;
  onUpdateDislikes: (dislikes: string[]) => void;
}

const DietaryPreferences: React.FC<DietaryPreferencesProps> = ({
  allergies,
  dislikes,
  onUpdateAllergies,
  onUpdateDislikes,
}) => {
  const [newAllergy, setNewAllergy] = useState('');
  const [newDislike, setNewDislike] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addAllergy = () => {
    if (newAllergy.trim() && !allergies.includes(newAllergy.trim().toLowerCase())) {
      onUpdateAllergies([...allergies, newAllergy.trim().toLowerCase()]);
      setNewAllergy('');
    }
  };

  const addDislike = () => {
    if (newDislike.trim() && !dislikes.includes(newDislike.trim().toLowerCase())) {
      onUpdateDislikes([...dislikes, newDislike.trim().toLowerCase()]);
      setNewDislike('');
    }
  };

  const removeAllergy = (allergy: string) => {
    onUpdateAllergies(allergies.filter(a => a !== allergy));
  };

  const removeDislike = (dislike: string) => {
    onUpdateDislikes(dislikes.filter(d => d !== dislike));
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-orange-50 font-playful">
          <Settings className="w-4 h-4 mr-2" />
          Dietary Preferences
          {(allergies.length > 0 || dislikes.length > 0) && (
            <Badge variant="secondary" className="ml-2">
              {allergies.length + dislikes.length}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-fun text-2xl">🍽️ Dietary Preferences</DialogTitle>
          <DialogDescription className="font-playful">
            Let us know about your allergies and foods you don't like so we can personalize your recipe recommendations.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Allergies Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-fun text-red-600">🚨 Allergies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter an allergy (e.g., nuts, dairy, eggs)"
                  value={newAllergy}
                  onChange={(e) => setNewAllergy(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, addAllergy)}
                  className="flex-1 font-playful"
                />
                <Button onClick={addAllergy} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {allergies.map((allergy) => (
                  <Badge key={allergy} variant="destructive" className="font-playful">
                    {allergy}
                    <button
                      onClick={() => removeAllergy(allergy)}
                      className="ml-1 hover:bg-red-600 rounded-full"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
                {allergies.length === 0 && (
                  <p className="text-gray-500 font-playful">No allergies added yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Dislikes Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-fun text-orange-600">👎 Foods I Don't Like</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter a food you dislike (e.g., mushrooms, olives)"
                  value={newDislike}
                  onChange={(e) => setNewDislike(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, addDislike)}
                  className="flex-1 font-playful"
                />
                <Button onClick={addDislike} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {dislikes.map((dislike) => (
                  <Badge key={dislike} variant="secondary" className="font-playful">
                    {dislike}
                    <button
                      onClick={() => removeDislike(dislike)}
                      className="ml-1 hover:bg-gray-400 rounded-full"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
                {dislikes.length === 0 && (
                  <p className="text-gray-500 font-playful">No dislikes added yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DietaryPreferences;
