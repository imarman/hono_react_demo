import { Hono } from 'hono';
import { expensesRoute } from './routes/expenses';
import { serveStatic } from 'hono/bun';
import { logger } from 'hono/logger';

const app = new Hono();
app.use(logger())

app.route('api/expense', expensesRoute);

// 前端静态文件 应该是'../frontend/dist'，这里不清楚为什么是 './frontend/dist'
app.get('*', serveStatic({ root: './frontend/dist' }));
app.get('*', serveStatic({ path: './frontend/dist/index.html' }));

export default app;
