// English with Daria — v8
import { useState, useEffect, useRef } from "react"
import daryaPhoto from "@/imports/____.jpg"
import mama1 from "@/imports/mama1.jpg"

// Scroll-reveal hook
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const LONDON = {
  bigben:
    "https://images.unsplash.com/photo-1473896100090-53523650d4c6?w=480&h=640&fit=crop&auto=format",
  eye: "https://images.unsplash.com/photo-1545853332-147d5073187e?w=400&h=500&fit=crop&auto=format",
  bridge:
    "https://images.unsplash.com/photo-1565099946480-e4b34e64f399?w=560&h=380&fit=crop&auto=format",
  phonebox:
    "https://images.unsplash.com/photo-1599557041284-7e2a15610388?w=320&h=480&fit=crop&auto=format",
  bus: "https://images.unsplash.com/photo-1632897271846-b6e3ca78aded?w=560&h=360&fit=crop&auto=format",
  westminster:
    "https://images.unsplash.com/photo-1548334129-b0c5590711ba?w=500&h=380&fit=crop&auto=format",
}

// Watercolor-style treatment applied to all London photos
const wc = "rounded-2xl shadow-xl object-cover" as const

// ─── i18n ────────────────────────────────────────────────────────────────────
const T = {
  en: {
    siteTitle: "English with Daria",
    nav: ["About", "Courses", "Reviews", "Contact"],
    badge: "Online English lessons",
    heroH1a: "Discover the world",
    heroH1b: "of English",
    heroH1c: "with Daria",
    heroSub:
      "Personal approach, live lessons and a proven method. From zero to confident fluency — together.",
    heroCta: "Book a lesson",
    heroBtn2: "Courses",
    stat1n: "15+",
    stat1l: "years teaching",
    stat2n: "1300+",
    stat2l: "students",
    stat3n: "98",
    stat3l: "exam score",
    aboutBadge: "About the teacher",
    aboutName: "Daria Cannizzaro",
    aboutCity: "Perm, Russia · Online worldwide",
    aboutP1:
      "Master's degree in Pedagogy. Over 15 years of teaching experience. Trained at Oxford Brooks University (UK) and Norwich Free Academy (USA). Former lecturer at top universities of Perm region.",
    aboutP2:
      "Currently teaching at HSE Lyceum Perm (5 years). My lessons are practical, clear, and genuinely engaging — whether online or in person.",
    aboutCerts: [
      "Oxford Brooks University",
      "Norwich Free Academy, USA",
      "Master's in Pedagogy",
      "HSE Lyceum · 5 years",
    ],
    coursesBadge: "How to work with me",
    coursesH2: "Formats & programmes",
    coursesSub:
      "Five ways to start learning — choose what fits your goals and schedule.",
    courses: [
      {
        icon: "01",
        title: "English Practice Club",
        desc: "Кружок Английского — a relaxed online club for teenagers and adults. Start speaking English at last. Light, positive format — perfect even for the busiest people.",
        level: "A1–B2",
        duration: "Flexible",
      },
      {
        icon: "02",
        title: "OGE & EGE Preparation",
        desc: "Exam prep in mini-groups. Offline or online lessons of 60 / 80 minutes. Structured, systematic, results-focused.",
        level: "B1–C1",
        duration: "60 / 80 min",
      },
      {
        icon: "03",
        title: "Individual Exam Consultations",
        desc: "One-on-one sessions targeting the hardest tasks in OGE and EGE. Identify your weak points and fix them fast.",
        level: "B1–C1",
        duration: "On demand",
      },
      {
        icon: "04",
        title: "Speaking & Oral Exam Practice",
        desc: "Develop fluency and get ready for the oral part of your exams. Format: a private chat with expert tasks, feedback, and recommendations.",
        level: "A2–C1",
        duration: "Ongoing",
      },
      {
        icon: "05",
        title: "Grammar for OGE & EGE",
        desc: "Online video course covering everything you need for top exam scores. Study at your own pace with clear explanations and practice exercises.",
        level: "A2–B2",
        duration: "Self-paced",
      },
    ],
    coursesCta: "Enrol",
    quoteText: '"The limits of my language mean the limits of my world."',
    quoteAuthor: "— Ludwig Wittgenstein",
    reviewsBadge: "Student reviews",
    reviewsH2: "What my students say",
    reviews: [
      {
        name: "Evgeny Rubtsov",
        city: "Cambridge FCE exam",
        text: "I studied conversational English with Daria Anatolyevna to prepare for the Cambridge FCE. In just one month I truly learned a lot. She helped me develop the skill of speaking on the spot. I passed at B2 — and honestly, without Daria Anatolyevna I'm not sure I would have reached even B1.",
        avatar: "ER",
      },
      {
        name: "Max Chubarov",
        city: "VK review",
        text: "Daria Anatolyevna is the best English teacher who has ever taught me. I appreciate every lesson and would like everyone to choose her as their teacher. That's definitely the best way to learn English with fun!",
        avatar: "MC",
      },
      {
        name: "Zulfiya Akhmarova",
        city: "VK review",
        text: "For a long time I tried to learn English but could not succeed. It was after the lessons with Daria Anatolyevna that I felt I was moving forward. This excellent teacher always explains complex material in an accessible way. Study with Daria Anatolyevna if you want high results!",
        avatar: "ZA",
      },
      {
        name: "Ekaterina Sevryugina",
        city: "VK review",
        text: "Please do not doubt Daria Anatolyevna's abilities. Her lessons are a real miracle! The teacher loves her job, knows a lot and is attentive to each student.",
        avatar: "ES",
      },
      {
        name: "Kristina Salamatova",
        city: "VK review",
        text: "I've studied English with many different teachers, but Daria Anatolyevna is literally the best of all. Every lesson is incredibly effective and engaging. Thank you for the variety of topics and the individual approach to every student!",
        avatar: "KS",
      },
      {
        name: "Anya Khrulyova",
        city: "VK review",
        text: "I've been learning English since childhood, but I've never encountered teaching like Daria Anatolyevna's. Every class is very interesting and effective. It's never boring with her.",
        avatar: "AH",
      },
      {
        name: "Margarita Dudyreva",
        city: "VK review",
        text: "I came to Daria Anatolyevna just a year ago, but I can already see that my language level has improved significantly. I enjoy every single lesson. Thank you so much for your work.",
        avatar: "MD",
      },
      {
        name: "Natalya Natalova",
        city: "VK review",
        text: "Daria Anatolyevna is a true professional. Clearly structured lessons allow you to master English quickly. She builds an individual plan for each student. A wonderful person and a very talented teacher!",
        avatar: "NN",
      },
      {
        name: "Elza Utochkina",
        city: "EGE preparation",
        text: "I want to sincerely thank Daria Anatolyevna for her work. Thanks to her I was able to improve my English significantly. All lessons were very interesting and the material was presented easily.",
        avatar: "EU",
      },
      {
        name: "Sasha Tsyganenko",
        city: "EGE preparation",
        text: "Lessons with Daria Anatolyevna took place in a very friendly atmosphere. Always clear and precise. She helped me understand the exam format, identify my weak points and fix my mistakes. I am extremely grateful to her!",
        avatar: "ST",
      },
      {
        name: "Maria Bryzgalova",
        city: "EGE preparation",
        text: "Daria Anatolyevna is a teacher with a capital T! I started preparing for the EGE from scratch in November. Our lessons were inspiring and motivating. I'm so lucky to have studied with her.",
        avatar: "MB",
      },
      {
        name: "Natalya Gavrilova",
        city: "VK review",
        text: "After the lessons, not only my grades improved but my understanding of the language too. Very noticeable progress from the start of our studies. Communication with Daria Anatolyevna happens in a very comfortable atmosphere. Huge thanks for your work!",
        avatar: "NG",
      },
      {
        name: "Eva R.",
        city: "OGE — 64/68",
        text: "I passed the OGE with 64 out of 68 points! Every lesson was engaging and informative. Thanks to your explanations even the most complex topics became clear. Thank you for your patience, interesting approach and endless love for your subject!",
        avatar: "ER",
      },
      {
        name: "Arina R.",
        city: "OGE — grade 5",
        text: "I want to say a huge thank you to Daria Anatolyevna. All lessons took place in a cosy and friendly atmosphere, and my knowledge grew with every class. I passed the OGE with a grade 5! So happy I studied with Daria Anatolyevna.",
        avatar: "AR",
      },
      {
        name: "Ksenia Korepanova",
        city: "EGE + school",
        text: "Daria Anatolyevna was our English teacher at school. Her lessons were always interesting and creative. Thanks to them I was able to do well on the EGE and raise my overall English level. Thank you — it was informative and fun!",
        avatar: "KK",
      },
    ],
    contactBadge: "Get in touch",
    contactH2: "Shall we start learning together?",
    contactSub:
      "Leave a request and I will get back to you to discuss a convenient schedule and the right programme.",
    contactItems: [
      {
        icon: "TG",
        val: "@DariaCannizzaro",
        label: "Telegram (personal)",
        href: "https://t.me/DariaCannizzaro",
      },
      {
        icon: "CH",
        val: "@englishwithDariaC",
        label: "Telegram channel",
        href: "https://t.me/englishwithDariaC",
      },
      {
        icon: "VK",
        val: "english_s_dariacannizzaro",
        label: "VKontakte",
        href: "https://vk.ru/english_s_dariacannizzaro",
      },
      {
        icon: "IG",
        val: "@dariacannizzaro",
        label: "Instagram",
        href: "https://instagram.com/dariacannizzaro",
      },
      {
        icon: "loc",
        val: "Perm, Russia · Online worldwide",
        label: "Location",
        href: null,
      },
    ],
    formTitle: "Send a request",
    fName: "Your name",
    fNamePh: "Anna Smith",
    fPhone: "Phone or Telegram",
    fPhonePh: "+7 999 000 00 00",
    fCourse: "Course of interest",
    fCoursePh: "Choose a course…",
    fComment: "Comment",
    fCommentPh: "Tell me a bit about yourself and your goals",
    fSubmit: "Send request",
    sentTitle: "Request sent!",
    sentSub: "I'll get back to you very soon. See you at the lesson!",
    footerCopy: "© 2024 Daria Cannizzaro. All rights reserved.",
  },
  ru: {
    siteTitle: "English с Дарьей",
    nav: ["О преподавателе", "Курсы", "Отзывы", "Контакты"],
    badge: "Онлайн-уроки английского",
    heroH1a: "Откройте мир",
    heroH1b: "английского",
    heroH1c: "с Дарьей",
    heroSub:
      "Индивидуальный подход, живые уроки и проверенная методика. От нуля до уверенного владения — вместе.",
    heroCta: "Записаться на урок",
    heroBtn2: "Курсы",
    stat1n: "15+",
    stat1l: "лет опыта",
    stat2n: "1300+",
    stat2l: "учеников",
    stat3n: "98",
    stat3l: "баллов ЕГЭ",
    aboutBadge: "О преподавателе",
    aboutName: "Канниццаро Дарья Анатольевна",
    aboutCity: "Пермь · Онлайн по всему миру",
    aboutP1:
      "Магистр педагогики. Более 15 лет преподавательского опыта. Учёба и стажировки в Оксфорде (Oxford Brooks University) и США (Norwich Free Academy). Преподавала в ведущих вузах Пермского края.",
    aboutP2:
      "Сейчас: 5 лет в Лицее НИУ ВШЭ — Пермь. Уроки живые, понятные и по-настоящему интересные — онлайн или очно.",
    aboutCerts: [
      "Oxford Brooks University",
      "Norwich Free Academy, США",
      "Магистр педагогики",
      "Лицей НИУ ВШЭ · 5 лет",
    ],
    coursesBadge: "Как со мной работать",
    coursesH2: "Форматы и программы",
    coursesSub:
      "Пять способов начать учиться — выбирайте то, что подходит вашим целям и расписанию.",
    courses: [
      {
        icon: "01",
        title: "Кружок английского",
        desc: "Кружок Английского — онлайн-клуб практики для старшеклассников и взрослых. Наконец-то заговорите на английском. Лёгкий, позитивный формат — подходит даже для самых занятых.",
        level: "A1–B2",
        duration: "Гибкий",
      },
      {
        icon: "02",
        title: "Подготовка к ОГЭ и ЕГЭ",
        desc: "Занятия в мини-группах оффлайн / онлайн по 60 / 80 минут. Структурированная, системная подготовка с акцентом на результат.",
        level: "B1–C1",
        duration: "60 / 80 мин",
      },
      {
        icon: "03",
        title: "Индивидуальные консультации",
        desc: "Личные занятия с разбором самых сложных заданий ОГЭ и ЕГЭ. Найдём слабые места и устраним их максимально быстро.",
        level: "B1–C1",
        duration: "По запросу",
      },
      {
        icon: "04",
        title: "Устная речь и говорение",
        desc: "Развитие разговорной речи и подготовка к устной части экзаменов. Формат: закрытый чат с заданиями и рекомендациями эксперта.",
        level: "A2–C1",
        duration: "Постоянно",
      },
      {
        icon: "05",
        title: "Грамматика для ОГЭ и ЕГЭ",
        desc: "Онлайн видеокурс — всё, что нужно знать и отработать для высоких баллов на экзаменах. Учитесь в удобном темпе.",
        level: "A2–B2",
        duration: "В своём темпе",
      },
    ],
    coursesCta: "Записаться",
    quoteText: "«Границы моего языка означают границы моего мира.»",
    quoteAuthor: "— Людвиг Витгенштейн",
    reviewsBadge: "Отзывы учеников",
    reviewsH2: "Говорят мои ученики",
    reviews: [
      {
        name: "Евгений Рубцов",
        city: "Кембриджский экзамен FCE",
        text: "Занимался разговорным английским с Дарьей Анатольевной для подготовки к Cambridge FCE. Всего за месяц я действительно многому научился. Сдал экзамен на B2 — и честно вам скажу, без Дарьи Анатольевны не факт что я бы допрыгнул даже до B1. Большое спасибо!",
        avatar: "ЕР",
      },
      {
        name: "Макс Чубаров",
        city: "Отзыв ВКонтакте",
        text: "Daria Anatolyevna is the best English teacher who has ever taught me. I appreciate every lesson and would like everyone to choose her. That's definitely the best way to learn English with fun!",
        avatar: "МЧ",
      },
      {
        name: "Зульфия Ахмарова",
        city: "Отзыв ВКонтакте",
        text: "Долго пыталась учить английский, но не получалось. После занятий с Дарьей Анатольевной почувствовала, что продвигаюсь вперёд. Она всегда объясняет сложный материал доступно и интересно. Занимайтесь с ней — если хотите высоких результатов!",
        avatar: "ЗА",
      },
      {
        name: "Екатерина Севрюгина",
        city: "Отзыв ВКонтакте",
        text: "Не сомневайтесь в способностях Дарьи Анатольевны. Её уроки — настоящее чудо! Педагог любит своё дело, знает его очень хорошо и внимательна к каждому ученику.",
        avatar: "ЕС",
      },
      {
        name: "Кристина Саламатова",
        city: "Отзыв ВКонтакте",
        text: "Я учу английский много лет с разными преподавателями, но Дарья Анатольевна буквально лучшая из всех. Каждое занятие невероятно эффективно и познавательно. Большое спасибо за разнообразие тем и индивидуальный подход к каждому ученику!",
        avatar: "КС",
      },
      {
        name: "Аня Хрулёва",
        city: "Отзыв ВКонтакте",
        text: "С детства учу английский, но такой подачи и обучения, как у Дарьи Анатольевны, я не встречала. Каждая пара проходит очень интересно и эффективно. С ней никогда не бывает скучно.",
        avatar: "АХ",
      },
      {
        name: "Маргарита Дудырева",
        city: "Отзыв ВКонтакте",
        text: "К Дарье Анатольевне я пришла всего год назад, но уже сейчас замечаю, что уровень языка сильно повысился. От каждого занятия получаю удовольствие. Большое спасибо за вашу работу.",
        avatar: "МД",
      },
      {
        name: "Наталья Наталова",
        city: "Отзыв ВКонтакте",
        text: "Дарья Анатольевна — профессионал своего дела! Чётко выстроенные занятия позволяют быстро освоить английский. Она выстраивает индивидуальный план для каждого ученика. Замечательный человек и очень талантливый педагог!",
        avatar: "НН",
      },
      {
        name: "Эльза Уточкина",
        city: "Подготовка к ЕГЭ",
        text: "Хочу искренне поблагодарить Дарью Анатольевну за её труд. Благодаря ей я смогла улучшить своё знание языка. Все уроки проходили очень интересно, материал подавался легко.",
        avatar: "ЭУ",
      },
      {
        name: "Саша Цыганенко",
        city: "Подготовка к ЕГЭ",
        text: "Занятия проходили в дружеской и приятной атмосфере. Всегда чётко, ясно и понятно. Она помогла разобраться с форматом экзамена, указала на слабые места и исправила ошибки. Я безумно благодарен Дарье Анатольевне!",
        avatar: "СЦ",
      },
      {
        name: "Мария Брызгалова",
        city: "Подготовка к ЕГЭ",
        text: "Дарья Анатольевна — педагог с большой буквы! Я начинала практически с нуля. Наши занятия вдохновляли и мотивировали меня. Мне очень повезло, что занималась именно с Дарьей Анатольевной.",
        avatar: "МБ",
      },
      {
        name: "Наталья Гаврилова",
        city: "Отзыв ВКонтакте",
        text: "После занятий улучшились не только оценки, но и понимание языка. Очень явный прогресс с начала обучения. Общение с Дарьей Анатольевной — в очень комфортной атмосфере. Огромное спасибо за Ваш труд!",
        avatar: "НГ",
      },
      {
        name: "Ева Р.",
        city: "ОГЭ — 64 из 68",
        text: "Хочу выразить огромную благодарность Дарье Анатольевне за подготовку к ОГЭ. В итоге я сдала экзамен на 64 из 68 баллов. Спасибо за терпение, интересный подход и бесконечную любовь к своему предмету!",
        avatar: "ЕР",
      },
      {
        name: "Арина Р.",
        city: "ОГЭ на пятёрку",
        text: "Хочу сказать огромное спасибо Дарье Анатольевне. Все занятия проходили в уютной и дружелюбной атмосфере, а мой уровень рос с каждым уроком. Я сдала ОГЭ на пятёрку! Безумно рада, что занималась с ней.",
        avatar: "АР",
      },
      {
        name: "Ксения Корепанова",
        city: "ЕГЭ + школа",
        text: "Дарья Анатольевна была нашим преподавателем английского в школе. Её уроки всегда были интересными и креативными. Благодаря им я смогла хорошо сдать ЕГЭ и подтянуть уровень языка. Спасибо — было познавательно и весело!",
        avatar: "КК",
      },
    ],
    contactBadge: "Свяжитесь со мной",
    contactH2: "Начнём учиться вместе?",
    contactSub:
      "Оставьте заявку, и я свяжусь с вами для обсуждения удобного расписания и выбора подходящей программы.",
    contactItems: [
      {
        icon: "TG",
        val: "@DariaCannizzaro",
        label: "Telegram (личный)",
        href: "https://t.me/DariaCannizzaro",
      },
      {
        icon: "CH",
        val: "@englishwithDariaC",
        label: "Telegram-канал",
        href: "https://t.me/englishwithDariaC",
      },
      {
        icon: "VK",
        val: "english_s_dariacannizzaro",
        label: "ВКонтакте",
        href: "https://vk.ru/english_s_dariacannizzaro",
      },
      {
        icon: "IG",
        val: "@dariacannizzaro",
        label: "Instagram",
        href: "https://instagram.com/dariacannizzaro",
      },
      {
        icon: "loc",
        val: "Пермь · Онлайн по всему миру",
        label: "Где занимаемся",
        href: null,
      },
    ],
    formTitle: "Оставить заявку",
    fName: "Ваше имя",
    fNamePh: "Анна Иванова",
    fPhone: "Телефон или Telegram",
    fPhonePh: "+7 999 000 00 00",
    fCourse: "Интересующий курс",
    fCoursePh: "Выберите курс…",
    fComment: "Комментарий",
    fCommentPh: "Расскажите немного о себе и своих целях",
    fSubmit: "Отправить заявку",
    sentTitle: "Заявка отправлена!",
    sentSub: "Я свяжусь с вами в ближайшее время. До встречи на уроке!",
    footerCopy: "© 2024 Канниццаро Дарья Анатольевна. Все права защищены.",
  },
}

