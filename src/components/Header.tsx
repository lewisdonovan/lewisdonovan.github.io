'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Press', href: '/press' },
  { name: 'About', href: '/about' },
  { name: 'Uses', href: '/uses' },
  { name: 'Blog', href: 'https://lewisdonovan.medium.com/', external: true },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'glass shadow-md'
      } rounded-lg border border-border w-auto`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-14 gap-4 pr-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-mono text-lg font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              <span className="bg-accent/10 text-accent px-3 py-1.5 rounded-md border border-accent/20">
                &gt;_ Lewis Donovan
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-border">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-current hover:text-accent transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            <div className="mobile-overlay open" onClick={toggleMenu} />
            <nav className="mobile-menu open">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-border">
                  <span className="font-mono text-lg font-medium text-foreground">
                    &gt;_ Menu
                  </span>
                  <button
                    onClick={toggleMenu}
                    className="text-current hover:text-accent transition-colors duration-300 p-2"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="flex-1 px-6 py-8 overflow-y-auto">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        onClick={toggleMenu}
                        className="block px-4 py-3 text-lg font-medium text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
