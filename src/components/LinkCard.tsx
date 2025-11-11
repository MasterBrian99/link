import React from "react";
import {
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  BookOpen,
  Mail,
  ExternalLink,
} from "lucide-react";

interface LinkCardProps {
  title: string;
  url: string;
  icon: string;
  color: string;
}

const iconMap: Record<string, React.ElementType> = {
  Briefcase: Briefcase,
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  BookOpen: BookOpen,
  Mail: Mail,
};

const LinkCard: React.FC<LinkCardProps> = ({ title, url, icon, color }) => {
  const IconComponent = iconMap[icon] || iconMap["Briefcase"];

  const handleClick = (e: React.MouseEvent) => {
    // Simple confetti effect
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("div");
      particle.className = "fixed pointer-events-none z-50";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = "10px";
      particle.style.height = "10px";
      particle.style.backgroundColor = [
        "#FFD23F",
        "#FF6B9D",
        "#4ECDC4",
        "#95E77E",
        "#A663CC",
      ][Math.floor(Math.random() * 5)];
      particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${
        Math.random() * 100 - 50
      }px)`;
      particle.style.transition = "all 0.5s ease-out";
      particle.style.opacity = "1";
      particle.style.border = "2px solid #000";

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${
          Math.random() * 200 - 100
        }px)`;
        particle.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        document.body.removeChild(particle);
      }, 500);
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full mb-4 group "
      onClick={handleClick}
    >
      <div
        className={`neobrutalism-card color-${color} flex items-center p-4 transform transition-all duration-200 hover:scale-105`}
      >
        <div className="neobrutalism w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shrink-0">
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="grow">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="neobrutalism w-8 h-8 rounded-full bg-white flex items-center justify-center ml-2">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
