import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='flex flex-col'>
				<button className='bg-red-500' onClick={() => setCount(count => count + 1)}>Up</button>
				<button className='bg-blue-400' onClick={() => setCount(count => count - 1)}>Down</button>
				<p className='text-3xl'>{count} </p>
			</div>
		</>
	);
}

export default App;
