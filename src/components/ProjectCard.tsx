import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  badge?: {
    src: string;
    alt: string;
    href: string;
    position?: 'top-right' | 'bottom-left' | 'bottom-right';
  };
}

export default function ProjectCard({ title, href, imageSrc, imageAlt, badge }: ProjectCardProps) {
  return (
    <Card className="project-card group">
      <div className="project-thumbnail relative">
        <Link href={href} className="block">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Project title overlay */}
          <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-foreground text-xl font-semibold">
                {title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-accent" />
            </div>
          </div>
        </Link>

        {/* Badge */}
        {badge && (
          <div className={`badge ${
            badge.position === 'bottom-left' ? 'bottom-left' :
            badge.position === 'bottom-right' ? 'bottom-right' :
            ''
          }`}>
            <Link 
              href={badge.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={80}
                height={80}
                className="w-full h-auto drop-shadow-lg"
              />
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}
