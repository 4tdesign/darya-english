// All site copy lives here, in two languages.
// To change a text on the site, edit it in both `en` and `ru` below.

export type Lang = "en" | "ru"

export const LINKS = {
  telegram: "https://t.me/DariaCannizzaro",
  channel: "https://t.me/englishwithDariaC",
  vk: "https://vk.ru/english_s_dariacannizzaro",
  instagram: "https://instagram.com/dariacannizzaro",
  clubHashtag: "https://vk.ru/feed?section=search&q=%23%D0%9A%D1%80%D1%83%D0%B6%D0%BA%D0%B0_%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE",
}

type Review = { name: string; context: string; text: string }
type Course = {
  id: string
  title: string
  desc: string
  level: string
  duration: string
  href: string
  cta: string
  note?: string
}

const en = {
  meta: {
    title: "English with Daria - English lessons with Daria Cannizzaro",
  },
  nav: {
    about: "About",
    club: "Club",
    courses: "Courses",
    reviews: "Reviews",
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langLabel: "Site language",
  },
  cta: "Book a lesson",
  hero: {
    kicker: "Online lessons and in-person classes in Perm",
    lines: ["Discover the world", "of English", "with Daria"],
    sub: "Personal approach, live lessons and a proven method. From zero to confident fluency - together.",
    secondary: "Courses",
    note: "British English,\nPerm & online",
    score: "98",
    scoreLabel: "exam score",
    photoAlt: "Daria Cannizzaro, English teacher",
  },
  stats: {
    title: ["One word.", "One step."],
    text: "Every journey to fluency starts here. Online or in Perm - wherever you are.",
    items: [
      { n: 15, suffix: "+", label: "years of teaching" },
      { n: 1300, suffix: "+", label: "students" },
      { n: 98, suffix: "", label: "exam score" },
    ],
    book: "Book a lesson",
  },
  club: {
    hashtag: "#Кружка_Английского",
    title: "A Cup of English",
    titleNote: "a club, not a course",
    intro: [
      "I'd been thinking for a long time about a special space for practising English - for people who studied it once and feel it slipping away fast. I've been there myself: with a high level, I went just one year without using the language and realised I'd forgotten half of it!",
      "This space is for people who don't have the time or the need for language courses. Whether you work, are on maternity leave, at university or in high school - if you want to raise your level of English, this is for you.",
    ],
    photoAlt: "Daria with a cup of coffee",
    photoNote: "the cup itself",
    weekTitle: "How a week works",
    weekIntro: "One week, one new topic. Three mornings a week I send you a short task.",
    week: [
      {
        day: "Monday",
        title: "Words",
        text: "A new word set in the free Quizlet app. You write your own sentences with the new words - in the chat, like a text message.",
      },
      {
        day: "Wednesday",
        title: "Video or audio",
        text: "A carefully chosen video (or audio) on the week's topic. You watch it and answer the questions in voice messages.",
      },
      {
        day: "Friday",
        title: "Free speaking",
        text: "Questions on the week's topic - you answer in voice messages and can add anything of your own.",
      },
    ],
    weekOutro:
      "Each task leads to the next, so new words and phrases stick more easily - and you gain confidence in using them. That's how we train the essentials: understanding by ear and putting your thoughts into English.",
    rulesTitle: "Simple rules",
    rules: [
      "Two days for each task - ideally before the next one arrives.",
      "A task takes no more than 15-20 minutes. A little longer at first, then you'll get into the flow.",
      "Hand it in in the group chat - as a text or a voice message, I'll tell you which.",
      "Get my feedback: I'll correct your pronunciation and suggest how to say it better in English.",
    ],
    rulesNote:
      "There are no strict deadlines and no “missed it - you're out”. You can go at your own pace, but following the system is how you feel progress: members notice the first results after just 2-3 weeks.",
    forWhomTitle: "Who it's for",
    forWhom: [
      {
        title: "Beginners",
        text: "If you studied English once and have some foundation.",
      },
      {
        title: "Continuing learners",
        text: "If you have a decent vocabulary and want to keep the language alive and keep growing.",
      },
      {
        title: "Anyone in it for the journey",
        text: "If you know a language can't be bought in a shop: learning it is a process - long, exciting and rewarding.",
      },
    ],
    gainsTitle: "What you get",
    gains: [
      {
        title: "Your vocabulary grows",
        text: "And it moves from passive (I know what the word means) to active (I can use it when I speak).",
      },
      {
        title: "The fear of speaking fades",
        text: "The first voice messages aren't easy for everyone, but soon our Buddies - that's what we call club members - are chatting away.",
      },
      {
        title: "Your listening improves",
        text: "What sounded like a fast blur of words turns into clear, familiar structures.",
      },
    ],
    notHereTitle: "What you won't find here",
    notHere: [
      {
        struck: "Boring grammar",
        text: "Or endless rules. Grammar isn't the goal for us - it's a way to get your thought across. If I see something needs explaining, I'll explain it.",
      },
      {
        struck: "Bad marks",
        text: "My job is to motivate and support you. Everyone is at their own level and gives what they can for now - and that already deserves praise. From there, it's all growth.",
      },
    ],
    topicsTitle: "What we talk about",
    topics: [
      "Travel: places worth visiting and why",
      "Interesting facts about different countries",
      "Signature dishes - and even recipes",
      "Unusual English phrases and how to use them",
      "Films and books",
      "Songs",
    ],
    topicsMore: "and much more",
    motto: [
      "A Cup of English isn't a club about English - it's about all kinds of interests and topics, in English. You'll see that learning a language can be easy and fun with ",
      "just 15 minutes a day",
      ".",
    ],
    priceTitle: "Membership",
    plans: [
      { name: "Trial week", price: "1,000 ₽", per: "", note: "Try the format first", old: "" },
      { name: "Monthly", price: "4,000 ₽", per: "per month", note: "Pay month by month", old: "" },
      { name: "3 months", price: "10,000 ₽", per: "for 3 months", note: "You save 2,000 ₽", old: "12,000 ₽" },
    ],
    bestNote: "best value!",
    priceNote: "You can join our friendly club any Monday - just pay for your membership in advance.",
    join: "Apply on Telegram",
    joinVk: "Message on VK",
  },
  about: {
    title: "About the teacher",
    name: "Daria Cannizzaro",
    city: "Perm, Russia · online worldwide",
    p1: "Master's degree in Pedagogy. Over 15 years of teaching experience. Trained at Oxford Brookes University (UK) and Norwich Free Academy (USA). Former lecturer at top universities of the Perm region.",
    p2: "Currently teaching at HSE Lyceum Perm (5 years). My lessons are practical, clear and genuinely engaging - whether online or in person.",
    creds: [
      { title: "Oxford Brookes University", text: "Oxford, UK" },
      { title: "Norwich Free Academy", text: "Connecticut, USA" },
      { title: "Master's in Pedagogy", text: "15+ years of teaching" },
      { title: "HSE Lyceum, Perm", text: "Teaching for 5 years" },
    ],
  },
  courses: {
    title: "Formats & programmes",
    sub: "Five ways to start learning - choose what fits your goals and schedule.",
    levelLabel: "Level",
    items: [
      {
        id: "club",
        title: "A Cup of English",
        desc: "An online practice club for teens and adults: three short tasks a week and my feedback on every one. Just 15-20 minutes per task.",
        level: "A1-B2",
        duration: "3 tasks a week",
        href: "#club",
        cta: "About the club",
        note: "new",
      },
      {
        id: "exams",
        title: "OGE & EGE preparation",
        desc: "Exam prep in mini-groups, offline or online, 60 or 80 minutes. Structured, systematic and results-focused.",
        level: "B1-C1",
        duration: "60 / 80 min",
        href: "#contact",
        cta: "Enrol",
      },
      {
        id: "consult",
        title: "Individual exam consultations",
        desc: "One-on-one sessions on the hardest tasks in the OGE and EGE. We find your weak points and fix them fast.",
        level: "B1-C1",
        duration: "On request",
        href: "#contact",
        cta: "Enrol",
      },
      {
        id: "speaking",
        title: "Speaking & oral exam practice",
        desc: "Build fluency and get ready for the oral part of your exams. Format: a private chat with expert tasks, feedback and recommendations.",
        level: "A2-C1",
        duration: "Ongoing",
        href: "#contact",
        cta: "Enrol",
      },
      {
        id: "grammar",
        title: "Grammar for OGE & EGE",
        desc: "An online video course with everything you need for top exam scores. Study at your own pace with clear explanations and practice.",
        level: "A2-B2",
        duration: "Self-paced",
        href: "#contact",
        cta: "Enrol",
      },
    ] as Course[],
  },
  quote: {
    text: "The limits of my language mean the limits of my world.",
    note: "Tractatus, 1922",
    author: "Ludwig Wittgenstein",
  },
  reviews: {
    title: "What my students say",
    showAll: (n: number) => `Show all ${n} reviews`,
    collapse: "Show fewer",
    items: [
      {
        name: "Evgeny Rubtsov",
        context: "Cambridge FCE exam",
        text: "I studied conversational English with Daria Anatolyevna to prepare for the Cambridge FCE. In just one month I truly learned a lot. She helped me develop the skill of speaking on the spot. I passed at B2 - and honestly, without Daria Anatolyevna I'm not sure I would have reached even B1.",
      },
      {
        name: "Max Chubarov",
        context: "VK review",
        text: "Daria Anatolyevna is the best English teacher who has ever taught me. I appreciate every lesson and would like everyone to choose her as their teacher. That's definitely the best way to learn English with fun!",
      },
      {
        name: "Zulfiya Akhmarova",
        context: "VK review",
        text: "For a long time I tried to learn English but could not succeed. It was after the lessons with Daria Anatolyevna that I felt I was moving forward. This excellent teacher always explains complex material in an accessible way. Study with Daria Anatolyevna if you want high results!",
      },
      {
        name: "Ekaterina Sevryugina",
        context: "VK review",
        text: "Please do not doubt Daria Anatolyevna's abilities. Her lessons are a real miracle! The teacher loves her job, knows a lot and is attentive to each student.",
      },
      {
        name: "Kristina Salamatova",
        context: "VK review",
        text: "I've studied English with many different teachers, but Daria Anatolyevna is literally the best of all. Every lesson is incredibly effective and engaging. Thank you for the variety of topics and the individual approach to every student!",
      },
      {
        name: "Anya Khrulyova",
        context: "VK review",
        text: "I've been learning English since childhood, but I've never encountered teaching like Daria Anatolyevna's. Every class is very interesting and effective. It's never boring with her.",
      },
      {
        name: "Margarita Dudyreva",
        context: "VK review",
        text: "I came to Daria Anatolyevna just a year ago, but I can already see that my language level has improved significantly. I enjoy every single lesson. Thank you so much for your work.",
      },
      {
        name: "Natalya Natalova",
        context: "VK review",
        text: "Daria Anatolyevna is a true professional. Clearly structured lessons allow you to master English quickly. She builds an individual plan for each student. A wonderful person and a very talented teacher!",
      },
      {
        name: "Elza Utochkina",
        context: "EGE preparation",
        text: "I want to sincerely thank Daria Anatolyevna for her work. Thanks to her I was able to improve my English significantly. All lessons were very interesting and the material was presented easily.",
      },
      {
        name: "Sasha Tsyganenko",
        context: "EGE preparation",
        text: "Lessons with Daria Anatolyevna took place in a very friendly atmosphere. Always clear and precise. She helped me understand the exam format, identify my weak points and fix my mistakes. I am extremely grateful to her!",
      },
      {
        name: "Maria Bryzgalova",
        context: "EGE preparation",
        text: "Daria Anatolyevna is a teacher with a capital T! I started preparing for the EGE from scratch in November. Our lessons were inspiring and motivating. I'm so lucky to have studied with her.",
      },
      {
        name: "Natalya Gavrilova",
        context: "VK review",
        text: "After the lessons, not only my grades improved but my understanding of the language too. Very noticeable progress from the start of our studies. Communication with Daria Anatolyevna happens in a very comfortable atmosphere. Huge thanks for your work!",
      },
      {
        name: "Eva R.",
        context: "OGE - 64 out of 68",
        text: "I passed the OGE with 64 out of 68 points! Every lesson was engaging and informative. Thanks to your explanations even the most complex topics became clear. Thank you for your patience, interesting approach and endless love for your subject!",
      },
      {
        name: "Arina R.",
        context: "OGE - top grade",
        text: "I want to say a huge thank you to Daria Anatolyevna. All lessons took place in a cosy and friendly atmosphere, and my knowledge grew with every class. I passed the OGE with the top grade! So happy I studied with Daria Anatolyevna.",
      },
      {
        name: "Ksenia Korepanova",
        context: "EGE + school",
        text: "Daria Anatolyevna was our English teacher at school. Her lessons were always interesting and creative. Thanks to them I was able to do well on the EGE and raise my overall English level. Thank you - it was informative and fun!",
      },
    ] as Review[],
  },
  contact: {
    title: "Shall we start learning together?",
    sub: "Message me in any way that suits you - we'll find a convenient schedule and the right programme.",
    items: [
      { kind: "telegram", label: "Telegram, personal", value: "@DariaCannizzaro", href: LINKS.telegram },
      { kind: "channel", label: "Telegram channel", value: "@englishwithDariaC", href: LINKS.channel },
      { kind: "vk", label: "VKontakte", value: "english_s_dariacannizzaro", href: LINKS.vk },
      { kind: "instagram", label: "Instagram", value: "@dariacannizzaro", href: LINKS.instagram },
    ],
    where: "Perm, Russia · online worldwide",
  },
  footer: {
    rights: "Daria Cannizzaro",
    top: "Back to top",
  },
  mobileCta: "Book a lesson",
}

