const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const nav = [
	{ title: 'Packages', slug: `${base}/#packages` },
	{ title: 'How it works', slug: `${base}/#how-it-works` },
	{ title: 'Contact', slug: `${base}/#contact` },
];
