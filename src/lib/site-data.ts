import { BadgeCheck, BriefcaseBusiness, GraduationCap, Languages, Medal, Users } from "lucide-react";

export const siteNav = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Expertise", href: "/expertise" },
  { label: "Gallery", href: "/gallery" },
];

export const contact = {
  email: "odaidea@gmail.com",
  phone: "+(251) 910-217952",
  address: "Meskel Flower Street, Addis Ababa, Ethiopia",
  instagram: "https://www.instagram.com/odabkl/",
  linkedin: "https://www.linkedin.com/in/odabkl/",
  facebook: "https://web.facebook.com/odabkl",
};

export const profileSections = [
  {
    title: "Skills",
    icon: BadgeCheck,
    items: ["Logo design", "Brand identity", "Brand guidelines", "Marketing materials", "Publishing layouts", "Digital campaign assets"],
  },
  {
    title: "Professional Experience",
    icon: BriefcaseBusiness,
    items: [
      "Brand It Trading PLC — Chief Creative Director, Feb 2022 to Present",
      "Bethany Christian Service Ethiopia — Local marketing vendor, 2021 to Nov 2024",
      "Nor Properties — Addis Ababa, June 2022 to Present",
      "Yelab Trading PLC — Addis Ababa, 2018 to 2021",
      "Data Minds Trading PLC — Addis Ababa, Feb 2019 to Jun 2021",
      "Population Services International NGO — Addis Ababa, 2019 to 2021",
      "Freelancer — 2017 to 2018",
    ],
  },
  {
    title: "Certification and Awards",
    icon: Medal,
    items: [
      "Creative development, brand communication, and design practice recognitions collected throughout the professional journey.",
      "Awards and certifications are treated as signals of growth, discipline, and continued learning.",
    ],
  },
  {
    title: "Mentorship",
    icon: Users,
    items: [
      "Learning from more seasoned professionals remains part of the studio philosophy.",
      "The design process is approached as a continuous exchange of wisdom, feedback, and practice.",
    ],
  },
  {
    title: "Education",
    icon: GraduationCap,
    items: ["Formal and self-directed learning across design, brand systems, creative tools, and communication."],
  },
  {
    title: "Language Proficiency",
    icon: Languages,
    items: ["A multilingual creative practice shaped by local context, international partners, and clear communication."],
  },
];

export const expertiseImages = ["/images/Logo 2.png", "/images/Logo 1.jpg", "/images/Logo 3.png", "/images/pic06.jpg", "/images/Logo 4.jpg"];

export const galleryGroups = [
  {
    title: "Social Media Banners",
    images: ["/images/Bethany 10.jpg", "/images/Bethany 8.jpg", "/images/Bethany 9.jpg", "/images/Social 1.jpg", "/images/Bethany 5.jpg", "/images/Social 2.jpg"],
  },
  {
    title: "Posters",
    images: ["/images/Banner 2.jpg", "/images/Banner 3.jpg", "/images/Poster 2.jpg", "/images/poster.jpg"],
  },
  {
    title: "Invitation Cards",
    images: ["/images/Card 2.png"],
  },
  {
    title: "Illustrations",
    images: ["/images/Bethany.jpg", "/images/Bethany 5.jpg", "/images/Bethany 2.jpg"],
  },
  {
    title: "Business Cards",
    images: ["/images/Business card.jpg", "/images/Business card 2.png", "/images/Business card Back Morkato.jpg", "/images/Business card front.jpg", "/images/Business card 3.png"],
  },
  {
    title: "Roll-ups",
    images: ["/images/rollup 2.jpg", "/images/ROLLUPS.jpg"],
  },
  {
    title: "Certificates",
    images: ["/images/Certificate.jpg", "/images/certificate 2.jpg"],
  },
];
