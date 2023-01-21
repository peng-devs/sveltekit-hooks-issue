import { redirect, type Handle } from '@sveltejs/kit';

const handle: Handle = async ({ event, resolve }) => {
	if (event.route.id === '/login') {
		return resolve(event);
	}

	const token = event.cookies.get('auth');
	if (!token) {
		console.log('cookies expired');
		throw redirect(303, '/login');
	}

	if (token_is_expired(token)) {
		console.log('token expired');
		event.cookies.delete('auth'); // doesn't work
		event.cookies.set('auth', '', { maxAge: 0 }); // doesn't work either
		throw redirect(303, '/login');
	}

	return resolve(event);
};

export { handle };

function token_is_expired(token: string) {
	return true;
}
