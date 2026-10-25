const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const nav = [
	{ title: 'Packages', titlePt: 'Pacotes', slug: `${base}/#packages` },
	{ title: 'About', titlePt: 'Sobre', slug: `${base}/about/` },
	{ title: 'FAQ', titlePt: 'Dúvidas', slug: `${base}/faq/` },
	{ title: 'Level check', titlePt: 'Teste de nível', slug: `${base}/level-check/` },
];
