const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const nav = [
	{ title: 'Packages', titlePt: 'Pacotes', slug: `${base}/#packages` },
	{ title: 'About', titlePt: 'Sobre', slug: `${base}/#about` },
	{ title: 'How it works', titlePt: 'Como funciona', slug: `${base}/#how-it-works` },
	{ title: 'Contact', titlePt: 'Contato', slug: `${base}/#contact` },
];
