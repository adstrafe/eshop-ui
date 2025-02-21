import Link from 'next/link';

import FormLayout from '../layout';

import "./SignInForm.css";

export default function SignInForm() {
	return (
		<FormLayout header='Sign in'>
			<form>
				<input
					type="email"
					placeholder="Email"
				/>
				<input
					type="password"
					placeholder="******"
				/>
				<button
					type="submit"
					className="submit-btn"
				>
					Sign in
				</button>
			</form>
			<Link
				href={{
					pathname: '/forgotten-password'
				}}
				className="forgot-password"
			>
				Forgot your password?
			</Link>
		</FormLayout>
	);
};