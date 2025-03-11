import images from "./images";
export const navItems=[
  {
    name: "Home",
    link: "/",
    // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experiences",
    link: "#experiences",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Comments",
    link: "#comments",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    // icon: (
    //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    // ),
  },
]
export const comments = [
  {
    quote:
      "توانایی شما در توسعه رابط کاربری با React واقعاً تحسین‌برانگیز است. تجربه‌تان در استفاده از ابزارهایی مثل Redux و React Query نشان از دانش عمیق شما دارد.",
    name: "محمد رضایی",
    title: "توسعه‌دهنده ارشد",
  },
  {
    quote:
      "۴ سال تجربه در حوزه فرانت‌اند و کار با شرکت‌های فین‌تک و مشاوره‌ای نشان می‌دهد که شما توانایی کار در محیط‌های حرفه‌ای و پویا را دارید.",
    name: "سارا نیکنام",
    title: "مدیر فنی",
  },
  {
    quote:
      "ترکیب دانش فنی شما در React و تجربه در بهینه‌سازی عملکرد وب‌سایت‌ها، شما را به گزینه‌ای عالی برای تیم‌های توسعه تبدیل می‌کند.",
    name: "علی احمدی",
    title: "برنامه‌نویس فول‌استک",
  },
  {
    quote:
      "تجربه کار شما با ابزارهای مختلف مانند OpenStreetMap و i18n نشان‌دهنده انعطاف‌پذیری و توانایی شما در یادگیری سریع تکنولوژی‌های جدید است.",
    name: "نرگس یوسفی",
    title: "مهندس نرم‌افزار",
  },
  {
    quote:
      "تحصیلات شما در مهندسی عمران و سپس ورود به دنیای برنامه‌نویسی نشان از توانایی تحلیل قوی و روحیه یادگیری شما دارد.",
    name: "مهدی شریفی",
    title: "مدرس برنامه‌نویسی",
  },
  {
    quote:
      "استفاده از تکنولوژی‌های مدرن مانند Next.js و Tailwind CSS در پروژه‌های شما، سطح مهارت و دانش بالای شما را نشان می‌دهد.",
    name: "زهرا محمدی",
    title: "مدیر پروژه",
  },
  {
    quote:
      "همکاری شما با تیم‌های مختلف در حوزه‌های گوناگون، از فین‌تک تا املاک، نشان‌دهنده توانایی کار گروهی و انطباق سریع شما با نیازهای متنوع است.",
    name: "حسین کریمی",
    title: "توسعه‌دهنده وب",
  },
];

export const skills = [
  {  title: "React.js", level: "Advanced" },
  { src: "/images/react-native-1.svg", title: "React Native", level: "Intermediate" },
  { src: "/images/tailwind.png", title: "Tailwind CSS", level: "Advanced" },
  { src: "/images/nextjs-icon-dark-background.png", title: "Next.js App Router", level: "Advanced" },
  { src: "/images/typescript.jpg", title: "TypeScript", level: "Advanced" },
  { src: "/images/react-hook-form.png", title: "React Hook Form", level: "Advanced" },
  { src: "/images/zod.png", title: "Zod", level: "Intermediate" },
  { src: "/images/redux-toolkit.jpg", title: "React Query", level: "Advanced" },
  { src: "/images/redux-toolkit.jpg", title: "Redux Toolkit", level: "Advanced" },
  { src: "/images/shadcn.jpg", title: "shadcn/ui", level: "Intermediate" },
];

