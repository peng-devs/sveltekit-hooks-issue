import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {
	return {
		is_logged_in: !!cookies.get('auth')
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies }) => {
		cookies.set('auth', 'expired-token', {
			secure: true,
			httpOnly: true,
			sameSite: 'strict'
		});
		throw redirect(303, '/');
	}
};
