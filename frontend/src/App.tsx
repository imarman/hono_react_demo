import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='flex flex-col bg-background'>
				<button className='text-foreground' onClick={() => setCount(count => count + 1)}>Up</button>
				<button className='bg-secondary' onClick={() => setCount(count => count - 1)}>Down</button>
				<p className='text-3xl'>{count} </p>
			</div>
		</>
	);
}

export default App;
