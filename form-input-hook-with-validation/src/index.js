import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import useFormValidation from './useFormValidation';
import validateAuth from './validateAuth';

const initialState = {
	email: '',
	password: ''
};

function Register() {
	const {
		handleSubmit,
		handleChange,
		values,
		errors,
		isSubmitting
	} = useFormValidation(initialState, validateAuth);

	return (
		<div className='container'>
			<h1>Register Here</h1>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					// onBlur={handleBlur}
					name='email'
					value={values.email}
					className={errors.email && 'error-input'}
					autoComplete='off'
					placeholder='Your email address'
				/>
				{errors.email && <p className='error-text'>{errors.email}</p>}
				<input
					onChange={handleChange}
					value={values.password}
					className={errors.password && 'error-input'}
					name='password'
					type='password'
					placeholder='Choose a safe password'
				/>
				{errors.password && <p className='error-text'>{errors.password}</p>}
				<div>
					<button disabled={isSubmitting} type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Register />, rootElement);
