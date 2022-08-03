import { rest } from 'msw';
import { GetUserDTO } from '../types/UserDTO';
import { AuthServicePaths } from './index';

export const authHandlers = [
	rest.get(AuthServicePaths.user, (_req, res, ctx) => {
		return res(
			ctx.json<GetUserDTO>({
				id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
				name: 'John Doe',
				email: 'mail@doe.com',
				accessToken:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
			})
		);
	}),
];
