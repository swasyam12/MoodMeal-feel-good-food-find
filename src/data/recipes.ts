
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  mood: string;
}

export const recipes: Recipe[] = [
  // Happy recipes
  {
    id: 'rainbow-salad',
    title: 'Rainbow Buddha Bowl',
    description: 'A colorful and nutritious bowl packed with fresh vegetables, quinoa, and a zesty tahini dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop',
    cookTime: '25 min',
    servings: 2,
    difficulty: 'Easy',
    tags: ['Healthy', 'Vegetarian', 'Colorful', 'Fresh'],
    mood: 'happy'
  },
  {
    id: 'tropical-smoothie',
    title: 'Tropical Sunshine Smoothie',
    description: 'Bright and refreshing smoothie with mango, pineapple, and coconut that tastes like sunshine.',
    image: 'https://images.unsplash.com/photo-1553530979-6ca13c840c84?w=500&h=300&fit=crop',
    cookTime: '5 min',
    servings: 1,
    difficulty: 'Easy',
    tags: ['Quick', 'Tropical', 'Healthy', 'Refreshing'],
    mood: 'happy'
  },

  // Stressed recipes
  {
    id: 'mac-cheese',
    title: 'Ultimate Comfort Mac & Cheese',
    description: 'Creamy, cheesy mac and cheese that melts away stress with every bite.',
    image: 'https://images.unsplash.com/photo-1543826173-f4f6e9a3e3d5?w=500&h=300&fit=crop',
    cookTime: '30 min',
    servings: 4,
    difficulty: 'Easy',
    tags: ['Comfort Food', 'Cheesy', 'Warm', 'Satisfying'],
    mood: 'stressed'
  },
  {
    id: 'herbal-tea',
    title: 'Calming Chamomile Tea & Honey Toast',
    description: 'Soothing chamomile tea paired with warm honey-drizzled toast for instant relaxation.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=300&fit=crop',
    cookTime: '10 min',
    servings: 1,
    difficulty: 'Easy',
    tags: ['Calming', 'Warm', 'Simple', 'Relaxing'],
    mood: 'stressed'
  },

  // Tired recipes
  {
    id: 'energy-smoothie',
    title: 'Green Energy Power Smoothie',
    description: 'Energizing smoothie with spinach, banana, and protein powder to kickstart your day.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=300&fit=crop',
    cookTime: '8 min',
    servings: 1,
    difficulty: 'Easy',
    tags: ['Energizing', 'Protein', 'Green', 'Quick'],
    mood: 'tired'
  },
  {
    id: 'overnight-oats',
    title: 'Overnight Energy Oats',
    description: 'Make-ahead oats with chia seeds, berries, and nuts for sustained morning energy.',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&h=300&fit=crop',
    cookTime: '5 min prep',
    servings: 1,
    difficulty: 'Easy',
    tags: ['Make-ahead', 'Energizing', 'Healthy', 'Overnight'],
    mood: 'tired'
  },

  // Bored recipes
  {
    id: 'fusion-tacos',
    title: 'Korean BBQ Fusion Tacos',
    description: 'Exciting fusion tacos combining Korean flavors with Mexican tradition for a flavor adventure.',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=500&h=300&fit=crop',
    cookTime: '45 min',
    servings: 3,
    difficulty: 'Medium',
    tags: ['Fusion', 'Adventurous', 'Spicy', 'Creative'],
    mood: 'bored'
  },
  {
    id: 'rainbow-sushi',
    title: 'DIY Rainbow Sushi Bowl',
    description: 'Create your own colorful sushi bowl with various toppings and sauces for endless combinations.',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop',
    cookTime: '35 min',
    servings: 2,
    difficulty: 'Medium',
    tags: ['Creative', 'Colorful', 'DIY', 'Fresh'],
    mood: 'bored'
  },

  // Sad recipes
  {
    id: 'chocolate-mug-cake',
    title: 'Warm Chocolate Mug Cake',
    description: 'Rich, warm chocolate cake made in minutes to provide instant comfort and sweetness.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop',
    cookTime: '3 min',
    servings: 1,
    difficulty: 'Easy',
    tags: ['Chocolate', 'Quick', 'Comfort', 'Sweet'],
    mood: 'sad'
  },
  {
    id: 'soup-grilled-cheese',
    title: 'Classic Tomato Soup & Grilled Cheese',
    description: 'The ultimate comfort combo that brings back childhood memories and warms the soul.',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&h=300&fit=crop',
    cookTime: '20 min',
    servings: 2,
    difficulty: 'Easy',
    tags: ['Classic', 'Warm', 'Nostalgic', 'Comforting'],
    mood: 'sad'
  },

  // Excited recipes
  {
    id: 'spicy-ramen',
    title: 'Fiery Dragon Ramen',
    description: 'Bold and spicy ramen with multiple chili oils and exciting toppings for thrill-seekers.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop',
    cookTime: '40 min',
    servings: 2,
    difficulty: 'Medium',
    tags: ['Spicy', 'Bold', 'Exciting', 'Asian'],
    mood: 'excited'
  },
  {
    id: 'celebration-parfait',
    title: 'Celebration Berry Parfait',
    description: 'Festive layered parfait with colorful berries, granola, and whipped cream for special moments.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=300&fit=crop',
    cookTime: '15 min',
    servings: 2,
    difficulty: 'Easy',
    tags: ['Festive', 'Colorful', 'Sweet', 'Celebration'],
    mood: 'excited'
  }
];

export const getRecipesByMood = (mood: string): Recipe[] => {
  return recipes.filter(recipe => recipe.mood === mood);
};
