import express, { Request, Response } from 'express';
import { PrismaClient } from '@tapper/prisma';

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Get all films
app.get('/api/films', async (req: Request, res: Response) => {
  try {
    const films = await prisma.film.findMany({
      include: {
        language_film_language_idTolanguage: true,
        film_category: {
          include: {
            category: true
          }
        },
        film_actor: {
          include: {
            actor: true
          }
        }
      }
    });
    res.json(films);
  } catch (error) {
    console.error('Error fetching films:', error);
    res.status(500).json({ error: 'Failed to fetch films' });
  }
});

// Get film by ID
app.get('/api/films/:id', async (req: Request, res: Response) => {
  try {
    const film = await prisma.film.findUnique({
      where: {
        film_id: parseInt(req.params.id)
      },
      include: {
        language_film_language_idTolanguage: true,
        film_category: {
          include: {
            category: true
          }
        },
        film_actor: {
          include: {
            actor: true
          }
        }
      }
    });

    if (!film) {
      return res.status(404).json({ error: 'Film not found' });
    }

    res.json(film);
  } catch (error) {
    console.error('Error fetching film:', error);
    res.status(500).json({ error: 'Failed to fetch film' });
  }
});

// Search films by title
app.get('/api/films/search', async (req: Request, res: Response) => {
  const { title } = req.query;
  
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }

  try {
    const films = await prisma.film.findMany({
      where: {
        title: {
          contains: title
        }
      },
      include: {
        language_film_language_idTolanguage: true,
        film_category: {
          include: {
            category: true
          }
        },
        film_actor: {
          include: {
            actor: true
          }
        }
      }
    });
    res.json(films);
  } catch (error) {
    console.error('Error searching films:', error);
    res.status(500).json({ error: 'Failed to search films' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 