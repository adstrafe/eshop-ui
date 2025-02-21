import { ReactNode } from 'react';

import './layout.css';

interface AuthLayoutProps {
	children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className='auth-layout'>
			{children}
		</div>
	);
}