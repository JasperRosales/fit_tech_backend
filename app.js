import express from 'express';
import {PORT} from './config/env.js';

import authRouter from './routes/auth.routes.js';

const app = express();

app.use('/api/v1/auth', authRouter);


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})