import { FormLayout } from '../layout';

import './ForgotPasswordForm.css';

export const ForgotPasswordForm = () => {
	return (
		<FormLayout
			header='Forgotten password'
			info='Enter your email and we will send you a reset link.'
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