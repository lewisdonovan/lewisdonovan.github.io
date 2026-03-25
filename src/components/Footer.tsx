import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/lewisdonovan/', icon: Github },
  { name: 'Medium', href: 'https://lewisdonovan.medium.com/', icon: ExternalLink },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/lewisdonovan', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/LewisSonx', icon: Twitter },
  { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/7546845/lewis-donovan', icon: ExternalLink },
  { name: 'Instagram', href: 'https://instagram.com/lewisjdonovan', icon: Instagram },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Lewis Donovan. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-2 rounded-md hover:bg-accent/10"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
