// Level-check questions. Key = interface language:
//   pt -> Brazilian students taking an ENGLISH check (UI in Portuguese)
//   en -> foreign students taking a PORTUGUESE check (UI in English)
// "answer" is the index of the correct option. Level cut-offs are the "max" score of each level.
export default {
 "pt": {
  "ui": {
   "question": "Pergunta {i} de {n}",
   "score": "Você acertou {s} de {n}",
   "title": "Seu nível estimado",
   "note": "É uma estimativa rápida, não uma certificação. Na aula experimental avaliamos seu nível com mais detalhe.",
   "cta": "Agendar aula experimental",
   "retake": "Refazer o teste",
   "msg": "Tenho interesse em agendar uma aula experimental. No teste de nível, meu resultado estimado foi {code} ({name})."
  },
  "levels": [
   {
    "max": 1,
    "code": "A1",
    "name": "Iniciante",
    "desc": "Você está começando. Vamos construir uma base sólida."
   },
   {
    "max": 3,
    "code": "A2",
    "name": "Básico",
    "desc": "Você entende o essencial. Vamos ganhar confiança para conversar."
   },
   {
    "max": 5,
    "code": "B1",
    "name": "Intermediário",
    "desc": "Você já se vira. Vamos ampliar vocabulário e fluência."
   },
   {
    "max": 7,
    "code": "B2",
    "name": "Intermediário avançado",
    "desc": "Você tem uma boa base. Vamos refinar precisão e naturalidade."
   },
   {
    "max": 8,
    "code": "C1",
    "name": "Avançado",
    "desc": "Seu nível é alto. Vamos polir detalhes e situações específicas."
   }
  ],
  "questions": [
   {
    "q": "She ___ a teacher.",
    "options": [
     "are",
     "is",
     "am",
     "be"
    ],
    "answer": 1
   },
   {
    "q": "I ___ coffee every morning.",
    "options": [
     "drinks",
     "am drink",
     "drink",
     "drinking"
    ],
    "answer": 2
   },
   {
    "q": "Yesterday we ___ to the beach.",
    "options": [
     "went",
     "go",
     "goes",
     "gone"
    ],
    "answer": 0
   },
   {
    "q": "I have lived here ___ 2019.",
    "options": [
     "for",
     "since",
     "from",
     "during"
    ],
    "answer": 1
   },
   {
    "q": "If it rains tomorrow, we ___ at home.",
    "options": [
     "stayed",
     "would stay",
     "staying",
     "will stay"
    ],
    "answer": 3
   },
   {
    "q": "He asked me where ___.",
    "options": [
     "was I going",
     "I was going",
     "am I going",
     "I am go"
    ],
    "answer": 1
   },
   {
    "q": "By next year, she ___ here for ten years.",
    "options": [
     "works",
     "has worked",
     "will have worked",
     "is working"
    ],
    "answer": 2
   },
   {
    "q": "Had I known, I ___ differently.",
    "options": [
     "would act",
     "would have acted",
     "will act",
     "acted"
    ],
    "answer": 1
   }
  ]
 },
 "en": {
  "ui": {
   "question": "Question {i} of {n}",
   "score": "You got {s} of {n} right",
   "title": "Your estimated level",
   "note": "This is a quick estimate, not a certification. In the trial lesson we assess your level in more detail.",
   "cta": "Book a trial lesson",
   "retake": "Retake the check",
   "msg": "I'm interested in booking a trial lesson. My estimated level from the level check is {code} ({name})."
  },
  "levels": [
   {
    "max": 1,
    "code": "A1",
    "name": "Beginner",
    "desc": "You are just starting. We will build a solid foundation."
   },
   {
    "max": 3,
    "code": "A2",
    "name": "Elementary",
    "desc": "You understand the basics. We will build confidence to hold conversations."
   },
   {
    "max": 5,
    "code": "B1",
    "name": "Intermediate",
    "desc": "You can get by. We will widen vocabulary and fluency."
   },
   {
    "max": 7,
    "code": "B2",
    "name": "Upper-intermediate",
    "desc": "You have a strong base. We will refine accuracy and natural expression."
   },
   {
    "max": 8,
    "code": "C1",
    "name": "Advanced",
    "desc": "Your level is high. We will polish details and specific situations."
   }
  ],
  "questions": [
   {
    "q": "Eu ___ americano.",
    "options": [
     "estou",
     "tenho",
     "vou",
     "sou"
    ],
    "answer": 3
   },
   {
    "q": "Ela ___ café todas as manhãs.",
    "options": [
     "bebo",
     "beber",
     "bebe",
     "bebem"
    ],
    "answer": 2
   },
   {
    "q": "Ontem nós ___ à praia.",
    "options": [
     "fomos",
     "vamos",
     "ir",
     "iremos"
    ],
    "answer": 0
   },
   {
    "q": "Eu moro aqui ___ 2019.",
    "options": [
     "por",
     "de",
     "desde",
     "a"
    ],
    "answer": 2
   },
   {
    "q": "Espero que ele ___ a tempo.",
    "options": [
     "chega",
     "chegue",
     "chegará",
     "chegou"
    ],
    "answer": 1
   },
   {
    "q": "É importante nós ___ cedo.",
    "options": [
     "chegar",
     "chegando",
     "chegamos",
     "chegarmos"
    ],
    "answer": 3
   },
   {
    "q": "Se eu ___ mais tempo, viajaria mais.",
    "options": [
     "tenho",
     "tivesse",
     "tiver",
     "teria"
    ],
    "answer": 1
   },
   {
    "q": "Se tivéssemos chegado antes, ___ o início do filme.",
    "options": [
     "veríamos",
     "vimos",
     "teríamos visto",
     "veremos"
    ],
    "answer": 2
   }
  ]
 }
};
