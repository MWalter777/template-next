// middleware.ts
import { NextResponse } from 'next/server';

// example how could you use this in your app
const routesAndPermissions = [
	{ route: '/dashboard-analytics', permission: 'USERS_UPDATE' },
	{ route: '/dashboard', permission: 'USERS_READ' },
];

const getCookies = (request, name = 'permissions') => {
	const cookieHeader = request.headers.get('cookie');
	if (!cookieHeader) return ['USERS_READ', 'USERS_WRITE'];
	const cookies = cookieHeader.split(';').map((cookie) => cookie.split('='));
	return Object.fromEntries(cookies)[name] || ['USERS_READ', 'USERS_WRITE'];
};

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
	console.log('inside the middleware');
	// undefined or { route: '/dashboard-analytics', permission: 'USERS_READ' }
	const needAuth = routesAndPermissions.find((r) =>
		request.nextUrl.pathname.startsWith(r.route)
	);
	if (needAuth) {
		const permissions = getCookies(request);
		if (permissions.includes(needAuth.permission)) {
			console.log('you have access to this url');
			return NextResponse.next();
		}
		console.log('you do not have access to this url');
		return NextResponse.redirect(
			new URL('/auth/login?access-denied', request.url)
		);
	}
	// this is just other example, please delete before implementing your own
	if (request.nextUrl.pathname.startsWith('/test-url-not-auth')) {
		console.log('here is an example when you do not have access to this url');
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}
	// and if there is no url match, then you just return next()
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - auth (your login, register, logout and so on)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|auth|_next/static|_next/image|favicon.ico).*)',
	],
};
