import settings from './settings.js';

// WhatsApp links. English interface = Portuguese lessons; Portuguese interface = English lessons.
export const wa = (msg) => `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(msg)}`;
export const waEn = wa("Hi! I'd like to book a trial Portuguese lesson.");
export const waPt = wa('Olá! Gostaria de agendar uma aula experimental de inglês.');
