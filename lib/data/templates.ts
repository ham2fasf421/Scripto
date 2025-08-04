export type TemplatesCategory = 'all' | 'web' | 'mobile' | 'business' | 'ecommerce' | 'portfolio' | 'blog' | 'dashboard';
export type TemplatesType = 'landing' | 'marketplace' | 'ecommerce' | 'dashboard' | 'ios' | 'android' | 'portfolio' | 'blog';

export interface Template {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: TemplatesCategory;
  type: TemplatesType;
  technologies: string[];
  features: string[];
  price: number;
  demoUrl?: string;
  popularity: number;
  rating: number;
}

export const templates: Template[] = [
  {
    id: "modern-ecommerce",
    title: "Modern E-commerce Platform",
    description: "A complete e-commerce solution with advanced features and modern design",
    imageUrl: "/projects/portfolio.webp",
    category: "ecommerce",
    type: "ecommerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    features: [
      "Product management system",
      "Shopping cart functionality",
      "Secure payment processing",
      "Order management",
      "Customer accounts"
    ],
    demoUrl: "https://demo-ecommerce.example.com",
    price: 149,
    popularity: 250,
    rating: 4.8
  },
  {
    id: "portfolio-pro",
    title: "Portfolio Pro",
    description: "Professional portfolio template with modern animations and blog support",
    imageUrl: "/templates/portfolio/preview1.jpg",
    category: "portfolio",
    type: "portfolio",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "MDX", "Tailwind CSS"],
    features: [
      "Project showcase",
      "Blog integration",
      "Contact form",
      "Dark mode support",
      "SEO optimized"
    ],
    demoUrl: "https://demo-portfolio.example.com",
    price: 99,
    popularity: 180,
    rating: 4.6
  },
  {
    id: "blog-starter",
    title: "Blog Platform",
    description: "Feature-rich blog template with modern design and CMS integration",
    imageUrl: "/templates/blog/preview1.jpg",
    category: "blog",
    type: "blog",
    technologies: ["Next.js", "TypeScript", "Contentful", "Tailwind CSS"],
    features: [
      "Content management",
      "SEO optimization",
      "Newsletter integration",
      "Social sharing",
      "Comment system"
    ],
    demoUrl: "https://demo-blog.example.com",
    price: 79,
    popularity: 320,
    rating: 4.7
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard Pro",
    description: "Comprehensive admin dashboard with analytics and user management",
    imageUrl: "/templates/dashboard/preview1.jpg",
    category: "dashboard",
    type: "dashboard",
    technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "React Query"],
    features: [
      "Data visualization",
      "User management",
      "Real-time analytics",
      "Report generation",
      "Role-based access"
    ],
    demoUrl: "https://demo-dashboard.example.com",
    price: 199,
    popularity: 150,
    rating: 4.9
  }
]; 