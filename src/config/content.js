// ---------------------------------------------------------------------------
// Content you fill in over time. Empty values hide their section, so nothing
// half-finished shows on the live site.
// ---------------------------------------------------------------------------
export default {
	// Your portrait. Put the image in public/assets/images/about/ and write its path
	// from there, e.g. 'assets/images/about/me.jpg'. Leave '' to hide it.
	photo: '',

	// Intro video, one per interface language (English = for foreigners, Portuguese = for Brazilians).
	// Accepts a YouTube link, a Vimeo link, or an .mp4 file path (e.g. 'assets/video/intro-pt.mp4').
	// Leave '' to hide it.
	video: { en: '', pt: '' },

	// One or two sentences shown in the "Meet your tutor" strip under the home page hero.
	// While empty, a placeholder sentence and a grey silhouette are shown so you can see the layout.
	intro: { en: '', pt: '' },

	// Your bio: a list of short paragraphs per language. Leave [] to hide it.
	bio: {
		en: [],
		pt: [],
	},

	// Student testimonials. Each one is shown only to visitors using the same language as `lang`.
	// {
	//   lang: 'pt',                       // 'pt' (Brazilian students) or 'en' (foreign students)
	//   name: 'Mariana',
	//   detail: 'Preparing for job interviews',
	//   quote: 'Text of the testimonial.',
	//   image: 'assets/images/testimonials/mariana.jpg',   // optional: photo or WhatsApp screenshot
	// }
	testimonials: [],
};
