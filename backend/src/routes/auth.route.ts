import express from 'express';

import { signup, login, logout, getMe } from '../controllers/auth.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/me", async (req: express.Request, res: express.Response) => {
    await protectRoute(req, res, () => getMe(req, res));
  });

router.post("/signup", async(req: express.Request, res: express.Response) => {
    await signup(req, res)
});

router.post("/login", async(req: express.Request, res: express.Response) => {
    await login(req, res)
});

router.post("/", async(req: express.Request, res: express.Response) => {
    await logout(req, res)
});
export default router;