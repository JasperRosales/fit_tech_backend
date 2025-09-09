import {Router} from 'express';

const authRouter = Router();

authRouter.get('/login', (req, res) => 
    res.send(JSON.stringify(
        {
            name: "alden parker",
            age: 21,
            sex: "alpha"
        }
    ))
) 

export default authRouter;