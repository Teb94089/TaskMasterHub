import express, { json } from 'express';
const app = express();
const port = 3001;

app.use(json());

app.post('/signin', (req, res) => {
  // Perform registration logic here
  // ...

  // Return a response indicating successful registration
  res.json({ message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});