const COURSE_COLORS = [
  { bg: "from-teal-50 to-emerald-50", accent: "#3D7A7A" },
  { bg: "from-rose-50 to-pink-50", accent: "#C8173A" },
  { bg: "from-amber-50 to-yellow-50", accent: "#B07B00" },
  { bg: "from-violet-50 to-purple-50", accent: "#6B5FA5" },
  { bg: "from-sky-50 to-blue-50", accent: "#2563EB" },
]

// ─── Animated London Banner ───────────────────────────────────────────────────
// Calm daytime London videos from Pixabay
const LONDON_VIDEOS = [
  "https://cdn.pixabay.com/video/2020/03/09/33415-396631693_large.mp4", // Tower Bridge 4K
  "https://cdn.pixabay.com/video/2018/10/19/18792-296338745_large.mp4", // Big Ben & clouds
  "https://cdn.pixabay.com/video/2024/02/28/202368-918049003_large.mp4", // London Eye
]

const VideoBanner = ({ lang, t }: { lang: "en" | "ru" t: typeof T["en"] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [py, setPy] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const top = ref.current.getBoundingClientRect().top
      setPy(top * 0.25)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: "480px" }}
    >
      {/* Full-bleed video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${py}px) scale(1.15)` }}
        poster="https://images.unsplash.com/photo-1547120692-e17787650e71?w=1400&h=600&fit=crop"
      >
        {LONDON_VIDEOS.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>

      {/* Rich gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(28,26,23,0.75) 0%, rgba(200,23,58,0.35) 50%, rgba(28,26,23,0.75) 100%)",
        }}
      />

      {/* Decorative corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-lg" />

      {/* Quote */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <div className="text-[#C8173A] text-6xl font-display font-bold leading-none mb-4 opacity-80">
          "
        </div>
        <p className="font-display text-2xl md:text-4xl font-semibold italic text-white leading-snug drop-shadow-2xl max-w-2xl mb-4">
          {t.quoteText.replace(/^["«]|["»]$/g, "")}
        </p>
        <div className="w-16 h-px bg-[#C8173A] mb-4" />
        <p className="text-sm text-white/70 font-sans tracking-widest uppercase">
          {t.quoteAuthor}
        </p>
      </div>
    </div>
  )
}

