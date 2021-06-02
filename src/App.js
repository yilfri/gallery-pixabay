import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ListImages from './components/ListImages';

function App() {
	const [find, setFind] = useState('');
	const [images, setImages] = useState([]);
	const [actualPage, setActualPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		const getApi = async () => {
			if (find.length === 0) return;

			const apiKey = '9159736-11b78348c31e7ac7313e8adb7';
			const perPage = 20;
			const url = `https://pixabay.com/api/?key=${apiKey}&q=${find}&image_type=photo&per_page=${perPage}&page=${actualPage}`;

			const data = await fetch(url);
			const result = await data.json();

			setTotalPages(Math.ceil(result.totalHits / perPage));
			setImages(result.hits);

			const jumbotron = document.querySelector('.jumbotron');
			jumbotron.scrollIntoView({ behavior: 'smooth' });
		};
		getApi();
	}, [find, actualPage]);

	const previusPage = () => {
		const newActualPage = actualPage - 1;

		if (newActualPage === 0) return;

		setActualPage(newActualPage);
	};

	const nextPage = () => {
		const newActualPage = actualPage + 1;

		if (newActualPage > totalPages) return;

		setActualPage(newActualPage);
	};

	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de Imágenes</p>
				<Form setFind={setFind} />
			</div>
			<div className="row justify-content-center">
				<ListImages images={images} />

				{actualPage === 1 ? null : (
					<button type="button" className="bbtn btn-info mr-1 " onClick={previusPage}>
						&laquo; Anterior
					</button>
				)}

				{actualPage === totalPages ? null : (
					<button type="button" className="bbtn btn-info " onClick={nextPage}>
						Siguiente &raquo;
					</button>
				)}
			</div>
		</div>
	);
}

export default App;
