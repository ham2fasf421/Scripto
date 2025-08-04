import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

interface ContactCardProps {
  icon: React.ReactNode;
  description: string;
  link?: string;
  label?: string
}


export const ContactCard = ({ icon, description, link, label }: ContactCardProps) => (
  <motion.a
    key={label}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("up")}
    whileHover={{ x: 5 }}
    className={`flex items-center bg-card border border-border/50 shadow-sm gap-4 px-4 py-6 rounded-xl hover:bg-muted/20 transition-all duration-300 group`}
    >
      <div className="p-4 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold truncate max-w-[80%]">{label}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
  </motion.a>
);