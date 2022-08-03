import { GetUserDTO } from '../types/UserDTO';
import { NextRouter } from 'next/router';

export const AuthServicePaths = {
	login: '/api/auth/login',
	user: '/api/auth/user',
};

export const AuthService = {
	login: async (email: string, password: string): Promise<GetUserDTO> => {
		const response = await fetch(AuthServicePaths.login, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const data: GetUserDTO = await response.json();

		localStorage.setItem('token', data.accessToken);

		return data;
	},
	getLoggedUser: async (): Promise<GetUserDTO> => {
		const response = await fetch(AuthServicePaths.user, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		if (!response.ok) {
			localStorage.removeItem('token');
			throw new Error(response.statusText);
		}
		const data: GetUserDTO = await response.json();

		localStorage.setItem('token', data.accessToken);

		return data;
	},
	logout: async (router: NextRouter): Promise<void> => {
		localStorage.removeItem('token');

		await router.replace('/login');
		router.reload();
	},
};
