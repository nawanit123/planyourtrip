import express, { Application, Request, Response } from 'express';
import journeyRoutes from './routes/journeyRoutes';

const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Api successfully Running');
});

app.use('/api/journey', journeyRoutes);

app.listen(5000, () => console.log('Server Running'));
