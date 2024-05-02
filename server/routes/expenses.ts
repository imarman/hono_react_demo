import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';




const expensesSchema = z.object({
  id: z.number().int().positive().min(1),
	title: z.string().min(3).max(100),
	amount: z.number().int().positive(),
});

const createPostSchema = expensesSchema.omit({ id: true });

export type Expense = z.infer<typeof expensesSchema>;

const fakeExpenses: Expense[] = [
	{ id: 1, title: '食費', amount: 1000 },
	{ id: 2, title: '交通費', amount: 200 },
	{ id: 3, title: '交際費', amount: 300 },
];

export const expensesRoute = new Hono()
	.get('/', c => {
		return c.json({ expenses: fakeExpenses });
	})
	.post('/', zValidator('json', createPostSchema), async c => {
		const data = await c.req.valid('json');
		console.log(data);
		fakeExpenses.push({ ...data, id: fakeExpenses.length + 1 });
		return c.json(data);
	})
	.get('/:id{[0-9]+}', c => {
		const id = Number.parseInt(c.req.param('id'));
		const expense = fakeExpenses.find(e => e.id === Number(id));
		if (!expense) {
      return c.notFound()
    };
		return c.json({ expense });
	})
  .delete('/:id{[0-9]+}', c => {
    const id = Number.parseInt(c.req.param('id'));
		const expense = fakeExpenses.findIndex(e => e.id === Number(id));
		if (expense == -1) {
      return c.notFound()
    };
    const deletedExpense = fakeExpenses.splice(expense, 1)[0];
		return c.json({expense: deletedExpense});
  })
