import FormLayout from '../layout';

import './ForgotPasswordForm.css';

export default function ForgotPasswordForm() {
	return (
		<FormLayout
			header='Forgotten password'
		>
			<form>
				<input
						type="email"
						placeholder="Email"
				/>
				<button type="submit" className="submit-btn">Send</button>
			</form>
		</FormLayout>
	)
}