export const expriences=[
  {
    "logo": "vanda-pardakht-logo.png",
    "title": "Vanda Pardakht",
    "position": "Front-End Developer",
    "rangeTime": "Jan 2024 - PRESENT",
    "description": "At Vanda Pardakht, a leading financial technology company, I develop and maintain seamless user interfaces for payment gateways and links using React. I leverage advanced tools like React Query and Tailwind CSS to improve development efficiency and collaboration, ensuring robust, secure, and user-centric solutions.",
    "skills": [
      "React",
      "React Query",
      "Tailwind CSS",
      "UI/UX Development",
      "Payment Gateway Integration"
    ]
  },
  {
    "logo": "cube-company-logo.png",
    "title": "CubeHouse Company",
    "position": "Front-End Developer",
    "rangeTime": "Dec 2022 - Jan 2024",
    "description": "At Cube Company, I was instrumental in creating a user-friendly website for property viewing and search. Utilizing Next.js alongside an integrated stack including Redux Toolkit, OpenStreetMap, Leaflet, react-hook-form, Yup, Axios, and react-query, I enhanced the platform's functionality and internationalization support to serve consultancy, engineering, and legal services efficiently.",
    "skills": [
      "Next.js",
      "Redux Toolkit",
      "OpenStreetMap",
      "Leaflet",
      "react-hook-form",
      "Yup",
      "Axios",
      "react-query",
      "Internationalization (i18n)"
    ]
  },
  {
    "logo": "dorsa-sanat-logo.png",
    "title": "Dorsa Sanat Tehran",
    "position": "Front-End Developer",
    "rangeTime": "Nov 2020 - Sep 2021",
    "description": "At Dorsa Sanat, I led the redevelopment of the company's source code to boost performance and scalability. My focus on optimization and high-speed performance resulted in significant improvements, ensuring a reliable and fast digital experience for users in economic consultancy and technical services.",
    "skills": [
      "Source Code Redevelopment",
      "Performance Optimization",
      "Front-End Development",
      "High-Speed Development",
      "Code Refactoring"
    ]
  }
]


export const projects = [
  {
    src: "/images/vanda.png",
    title: "Vanda Pardakht User Panel",
    image: "url_to_image",
    description:
      "This is a user-friendly interface for Vanda Pardakht, a platform that handles payments safely. It lets users easily see real-time transaction updates and clear reports, and it works well on any device.",
    skills: ["React", "JavaScript", "CSS", "REST API", "Redux"],
  },
  {
    src: "/images/wallet.png",
    title: "Shahin Wallet",
    image: "url_to_image",
    description:
      "This digital wallet makes fast and secure transactions easy. It shows real-time updates, allows seamless money transfers and quick balance checks, and uses strong security features.",
    skills: ["React", "TypeScript", "Redux", "Node.js", "Firebase"],
  },
  {
    src: "/images/cubeWesbite.png",
    title: "Cube House",
    image: "url_to_image",
    description:
      "This is a modern real estate website built with Next.js. Users can browse detailed property listings, use interactive search filters, and view high-quality images on any device with built-in maps.",
    skills: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    src: "/images/payment-app.jpg",
    title: "Payment Mobile App",
    image: "url_to_image",
    description:
      "This mobile app built with React Native lets users make fast and secure payments. It offers real-time transaction tracking, easy-to-use notifications, and adapts smoothly to any device.",
    skills: ["React Native", "Redux", "Node.js", "Stripe API", "Firebase"],
  },
  {
    src: "/images/home-app.jpg",
    title: "Real Estate Mobile App",
    image: "url_to_image",
    description:
      "This mobile app for real estate, created with React Native, makes finding properties easy. It features interactive maps, personalized recommendations, and real-time alerts for a smooth browsing experience.",
    skills: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
  },
  {
    src: "/images/job-app.png",
    title: "IranJobs",
    image: "url_to_image",
    description:
      "This job search website for freelancers provides many job listings, simple search filters, and easy communication tools. It is built to be responsive and secure for both job seekers and recruiters.",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    src: "/images/vanda-admin.png",
    title: "Vanda Pardakht Admin Panel",
    image: "url_to_image",
    description:
      "This admin dashboard for Vanda Pardakht helps manage financial transactions and operations. It offers real-time monitoring, clear data charts, and a secure, easy-to-use layout that works well on any device.",
    skills: ["React", "JavaScript", "Redux", "Material UI", "REST API"],
  },
];

