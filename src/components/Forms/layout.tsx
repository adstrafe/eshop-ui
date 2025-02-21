import React from 'react';
import Image from 'next/image';

import './layout.css';

interface FormLayoutProps {
	children: React.ReactNode;
	header: string;
	info?: string;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ children, header, info }) => {
	return (
		<div className="login-container">
			<div className="login-card">
				<div className="login-card-left">
					<div className="login-form-container">
						<h1 className="login-header">{header}</h1>
						{info ??
							<span>
								{info}
							</span>
						}
						{children}
					</div>
				</div>
				<div className="login-card-right">
					<Image
						src={"/floating-cogs.svg"}
						alt="Card image"
						width={250}
						height={250}
						className="card-image"
					/>
				</div>
			</div>
		</div>
	)
}
