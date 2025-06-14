import { PrismaClient, film_rating } from './generated';

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
  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true
  });

  // Create language (English)
  console.log('🌐 Creating language...');
  let language = await prisma.language.findFirst({
    where: { name: 'English' }
  });

  if (!language) {
    language = await prisma.language.create({
      data: {
        name: 'English',
        last_update: new Date()
      }
    });
  }

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
    }
  ];

  for (const film of films) {
    const existingFilm = await prisma.film.findFirst({
      where: { title: film.title }
    });

    if (!existingFilm) {
      await prisma.film.create({ data: film });
    }
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
    }
  ];

  await prisma.actor.createMany({
    data: actors,
    skipDuplicates: true
  });

  // Create film categories
  console.log('🏷️ Creating film categories...');
  const allFilms = await prisma.film.findMany();
  const allCategories = await prisma.category.findMany();

  // Prepare film categories data
  const filmCategories = [];
  for (const film of allFilms) {
    const selectedCategories = allCategories.slice(0, 2);
    for (const category of selectedCategories) {
      filmCategories.push({
        film_id: film.film_id,
        category_id: category.category_id,
        last_update: new Date()
      });
    }
  }

  // Create film categories in bulk
  await prisma.film_category.createMany({
    data: filmCategories,
    skipDuplicates: true
  });

  // Create film actors
  console.log('🎭 Creating film actors...');
  const allActors = await prisma.actor.findMany();

  // Prepare film actors data
  const filmActors = [];
  for (const film of allFilms) {
    const selectedActors = allActors.slice(0, 3);
    for (const actor of selectedActors) {
      filmActors.push({
        film_id: film.film_id,
        actor_id: actor.actor_id,
        last_update: new Date()
      });
    }
  }

  // Create film actors in bulk
  await prisma.film_actor.createMany({
    data: filmActors,
    skipDuplicates: true
  });

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