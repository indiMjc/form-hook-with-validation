import { useState, useEffect } from 'react';

function useFormValidation(initialState, validate) {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setSubmitting] = useState(false);

	useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				console.log('authenticated!', values.email, values.password);
				setSubmitting(false);
			} else {
				setSubmitting(false);
			}
		}
	}, [errors]);

	function handleChange(event) {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setSubmitting(true);
	}

	return {
		handleSubmit,
		handleChange,
		values,
		errors,
		isSubmitting
	};
}

export default useFormValidation;
