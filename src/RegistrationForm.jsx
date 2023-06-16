import { useEffect, useRef, useState } from 'react';

const RegistrationForm = ({ observer }) => {
	const ref = useRef(null);
	const formRef = useRef(null);
	const submitButton = useRef(null);
	const [formCounter, setFormCounter] = useState(
		parseInt(localStorage.getItem('formCounter')) | 0
	);
	useEffect(() => {
		localStorage.setItem('formCounter', formCounter);
		if (formCounter > 400) {
			alert('Mało miejsc!');
			const registrationForm = formRef.current;
			registrationForm.reset();
			if (formCounter === 500) {
				const submitButton = document.getElementById('submit');
				submitButton.disabled = true;
			}
		}
	}, [formCounter]);
	useEffect(() => {
		observer.observe(ref.current);
	}, []);

	const submitHandler = (event) => {
		event.preventDefault();
		const registrationForm = event.target;
		if (formCounter >= 500) {
			alert('Brak miejsc!');
			return;
		}
		const name = formRef.current.querySelector('input[name="name"]').value;
		const surname = formRef.current.querySelector(
			'input[name="surname"]'
		).value;
		const age = formRef.current.querySelector('input[name="age"]').value;
		const phone = formRef.current.querySelector(
			'input[name="phone"]'
		).value;
		const email = formRef.current.querySelector(
			'input[name="email"]'
		).value;
		const data = {
			name: name,
			surname: surname,
			age: age,
			phone: phone,
			email: email,
		};
		if (localStorage.getItem('Letnia')) {
			let exData = JSON.parse(localStorage.getItem('Letnia'));
			exData.push(data);
			localStorage.setItem('Letnia', JSON.stringify(exData));
		} else {
			localStorage.setItem('Letnia', JSON.stringify([data]));
		}

		setFormCounter(formCounter + 1);
		registrationForm.reset();
	};
	return (
		<>
			<div className='formularz'>
				<section ref={ref} id='formularz'>
					<br />
					<br />
					<br />
					<h2>ZAREJESTRUJ SIĘ JUŻ TERAZ!</h2>
					<br />

					<form
						id='registration-form'
						ref={formRef}
						onSubmit={submitHandler}
					>
						<label htmlFor='name'>Imię:</label>
						<input
							type='text'
							id='name'
							name='name'
							required
						></input>

						<label htmlFor='surname'>Nazwisko:</label>
						<input
							type='text'
							id='surname'
							name='surname'
							required
						></input>

						<label htmlFor='age'>Wiek:</label>
						<input
							type='number'
							id='age'
							name='age'
							min='0'
							max='99'
							required
						></input>

						<label htmlFor='phone'>Nr telefonu:</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							required
						></input>

						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							id='email'
							name='email'
							required
						></input>

						<button
							id='submit'
							className='btn btn-primary'
							type='submit'
							ref={submitButton}
							style={{ fontWeight: 400, fontSize: 'large' }}
						>
							Wyślij zgłoszenie
						</button>
					</form>
				</section>
			</div>

			<div
				id='form-counter'
				style={{ fontWeight: 400, fontSize: 'larger' }}
			>
				Zajęte miejsca: <span id='counter'>{formCounter}</span>/500
			</div>
		</>
	);
};
export default RegistrationForm;