export type Dict = typeof en

const ru: Dict = {
  meta: {
    title: "English with Daria - английский с Дарьей Канниццаро",
  },
  nav: {
    about: "О преподавателе",
    club: "Клуб",
    courses: "Курсы",
    reviews: "Отзывы",
    contact: "Контакты",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    langLabel: "Язык сайта",
  },
  cta: "Записаться на урок",
  hero: {
    kicker: "Онлайн-уроки и занятия очно в Перми",
    lines: ["Откройте мир", "английского", "с Дарьей"],
    sub: "Индивидуальный подход, живые уроки и проверенная методика. От нуля до уверенного владения - вместе.",
    secondary: "Курсы",
    note: "British English,\nПермь и онлайн",
    score: "98",
    scoreLabel: "баллов ЕГЭ",
    photoAlt: "Дарья Канниццаро, преподаватель английского",
  },
  stats: {
    title: ["Одно слово.", "Один шаг."],
    text: "Каждый путь к свободному английскому начинается здесь. Онлайн или очно в Перми.",
    items: [
      { n: 15, suffix: "+", label: "лет опыта" },
      { n: 1300, suffix: "+", label: "учеников" },
      { n: 98, suffix: "", label: "баллов ЕГЭ" },
    ],
    book: "Записаться на урок",
  },
  club: {
    hashtag: "#Кружка_Английского",
    title: "Кружка английского",
    titleNote: "клуб, а не курсы",
    intro: [
      "Я давно обдумывала создание особого пространства для практики и изучения английского. Для тех, кто когда-то изучал английский и чувствует, что язык забывается очень быстро. Я и сама это испытала: с высоким уровнем, но без практики всего год - и поняла, что и половины не помню!",
      "Это пространство для тех, у кого нет времени или необходимости посещать языковые курсы. Работаете ли вы, в декрете, студент или старшеклассник - если есть желание повышать свой уровень английского, это для вас.",
    ],
    photoAlt: "Дарья с чашкой кофе",
    photoNote: "та самая кружка",
    weekTitle: "Как устроена неделя",
    weekIntro: "Одна неделя - одна новая тема. Три раза в неделю, по утрам, я присылаю короткое задание.",
    week: [
      {
        day: "Понедельник",
        title: "Слова",
        text: "Новый набор слов в бесплатном приложении Quizlet. С новыми словами вы составляете свои предложения - письменно в чате, как смс.",
      },
      {
        day: "Среда",
        title: "Видео или аудио",
        text: "Тщательно отобранное видео (или аудио) по теме недели. Смотрите и отвечаете на вопросы голосовыми сообщениями.",
      },
      {
        day: "Пятница",
        title: "Свободное говорение",
        text: "Вопросы по теме недели - отвечаете голосовыми и можете добавить что-то от себя.",
      },
    ],
    weekOutro:
      "Одно задание ведёт к другому, поэтому легче усваиваются и новые слова, и выражения - и появляется уверенность в том, как их употреблять. Так мы отрабатываем главные навыки: понимать на слух и выражать свои мысли на английском.",
    rulesTitle: "Правила простые",
    rules: [
      "На каждое задание - два дня. Желательно успеть до выхода следующего.",
      "Одно задание занимает не более 15-20 минут. Первое время чуть больше, потом «вольётесь» в поток.",
      "Сдаёте задание в общем чате - текстом или голосовым, я подскажу, как нужно.",
      "Получаете обратную связь: поправлю произношение, подскажу, как сказать лучше по-английски.",
    ],
    rulesNote:
      "Жёстких сроков в духе «не сдал вовремя - дальше не идёшь» нет: можно заниматься в своём темпе и в удобное время. Но по системе прогресс заметнее - первые результаты участники ощущают уже через 2-3 недели.",
    forWhomTitle: "Кому подойдёт",
    forWhom: [
      {
        title: "Начинающим",
        text: "Тем, кто когда-то учил английский, и у кого есть определённая база.",
      },
      {
        title: "Продолжающим",
        text: "У кого неплохой словарный запас и есть желание не растерять язык, а поддерживать и развивать дальше.",
      },
      {
        title: "Тем, кто за процесс",
        text: "Кто понимает, что язык не купить в магазине: освоение языка - это процесс. Длительный и интересный, увлекательный и познавательный.",
      },
    ],
    gainsTitle: "Что даёт клуб",
    gains: [
      {
        title: "Растёт словарный запас",
        text: "Причём из пассивного (знаю, что значит слово) переходит в активный (умею использовать в речи).",
      },
      {
        title: "Уходит страх говорить",
        text: "Первые голосовые не всем даются легко, а дальше Бадди - так мы называем участников клуба - «болтают» всё шустрее.",
      },
      {
        title: "Улучшается понимание на слух",
        text: "То, что казалось слишком быстрым набором слов, выстраивается в понятные конструкции и воспринимается легче.",
      },
    ],
    notHereTitle: "Чего здесь точно не будет",
    notHere: [
      {
        struck: "Нудной грамматики",
        text: "И бесконечных правил. Для нас грамматика - не самоцель, а способ передачи мысли. Если увижу, что нужно что-то разъяснить, разъясню.",
      },
      {
        struck: "«Двоек»",
        text: "Моя задача - мотивировать и поддерживать. Каждый участник на своём уровне и выдаёт то, что пока может, и это уже заслуживает похвалы. Дальше - только движение и рост.",
      },
    ],
    topicsTitle: "О чём говорим в клубе",
    topics: [
      "Путешествия: какие места стоит посетить и почему",
      "Интересные факты о разных странах",
      "Фирменные блюда и даже рецепты",
      "Необычные фразы в английском и их употребление",
      "Фильмы и книги",
      "Песни",
    ],
    topicsMore: "и многое другое",
    motto: [
      "Кружка английского - клуб не про английский, а про разные интересы и темы на английском. Здесь вы увидите, что учить язык можно легко и с удовольствием, уделяя ему ",
      "всего 15 минут в день",
      ".",
    ],
    priceTitle: "Стоимость участия",
    plans: [
      { name: "Пробная неделя", price: "1 000 ₽", per: "", note: "Чтобы попробовать формат", old: "" },
      { name: "Месяц", price: "4 000 ₽", per: "в месяц", note: "Помесячная оплата", old: "" },
      { name: "3 месяца", price: "10 000 ₽", per: "за 3 месяца", note: "Выгода 2 000 ₽", old: "12 000 ₽" },
    ],
    bestNote: "выгоднее!",
    priceNote: "Присоединиться к нашему тёплому клубу можно с любого понедельника, заранее оплатив участие.",
    join: "Подать заявку в Telegram",
    joinVk: "Написать во ВКонтакте",
  },
  about: {
    title: "О преподавателе",
    name: "Дарья Канниццаро",
    city: "Пермь · онлайн по всему миру",
    p1: "Магистр педагогики. Более 15 лет преподавательского опыта. Учёба и стажировки в Оксфорде (Oxford Brookes University) и США (Norwich Free Academy). Преподавала в ведущих вузах Пермского края.",
    p2: "Сейчас - 5 лет в Лицее НИУ ВШЭ в Перми. Уроки живые, понятные и по-настоящему интересные - онлайн или очно.",
    creds: [
      { title: "Oxford Brookes University", text: "Оксфорд, Великобритания" },
      { title: "Norwich Free Academy", text: "Коннектикут, США" },
      { title: "Магистр педагогики", text: "Более 15 лет преподавания" },
      { title: "Лицей НИУ ВШЭ, Пермь", text: "Преподаю 5 лет" },
    ],
  },
  courses: {
    title: "Форматы и программы",
    sub: "Пять способов начать учиться - выбирайте то, что подходит вашим целям и расписанию.",
    levelLabel: "Уровень",
    items: [
      {
        id: "club",
        title: "Кружка английского",
        desc: "Онлайн-клуб практики для старшеклассников и взрослых: три коротких задания в неделю и моя обратная связь на каждое. Всего 15-20 минут на задание.",
        level: "A1-B2",
        duration: "3 задания в неделю",
        href: "#club",
        cta: "Подробнее о клубе",
        note: "новое",
      },
      {
        id: "exams",
        title: "Подготовка к ОГЭ и ЕГЭ",
        desc: "Занятия в мини-группах оффлайн или онлайн по 60 или 80 минут. Структурированная, системная подготовка с акцентом на результат.",
        level: "B1-C1",
        duration: "60 / 80 мин",
        href: "#contact",
        cta: "Записаться",
      },
      {
        id: "consult",
        title: "Индивидуальные консультации",
        desc: "Личные занятия с разбором самых сложных заданий ОГЭ и ЕГЭ. Найдём слабые места и устраним их максимально быстро.",
        level: "B1-C1",
        duration: "По запросу",
        href: "#contact",
        cta: "Записаться",
      },
      {
        id: "speaking",
        title: "Устная речь и говорение",
        desc: "Развитие разговорной речи и подготовка к устной части экзаменов. Формат: закрытый чат с заданиями, обратной связью и рекомендациями эксперта.",
        level: "A2-C1",
        duration: "Постоянно",
        href: "#contact",
        cta: "Записаться",
      },
      {
        id: "grammar",
        title: "Грамматика для ОГЭ и ЕГЭ",
        desc: "Онлайн-видеокурс: всё, что нужно знать и отработать для высоких баллов на экзаменах. Учитесь в удобном темпе.",
        level: "A2-B2",
        duration: "В своём темпе",
        href: "#contact",
        cta: "Записаться",
      },
    ],
  },
  quote: {
    text: "The limits of my language mean the limits of my world.",
    note: "Границы моего языка - границы моего мира",
    author: "Людвиг Витгенштейн",
  },
  reviews: {
    title: "Говорят мои ученики",
    showAll: (n: number) => `Показать все отзывы (${n})`,
    collapse: "Свернуть отзывы",
    items: [
      {
        name: "Евгений Рубцов",
        context: "Кембриджский экзамен FCE",
        text: "Занимался разговорным английским с Дарьей Анатольевной для подготовки к Cambridge FCE. Всего за месяц я действительно многому научился. Сдал экзамен на B2 - и честно вам скажу, без Дарьи Анатольевны не факт, что я бы допрыгнул даже до B1. Большое спасибо!",
      },
      {
        name: "Макс Чубаров",
        context: "Отзыв ВКонтакте",
        text: "Daria Anatolyevna is the best English teacher who has ever taught me. I appreciate every lesson and would like everyone to choose her. That's definitely the best way to learn English with fun!",
      },
      {
        name: "Зульфия Ахмарова",
        context: "Отзыв ВКонтакте",
        text: "Долго пыталась учить английский, но не получалось. После занятий с Дарьей Анатольевной почувствовала, что продвигаюсь вперёд. Она всегда объясняет сложный материал доступно и интересно. Занимайтесь с ней - если хотите высоких результатов!",
      },
      {
        name: "Екатерина Севрюгина",
        context: "Отзыв ВКонтакте",
        text: "Не сомневайтесь в способностях Дарьи Анатольевны. Её уроки - настоящее чудо! Педагог любит своё дело, знает его очень хорошо и внимательна к каждому ученику.",
      },
      {
        name: "Кристина Саламатова",
        context: "Отзыв ВКонтакте",
        text: "Я учу английский много лет с разными преподавателями, но Дарья Анатольевна буквально лучшая из всех. Каждое занятие невероятно эффективно и познавательно. Большое спасибо за разнообразие тем и индивидуальный подход к каждому ученику!",
      },
      {
        name: "Аня Хрулёва",
        context: "Отзыв ВКонтакте",
        text: "С детства учу английский, но такой подачи и обучения, как у Дарьи Анатольевны, я не встречала. Каждая пара проходит очень интересно и эффективно. С ней никогда не бывает скучно.",
      },
      {
        name: "Маргарита Дудырева",
        context: "Отзыв ВКонтакте",
        text: "К Дарье Анатольевне я пришла всего год назад, но уже сейчас замечаю, что уровень языка сильно повысился. От каждого занятия получаю удовольствие. Большое спасибо за вашу работу.",
      },
      {
        name: "Наталья Наталова",
        context: "Отзыв ВКонтакте",
        text: "Дарья Анатольевна - профессионал своего дела! Чётко выстроенные занятия позволяют быстро освоить английский. Она выстраивает индивидуальный план для каждого ученика. Замечательный человек и очень талантливый педагог!",
      },
      {
        name: "Эльза Уточкина",
        context: "Подготовка к ЕГЭ",
        text: "Хочу искренне поблагодарить Дарью Анатольевну за её труд. Благодаря ей я смогла улучшить своё знание языка. Все уроки проходили очень интересно, материал подавался легко.",
      },
      {
        name: "Саша Цыганенко",
        context: "Подготовка к ЕГЭ",
        text: "Занятия проходили в дружеской и приятной атмосфере. Всегда чётко, ясно и понятно. Она помогла разобраться с форматом экзамена, указала на слабые места и исправила ошибки. Я безумно благодарен Дарье Анатольевне!",
      },
      {
        name: "Мария Брызгалова",
        context: "Подготовка к ЕГЭ",
        text: "Дарья Анатольевна - педагог с большой буквы! Я начинала практически с нуля. Наши занятия вдохновляли и мотивировали меня. Мне очень повезло, что занималась именно с Дарьей Анатольевной.",
      },
      {
        name: "Наталья Гаврилова",
        context: "Отзыв ВКонтакте",
        text: "После занятий улучшились не только оценки, но и понимание языка. Очень явный прогресс с начала обучения. Общение с Дарьей Анатольевной - в очень комфортной атмосфере. Огромное спасибо за Ваш труд!",
      },
      {
        name: "Ева Р.",
        context: "ОГЭ - 64 из 68",
        text: "Хочу выразить огромную благодарность Дарье Анатольевне за подготовку к ОГЭ. В итоге я сдала экзамен на 64 из 68 баллов. Спасибо за терпение, интересный подход и бесконечную любовь к своему предмету!",
      },
      {
        name: "Арина Р.",
        context: "ОГЭ на пятёрку",
        text: "Хочу сказать огромное спасибо Дарье Анатольевне. Все занятия проходили в уютной и дружелюбной атмосфере, а мой уровень рос с каждым уроком. Я сдала ОГЭ на пятёрку! Безумно рада, что занималась с ней.",
      },
      {
        name: "Ксения Корепанова",
        context: "ЕГЭ + школа",
        text: "Дарья Анатольевна была нашим преподавателем английского в школе. Её уроки всегда были интересными и креативными. Благодаря им я смогла хорошо сдать ЕГЭ и подтянуть уровень языка. Спасибо - было познавательно и весело!",
      },
    ],
  },
  contact: {
    title: "Начнём учиться вместе?",
    sub: "Напишите мне, как вам удобно, и мы подберём расписание и подходящую программу.",
    items: [
      { kind: "telegram", label: "Telegram, личный", value: "@DariaCannizzaro", href: LINKS.telegram },
      { kind: "channel", label: "Telegram-канал", value: "@englishwithDariaC", href: LINKS.channel },
      { kind: "vk", label: "ВКонтакте", value: "english_s_dariacannizzaro", href: LINKS.vk },
      { kind: "instagram", label: "Instagram", value: "@dariacannizzaro", href: LINKS.instagram },
    ],
    where: "Пермь · онлайн по всему миру",
  },
  footer: {
    rights: "Дарья Канниццаро",
    top: "Наверх",
  },
  mobileCta: "Записаться на урок",
}

export const DICT: Record<Lang, Dict> = { en, ru }
