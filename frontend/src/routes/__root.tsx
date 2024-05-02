import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const Root = () => {
	return (
		<>
			<NavBar />
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
};

const NavBar = () => {
	return (
		<>
			<div className='p-2 flex gap-2'>
				<Link to='/' className='[&.active]:font-bold'>
					Home
				</Link>{' '}
				<Link to='/about' className='[&.active]:font-bold'>
					About
				</Link>
			</div>
		</>
	);
};

export const Route = createRootRoute({
	component: Root,
});
