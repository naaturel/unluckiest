import express from 'express';
import { handler } from './build/handler.js';

const app = express();
const port = 80;

app.use(handler);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});