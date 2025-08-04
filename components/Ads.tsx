import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

type ButtonProps = {
  href: string;
  label: string;
  variant?: string;
};

type AdsProps = {
  title: string;
  text: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
};

const Ads: FC<AdsProps> = ({ title, text, primaryButton, secondaryButton }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer()}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          variants={fadeIn("up")}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold pb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <Button asChild size="lg" variant={"gold"} className="group">
                <Link href={primaryButton.href} className="flex items-center gap-2">
                  {primaryButton.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
            {secondaryButton && (
              <Button asChild size="lg" variant={"outline"}>
                <Link href={secondaryButton.href} className="flex items-center gap-2">
                  {secondaryButton.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Ads; 