
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
  ingredients: string[];
  instructions: string[];
  externalLink: string;
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
    mood: 'happy',
    ingredients: [
      '1 cup quinoa',
      '2 cups mixed greens',
      '1 red bell pepper, sliced',
      '1 cucumber, diced',
      '1 carrot, julienned',
      '1/2 red cabbage, shredded',
      '1/4 cup tahini',
      '2 tbsp lemon juice',
      '1 tbsp maple syrup',
      '1 clove garlic, minced'
    ],
    instructions: [
      'Cook quinoa according to package instructions and let cool.',
      'Prepare all vegetables by washing, chopping, and arranging in colorful sections.',
      'Make tahini dressing by whisking together tahini, lemon juice, maple syrup, garlic, and 2-3 tbsp water.',
      'Divide quinoa between two bowls and arrange vegetables on top in rainbow sections.',
      'Drizzle with tahini dressing and serve immediately.'
    ],
    externalLink: 'https://www.loveandlemons.com/buddha-bowl-recipe/'
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
    mood: 'happy',
    ingredients: [
      '1 cup frozen mango chunks',
      '1/2 cup frozen pineapple',
      '1/2 banana',
      '1/2 cup coconut milk',
      '1/4 cup orange juice',
      '1 tbsp honey (optional)',
      'Ice cubes as needed'
    ],
    instructions: [
      'Add all frozen fruits to a high-speed blender.',
      'Pour in coconut milk and orange juice.',
      'Add honey if desired for extra sweetness.',
      'Blend on high until smooth and creamy, about 60 seconds.',
      'Add ice cubes if you prefer a thicker consistency and blend again.',
      'Pour into a glass and enjoy immediately.'
    ],
    externalLink: 'https://www.allrecipes.com/recipe/231015/tropical-smoothie/'
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
    mood: 'stressed',
    ingredients: [
      '1 lb elbow macaroni',
      '4 tbsp butter',
      '4 tbsp all-purpose flour',
      '2 cups whole milk',
      '2 cups sharp cheddar cheese, grated',
      '1 cup gruyere cheese, grated',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1/4 tsp paprika',
      '1/2 cup breadcrumbs (optional)'
    ],
    instructions: [
      'Cook macaroni according to package directions until al dente. Drain and set aside.',
      'In a large saucepan, melt butter over medium heat.',
      'Whisk in flour and cook for 1 minute to make a roux.',
      'Gradually whisk in milk, cooking until thickened, about 5 minutes.',
      'Remove from heat and stir in cheeses until melted and smooth.',
      'Season with salt, pepper, and paprika.',
      'Fold in cooked macaroni until well coated.',
      'Optional: Top with breadcrumbs and broil for 2-3 minutes until golden.',
      'Serve hot and enjoy the ultimate comfort!'
    ],
    externalLink: 'https://www.foodnetwork.com/recipes/alton-brown/baked-macaroni-and-cheese-recipe-1939524'
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
    mood: 'stressed',
    ingredients: [
      '1 chamomile tea bag',
      '1 cup hot water',
      '1 slice whole grain bread',
      '1 tbsp butter',
      '2 tbsp honey',
      '1/4 tsp cinnamon (optional)',
      'Lemon slice for garnish'
    ],
    instructions: [
      'Bring water to a boil and pour over chamomile tea bag in a mug.',
      'Steep for 5-7 minutes for maximum calming benefits.',
      'While tea steeps, toast bread until golden brown.',
      'Spread butter on warm toast.',
      'Drizzle honey generously over buttered toast.',
      'Sprinkle with cinnamon if desired.',
      'Remove tea bag and add lemon slice to tea.',
      'Enjoy slowly while taking deep, calming breaths.'
    ],
    externalLink: 'https://www.thespruceeats.com/how-to-make-chamomile-tea-765348'
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
    mood: 'tired',
    ingredients: [
      '2 cups fresh spinach',
      '1 ripe banana',
      '1 scoop vanilla protein powder',
      '1 tbsp almond butter',
      '1 cup unsweetened almond milk',
      '1/2 cup frozen mango',
      '1 tbsp chia seeds',
      '1/2 tsp vanilla extract',
      'Ice cubes as needed'
    ],
    instructions: [
      'Add spinach and almond milk to blender first for easier blending.',
      'Add banana, protein powder, and almond butter.',
      'Include frozen mango, chia seeds, and vanilla extract.',
      'Blend on high speed for 60-90 seconds until completely smooth.',
      'Add ice cubes if you want it colder and blend briefly.',
      'Taste and adjust sweetness if needed.',
      'Pour into a large glass and drink immediately for maximum energy boost.',
      'Drink within 30 minutes for best nutritional value.'
    ],
    externalLink: 'https://www.eatingwell.com/recipe/276894/green-smoothie-for-energy/'
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
    mood: 'tired',
    ingredients: [
      '1/2 cup rolled oats',
      '1/2 cup milk of choice',
      '1 tbsp chia seeds',
      '1 tbsp maple syrup',
      '1/4 cup Greek yogurt',
      '1/4 cup mixed berries',
      '2 tbsp chopped walnuts',
      '1/2 tsp vanilla extract',
      'Pinch of salt'
    ],
    instructions: [
      'In a mason jar or container, combine oats, chia seeds, and salt.',
      'Add milk, Greek yogurt, maple syrup, and vanilla extract.',
      'Stir well to combine all ingredients thoroughly.',
      'Add half the berries and nuts, stirring gently.',
      'Cover and refrigerate for at least 4 hours or overnight.',
      'In the morning, stir the oats and add more milk if too thick.',
      'Top with remaining berries and nuts.',
      'Enjoy cold or heat in microwave for 30-60 seconds if preferred warm.'
    ],
    externalLink: 'https://www.thekitchn.com/how-to-make-overnight-oats-cooking-lessons-from-the-kitchn-215919'
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
    mood: 'bored',
    ingredients: [
      '1 lb beef bulgogi (thinly sliced)',
      '6 corn tortillas',
      '2 cups napa cabbage, shredded',
      '1 carrot, julienned',
      '2 green onions, sliced',
      '1/4 cup soy sauce',
      '2 tbsp brown sugar',
      '1 tbsp sesame oil',
      '2 cloves garlic, minced',
      '1 tbsp gochujang',
      '2 tbsp rice vinegar',
      '1 tbsp sesame seeds',
      'Cilantro for garnish'
    ],
    instructions: [
      'Marinate beef in soy sauce, brown sugar, half the sesame oil, and garlic for 30 minutes.',
      'Make slaw by mixing cabbage, carrot, remaining sesame oil, rice vinegar, and a pinch of salt.',
      'Heat a large skillet or grill pan over high heat.',
      'Cook marinated beef for 3-4 minutes until caramelized and cooked through.',
      'Warm tortillas on a dry skillet for 30 seconds each side.',
      'Mix gochujang with a little water to make a drizzling sauce.',
      'Assemble tacos: place beef on tortillas, top with slaw.',
      'Drizzle with gochujang sauce, sprinkle with green onions, sesame seeds, and cilantro.',
      'Serve immediately while beef is hot and tortillas are warm.'
    ],
    externalLink: 'https://www.bonappetit.com/recipe/korean-bbq-tacos'
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
    mood: 'bored',
    ingredients: [
      '1 cup sushi rice',
      '2 tbsp rice vinegar',
      '1 tbsp sugar',
      '1/2 tsp salt',
      '4 oz sashimi-grade salmon',
      '1/2 cucumber, diced',
      '1/2 avocado, sliced',
      '1/4 cup edamame',
      '2 tbsp pickled ginger',
      '1 sheet nori, cut into strips',
      '2 tbsp soy sauce',
      '1 tbsp sriracha mayo',
      '1 tsp sesame seeds',
      'Wasabi for serving'
    ],
    instructions: [
      'Cook sushi rice according to package instructions.',
      'Mix rice vinegar, sugar, and salt, then fold into hot rice. Let cool.',
      'Cube salmon into bite-sized pieces.',
      'Prepare all toppings: slice avocado, dice cucumber, cook edamame.',
      'Make sriracha mayo by mixing mayo with sriracha to taste.',
      'Divide seasoned rice between two bowls.',
      'Arrange salmon, cucumber, avocado, and edamame in colorful sections on rice.',
      'Add pickled ginger and nori strips.',
      'Drizzle with soy sauce and sriracha mayo.',
      'Sprinkle with sesame seeds and serve with wasabi.'
    ],
    externalLink: 'https://www.justonecookbook.com/chirashi-sushi/'
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
    mood: 'sad',
    ingredients: [
      '4 tbsp all-purpose flour',
      '4 tbsp sugar',
      '2 tbsp cocoa powder',
      '1/4 tsp baking powder',
      'Pinch of salt',
      '3 tbsp milk',
      '2 tbsp vegetable oil',
      '1/4 tsp vanilla extract',
      '2 tbsp chocolate chips',
      'Vanilla ice cream (optional)'
    ],
    instructions: [
      'In a microwave-safe mug, whisk together flour, sugar, cocoa powder, baking powder, and salt.',
      'Add milk, oil, and vanilla extract, mixing until smooth.',
      'Fold in chocolate chips for extra richness.',
      'Microwave for 90 seconds to 2 minutes, watching carefully.',
      'Cake is done when it springs back lightly when touched.',
      'Let cool for 1 minute before eating (it will be very hot!).',
      'Top with vanilla ice cream if desired for ultimate comfort.',
      'Enjoy while warm for maximum mood-boosting effect.'
    ],
    externalLink: 'https://www.allrecipes.com/recipe/241038/microwave-chocolate-mug-cake/'
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
    mood: 'sad',
    ingredients: [
      '1 can (14 oz) crushed tomatoes',
      '1 cup vegetable broth',
      '1/4 cup heavy cream',
      '1 tsp dried basil',
      '1/2 tsp garlic powder',
      'Salt and pepper to taste',
      '4 slices bread',
      '4 slices cheddar cheese',
      '2 tbsp butter',
      'Fresh basil for garnish'
    ],
    instructions: [
      'In a saucepan, combine crushed tomatoes, vegetable broth, basil, and garlic powder.',
      'Bring to a simmer and cook for 10 minutes, stirring occasionally.',
      'Stir in heavy cream and season with salt and pepper.',
      'Meanwhile, butter one side of each bread slice.',
      'Place cheese between bread slices, buttered sides facing out.',
      'Cook sandwiches in a skillet over medium heat until golden brown on both sides.',
      'Blend soup until smooth if desired, or leave chunky.',
      'Serve soup hot with grilled cheese cut diagonally.',
      'Garnish soup with fresh basil and enjoy this nostalgic comfort meal.'
    ],
    externalLink: 'https://www.campbells.com/recipes/perfect-tomato-soup/'
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
    mood: 'excited',
    ingredients: [
      '2 packs instant ramen noodles',
      '4 cups chicken broth',
      '2 tbsp miso paste',
      '1 tbsp gochujang',
      '1 tsp chili oil',
      '2 soft-boiled eggs',
      '2 green onions, sliced',
      '1 sheet nori, cut in strips',
      '1/4 cup corn kernels',
      '2 slices chashu pork (or cooked pork belly)',
      '1 clove garlic, minced',
      '1 tsp sesame oil',
      'Sriracha for extra heat'
    ],
    instructions: [
      'Prepare soft-boiled eggs by cooking for 6-7 minutes, then ice bath.',
      'Heat chicken broth in a large pot and whisk in miso paste until dissolved.',
      'Add gochujang, minced garlic, and bring to a simmer.',
      'Cook ramen noodles according to package directions, drain.',
      'Add chili oil and sesame oil to the broth.',
      'Divide noodles between two bowls and ladle hot broth over them.',
      'Top with halved soft-boiled eggs, sliced pork, corn, and green onions.',
      'Add nori strips and drizzle with extra chili oil.',
      'Serve with sriracha on the side for those who dare to go spicier!',
      'Slurp loudly and enjoy the fiery excitement!'
    ],
    externalLink: 'https://www.seriouseats.com/spicy-miso-ramen-recipe'
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
    mood: 'excited',
    ingredients: [
      '1 cup Greek yogurt',
      '2 tbsp honey',
      '1/2 tsp vanilla extract',
      '1/2 cup mixed berries (strawberries, blueberries, raspberries)',
      '1/2 cup granola',
      '1/4 cup whipped cream',
      '2 tbsp sliced almonds',
      '1 tbsp mini chocolate chips',
      'Fresh mint leaves for garnish',
      'Edible flowers (optional)'
    ],
    instructions: [
      'Mix Greek yogurt with honey and vanilla extract until smooth.',
      'Wash and prepare berries, slicing strawberries if large.',
      'In clear glasses or jars, start with a layer of yogurt mixture.',
      'Add a layer of mixed berries, then sprinkle with granola.',
      'Repeat layers: yogurt, ber ries, granola until glasses are nearly full.',
      'Top with a dollop of whipped cream.',
      'Sprinkle with sliced almonds and mini chocolate chips.',
      'Garnish with fresh mint leaves and edible flowers if available.',
      'Serve immediately for the freshest taste and crunchiest granola.',
      'Perfect for celebrating any special moment!'
    ],
    externalLink: 'https://www.foodnetwork.com/recipes/berry-parfait-recipe-2107768'
  }
];

export const getRecipesByMood = (mood: string): Recipe[] => {
  return recipes.filter(recipe => recipe.mood === mood);
};
