import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {
	const [find, setFind] = useState('');

	useEffect(() => {
		const getApi = async () => {
			if (find.length === 0) return;

			const apiKey = '9159736-11b78348c31e7ac7313e8adb7';
			const perPage = 20;
			const url = `https://pixabay.com/api/?key=${apiKey}&q=${find}&image_type=photo&per_page=${perPage}`;

			const data = await fetch(url);
			const result = await data.json();

			console.log(result.hits);
		};
		getApi();
	}, [find]);

	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de Imágenes</p>
				<Form setFind={setFind} />
			</div>
		</div>
	);
}

export default App;
