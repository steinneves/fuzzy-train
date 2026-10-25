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
			{ title: 'How it works', titlePt: 'Como funciona', slug: `${base}/#how-it-works` },
			{ title: 'About', titlePt: 'Sobre', slug: `${base}/about/` },
			{ title: 'FAQ', titlePt: 'Dúvidas', slug: `${base}/faq/` },
			{ title: 'Level check', titlePt: 'Teste de nível', slug: `${base}/level-check/` },
			{ title: 'Contact', titlePt: 'Contato', slug: '#contact' },
		],
	},
];
