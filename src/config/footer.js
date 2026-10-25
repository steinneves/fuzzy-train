import settings from './settings.js';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const footerSocials = [
	{
		name: 'WhatsApp',
		url: `https://wa.me/${settings.whatsapp}`,
		icon: 'mdi:whatsapp',
	},
];

export const footerLists = [
	{
		title: 'Explore',
		titlePt: 'Explorar',
		items: [
			{ title: 'Packages', titlePt: 'Pacotes', slug: `${base}/#packages` },
			{ title: 'About', titlePt: 'Sobre', slug: `${base}/#about` },
			{ title: 'How it works', titlePt: 'Como funciona', slug: `${base}/#how-it-works` },
			{ title: 'Contact', titlePt: 'Contato', slug: `${base}/#contact` },
		],
	},
];
