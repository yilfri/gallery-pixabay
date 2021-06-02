import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ListImages from './components/ListImages';

function App() {
	const [find, setFind] = useState('');
	const [images, setImages] = useState([]);

	useEffect(() => {
		const getApi = async () => {
			if (find.length === 0) return;

			const apiKey = '9159736-11b78348c31e7ac7313e8adb7';
			const perPage = 20;
			const url = `https://pixabay.com/api/?key=${apiKey}&q=${find}&image_type=photo&per_page=${perPage}`;

			const data = await fetch(url);
			const result = await data.json();

			setImages(result.hits);
		};
		getApi();
	}, [find]);

	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de Imágenes</p>
				<Form setFind={setFind} />
			</div>
			<div className="row justify-content-center">
				<ListImages images={images} />
			</div>
		</div>
	);
}

export default App;
