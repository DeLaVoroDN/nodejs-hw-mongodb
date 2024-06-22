import express from 'express';
import contactsRouter from './routes/contacts.js';

const app = express();

app.use(express.json());

app.use('/contacts', contactsRouter);

const setupServer = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export { app, setupServer };
