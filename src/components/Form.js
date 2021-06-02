import React, { useState } from 'react';
import Error from '../Error';

const Form = ({ setFind }) => {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		e.preventDefault();

		if (query.trim() === '') {
			setError(true);
			return;
		}
		setError(false);
		setFind(query);
	};
	return (
		<form onSubmit={handleChange}>
			<div className="row">
				<div className="from-group col-md-8">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Busca una imagen, ej: Montaña, Barco..."
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>

				<div className="from-group col-md-4">
					<input type="submit" className="btn bn-lg btn-danger btn-block" value="Buscar" />
				</div>
			</div>
			{error ? <Error message="Ingrese una palabra correcta" /> : null}
		</form>
	);
};

export default Form;
