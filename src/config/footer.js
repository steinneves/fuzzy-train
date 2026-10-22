import settings from './settings.js';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const footerSocials = [
	{
		name: 'WhatsApp',
		url: `https://wa.me/${settings.whatsapp}`,
		icon: 'mdi:whatsapp',
	},
	{
		name: 'Email',
		url: `mailto:${settings.email}`,
		icon: 'mdi:email-outline',
	},
];

export const footerLists = [
	{
		title: 'Explore',
		items: [
			{ title: 'Packages', slug: `${base}/#packages` },
			{ title: 'How it works', slug: `${base}/#how-it-works` },
			{ title: 'Contact', slug: `${base}/#contact` },
		],
	},
];
