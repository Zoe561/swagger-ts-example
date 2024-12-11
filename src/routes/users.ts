import express, { Request, Response, Router } from 'express';
const app = express();

const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: 取得所有使用者
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 成功取得使用者列表
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/api/users', (req: Request, res: Response) => {
    const users = [
        { id: 1, name: '張三', email: 'zhang@example.com' },
        { id: 2, name: '李四', email: 'li@example.com' },
    ];
    res.json(users);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: 創建新使用者
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: 使用者創建成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 */
router.post('/api/users', (req: Request, res: Response) => {
    const { name, email } = req.body;
    const newUser = {
        id: 3,
        name,
        email,
    };
    res.status(201).json(newUser);
});

export default router;