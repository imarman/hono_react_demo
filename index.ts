import { logger } from 'hono/logger';
import app from './app';

app.use(logger())

Bun.serve({
	fetch: app.fetch,
});

console.log('Bun server running..');
