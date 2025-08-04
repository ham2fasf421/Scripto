"use client";

import Logo from "@/components/Navbar/Logo";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const dummyPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Development",
    image: "/blog/web-dev.jpg"
  },
  {
    id: "2",
    title: "Best Practices for Modern UI Design",
    excerpt: "Discover the latest trends and best practices in modern UI design.",
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Design",
    image: "/blog/ui-design.jpg"
  },
  {
    id: "3",
    title: "The Future of Mobile Development",
    excerpt: "Explore upcoming trends and technologies in mobile app development.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Mobile",
    image: "/blog/mobile-dev.jpg"
  }
];

export default function BlogPage() {
  const t = useTranslations('blog');

  return (
<>
<div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-background">
        <Logo />
        <h1 className="text-2xl text-accent font-extrabold">The page comming soon....</h1>
      </div>
    <main className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <section className="relative pb-16 pt-30 bg-muted/30">
        <div className="container mx-auto px-6 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative bg-muted">
                  {/* Add proper image component here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
</>
  );
} 