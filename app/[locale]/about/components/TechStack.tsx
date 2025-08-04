"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useTranslations } from "next-intl";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiDocker,
  SiStripe,
  SiAmazon,
  SiGithub,
  SiExpress,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiRedux,
  SiVercel,
  SiGit,
  SiJest,
  SiCypress,
  SiDotnet,
  SiMongodb,
} from "@icons-pack/react-simple-icons";

import {
  Code2,
  Settings,
  Cloud,
  Palette,
  Zap,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: "frontend",
    name: "Frontend Development",
    arabicName: "واجهات المستخدم",
    icon: Code2,
    color: "#3B82F6",
    gradient: "from-blue-500 to-cyan-500",
    descriptionKey: "frontendDesc",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "React Query", icon: null, color: "#FF4154" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "React Hook Form", icon: null, color: "#EC5990" },
      { name: "Framer Motion", icon: null, color: "#FF0080" },
      { name: "Zustand", icon: null, color: "#000000" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Databases",
    arabicName: "الخوادم وقواعد البيانات",
    icon: Settings,
    color: "#10B981",
    gradient: "from-green-500 to-emerald-500",
    descriptionKey: "backendDesc",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
      { name: "C#", icon: null, color: "#E0234E" },
      { name: ".NET", icon: SiDotnet, color: "#E0234E" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#3388C6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "GraphQL", icon: null, color: "#E10098" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    arabicName: "تطبيقات الهاتف",
    icon: Smartphone,
    color: "#8B5CF6",
    gradient: "from-purple-500 to-pink-500",
    descriptionKey: "mobileDesc",
    technologies: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", icon: null, color: "#000020" },
      { name: "Firebase Notifications", icon: null, color: "#FFA000" },
      { name: "App Store Deployment", icon: null, color: "#34C759" },
    ],
  },
  {
    id: "design",
    name: "Design & UX",
    arabicName: "التصميم وتجربة المستخدم",
    icon: Palette,
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-500",
    descriptionKey: "designDesc",
    technologies: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Shadcn/ui", icon: null, color: "#000000" },
      { name: "Material UI", icon: null, color: "#007FFF" },
      { name: "Internationalization", icon: null, color: "#5A67D8" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Deployment",
    arabicName: "DevOps والنشر",
    icon: Cloud,
    color: "#06B6D4",
    gradient: "from-cyan-500 to-blue-500",
    descriptionKey: "devopsDesc",
    technologies: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "CI/CD Tools", icon: null, color: "#2E2E2E" },
      { name: "Monitoring", icon: null, color: "#00B8D9" },
    ],
  },
  {
    id: "integrations",
    name: "Integrations & Tools",
    arabicName: "التكامل والخدمات الخارجية",
    icon: Zap,
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-500",
    descriptionKey: "integrationsDesc",
    technologies: [
      { name: "Stripe", icon: SiStripe, color: "#008CDD" },
      { name: "Google Analytics", icon: null, color: "#4285F4" },
      { name: "Sentry", icon: null, color: "#362D59" },
      { name: "Postman", icon: null, color: "#FF6C37" },
    ],
  },
  {
    id: "testing",
    name: "Testing & Quality",
    arabicName: "الاختبارات والجودة",
    icon: Sparkles,
    color: "#10B981",
    gradient: "from-emerald-500 to-green-500",
    descriptionKey: "testingDesc",
    technologies: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "React Testing Library", icon: null, color: "#E33332" },
      { name: "ESLint", icon: null, color: "#4B32C3" },
      { name: "Prettier", icon: null, color: "#F7B93E" },
    ],
  },
  {
    id: "security",
    name: "Security",
    arabicName: "الأمان",
    icon: Shield,
    color: "#EF4444",
    gradient: "from-red-500 to-pink-500",
    descriptionKey: "securityDesc",
    technologies: [
      { name: "JWT", icon: null, color: "#000000" },
      { name: "Helmet.js", icon: null, color: "#3B3B3B" },
      { name: "OAuth 2.0", icon: null, color: "#4285F4" },
      { name: "HTTPS/SSL", icon: null, color: "#34C759" },
    ],
  },
];

export default function TechStack() {
  const t = useTranslations("about.techStack");

  return (
    <Section id="skills" className="bg-gradient-to-br from-muted/30 via-background to-muted/20 py-20">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-16"
      >
        {/* Header */}
        <motion.div
          variants={fadeIn("up")}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
            <Sparkles className="w-4 h-4" />
            {t("badge")}
          </div>
          <h2 className="text-4xl font-bold pb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={fadeIn("up")}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={fadeIn("up")}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group bg-card/60 backdrop-blur-sm border-border/30 hover:border-primary/30 hover:shadow-lg transition-all duration-300 border rounded-2xl p-6 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.arabicName}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t(`categories.${category.descriptionKey}`)}
                  </p>

                  {/* Technology Count */}
                  <div className="text-xs text-muted-foreground mb-4">
                    <span>{category.technologies.length} {t("stats.technologies")}</span>
                  </div>
                </div>

                {/* Technologies List */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => {
                      const TechIcon = tech.icon;
                      
                      return (
                        <div
                          key={tech.name}
                          className="group/tech flex items-center gap-2 text-sm font-medium bg-muted/50 hover:bg-muted px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                        >
                          {TechIcon ? (
                            <TechIcon 
                              className="w-4 h-4 transition-transform duration-200 group-hover/tech:scale-110" 
                              style={{ color: tech.color }} 
                            />
                          ) : (
                            <div 
                              className="w-4 h-4 rounded-full transition-transform duration-200 group-hover/tech:scale-110"
                              style={{ backgroundColor: tech.color }}
                            />
                          )}
                          <span className="text-xs">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          variants={fadeIn("up")}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          <div className="text-center p-6 bg-card/60 rounded-xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">
              {categories.reduce((acc, cat) => acc + cat.technologies.length, 0)}+
            </div>
            <div className="text-sm text-muted-foreground">{t("stats.technologies")}</div>
          </div>
          <div className="text-center p-6 bg-card/60 rounded-xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-muted-foreground">{t("stats.categories")}</div>
          </div>
          <div className="text-center p-6 bg-card/60 rounded-xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">{t("stats.qualityFocus")}</div>
          </div>
          <div className="text-center p-6 bg-card/60 rounded-xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">{t("stats.support")}</div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
