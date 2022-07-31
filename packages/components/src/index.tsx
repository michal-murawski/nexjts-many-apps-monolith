import React, { ButtonHTMLAttributes, FC } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children }) => {
	return <button className="flex bg-amber-400 p-3 rounded-2xl">{children}</button>;
};
