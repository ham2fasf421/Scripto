import { SiGmail, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Calendar, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";


export const contactLinks = [
  {
    name: "Email",
    description: "scripto.technology.yj@gmail.com",
    href: "mailto:scripto.technology.yj@gmail.com",
    icon: SiGmail,
  },
  {
    name: "Location",
    description: "Damascus, Syria",
    href: "",
    icon: MapPin,
  },
  {
    name: "Phone",
    description: "+963 938 044 059",
    href: "tel:+963938044059",
    icon: Phone,
  },
];

export const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61578831236196&sk",
    label: "Facebook",
    description: "Check out our open contact",
    color: "hover:bg-blue-900 hover:text-white"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/108250479",
    label: "LinkedIn",
    description: "Connect with us professionally",
    color: "hover:bg-blue-600 hover:text-white"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/scripto.technology/",
    label: "Instagram",
    description: "Follow us for updates",
    color: "hover:text-white"
  },
  {
    icon: SiWhatsapp,
    href: "https://wa.me/963938044059",
    label: "Whatsapp",
    description: "Send a message via Whatsapp",
    color: "hover:bg-green-400 hover:text-white"
  }
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "scripto.technology.yj@gmail.com",
    href: "mailto:scripto.technology.yj@gmail.com",
    description: "Feel free to email us anytime",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+963 938 044 059",
    href: "tel:+963938044059",
    description: "Available for urgent matters",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Damascus, Syria",
    href: "#",
    description: "This is our main location",
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Satarday - Thursday",
    href: "#",
    description: "Open for new opportunities",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
    description: "We aim to respond to all inquiries promptly",
    color: "bg-orange-500/10 text-orange-600"
  },
];
