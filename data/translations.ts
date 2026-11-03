export type Language = "uz" | "en" | "ru";

export interface ProjectTranslation {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedStory: string;
  badge: string;
  metrics: { label: string; value: string }[];
}

export interface SkillItemTranslation {
  name: string;
  experience: string;
  highlight: string;
}

export interface MilestoneTranslation {
  year: string;
  quarter: string;
  title: string;
  role: string;
  description: string;
  achievements: string[];
}

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    milestones: string;
    contact: string;
    available: string;
    availableLong: string;
    talk: string;
    talkShort: string;
    brandRole: string;
  };
  hero: {
    badge: string;
    fullName: string;
    titlePrefix: string;
    titleHighlight: string;
    typingRoles: string[];
    bio: string;
    ctaProjects: string;
    ctaContact: string;
    ctaStory: string;
    wpmMetric: string;
    stackMetric: string;
    uxMetric: string;
    fullstackTag: string;
    speedCoderTag: string;
    location: string;
    openToRoles: string;
    codingVelocity: string;
    wpmPrecision: string;
    interactiveGraphics: string;
    graphicsSub: string;
  };
  about: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    card1: {
      title: string;
      subtitle: string;
      tabStream: string;
      tabHUD: string;
      bio: string;
      liveTelemetry: string;
      peakWpm: string;
      avgWpm: string;
      accuracy: string;
      latency: string;
      tapToPulse: string;
      keystrokesTested: string;
      workflowEditor: string;
      workflowNav: string;
      workflowVelocity: string;
    };
    card2: {
      title: string;
      subtitle: string;
      bio: string;
      traits: {
        nextjs: { title: string; desc: string };
        threejs: { title: string; desc: string };
        tailwind: { title: string; desc: string };
        cloud: { title: string; desc: string };
      };
      lighthouse: string;
    };
    card3: {
      title: string;
      subtitle: string;
      bio: string;
      motionTitle: string;
      motionDesc: string;
      aiTitle: string;
      aiDesc: string;
      a11yTitle: string;
      a11yDesc: string;
    };
    card4: {
      title: string;
      subtitle: string;
      badge: string;
      osLabel: string;
      osValue: string;
      switchesLabel: string;
      switchesValue: string;
      workflowLabel: string;
      workflowValue: string;
    };
  };
  skills: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    tabs: {
      all: string;
      frontend: string;
      backend: string;
      tools: string;
    };
    proficiency: string;
    level: string;
    dailyProduction: string;
    activeEcosystem: string;
    items: Record<string, SkillItemTranslation>;
  };
  projects: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    quickSpecs: string;
    liveDemo: string;
    code: string;
    deepArchitecture: string;
    viewGithub: string;
    launchLiveDemo: string;
    items: Record<string, ProjectTranslation>;
  };
  timeline: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    items: MilestoneTranslation[];
  };
  contact: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    directEmail: string;
    directPhone: string;
    responseWindow: string;
    phoneAvailability: string;
    callNow: string;
    copy: string;
    copied: string;
    telegramDesc: string;
    telegramAction: string;
    instagramDesc: string;
    instagramAction: string;
    githubDesc: string;
    githubAction: string;
    youtubeDesc: string;
    youtubeAction: string;
    availability: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    categoryLabel: string;
    categories: {
      fullstack: string;
      threejs: string;
      perf: string;
      role: string;
      collab: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
  };
  footer: {
    bio: string;
    backToTop: string;
    copyright: string;
    wpmMetric: string;
    layoutMetric: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      milestones: "Bosqichlar",
      contact: "Aloqa",
      available: "Band emas",
      availableLong: "Yangi loyihalar uchun ochiq",
      talk: "Bog'lanish",
      talkShort: "Aloqa",
      brandRole: "IT Innovator",
    },
    hero: {
      badge: "Yangi Avlod Portfoliosi • 2026 Nashr",
      fullName: "Saydullaxo'jayev Saidazim",
      titlePrefix: "Kreativ Dasturchi &",
      titleHighlight: "IT Innovator",
      typingRoles: [
        "Full-Stack Veb Dasturchi",
        "3D & Interaktiv Veb Ishqibozi",
        "Tezkor Koder (130+ WPM Aniqlik)",
        "Next.js & Bulut Arxitektori",
        "Kreativ UI/UX Muhandis",
      ],
      bio: "O'ta silliq veb-ilovalarni, hayratlanarli 3D WebGL interfeyslarni va yuqori tezlikdagi full-stack arxitekturalarni yaratish. Kod yozishdagi yuqori aniqlik, tezkor terish mahorati va mukammal interaktiv UX ga bo'lgan katta ishtiyoq.",
      ctaProjects: "Loyihalarni ko'rish",
      ctaContact: "Bog'lanish",
      ctaStory: "Tarixni o'qish",
      wpmMetric: "Maksimal WPM tezligi",
      stackMetric: "Zamonaviy stek",
      uxMetric: "Silliq UX",
      fullstackTag: "Full-Stack Dasturchi",
      speedCoderTag: "Tezkor Koder",
      location: "Toshkent / Masofaviy",
      openToRoles: "Takliflarga ochiq",
      codingVelocity: "Kodlash Tezligi",
      wpmPrecision: "130+ WPM Aniqlik",
      interactiveGraphics: "Interaktiv Grafika",
      graphicsSub: "Next.js • Three.js",
    },
    about: {
      badge: "KOD ORTIDAGI MUHANDIS",
      titlePrefix: "Yuksak Mahorat:",
      titleHighlight: "Tezlik, Ishtiyoq va Aniqlik",
      subtitle:
        "Yuqori tezlikdagi dasturlash, qiziqarli foydalanuvchi interfeyslari va mustahkam zamonaviy dasturiy arxitekturalar uyg'unligiga intiluvchi IT dasturchi. Murakkab texnik muammolarni nafis, tezkor veb yechimlarga aylantiraman.",
      card1: {
        title: "Tezkor va Aniq Kodlash",
        subtitle: "Yuqori darajadagi klaviatura tezligi",
        tabStream: "Oqim",
        tabHUD: "HUD",
        bio: "99.4% aniqlik bilan daqiqasiga 130+ so'z terish tezligiga erishish. Ushbu klaviatura mahorati g'oyalarni darhol kodga aylantirish, klaviatura kombinatsiyalari bilan boshqarish va tizimlarni loyihalashda maksimal qulaylik yaratadi.",
        liveTelemetry: "JONLI TELEMETRIYA",
        peakWpm: "138 WPM CHO'QQI",
        avgWpm: "O'rtacha WPM",
        accuracy: "Aniqlik",
        latency: "Kechikish",
        tapToPulse: "Sinab ko'rish:",
        keystrokesTested: "Bosilgan tugmalar:",
        workflowEditor: "Neovim / VSCode Supercharged",
        workflowNav: "Vim klavishalari + Maxsus makroslar",
        workflowVelocity: "Darhol refaktoring & Nol kechikish",
      },
      card2: {
        title: "Zamonaviy Full-Stack Mahorati",
        subtitle: "Ilg'or Veb Arxitekturasi",
        bio: "Zamonaviy TypeScript ekotizimida ixtisoslashgan: serverda render qilish tezligi uchun Next.js App Router, 3D vizual effektlar uchun Three.js & GLSL, moslashuvchan dizayn uchun Tailwind CSS va Convex & Supabase kabi zamonaviy bulutli ma'lumotlar bazalari.",
        traits: {
          nextjs: {
            title: "Next.js App Router",
            desc: "Server komponentlari, streaming va SSR",
          },
          threejs: {
            title: "Three.js & WebGL",
            desc: "Interaktiv 3D muhitlar",
          },
          tailwind: {
            title: "Tailwind & Motion",
            desc: "60fps animatsiya fizikasi",
          },
          cloud: {
            title: "Bulut & Real-vaqt",
            desc: "Supabase, Convex va WebSockets",
          },
        },
        lighthouse:
          "Nol layout siljishi, 99+ Lighthouse unumdorlik standartlari",
      },
      card3: {
        title: "Interaktiv UI/UX va AI Avtomatlashtirish",
        subtitle: "Yangi Avlod Dasturchi Ish Oqimi",
        bio: "Yaxshi dasturiy ta'minot tirik tuyulishi kerak. Interfeyslarni chaqqon va yoqimli qiladigan nozik fizika, mikro-harakatlar va animatsiyalarga alohida e'tibor beraman. Murakkab loyihalarni bir necha oy emas, balki bir necha kun ichida yetkazib berish uchun avtomatlashtirilgan CI/CD va zamonaviy AI vositalaridan foydalanaman.",
        motionTitle: "Harakat Xoreografiyasi",
        motionDesc: "Prujina fizikasi va imo-ishoralar",
        aiTitle: "AI Yordamidagi Ish Oqimi",
        aiDesc: "Avtomatlashtirilgan testlar va benchmarklar",
        a11yTitle: "Qulaylik va Semantika",
        a11yDesc: "WCAG talablariga mos va SEO tayyor",
      },
      card4: {
        title: "Dasturchi Ish Joyi",
        subtitle: "G'oyalar Haqiqatga Aylanadigan Joy",
        badge: "⚡ Maxsus Mexanik 65% + Ultra-Wide 4K",
        osLabel: "OS",
        osValue: "Arch / Linux & Win",
        switchesLabel: "KLAVISHALAR",
        switchesValue: "Chiziqli 45g moylangan",
        workflowLabel: "ISH OQIMI",
        workflowValue: "Tmux + Neovim",
      },
    },
    skills: {
      badge: "ARSENAL VA IMKONIYATLAR",
      titlePrefix: "Zamonaviy Texnologiyalar va",
      titleHighlight: "Asosiy Ko'nikmalar",
      subtitle:
        "Tezkor, vizual jihatdan jozibali va barqaror miqyoslanadigan raqamli mahsulotlarni yaratish uchun puxta tanlangan vositalar.",
      tabs: {
        all: "Barcha texnologiyalar",
        frontend: "Frontend va 3D",
        backend: "Backend va Bulut",
        tools: "Dasturlash Vositalari",
      },
      proficiency: "Daraja",
      level: "Daraja",
      dailyProduction: "Kundalik amaliyotda",
      activeEcosystem: "Faol Ekotizim:",
      items: {
        "Next.js (App Router)": {
          name: "Next.js (App Router)",
          experience: "Amaliy Tajriba",
          highlight:
            "Server komponentlari, streaming SSR, parallel yo'nalishlar va Turbopack",
        },
        "React 19 & TypeScript": {
          name: "React 19 & TypeScript",
          experience: "Asosiy Ixtisoslik",
          highlight:
            "Qat'iy tip xavfsizligi, maxsus hooklar, concurrent rendering va actions",
        },
        "Three.js & WebGL": {
          name: "Three.js & WebGL",
          experience: "Kreativ 3D",
          highlight:
            "Maxsus GLSL shaderlari, kamera boshqaruvi, zarrachalar va fizika",
        },
        "Tailwind CSS v4": {
          name: "Tailwind CSS v4",
          experience: "Dizayn Tizimlari",
          highlight:
            "Glassmorphism, cyber estetika, moslashuvchan tipografiya va detallar",
        },
        "Framer Motion": {
          name: "Framer Motion",
          experience: "Kinetik UI",
          highlight:
            "Layout animatsiyalari, imo-ishoralar, scroll triggerlar va xoreografiya",
        },
        "Node.js & Edge APIs": {
          name: "Node.js & Edge APIs",
          experience: "Yuqori Unumdorlik",
          highlight:
            "Serverless funksiyalar, Edge runtime, rate limiting va mikroservislar",
        },
        "Supabase & PostgreSQL": {
          name: "Supabase & PostgreSQL",
          experience: "Relyatsion Quvvat",
          highlight:
            "Row-level security, real-vaqt obunalari, vector search va saqlash",
        },
        "Convex & Realtime State": {
          name: "Convex & Realtime State",
          experience: "Tezkor Sinxronizatsiya",
          highlight:
            "Avtomatik reaktivlik, end-to-end tiplar, qulay mutatsiyalar",
        },
        "REST & WebSockets": {
          name: "REST & WebSockets",
          experience: "Kam Kechikish",
          highlight:
            "Ikki tomonlama oqimlar, yurak urishi telemetriyasi, ishonchli arxitektura",
        },
        "Git & Monorepo Tools": {
          name: "Git & Monorepo Tools",
          experience: "Ish Oqimi Nazorati",
          highlight:
            "Atomik commitlar, interaktiv rebase, GitHub Actions CI/CD jarayonlari",
        },
        "Neovim & Terminal CLI": {
          name: "Neovim & Terminal CLI",
          experience: "Tezkor Oqim",
          highlight:
            "130+ WPM tezlik, tmux multipleksatsiyasi, Lua sozlamalari va hotkeylar",
        },
        "AI Developer Tooling": {
          name: "AI Developer Tooling",
          experience: "Katta Kuchaytirgich",
          highlight:
            "LLM prompt zanjirlari, avtonom agentlar, kod generatorlari va QA",
        },
        "Docker & Linux Systems": {
          name: "Docker & Linux Systems",
          experience: "Konteynerlashtirish",
          highlight:
            "Ko'p bosqichli buildlar, shell avtomatizatsiyasi va barqaror deploy",
        },
      },
    },
    projects: {
      badge: "LOYIHALAR VITRINASI",
      titlePrefix: "Saralangan Loyihalar va",
      titleHighlight: "Kreativ Muhandislik",
      subtitle:
        "Zamonaviy standartlar asosida yaratilgan full-stack ilovalar, 3D interaktiv tajribalar va yuqori unumdorlikdagi vositalar to'plami.",
      quickSpecs: "Tafsilotlar",
      liveDemo: "Jonli Demo",
      code: "Kod",
      deepArchitecture: "Chuqur Arxitektura Tahlili",
      viewGithub: "GitHub'da ko'rish",
      launchLiveDemo: "Demoni ishga tushirish",
      items: {
        styping: {
          id: "styping",
          title: "styping.uz: Tezkor Yozish Platformasi",
          tagline: "Tezkor Terish va Dasturchilar Uchun Benchmark Platformasi",
          description:
            "Ko'r-ko'rona tez yozish va terish mahoratini oshirish uchun mo'ljallangan zamonaviy platforma. Jonli WPM telemetriyasi, nol kechikishdagi qayd va global reyting tizimi.",
          detailedStory:
            "styping.uz — o'zbek tilida va dasturlash tillarida tezkor yozish (touch typing) mahoratini rivojlantirishga qaratilgan yuqori tezlikdagi platforma. Next.js App Router yordamida <1ms kechikish bilan klavishlar bosilishini aniqlaydi. Foydalanuvchilar o'z WPM tezligi, aniqlik tahlili va yutuqlarini real vaqt rejimida kuzatishi mumkin.",
          badge: "Tezkor Dastur",
          metrics: [
            { label: "Kechikish", value: "<1ms" },
            { label: "Cho'qqi WPM", value: "142+" },
            { label: "Aniqlik", value: "99.4%" },
          ],
        },
        novasphere: {
          id: "novasphere",
          title: "NovaSphere 3D Ko'rgazmasi",
          tagline: "WebGL va Three.js Yordamidagi Interaktiv Vizualizator",
          description:
            "Maxsus GLSL fragment shaderlari, protsedurali yoritish, orbit fizikasi va barqaror 60 FPS kadrlar tezligida ishlovchi futuristik 3D mahsulot taqdimoti.",
          detailedStory:
            "Brauzerda 3D grafikaning eng yuqori chegaralarini ko'rsatish uchun yaratilgan. Three.js, React Three Fiber va raymarching shaderlaridan foydalanadi. Foydalanuvchilarga murakkab CAD modellarini real vaqtda ko'rish imkonini beradi.",
          badge: "Interaktiv 3D",
          metrics: [
            { label: "Kadr chastotasi", value: "60 FPS" },
            { label: "Nuqtalar", value: "124K" },
            { label: "Draw Calls", value: "14" },
          ],
        },
        aetherduel: {
          id: "aetherduel",
          title: "AetherDuel: Kiber Karta O'yini",
          tagline: "Protsedurali Vizualga Ega Taktik AI Karta Jangi",
          description:
            "Algoritmik AI raqiblari, Framer Motion karta fizikasi, zarrachalar kaskadi va chaqqon harakatlarga ega qadam-baqadam kiberpank karta o'yini.",
          detailedStory:
            "Next.js va Convex real-vaqt backend tizimida qurilgan. O'yinchilar 30 kartali noyob kiber to'plamlarni shakllantirib, evristik qaror daraxtlari asosida ishlaydigan neyron AI modellariga qarshi taktik jang olib boradilar.",
          badge: "Veb O'yin / AI",
          metrics: [
            { label: "AI Qarori", value: "40ms" },
            { label: "Faol Kartalar", value: "120+" },
            { label: "Sinxronizatsiya", value: "15ms" },
          ],
        },
      },
    },
    timeline: {
      badge: "RIVOJLANISH VA BOSQICHLAR",
      titlePrefix: "Interaktiv Yo'l va",
      titleHighlight: "Texnologik Rivojlanish",
      subtitle:
        "Texnik yutuqlar, arxitektura pog'onalari va zamonaviy veb-muhandislikni o'rganishga bo'lgan doimiy intilish.",
      items: [
        {
          year: "2026",
          quarter: "Hozirgi vaqt",
          title: "Yangi Avlod 3D & AI Veb Ilovalari Arxitekturasi",
          role: "Full-Stack & Kreativ Muhandislik",
          description:
            "Next.js 16 (App Router va Turbopack), maxsus WebGL GLSL shaderlari va avtonom AI dasturchi vositalari bilan veb imkoniyatlarini yangi bosqichga ko'tarish. 60fps grafikalar va tezkor yuklanishga urg'u berish.",
          achievements: [
            "NovaSphere 3D interaktiv ko'rgazmasini maxsus GLSL shaderlari bilan yaratdi",
            "WebGL render jarayonini <15 draw call darajasigacha optimallashtirdi",
            "Kadrlar yo'qolishisiz real-vaqt WebSocket sinxronizatsiyasini yo'lga qo'ydi",
          ],
        },
        {
          year: "2025",
          quarter: "Yutuq",
          title: "Yuqori Tezlikdagi Kodlash va Terish Bo'yicha Mukammallik",
          role: "Tezkor Koder & Ergonomika Mutaxassisi",
          description:
            "Musobaqa platformalarida 99.4% aniqlik bilan barqaror 130+ WPM terish ko'rsatkichiga erishdi. Butun ish muhitini Neovim, terminal multipleksatsiyasi va klaviatura asosidagi boshqaruvga moslashtirdi.",
          achievements: [
            "styping.uz tezkor yozish telemetriya trenajyorini yaratdi va ishga tushirdi",
            "Global ko'r-ko'rona terish platformalarida eng kuchli 1% talabalar safiga kirdi",
            "Avtomatlashtirilgan skriptlar va terminal ish oqimlarini ishlab chiqdi",
          ],
        },
        {
          year: "2024",
          quarter: "O'sish",
          title: "Zamonaviy React & Serverless Ekotizimiga Chuqur Sho'ng'ish",
          role: "Full-Stack Veb Arxitektor",
          description:
            "To'liq App Router paradigmasi, server komponentlari va Supabase, Convex hamda Edge runtime kabi serverless platformalarga o'tdi. Bir nechta yuqori yuklamali veb-ilovalarni yaratdi.",
          achievements: [
            "AetherDuel kiber taktik karta o'yinini reaktiv multiplayer bilan yaratdi",
            "Ko'plab loyihalarda Row Level Security va Edge funksiyalarini muvaffaqiyatli joriy etdi",
            "Framer Motion bilan silliq mikro-harakatlar va animatsiya xoreografiyasini o'rgandi",
          ],
        },
        {
          year: "2023",
          quarter: "Kengayish",
          title: "Xakatonlar, Ochiq Kod va Tezkor Prototip Yaratish",
          role: "Kreativ Frontend Dasturchi",
          description:
            "Tezkor jamoaviy xakatonlarda qatnashib, 48 soatlik sprintlarda to'liq ishlovchi MVP-larni yaratdi. Moslashuvchan dizayn tizimlari va foydalanuvchilar uchun qulay prototiplarga e'tibor qaratdi.",
          achievements: [
            "Interaktiv veb-dizayn va frontend musobaqalarida yetakchi o'rinlarni egalladi",
            "Ochiq manbali hamjamiyat loyihalariga komponentlar va qo'llanmalar taqdim etdi",
            "Zamonaviy holat boshqaruvi andozalarini (Zustand, React Query) chuqur o'rgandi",
          ],
        },
        {
          year: "2022",
          quarter: "Boshlanish",
          title: "Dasturlash Yo'lining Boshlanishi",
          role: "Intiluvchan Dasturiy Ta'minot Muhandisi",
          description:
            "Koddagi birinchi qadamlar. Kompyuter fanlari asoslari, ma'lumotlar tuzilmalari, algoritmlar va vebning asosiy poydevorlarini chuqur o'rganish.",
          achievements: [
            "Dasturlash va algoritmlar bo'yicha intensiv kurslarni muvaffaqiyatli yakunladi",
            "Noldan 20 dan ortiq moslashuvchan veb-loyihalarni amalga oshirdi",
            "Toza kod tuzilishi va semantik belgilash bo'yicha qat'iy intizomni shakllantirdi",
          ],
        },
      ],
    },
    contact: {
      badge: "ALOQA PROTOKOLI",
      titlePrefix: "Keling, birgalikda",
      titleHighlight: "Noyob Narsalar Yarataylik",
      subtitle:
        "Ilg'or veb-loyiha, yuqori unumdor dastur yoki jamoaga qo'shilish imkoniyati bormi? Xabar qoldiring, muhandislik haqida gaplashamiz.",
      directEmail: "To'g'ridan-to'g'ri Email",
      directPhone: "Telefon Raqam",
      responseWindow: "24 soat ichida javob beriladi",
      phoneAvailability: "Qo'ng'iroq & Telegram orqali bog'lanish",
      callNow: "Qo'ng'iroq",
      copy: "Nusxa",
      copied: "Nusxalandi!",
      telegramDesc: "@said_khujayev",
      telegramAction: "Yozish →",
      instagramDesc: "@my_code.gm",
      instagramAction: "Profil →",
      githubDesc: "Ochiq Kod & Loyihalar",
      githubAction: "Ko'rish →",
      youtubeDesc: "Dasturlash Darslari & Spidranlar",
      youtubeAction: "Tomosha →",
      availability:
        "Katta ta'sirga ega shartnomalar va yetakchi lavozimlarni ko'rib chiqyapman.",
      formTitle: "Xabar Jo'natish",
      formSubtitle: "Quyidagi aloqa ma'lumotlarini to'ldiring",
      nameLabel: "Ismingiz / Nik",
      namePlaceholder: "Azizbek",
      contactLabel: "Email yoki Telegram",
      contactPlaceholder: "@said_khujayev yoki +998 95 859 0550",
      categoryLabel: "Murojaat turi",
      categories: {
        fullstack: "Full-Stack Veb-ilova",
        threejs: "Interaktiv 3D / WebGL Loyiha",
        perf: "Unumdorlik va Tezlikni Oshirish",
        role: "Ish taklifi / Frilans shartnoma",
        collab: "Umumiy hamkorlik",
      },
      messageLabel: "Xabar Matni",
      messagePlaceholder:
        "Loyiha muddati, maqsadi yoki texnik talablari haqida ma'lumot bering...",
      sendButton: "Xabarni jo'natish",
      sendingButton: "Yuborilmoqda...",
      successTitle: "Xabar Qabul Qilindi!",
      successDesc:
        "Rahmat, {name}. Xabaringiz qabul qilindi. Tez orada siz bilan bog'lanaman.",
      sendAnother: "Yana xabar jo'natish",
    },
    footer: {
      bio: "Yangi avlod veb-ilovalari, 3D interaktiv grafika va o'ta chaqqon foydalanuvchi interfeyslarini loyihalashtiruvchi Kreativ Dasturchi va IT Innovator.",
      backToTop: "Yuqoriga qaytish",
      copyright: "© 2026 Saidazim. Next.js va Tailwind CSS bilan yaratilgan.",
      wpmMetric: "130+ WPM Aniqlik",
      layoutMetric: "Nol Layout Siljishi",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      milestones: "Milestones",
      contact: "Contact",
      available: "Available",
      availableLong: "Available for new projects",
      talk: "Let's Talk",
      talkShort: "Talk",
      brandRole: "IT Innovator",
    },
    hero: {
      badge: "Next-Gen Portfolio • 2026 Edition",
      fullName: "Saydullaxo'jayev Saidazim",
      titlePrefix: "Creative Developer &",
      titleHighlight: "IT Innovator",
      typingRoles: [
        "Full-Stack Web Developer",
        "3D & Interactive Web Enthusiast",
        "Typing Master / Speed Coder (130+ WPM)",
        "Next.js & Cloud Architect",
        "Creative UI/UX Engineer",
      ],
      bio: "Crafting ultra-smooth web applications, immersive 3D WebGL interfaces, and high-velocity full-stack architectures. Driven by extreme coding precision, speed typing mastery, and a relentless passion for flawless interactive UX.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      ctaStory: "Read Story",
      wpmMetric: "Peak WPM Speed",
      stackMetric: "Modern Stack",
      uxMetric: "Smooth UX",
      fullstackTag: "Full-Stack Dev",
      speedCoderTag: "Speed Coder",
      location: "Tashkent / Global Remote",
      openToRoles: "Open to roles",
      codingVelocity: "Coding Velocity",
      wpmPrecision: "130+ WPM Precision",
      interactiveGraphics: "Interactive Graphics",
      graphicsSub: "Next.js • Three.js",
    },
    about: {
      badge: "THE ENGINEER BEHIND THE CODE",
      titlePrefix: "Engineering With",
      titleHighlight: "Speed, Passion & Precision",
      subtitle:
        "An ambitious IT developer fascinated by the intersection of high-velocity coding, immersive user interfaces, and robust modern software architecture. I turn complex technical problems into elegant, fluid web realities.",
      card1: {
        title: "Fast & Precision Coding",
        subtitle: "Extreme Keystroke Velocity",
        tabStream: "Stream",
        tabHUD: "HUD",
        bio: "Achieving sustained typing speeds of 130+ words per minute with 99.4% accuracy. This keyboard fluency translates into instant idea-to-code execution, shortcut-driven navigation, and zero cognitive overhead when architecting systems.",
        liveTelemetry: "LIVE TELEMETRY",
        peakWpm: "138 WPM PEAK",
        avgWpm: "Avg WPM",
        accuracy: "Accuracy",
        latency: "Latency",
        tapToPulse: "Tap to pulse:",
        keystrokesTested: "Keystrokes Tested:",
        workflowEditor: "Neovim / VSCode Supercharged",
        workflowNav: "Vim Keybindings + Custom Macros",
        workflowVelocity: "Instant Refactoring & Zero Latency",
      },
      card2: {
        title: "Modern Full-Stack Mastery",
        subtitle: "Cutting-Edge Web Architecture",
        bio: "Specialized in the modern TypeScript ecosystem: Next.js App Router for server-rendered speed, Three.js & GLSL shaders for dimensional visual flair, Tailwind CSS for scalable responsive styling, and modern cloud databases like Convex & Supabase.",
        traits: {
          nextjs: {
            title: "Next.js App Router",
            desc: "Server components, streaming & SSR",
          },
          threejs: {
            title: "Three.js & WebGL",
            desc: "Interactive 3D environments",
          },
          tailwind: {
            title: "Tailwind & Motion",
            desc: "60fps animation physics",
          },
          cloud: {
            title: "Cloud & Realtime",
            desc: "Supabase, Convex & WebSockets",
          },
        },
        lighthouse:
          "Zero layout shift, 99+ Lighthouse performance score standards",
      },
      card3: {
        title: "Interactive UI/UX & AI Automation",
        subtitle: "Next-Gen Developer Flow",
        bio: "Great software feels alive. I obsess over subtle physics, haptic feedback, and micro-interactions that make interfaces feel snappy and satisfying. Leveraging automated CI/CD pipelines and cutting-edge AI developer tooling to ship complex features in days rather than months.",
        motionTitle: "Motion Choreography",
        motionDesc: "Spring Physics & Gestures",
        aiTitle: "AI Assisted Pipelines",
        aiDesc: "Automated Tests & Benchmarks",
        a11yTitle: "Accessibility & Semantics",
        a11yDesc: "WCAG Compliant & SEO Ready",
      },
      card4: {
        title: "Developer Battlestation",
        subtitle: "Where Ideas Become Reality",
        badge: "⚡ Custom Mechanical 65% + Ultra-Wide 4K",
        osLabel: "OS",
        osValue: "Arch / Linux & Win",
        switchesLabel: "SWITCHES",
        switchesValue: "Linear 45g Lubed",
        workflowLabel: "WORKFLOW",
        workflowValue: "Tmux + Neovim",
      },
    },
    skills: {
      badge: "ARSENAL & CAPABILITIES",
      titlePrefix: "Modern Tech Stack &",
      titleHighlight: "Core Proficiencies",
      subtitle:
        "Carefully curated tools for building blazing fast, visually stunning, and reliably scalable digital products.",
      tabs: {
        all: "All Technologies",
        frontend: "Frontend & 3D",
        backend: "Backend & Cloud",
        tools: "Dev Tools & Workflow",
      },
      proficiency: "Proficiency",
      level: "Level",
      dailyProduction: "Daily Production Flow",
      activeEcosystem: "Active Ecosystem:",
      items: {
        "Next.js (App Router)": {
          name: "Next.js (App Router)",
          experience: "Production Mastery",
          highlight:
            "Server Components, Streaming SSR, Parallel Routes & Turbopack",
        },
        "React 19 & TypeScript": {
          name: "React 19 & TypeScript",
          experience: "Core Specialty",
          highlight:
            "Strict type safety, custom hooks, concurrent rendering & actions",
        },
        "Three.js & WebGL": {
          name: "Three.js & WebGL",
          experience: "Creative 3D",
          highlight:
            "Custom GLSL shaders, camera controls, particle systems & physics",
        },
        "Tailwind CSS v4": {
          name: "Tailwind CSS v4",
          experience: "Design Systems",
          highlight:
            "Glassmorphism, cyber aesthetics, responsive typography & micro-details",
        },
        "Framer Motion": {
          name: "Framer Motion",
          experience: "Kinetic UI",
          highlight:
            "Layout animations, gesture recognition, scroll triggers & spring choreography",
        },
        "Node.js & Edge APIs": {
          name: "Node.js & Edge APIs",
          experience: "High Performance",
          highlight:
            "Serverless functions, Edge runtime, rate limiting & microservices",
        },
        "Supabase & PostgreSQL": {
          name: "Supabase & PostgreSQL",
          experience: "Relational Power",
          highlight:
            "Row-level security, realtime subscriptions, vector search & edge storage",
        },
        "Convex & Realtime State": {
          name: "Convex & Realtime State",
          experience: "Instant Sync",
          highlight:
            "Automatic reactivity, end-to-end type sync, zero-boilerplate mutations",
        },
        "REST & WebSockets": {
          name: "REST & WebSockets",
          experience: "Low Latency",
          highlight:
            "Bidirectional streams, heartbeat telemetry, zero packet loss architectures",
        },
        "Git & Monorepo Tools": {
          name: "Git & Monorepo Tools",
          experience: "Workflow Control",
          highlight:
            "Atomic commits, interactive rebases, GitHub Actions CI/CD workflows",
        },
        "Neovim & Terminal CLI": {
          name: "Neovim & Terminal CLI",
          experience: "Speed Flow",
          highlight:
            "130+ WPM typing velocity, tmux multiplexing, Lua configs & hotkeys",
        },
        "AI Developer Tooling": {
          name: "AI Developer Tooling",
          experience: "Force Multiplier",
          highlight:
            "LLM prompt chaining, autonomous agents, code synthesizers & automated QA",
        },
        "Docker & Linux Systems": {
          name: "Docker & Linux Systems",
          experience: "Containerization",
          highlight:
            "Multi-stage builds, shell automation, environment parity & deployment",
        },
      },
    },
    projects: {
      badge: "PORTFOLIO SHOWCASE",
      titlePrefix: "Featured Projects &",
      titleHighlight: "Creative Engineering",
      subtitle:
        "A curated collection of full-stack applications, 3D interactive experiences, and high-performance tools engineered with modern standards.",
      quickSpecs: "Quick Specs",
      liveDemo: "Live Demo",
      code: "Code",
      deepArchitecture: "Deep Architecture Overview",
      viewGithub: "View GitHub",
      launchLiveDemo: "Launch Live Demo",
      items: {
        styping: {
          id: "styping",
          title: "styping.uz: Speed Typing Platform",
          tagline: "Touch-Typing & Velocity Benchmark Platform",
          description:
            "A high-frequency speed typing web platform built for developers and enthusiasts to master touch typing. Features live WPM telemetry, zero-latency keystroke recording, and global rank leaderboards.",
          detailedStory:
            "styping.uz is engineered with Next.js App Router and optimized web architecture to achieve sub-millisecond keystroke latency. Includes customized speed challenges, with comprehensive statistical dashboards capturing raw burst speed, consistency, and typing accuracy.",
          badge: "Featured Speed App",
          metrics: [
            { label: "Latency", value: "<1ms" },
            { label: "WPM Peak", value: "142+" },
            { label: "Accuracy", value: "99.4%" },
          ],
        },
        novasphere: {
          id: "novasphere",
          title: "NovaSphere 3D Showroom",
          tagline: "Immersive WebGL & Three.js Visualizer",
          description:
            "A futuristic 3D product showcase powered by custom GLSL fragment shaders, procedural lighting, orbit physics, and high-performance geometry instancing at a locked 60 FPS.",
          detailedStory:
            "Created to push the boundaries of browser-based 3D graphics. Utilizes Three.js, React Three Fiber, and custom raymarching shaders. Features interactive camera pathing, bloom post-processing, and material configurator allowing users to examine complex CAD models in real-time.",
          badge: "Interactive 3D",
          metrics: [
            { label: "Framerate", value: "60 FPS" },
            { label: "Vertices", value: "124K" },
            { label: "Draw Calls", value: "14" },
          ],
        },
        aetherduel: {
          id: "aetherduel",
          title: "AetherDuel: Cyber Deckbuilder",
          tagline: "Tactical AI Card Battler with Procedural Visuals",
          description:
            "A turn-based cyberpunk deck-building web game featuring algorithmic AI opponents, kinetic Framer Motion card interactions, particle cascades, and responsive turn resolution.",
          detailedStory:
            "Built with Next.js and Convex realtime backend. Players customize dynamic 30-card cyber decks with unique elemental synergies, executing offensive overclocks and quantum defense tactics against neural AI models programmed with heuristic decision trees.",
          badge: "Web Game / AI",
          metrics: [
            { label: "AI Decision", value: "40ms" },
            { label: "Cards Active", value: "120+" },
            { label: "Sync Latency", value: "15ms" },
          ],
        },
      },
    },
    timeline: {
      badge: "PROGRESSION & MILESTONES",
      titlePrefix: "Interactive Journey &",
      titleHighlight: "Tech Evolution",
      subtitle:
        "A continuous progression of technical benchmarks, architectural leaps, and passion for mastering modern web engineering.",
      items: [
        {
          year: "2026",
          quarter: "Present",
          title: "Architecting Next-Gen 3D & AI Web Applications",
          role: "Full-Stack & Creative Engineering",
          description:
            "Pushing the bleeding edge of the web with Next.js 16 (App Router & Turbopack), custom WebGL GLSL shaders, and autonomous AI-assisted developer workflows. Focusing on sub-second load times and immersive 60fps graphics.",
          achievements: [
            "Engineered NovaSphere 3D interactive showroom with custom GLSL shaders",
            "Optimized production WebGL rendering pipelines down to <15 draw calls",
            "Architected real-time WebSocket state synchronizations with zero frame drops",
          ],
        },
        {
          year: "2025",
          quarter: "Milestone",
          title: "Mastered High-Velocity Development & Typing Excellence",
          role: "Speed Coder & Ergonomics Specialist",
          description:
            "Achieved a sustained 130+ WPM typing benchmark with 99.4% accuracy across competitive typing platforms. Rebuilt entire development flow around Neovim, terminal multiplexing, and keyboard-first system navigation.",
          achievements: [
            "Built and launched styping.uz speed typing platform",
            "Reached top 1% benchmark on global touch typing & code sprint platforms",
            "Engineered automated script setups and customized terminal workflows",
          ],
        },
        {
          year: "2024",
          quarter: "Growth",
          title: "Deep Dive into Modern React & Serverless Ecosystem",
          role: "Full-Stack Web Architect",
          description:
            "Transitioned to full App Router paradigms, server components, and modern serverless platforms like Supabase, Convex, and Edge runtime. Built several high-concurrency web applications.",
          achievements: [
            "Created AetherDuel cyber tactical card game with reactive multiplayer",
            "Implemented Row Level Security and Edge functions across multiple projects",
            "Mastered Framer Motion layout orchestration and fluid micro-interactions",
          ],
        },
        {
          year: "2023",
          quarter: "Expansion",
          title: "Hackathons, Open Source & Rapid Prototyping",
          role: "Creative Frontend Developer",
          description:
            "Participated in fast-paced collaborative sprints, building functional MVPs in 48-hour sprints. Focused on responsive design systems, accessibility, and interactive UI prototypes.",
          achievements: [
            "Placed top tier in interactive web design and front-end challenges",
            "Contributed UI components and documentation to community open-source repos",
            "Learned state management patterns (Redux, Zustand, React Query)",
          ],
        },
        {
          year: "2022",
          quarter: "Genesis",
          title: "Genesis of the Coding Journey",
          role: "Aspiring Software Engineer",
          description:
            "Wrote first lines of code. Deep dived into fundamental Computer Science concepts, data structures, algorithms, semantic HTML, and the core building blocks of the web.",
          achievements: [
            "Completed intensive foundational CS & algorithm curriculums",
            "Built first 20+ responsive web projects from scratch",
            "Cultivated deep discipline for clean code structure and semantic markup",
          ],
        },
      ],
    },
    contact: {
      badge: "INITIATE PROTOCOL",
      titlePrefix: "Let's Build Something",
      titleHighlight: "Extraordinary",
      subtitle:
        "Have a cutting-edge web project, high-performance application, or an ambitious team opportunity? Drop a message and let's talk engineering.",
      directEmail: "Direct Email",
      directPhone: "Direct Phone",
      responseWindow: "Response within 24 hours",
      phoneAvailability: "Available for calls & Telegram",
      callNow: "Call",
      copy: "Copy",
      copied: "Copied!",
      telegramDesc: "@said_khujayev",
      telegramAction: "Chat →",
      instagramDesc: "@my_code.gm",
      instagramAction: "Profile →",
      githubDesc: "Open Source & Code",
      githubAction: "Explore →",
      youtubeDesc: "Dev Tutorials & Speedruns",
      youtubeAction: "Watch →",
      availability:
        "Actively exploring high-impact contracts & senior roles.",
      formTitle: "Dispatch a Message",
      formSubtitle: "Fill out the transmission parameters below",
      nameLabel: "Your Name / Handle",
      namePlaceholder: "Alex Rivera",
      contactLabel: "Email or Telegram",
      contactPlaceholder: "@said_khujayev or alex@domain.com",
      categoryLabel: "Inquiry Category",
      categories: {
        fullstack: "Full-Stack Web Application",
        threejs: "Interactive 3D / WebGL Experience",
        perf: "Performance Tuning & Speed Optimization",
        role: "Engineering Role / Freelance Contract",
        collab: "General Collaboration",
      },
      messageLabel: "Message Transmission",
      messagePlaceholder:
        "Share details regarding your timeline, vision, or technical requirements...",
      sendButton: "Send Message Transmission",
      sendingButton: "Routing Signal...",
      successTitle: "Transmission Received!",
      successDesc:
        "Thank you, {name}. Your dispatch has landed in my priority queue. I will reply to you shortly.",
      sendAnother: "Send Another Message",
    },
    footer: {
      bio: "Creative Developer & IT Innovator architecting next-generation web apps, 3D interactive graphics, and ultra-responsive user interfaces.",
      backToTop: "Back to top",
      copyright: "© 2026 Saidazim. Built with Next.js & Tailwind CSS.",
      wpmMetric: "130+ WPM Precision",
      layoutMetric: "Zero Layout Shift",
    },
  },
  ru: {
    nav: {
      about: "О себе",
      skills: "Навыки",
      projects: "Проекты",
      milestones: "Этапы",
      contact: "Контакты",
      available: "Доступен",
      availableLong: "Открыт для новых проектов",
      talk: "Обсудить проект",
      talkShort: "Связь",
      brandRole: "IT Инноватор",
    },
    hero: {
      badge: "Портфолио Нового Поколения • 2026",
      fullName: "Saydullaxo'jayev Saidazim",
      titlePrefix: "Креативный разработчик &",
      titleHighlight: "IT Инноватор",
      typingRoles: [
        "Full-Stack веб-разработчик",
        "Энтузиаст 3D и интерактивного веба",
        "Скоростной кодер (130+ WPM Точность)",
        "Архитектор Next.js и облачных решений",
        "Креативный UI/UX инженер",
      ],
      bio: "Создание ультраплавных веб-приложений, иммерсивных 3D WebGL интерфейсов и высокоскоростных full-stack архитектур. Высочайшая точность кода, мастерство скоростной печати и страсть к безупречному интерактивному UX.",
      ctaProjects: "Посмотреть проекты",
      ctaContact: "Связаться",
      ctaStory: "Читать историю",
      wpmMetric: "Пиковая скорость WPM",
      stackMetric: "Современный стек",
      uxMetric: "Плавный UX",
      fullstackTag: "Full-Stack Разработчик",
      speedCoderTag: "Скоростной кодер",
      location: "Ташкент / Удаленно",
      openToRoles: "Открыт к предложениям",
      codingVelocity: "Скорость Кодинга",
      wpmPrecision: "130+ WPM Точность",
      interactiveGraphics: "Интерактивная Графика",
      graphicsSub: "Next.js • Three.js",
    },
    about: {
      badge: "ИНЖЕНЕР ЗА КОДОМ",
      titlePrefix: "Инженерия со",
      titleHighlight: "Скоростью, Страстью и Точностью",
      subtitle:
        "Амбициозный IT-разработчик, увлеченный пересечением высокоскоростного кодинга, иммерсивных интерфейсов и надежной архитектуры. Превращаю сложные технические задачи в элегантную цифровую реальность.",
      card1: {
        title: "Скоростной и Точный Кодинг",
        subtitle: "Экстремальная скорость печати",
        tabStream: "Поток",
        tabHUD: "HUD",
        bio: "Стабильная скорость печати свыше 130 слов в минуту при точности 99.4%. Свободное владение клавиатурой обеспечивает мгновенную реализацию идей в коде, быструю навигацию без задержек.",
        liveTelemetry: "ЖИВАЯ ТЕЛЕМЕТРИЯ",
        peakWpm: "138 WPM ПИК",
        avgWpm: "Средний WPM",
        accuracy: "Точность",
        latency: "Задержка",
        tapToPulse: "Кликните для теста:",
        keystrokesTested: "Протестировано кликов:",
        workflowEditor: "Neovim / Прокачанный VSCode",
        workflowNav: "Vim хоткеи + Пользовательские макросы",
        workflowVelocity: "Мгновенный рефакторинг & Ноль задержек",
      },
      card2: {
        title: "Мастерство Современного Full-Stack",
        subtitle: "Передовая Веб-Архитектура",
        bio: "Специализация на современной экосистеме TypeScript: Next.js App Router для молниеносного SSR, Three.js и шейдеры GLSL для визуальных эффектов, Tailwind CSS для отзывчивого стиля и облачные базы Convex и Supabase.",
        traits: {
          nextjs: {
            title: "Next.js App Router",
            desc: "Серверные компоненты, стриминг и SSR",
          },
          threejs: {
            title: "Three.js & WebGL",
            desc: "Интерактивные 3D-окружения",
          },
          tailwind: {
            title: "Tailwind & Motion",
            desc: "Анимации с физикой 60fps",
          },
          cloud: {
            title: "Облако & Realtime",
            desc: "Supabase, Convex и WebSockets",
          },
        },
        lighthouse:
          "Ноль сдвигов макета, стандарты производительности 99+ по Lighthouse",
      },
      card3: {
        title: "Интерактивный UI/UX и ИИ-Автоматизация",
        subtitle: "Рабочий Процесс Нового Поколения",
        bio: "Качественное ПО ощущается живым. Я уделяю внимание микро-взаимодействиям и физике анимаций, которые делают интерфейс отзывчивым. Использую CI/CD и передовые инструменты искусственного интеллекта для быстрой разработки.",
        motionTitle: "Хореография Движений",
        motionDesc: "Физика пружин и жесты",
        aiTitle: "ИИ-Ассистированные Процессы",
        aiDesc: "Автоматические тесты и бенчмарки",
        a11yTitle: "Доступность и Семантика",
        a11yDesc: "WCAG стандарты и готово к SEO",
      },
      card4: {
        title: "Рабочее Место Разработчика",
        subtitle: "Где Идеи Становятся Реальностью",
        badge: "⚡ Кастомная Механика 65% + Ultra-Wide 4K",
        osLabel: "OS",
        osValue: "Arch / Linux & Win",
        switchesLabel: "ПЕРЕКЛЮЧАТЕЛИ",
        switchesValue: "Линейные 45g смазанные",
        workflowLabel: "ПРОЦЕСС",
        workflowValue: "Tmux + Neovim",
      },
    },
    skills: {
      badge: "АРСЕНАЛ И ВОЗМОЖНОСТИ",
      titlePrefix: "Современный Стек и",
      titleHighlight: "Ключевые Навыки",
      subtitle:
        "Тщательно подобранные инструменты для создания молниеносных, визуально привлекательных и надежных цифровых продуктов.",
      tabs: {
        all: "Все технологии",
        frontend: "Frontend и 3D",
        backend: "Backend и Облако",
        tools: "Инструменты разработки",
      },
      proficiency: "Уровень",
      level: "Уровень",
      dailyProduction: "Ежедневная разработка",
      activeEcosystem: "Активная Экосистема:",
      items: {
        "Next.js (App Router)": {
          name: "Next.js (App Router)",
          experience: "Продакшн Мастерство",
          highlight:
            "Серверные компоненты, потоковый SSR, параллельные маршруты и Turbopack",
        },
        "React 19 & TypeScript": {
          name: "React 19 & TypeScript",
          experience: "Основная Специализация",
          highlight:
            "Строгая типизация, кастомные хуки, параллельный рендеринг и actions",
        },
        "Three.js & WebGL": {
          name: "Three.js & WebGL",
          experience: "Креативное 3D",
          highlight:
            "Кастомные шейдеры GLSL, управление камерой, системы частиц и физика",
        },
        "Tailwind CSS v4": {
          name: "Tailwind CSS v4",
          experience: "Дизайн-системы",
          highlight:
            "Глассморфизм, кибер-эстетика, адаптивная типографика и детали",
        },
        "Framer Motion": {
          name: "Framer Motion",
          experience: "Кинетический UI",
          highlight:
            "Layout-анимации, распознавание жестов, триггеры скролла и хореография",
        },
        "Node.js & Edge APIs": {
          name: "Node.js & Edge APIs",
          experience: "Высокая Скорость",
          highlight:
            "Бессерверные функции, Edge runtime, rate limiting и микросервисы",
        },
        "Supabase & PostgreSQL": {
          name: "Supabase & PostgreSQL",
          experience: "Реляционная Мощь",
          highlight:
            "Безопасность на уровне строк (RLS), подписки в реальном времени, векторный поиск",
        },
        "Convex & Realtime State": {
          name: "Convex & Realtime State",
          experience: "Мгновенная Синхронизация",
          highlight:
            "Автоматическая реактивность, сквозная типизация, удобные мутации",
        },
        "REST & WebSockets": {
          name: "REST & WebSockets",
          experience: "Минимальный Пинг",
          highlight:
            "Двунаправленные потоки данных, телеметрия, архитектуры без потерь пакетов",
        },
        "Git & Monorepo Tools": {
          name: "Git & Monorepo Tools",
          experience: "Контроль Процесса",
          highlight:
            "Атомарные коммиты, интерактивный rebase, CI/CD процессы GitHub Actions",
        },
        "Neovim & Terminal CLI": {
          name: "Neovim & Terminal CLI",
          experience: "Быстрый Поток",
          highlight:
            "Скорость печати 130+ WPM, мультиплексор tmux, конфигурация на Lua",
        },
        "AI Developer Tooling": {
          name: "AI Developer Tooling",
          experience: "Умножитель Продуктивности",
          highlight:
            "Цепочки промптов LLM, автономные агенты, генераторы кода и авто-QA",
        },
        "Docker & Linux Systems": {
          name: "Docker & Linux Systems",
          experience: "Контейнеризация",
          highlight:
            "Многоэтапные сборки, автоматизация shell, стабильный деплой",
        },
      },
    },
    projects: {
      badge: "ПОРТФОЛИО ПРОЕКТОВ",
      titlePrefix: "Избранные Проекты и",
      titleHighlight: "Креативная Инженерия",
      subtitle:
        "Коллекция full-stack приложений, интерактивного 3D и высокопроизводительных инструментов, созданных по современным стандартам.",
      quickSpecs: "Спецификация",
      liveDemo: "Демо",
      code: "Код",
      deepArchitecture: "Глубокий Обзор Архитектуры",
      viewGithub: "Смотреть GitHub",
      launchLiveDemo: "Запустить Демо",
      items: {
        styping: {
          id: "styping",
          title: "styping.uz: Скоростная печать",
          tagline: "Тренажер слепой печати и бенчмарк скорости",
          description:
            "Современная веб-платформа для тренировки слепой печати и скоростного набора. Живая телеметрия WPM, нулевая задержка ввода и таблица лидеров.",
          detailedStory:
            "styping.uz разработана на Next.js App Router с ультранизкой задержкой отклика (<1мс). Включает специальные тренажеры, отслеживание пиковой скорости WPM и точную аналитику нажатия клавиш.",
          badge: "Скоростное Приложение",
          metrics: [
            { label: "Пинг", value: "<1ms" },
            { label: "Пик WPM", value: "142+" },
            { label: "Точность", value: "99.4%" },
          ],
        },
        novasphere: {
          id: "novasphere",
          title: "NovaSphere 3D Шоурум",
          tagline: "Иммерсивный Визуализатор на WebGL и Three.js",
          description:
            "Футуристическая 3D демонстрация продуктов с кастомными фрагментными шейдерами GLSL, процедурным освещением и стабильными 60 FPS.",
          detailedStory:
            "Создан для демонстрации возможностей трехмерной графики в веб-браузере. Использует Three.js, React Three Fiber и raymarching шейдеры для детализированного просмотра CAD моделей в реальном времени.",
          badge: "Интерактивное 3D",
          metrics: [
            { label: "Фреймрейт", value: "60 FPS" },
            { label: "Вершины", value: "124K" },
            { label: "Draw Calls", value: "14" },
          ],
        },
        aetherduel: {
          id: "aetherduel",
          title: "AetherDuel: Кибер Колодострой",
          tagline: "Тактический Карточный Баттлер с ИИ и Эффектами",
          description:
            "Пошаговая киберпанк карточная игра с алгоритмическими ИИ-противниками, кинетической физикой карт Framer Motion и динамическими частицами.",
          detailedStory:
            "Создана на Next.js и бэкенде реального времени Convex. Игроки собирают динамичные колоды из 30 кибер-карт, проводя тактические дуэли против нейросетевых ИИ-моделей.",
          badge: "Веб-игра / ИИ",
          metrics: [
            { label: "Решение ИИ", value: "40ms" },
            { label: "Карт в игре", value: "120+" },
            { label: "Синхронизация", value: "15ms" },
          ],
        },
      },
    },
    timeline: {
      badge: "ПРОГРЕСС И ЭТАПЫ",
      titlePrefix: "Интерактивный Путь и",
      titleHighlight: "Техническая Эволюция",
      subtitle:
        "Непрерывный прогресс технических достижений, архитектурных решений и мастерства веб-разработки.",
      items: [
        {
          year: "2026",
          quarter: "Настоящее время",
          title: "Архитектура Веб-Приложений 3D и ИИ Нового Поколения",
          role: "Full-Stack & Креативная Инженерия",
          description:
            "Разработка передовых решений на Next.js 16 (App Router и Turbopack), кастомных GLSL шейдерах WebGL и автономных ИИ-инструментах. Упор на скорость загрузки и графику 60fps.",
          achievements: [
            "Создал 3D интерактивный шоурум NovaSphere с кастомными шейдерами GLSL",
            "Оптимизировал конвейер рендеринга WebGL до <15 вызовов отрисовки",
            "Спроектировал синхронизацию состояния через WebSockets без просадок кадров",
          ],
        },
        {
          year: "2025",
          quarter: "Достижение",
          title: "Мастерство Скоростной Разработки и Высокоточный Кодинг",
          role: "Скоростной Кодер & Специалист по Эргономике",
          description:
            "Достиг стабильной скорости печати 130+ WPM с точностью 99.4% на соревновательных платформах. Перестроил рабочий процесс вокруг Neovim, tmux и управления с клавиатуры.",
          achievements: [
            "Разработал и запустил платформу скоростной печати styping.uz",
            "Вошел в топ-1% мировых рейтингов по слепой печати и спринту кода",
            "Создал автоматизированные скрипты и оптимизированные терминальные пайплайны",
          ],
        },
        {
          year: "2024",
          quarter: "Рост",
          title: "Погружение в Современный React и Serverless Экосистему",
          role: "Full-Stack Веб-Архитектор",
          description:
            "Переход на архитектуру App Router, серверные компоненты и платформы Supabase, Convex и Edge runtime. Разработка масштабируемых веб-приложений.",
          achievements: [
            "Создал киберпанк карточную игру AetherDuel с реактивным мультиплеером",
            "Реализовал Row Level Security и функции Edge в нескольких проектах",
            "Освоил оркестрацию анимаций и микро-взаимодействий во Framer Motion",
          ],
        },
        {
          year: "2023",
          quarter: "Расширение",
          title: "Хакатоны, Open Source и Быстрое Прототипирование",
          role: "Креативный Frontend Разработчик",
          description:
            "Участие в командных хакатонах, создание рабочих MVP за 48 часов. Фокус на дизайн-системах, доступности интерфейсов и прототипах.",
          achievements: [
            "Занял призовые места в соревнованиях по интерактивному веб-дизайну и фронтенду",
            "Внес вклад в компоненты и документацию проектов с открытым исходным кодом",
            "Глубоко изучил паттерны управления состоянием (Zustand, React Query)",
          ],
        },
        {
          year: "2022",
          quarter: "Старт",
          title: "Начало Пути в Разработке",
          role: "Начинающий Инженер ПО",
          description:
            "Первые строки кода. Изучение фундаментальных концепций Computer Science, структур данных, алгоритмов и базовых строительных блоков веба.",
          achievements: [
            "Завершил интенсивные программы по основам CS и алгоритмам",
            "Создал более 20 адаптивных веб-проектов с нуля",
            "Сформировал строгую дисциплину чистоты кода и семантической верстки",
          ],
        },
      ],
    },
    contact: {
      badge: "ПРОТОКОЛ СВЯЗИ",
      titlePrefix: "Давайте создадим что-то",
      titleHighlight: "Необыкновенное",
      subtitle:
        "Есть проект, высокопроизводительное веб-приложение или интересное предложение о сотрудничестве? Напишите, и мы все обсудим.",
      directEmail: "Прямой Email",
      directPhone: "Номер телефона",
      responseWindow: "Ответ в течение 24 часов",
      phoneAvailability: "Доступен для звонков и Telegram",
      callNow: "Позвонить",
      copy: "Копировать",
      copied: "Скопировано!",
      telegramDesc: "@said_khujayev",
      telegramAction: "Написать →",
      instagramDesc: "@my_code.gm",
      instagramAction: "Профиль →",
      githubDesc: "Open Source & Код",
      githubAction: "Смотреть →",
      youtubeDesc: "Уроки Разработки & Спидраны",
      youtubeAction: "Смотреть →",
      availability:
        "Открыт к предложениям по контрактам и ведущим позициям.",
      formTitle: "Отправить Сообщение",
      formSubtitle: "Заполните контактные данные ниже",
      nameLabel: "Ваше Имя / Никнейм",
      namePlaceholder: "Алексей",
      contactLabel: "Email или Telegram",
      contactPlaceholder: "@said_khujayev или +998 95 859 0550",
      categoryLabel: "Тема обращения",
      categories: {
        fullstack: "Full-Stack веб-приложение",
        threejs: "Интерактивный 3D / WebGL проект",
        perf: "Оптимизация производительности и скорости",
        role: "Предложение работы / Фриланс",
        collab: "Общее сотрудничество",
      },
      messageLabel: "Текст Сообщения",
      messagePlaceholder:
        "Опишите детали, сроки, видение или технические требования...",
      sendButton: "Отправить сообщение",
      sendingButton: "Отправка сигнала...",
      successTitle: "Сообщение Получено!",
      successDesc:
        "Спасибо, {name}. Ваше сообщение успешно получено. Я отвечу вам в ближайшее время.",
      sendAnother: "Отправить еще сообщение",
    },
    footer: {
      bio: "Креативный разработчик и IT-инноватор, создающий веб-приложения нового поколения, интерактивную 3D-графику и ультраплавные интерфейсы.",
      backToTop: "Наверх",
      copyright: "© 2026 Saidazim. Создано на Next.js и Tailwind CSS.",
      wpmMetric: "130+ WPM Точность",
      layoutMetric: "Ноль сдвигов макета",
    },
  },
};