// ─── WOW: Counter + split reveal (IntersectionObserver, no sticky) ────────────
const WowSection = ({ lang, mama1 }: { lang: "en" | "ru" mama1: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0])

  const targets = [15, 1300, 98]
  const suffixes = lang === "en" ? ["+", "+", ""] : ["+", "+", ""]
  const labels =
    lang === "en"
      ? ["years\nteaching", "students", "exam\nscore"]
      : ["лет\nопыта", "учеников", "баллов\nЕГЭ"]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Count up when visible — fast start, dramatic slowdown at the end
  useEffect(() => {
    if (!visible) return
    const duration = 6500
    const steps = 120
    const interval = duration / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      const p = Math.min(1, step / steps)
      // strong ease-out: accelerates through ~80% of value quickly, crawls to final
      const ease = 1 - Math.pow(1 - p, 5)
      setCounts(targets.map((t) => Math.round(ease * t)))
      if (step >= steps) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [visible])

  return (
    <div ref={ref} className="bg-[#1C1A17] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-0 items-stretch min-h-[560px]">
        {/* Left — headline + counters */}
        <div className="flex flex-col justify-center pr-0 md:pr-12 py-8">
          {/* Headline */}
          <div className="overflow-hidden mb-10">
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                transform: visible ? "translateY(0)" : "translateY(100%)",
                transition: "transform 0.8s cubic-bezier(.22,1,.36,1)",
              }}
            >
              {lang === "en" ? (
                <>
                  One word.
                  <br />
                  <span className="text-[#C8173A]">One step.</span>
                </>
              ) : (
                <>
                  Одно слово.
                  <br />
                  <span className="text-[#C8173A]">Один шаг.</span>
                </>
              )}
            </h2>
          </div>

          <p
            className="font-serif text-white/50 text-lg leading-relaxed mb-12"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            {lang === "en"
              ? "Every journey to fluency starts here. Online or in Perm — wherever you are."
              : "Каждый путь к свободному языку начинается здесь. Онлайн или очно в Перми."}
          </p>

          {/* Counters */}
          <div className="flex gap-10 md:gap-12">
            {targets.map((_, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${0.4 + i * 0.15}s`,
                }}
              >
                <div
                  className="font-display font-bold leading-none mb-1"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                    color: i === 1 ? "#C8173A" : "white",
                  }}
                >
                  {counts[i]}
                  {suffixes[i]}
                </div>
                <div className="text-white/40 text-xs whitespace-pre-line uppercase tracking-widest leading-snug">
                  {labels[i]}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="flex flex-wrap gap-3 mt-10"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease 0.9s",
            }}
          >
            <a
              href="https://t.me/englishwithDariaC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#229ED9] text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-[#1a8fc4] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.279c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.942z" />
              </svg>
              @englishwithDariaC
            </a>
            <a
              href="#section-3"
              className="inline-flex items-center gap-1 border border-white/20 text-white/70 hover:text-white hover:border-white/50 text-sm px-5 py-3 rounded-full transition-colors"
            >
              {lang === "en" ? "Book a lesson →" : "Записаться →"}
            </a>
          </div>
        </div>

        {/* Right — Daria's photo, full height */}
        <div
          className="relative hidden md:block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(60px)",
            transition: "all 0.9s cubic-bezier(.22,1,.36,1) 0.2s",
          }}
        >
          <img
            src={mama1}
            alt="Daria Cannizzaro"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 12%" }}
          />
          {/* Gradient fade left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #1C1A17 0%, transparent 30%)",
            }}
          />
          {/* Name badge */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex flex-col bg-black/50 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10">
              <span className="text-white font-display font-semibold text-lg leading-tight">
                {lang === "en" ? "Daria Cannizzaro" : "Канниццаро Дарья"}
              </span>
              <span className="text-white/50 text-xs mt-1">
                {lang === "en"
                  ? "📍 Perm · 🌐 Online worldwide"
                  : "📍 Пермь · 🌐 Онлайн везде"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Stars = () => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#C8173A">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}


export default function App() {
  const [lang, setLang] = useState<"en" | "ru">("en")
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const t = T[lang]

  function toggleLang() {
    setLang((l) => (l === "en" ? "ru" : "en"))
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F0]/90 backdrop-blur-sm border-b border-[#D8D1C4]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="font-display text-xl font-semibold text-[#1C1A17] shrink-0">
            <span className="text-[#C8173A]">English</span> with Daria
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {t.nav.map((link, i) => (
              <a
                key={link}
                href={`#section-${i}`}
                className="text-sm font-medium text-[#5A5549] hover:text-[#C8173A] transition-colors duration-200 whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border-2 border-[#C8173A] font-bold text-sm transition-all duration-200 hover:bg-[#C8173A] hover:text-white group"
              aria-label="Switch language"
            >
              <span className={`transition-colors ${lang === "en" ? "text-[#C8173A] group-hover:text-white" : "text-[#C8173A]/40 group-hover:text-white/60"}`}>EN</span>
              <span className="text-[#C8173A]/30 group-hover:text-white/40">/</span>
              <span className={`transition-colors ${lang === "ru" ? "text-[#C8173A] group-hover:text-white" : "text-[#C8173A]/40 group-hover:text-white/60"}`}>RU</span>
            </button>

            <a
              href="#section-3"
              className="hidden md:inline-flex px-5 py-2 bg-[#C8173A] text-white text-sm font-semibold rounded-full hover:bg-[#A01030] transition-colors duration-200"
            >
              {t.heroCta}
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-0.5 bg-[#1C1A17] mb-1 transition-all"></div>
              <div className="w-5 h-0.5 bg-[#1C1A17] mb-1"></div>
              <div className="w-5 h-0.5 bg-[#1C1A17]"></div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#FAF7F0] border-t border-[#D8D1C4] px-6 py-4 flex flex-col gap-4">
            {t.nav.map((link, i) => (
              <a
                key={link}
                href={`#section-${i}`}
                className="text-sm font-medium text-[#5A5549]"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#section-3"
              className="px-5 py-2 bg-[#C8173A] text-white text-sm font-semibold rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t.heroCta}
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="blob w-[32rem] h-[32rem] bg-[#3D7A7A] top-10 right-10 animate-blob-drift animate-shimmer" style={{opacity:0.28}}></div>
        <div className="blob w-96 h-96 bg-[#C8173A] bottom-10 left-10 animate-blob-drift-2 animate-shimmer" style={{opacity:0.24}}></div>
        <div className="blob w-80 h-80 bg-[#E8B44A] top-1/3 left-1/3 animate-blob-drift-3 animate-shimmer" style={{opacity:0.22}}></div>
        <div
          className="blob w-64 h-64 bg-[#3D7A7A] bottom-1/3 right-1/4 animate-blob-drift"
          style={{ animationDelay: "4s", opacity:0.2 }}
        ></div>

        <div className="max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8F4F4] rounded-full mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-xs font-semibold text-[#3D7A7A] uppercase tracking-wider">
                {t.badge}
              </span>
            </div>
            <h1
              className="font-display text-5xl md:text-6xl font-bold text-[#1C1A17] leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              {t.heroH1a}
              <br />
              <em className="text-[#C8173A] not-italic">{t.heroH1b}</em>
              <br />
              {t.heroH1c}
            </h1>
            <p
              className="font-serif text-lg text-[#5A5549] leading-relaxed mb-8 max-w-md animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {t.heroSub}
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#section-3"
                className="px-8 py-3.5 bg-[#C8173A] text-white font-semibold rounded-full hover:bg-[#A01030] transition-all duration-200 shadow-lg shadow-[#C8173A]/20"
              >
                {t.heroCta}
              </a>
              <a
                href="#section-1"
                className="px-8 py-3.5 border-2 border-[#D8D1C4] text-[#1C1A17] font-semibold rounded-full hover:border-[#C8173A] hover:text-[#C8173A] transition-all duration-200"
              >
                {t.heroBtn2}
              </a>
            </div>
            <div className="flex gap-10 mt-12">
              {[
                [t.stat1n, t.stat1l],
                [t.stat2n, t.stat2l],
                [t.stat3n, t.stat3l],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-[#C8173A]">
                    {n}
                  </div>
                  <div className="text-sm text-[#5A5549] font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero — Daria portrait */}
          <div className="relative h-[480px] hidden md:block">
            {/* Daria portrait — centre */}
            <img
              src={daryaPhoto}
              alt="Daria Cannizzaro"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-3xl shadow-2xl object-cover object-top z-10 border-4 border-white animate-fade-in"
              style={{
                transform: "translate(-50%,-50%) rotate(0.5deg)",
                animationDuration: "1.2s",
              }}
            />
            {/* Badge */}
            <div className="absolute -bottom-6 left-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-[#D8D1C4] z-20">
              <div className="w-8 h-8 rounded-full bg-[#1C1A17] flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold">EN</span>
              </div>
              <div>
                <div className="font-display font-semibold text-sm text-[#1C1A17]">
                  British English
                </div>
                <div className="text-xs text-[#5A5549]">Perm · Online</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-[#C8173A] rounded-2xl shadow-xl px-4 py-3 text-white z-20">
              <div className="font-display font-bold text-xl">100</div>
              <div className="text-xs opacity-90">
                {lang === "en" ? "exam score" : "баллов ЕГЭ"}
              </div>
            </div>
          </div>
          {/* Mobile: simple portrait */}
          <div className="md:hidden flex justify-center">
            <img
              src={daryaPhoto}
              alt="Daria Cannizzaro"
              className="w-56 h-56 rounded-full object-cover object-top shadow-2xl border-4 border-white"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B8B1A4]">
          <span className="text-xs tracking-widest uppercase font-medium">
            {lang === "en" ? "Scroll" : "Прокрутите"}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#B8B1A4] to-transparent"></div>
        </div>
      </section>

      {/* ═══ WOW SCROLL SECTION ═══ */}
      <WowSection lang={lang} mama1={mama1} />

      {/* КРУЖОК АНГЛИЙСКОГО */}
      <section className="py-24 bg-[#FAF7F0] border-t border-[#D8D1C4]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#C8173A] font-semibold mb-5">
                {lang === "en" ? "Featured programme" : "Особый формат"}
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-[#1C1A17] leading-tight mb-8">
                {lang === "en" ? (
                  <>English<br/><em className="not-italic text-[#C8173A]">Practice Club</em></>
                ) : (
                  <>Кружок<br/><em className="not-italic text-[#C8173A]">Английского</em></>
                )}
              </h2>
              <p className="font-serif text-lg text-[#5A5549] leading-relaxed mb-6">
                {lang === "en"
                  ? "A unique space for English practice — for those who once studied the language and feel it fading. I experienced this myself: even with a high level, just one year without using English and half of it was gone."
                  : "Особое пространство для практики английского — для тех, у кого нет времени на курсы, но есть желание поддерживать и развивать язык. Работаете ли вы, в декрете, студент или старшеклассник — этот клуб для вас."}
              </p>
              <p className="font-serif text-[#5A5549] leading-relaxed mb-10">
                {lang === "en"
                  ? "No boring grammar rules. No grades. Just 30 minutes a day — and real results already after 2–3 weeks."
                  : "Никакой скучной грамматики и бесконечных правил. Никаких «двоек». Всего 30 минут в день — и первые результаты уже через 2–3 недели."}
              </p>
              <a
                href="https://t.me/englishwithDariaC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C1A17] text-white font-semibold rounded-full hover:bg-[#C8173A] transition-colors duration-300"
              >
                {lang === "en" ? "Join the club" : "Вступить в клуб"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* How it works */}
            <div className="space-y-0 border border-[#D8D1C4] rounded-3xl overflow-hidden">
              {[
                {
                  day: lang === "en" ? "Monday" : "Понедельник",
                  title: lang === "en" ? "New vocabulary" : "Новые слова",
                  desc: lang === "en"
                    ? "New word set in Quizlet + write sentences with them in the chat"
                    : "Новый набор слов в Quizlet + самостоятельно составляете предложения в чате",
                },
                {
                  day: lang === "en" ? "Wednesday" : "Среда",
                  title: lang === "en" ? "Video & listening" : "Видео и аудирование",
                  desc: lang === "en"
                    ? "A carefully selected video on the week's topic. Watch, then answer questions with voice messages"
                    : "Тщательно отобранное видео по теме недели. Смотрите, отвечаете голосовыми сообщениями",
                },
                {
                  day: lang === "en" ? "Friday" : "Пятница",
                  title: lang === "en" ? "Free speaking" : "Свободное говорение",
                  desc: lang === "en"
                    ? "Short online speaking session. Discussion questions + free conversation"
                    : "Короткие онлайн-сессии разговорной практики. Вопросы по теме + свободное общение",
                },
              ].map((item, i) => (
                <div key={item.day} className={`p-8 flex gap-6 items-start ${i < 2 ? "border-b border-[#D8D1C4]" : ""}`}>
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-[#C8173A] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#C8173A]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#B8B1A4] font-medium mb-1">{item.day}</div>
                    <div className="font-display font-semibold text-[#1C1A17] mb-2">{item.title}</div>
                    <p className="text-sm text-[#5A5549] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What you gain */}
          <div className="grid md:grid-cols-3 gap-px bg-[#D8D1C4] rounded-2xl overflow-hidden">
            {[
              {
                title: lang === "en" ? "Vocabulary grows" : "Растёт словарный запас",
                desc: lang === "en"
                  ? "From passive (knowing words) to active (using them in speech)"
                  : "Из пассивного (знаю слово) в активный (умею использовать в речи)",
              },
              {
                title: lang === "en" ? "Fear disappears" : "Уходит страх говорить",
                desc: lang === "en"
                  ? "First voice messages are hard for everyone. Then members start chatting freely"
                  : "Первые голосовые даются непросто. Потом участники уже свободно болтают",
              },
              {
                title: lang === "en" ? "Listening improves" : "Улучшается восприятие на слух",
                desc: lang === "en"
                  ? "What seemed like a fast blur of words becomes clear, structured speech"
                  : "То, что казалось набором звуков, выстраивается в понятные конструкции",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8">
                <div className="w-8 h-px bg-[#C8173A] mb-6"></div>
                <h4 className="font-display font-bold text-[#1C1A17] text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-[#5A5549] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="section-0" className="py-24 relative overflow-hidden">
        <div className="blob w-80 h-80 bg-[#3D7A7A] bottom-10 right-10 animate-blob-drift" style={{opacity:0.26}}></div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <img
              src={daryaPhoto}
              alt="Daria Cannizzaro"
              className="w-full rounded-3xl object-cover object-top shadow-2xl"
              style={{ height: "520px" }}
            />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#E8F4F4] rounded-2xl flex items-center justify-center shadow-lg border border-[#D8D1C4]">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-[#3D7A7A]">
                  MA
                </div>
                <div className="text-xs text-[#5A5549] leading-tight px-1">
                  {lang === "en" ? "Linguistics" : "Лингвистика"}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF0F3] rounded-full mb-6">
              <span className="text-xs font-semibold text-[#C8173A] uppercase tracking-wider">
                {t.aboutBadge}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1A17] leading-tight mb-2">
              {t.aboutName}
            </h2>
            <p className="text-sm text-[#5A5549] font-medium mb-6 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#C8173A] inline-block"></span>
              {t.aboutCity}
            </p>
            <p className="font-serif text-lg text-[#5A5549] leading-relaxed mb-6">
              {t.aboutP1}
            </p>
            <p className="font-serif text-[#5A5549] leading-relaxed mb-8">
              {t.aboutP2}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {t.aboutCerts.map((text, i) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#D8D1C4]"
                >
                  <span className="text-xs font-bold text-[#C8173A] font-display w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-[#1C1A17] leading-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* COURSES */}
      <section
        id="section-1"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="blob w-96 h-96 bg-[#C8173A] top-10 right-10 animate-blob-drift-2" style={{opacity:0.24}}></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF0F3] rounded-full mb-4">
              <span className="text-xs font-semibold text-[#C8173A] uppercase tracking-wider">
                {t.coursesBadge}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1A17] mb-4">
              {t.coursesH2}
            </h2>
            <p className="font-serif text-lg text-[#5A5549] max-w-xl mx-auto">
              {t.coursesSub}
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {t.courses.map((course, i) => {
              const { bg, accent } = COURSE_COLORS[i % COURSE_COLORS.length]
              return (
                <div
                  key={course.title}
                  className={`bg-gradient-to-br ${bg} rounded-3xl p-8 border border-[#D8D1C4] hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl font-bold leading-none" style={{ color: accent, opacity: 0.25 }}>
                      {course.icon}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1C1A17] mb-3">
                    {course.title}
                  </h3>
                  <p className="font-serif text-[#5A5549] leading-relaxed mb-6">
                    {course.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[#5A5549]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {course.duration}
                    </div>
                    <a
                      href="#section-3"
                      className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                      style={{ color: accent }}
                    >
                      {t.coursesCta}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VIDEO BANNER */}
      <VideoBanner lang={lang} t={t} />

      {/* REVIEWS */}
      <section
        id="section-2"
        className="py-24 bg-[#FAF7F0] relative overflow-hidden"
      >
        <div className="blob w-80 h-80 bg-[#E8B44A] bottom-10 left-10 animate-blob-drift-3" style={{opacity:0.26}}></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8F4F4] rounded-full mb-4">
              <span className="text-xs font-semibold text-[#3D7A7A] uppercase tracking-wider">
                {t.reviewsBadge}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1A17] mb-4">
              {t.reviewsH2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {(showAllReviews ? t.reviews : t.reviews.slice(0, 3)).map((r) => (
              <div
                key={r.name + r.city}
                className="bg-white rounded-3xl p-8 border border-[#D8D1C4] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Stars />
                <p className="font-serif text-[#5A5549] leading-relaxed my-5 italic">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#D8D1C4]">
                  <div className="w-10 h-10 rounded-full bg-[#C8173A] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1C1A17]">
                      {r.name}
                    </div>
                    <div className="text-xs text-[#5A5549]">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            {!showAllReviews ? (
              <button
                onClick={() => setShowAllReviews(true)}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1C1A17] text-[#1C1A17] font-semibold rounded-full hover:bg-[#1C1A17] hover:text-white transition-all duration-200"
              >
                {lang === "en" ? `Show all reviews (${t.reviews.length})` : `Показать все отзывы (${t.reviews.length})`}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setShowAllReviews(false)}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1C1A17] text-[#1C1A17] font-semibold rounded-full hover:bg-[#1C1A17] hover:text-white transition-all duration-200"
              >
                {lang === "en" ? "Collapse reviews" : "Свернуть отзывы"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="section-3"
        className="py-24 bg-[#1C1A17] relative overflow-hidden"
      >
        <div className="blob w-[500px] h-[500px] bg-[#C8173A] top-0 right-0" style={{opacity:0.12}}></div>
        <div className="blob w-80 h-80 bg-[#3D7A7A] bottom-0 left-0" style={{opacity:0.1}}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C8173A]/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-[#C8173A] uppercase tracking-wider">
                {t.contactBadge}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t.contactH2}
            </h2>
            <p className="font-serif text-lg text-white/60 max-w-xl mx-auto">
              {t.contactSub}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {t.contactItems.filter(item => item.href).map((item) => (
              <a
                key={item.label}
                href={item.href!}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-[#C8173A]/50 transition-all duration-300"
              >
                <span className="w-14 h-14 rounded-2xl bg-[#C8173A] flex items-center justify-center text-white text-xs font-bold tracking-wide shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#C8173A]/30">
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-white text-lg truncate group-hover:text-[#C8173A] transition-colors duration-300">
                    {item.val}
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/30 group-hover:text-[#C8173A] group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
            {t.contactItems.filter(item => !item.href).map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-3xl md:col-span-2"
              >
                <span className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white/60 text-xs font-bold tracking-wide shrink-0">
                  {item.icon}
                </span>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-white/80 text-lg">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1A17] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-xl font-semibold">
            <span className="text-[#C8173A]">English</span> with Daria
          </div>
          <div className="text-sm text-white/50 text-center">
            {t.footerCopy}
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://t.me/englishwithDariaC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#229ED9]/20 border border-[#229ED9]/30 rounded-full text-sm text-[#229ED9] hover:bg-[#229ED9]/30 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.279c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.942z" />
              </svg>
              @englishwithDariaC
            </a>
            <a
              href="https://t.me/DariaCannizzaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              @DariaCannizzaro
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
