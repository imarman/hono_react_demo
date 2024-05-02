import { Hono } from 'hono'
import { expensesRoute } from './routes/expenses'

const app = new Hono()

app.route('api/expense', expensesRoute)

export default app