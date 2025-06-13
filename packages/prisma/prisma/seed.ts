import { PrismaClient, film_rating } from '../src/generated';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create categories
  const categories = [
    'Action', 'Animation', 'Children', 'Classics', 'Comedy',
    'Documentary', 'Drama', 'Family', 'Foreign', 'Games',
    'Horror', 'Music', 'New', 'Sci-Fi', 'Sports', 'Travel'
  ].map(name => ({ name }));

  console.log('📝 Creating categories...');
  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  // Create language (English)
  console.log('🌐 Creating language...');
  const language = await prisma.language.create({
    data: {
      name: 'English',
      last_update: new Date()
    }
  });

  // Create films
  console.log('🎬 Creating films...');
  const films = [
    {
      title: 'ACADEMY DINOSAUR',
      description: 'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies',
      release_year: 2006,
      language_id: language.language_id,
      rental_duration: 6,
      rental_rate: 0.99,
      length: 86,
      replacement_cost: 20.99,
      rating: film_rating.PG,
      special_features: 'Deleted Scenes,Behind the Scenes',
      last_update: new Date()
    },
    {
      title: 'ACE GOLDFINGER',
      description: 'A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China',
      release_year: 2006,
      language_id: language.language_id,
      rental_duration: 3,
      rental_rate: 4.99,
      length: 48,
      replacement_cost: 12.99,
      rating: film_rating.G,
      special_features: 'Trailers,Deleted Scenes',
      last_update: new Date()
    },
    // Add more films as needed
  ];

  for (const film of films) {
    await prisma.film.create({ data: film });
  }

  // Create actors
  console.log('🎭 Creating actors...');
  const actors = [
    {
      first_name: 'PENELOPE',
      last_name: 'GUINESS',
      last_update: new Date()
    },
    {
      first_name: 'NICK',
      last_name: 'WAHLBERG',
      last_update: new Date()
    },
    {
      first_name: 'ED',
      last_name: 'CHASE',
      last_update: new Date()
    },
    // Add more actors as needed
  ];

  for (const actor of actors) {
    await prisma.actor.create({ data: actor });
  }

  // Create film categories
  console.log('🏷️ Creating film categories...');
  const allFilms = await prisma.film.findMany();
  const allCategories = await prisma.category.findMany();

  // Assign categories to films
  for (const film of allFilms) {
    const selectedCategories = allCategories.slice(0, 2); // Assign first two categories to each film
    for (const category of selectedCategories) {
      await prisma.film_category.create({
        data: {
          film_id: film.film_id,
          category_id: category.category_id,
          last_update: new Date()
        }
      });
    }
  }

  // Create film actors
  console.log('🎭 Creating film actors...');
  const allActors = await prisma.actor.findMany();

  // Assign actors to films
  for (const film of allFilms) {
    const selectedActors = allActors.slice(0, 3); // Assign first three actors to each film
    for (const actor of selectedActors) {
      await prisma.film_actor.create({
        data: {
          film_id: film.film_id,
          actor_id: actor.actor_id,
          last_update: new Date()
        }
      });
    }
  }

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 