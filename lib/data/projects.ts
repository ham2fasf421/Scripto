export type ProjectCategory = 'all' | 'web' | 'mobile';

export type ProjectType =
  | 'landing'
  | 'marketplace'
  | 'ecommerce'
  | 'real-estate'
  | 'dashboard'
  | 'ios & android'
  | 'blog'
  | 'portfolio'
  | 'saas'
  | '3d-showcase'    
  | 'landing-page'

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  overviewKey?: string;
  desktopImage?: string;
  tabletImage?: string;
  mobileImage?: string;
  videoUrl?: string;
  category: ProjectCategory;
  type: ProjectType;
  technologies: string[];
  link?: string;
  year: number;
  client?: string;
  featuresKey?: string;  
  github?: string;
  duration?: string;
  teamSize?: string;
  statusKey?: string;
  audienceKey?: string;
  goalKey?: string;
  purposeKey?: string;
}

export const projects: Project[] = [
  {
    id: "real-estate",
    titleKey: "realEstate.title",
    descriptionKey: "realEstate.description",
    overviewKey: "realEstate.overview",
    desktopImage: "/projects/RealEstate/real-estate-MacbookPro16.webp",
    mobileImage: "/projects/RealEstate/realestate-iphone.webp",
    tabletImage: "/projects/RealEstate/realestate-ipadpro11.webp",
    category: "web",
    type: "real-estate",
    year: 2025,
    client: "Personal Project",
    technologies: [
      "Next.js", "React", "Tailwind CSS", "Framer Motion",
      "Radix UI", "React Query", "Next Themes", "Next SEO",
      "NestJS", "PostgreSQL", "Cloudinary"
    ],
    featuresKey: "realEstate.features",
    link: "https://real-estate-rouge-five.vercel.app/",
    github: undefined,
    duration: "Ongoing",
    teamSize: "1 developer",
    statusKey: "realEstate.status",
    audienceKey: "realEstate.audience",
    goalKey: "realEstate.goal",
    purposeKey: "realEstate.purpose"
  },

  {
    id: "ecommerce-platform",
    titleKey: "ecommercePlatform.title",
    descriptionKey: "ecommercePlatform.description",
    overviewKey: "ecommercePlatform.overview",
    desktopImage: "/projects/e-commerce/ecommerce-MacbookPro.webp",
    mobileImage: "/projects/e-commerce/ecommerce-light-iPhone15pro.webp",
    tabletImage: "/projects/e-commerce/ecommerce-light-iPadpro11.webp",
    category: "web",
    type: "ecommerce",
    year: 2025,
    client: "Personal Project",
    technologies: [
      "Next.js", "React", "Tailwind CSS", "GraphQL", "Apollo", 
      "Radix UI", "Zod", "React Query", "Prisma", 
      "NestJS", "Stripe", "React Native"
    ],
    featuresKey: "ecommercePlatform.features",
    link: "https://e-commerce-wine-phi.vercel.app/",
    github: undefined,
    duration: "N/A",
    teamSize: "1 developer",
    statusKey: "ecommercePlatform.status",
    audienceKey: "ecommercePlatform.audience",
    goalKey: "ecommercePlatform.goal",
    purposeKey: "ecommercePlatform.purpose"
  },

  {
    id: "caros",
    titleKey: "caros.title",
    descriptionKey: "caros.description",
    overviewKey: "caros.overview",
    desktopImage: "/projects/Caros/Caros-Macbook-Pro-16.png",
    mobileImage: "/projects/Caros/Caros-iPhone-15-.png",
    tabletImage: "/projects/Caros/Caros-iPhone-15-Pro.png",
    category: "web",
    type: "marketplace",
    year: 2025,
    client: "Personal Project",
    technologies: [
      "Next.js", "React", "Tailwind CSS", "Zod",
      "Framer Motion", "Lucide", "Swiper", "React Hook Form"
    ],
    featuresKey: "caros.features",
    link: "https://caros-orpin.vercel.app/",
    github: undefined,
    duration: "N/A",
    teamSize: "4 developers",
    statusKey: "caros.status",
    audienceKey: "caros.audience",
    goalKey: "caros.goal",
    purposeKey: "caros.purpose"
  }
]
