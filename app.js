import express from 'express';
import { PORT } from './config/env.js';
import cors from 'cors';

import authRouter from './routes/auth.routes.js';

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/auth', authRouter);




// start server
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
