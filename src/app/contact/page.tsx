import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact - Lewis Donovan',
  description: 'Get in touch with Lewis Donovan for tech consulting, software development, or collaboration opportunities.',
};

const contactMethods = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/lewisdonovan',
    icon: Linkedin,
    description: 'Professional networking and business inquiries',
    primary: true,
  },
  {
    name: 'Email',
    href: 'mailto:lewis@lewisdonovan.dev',
    icon: Mail,
    description: 'Direct email for project inquiries',
    primary: true,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/lewisdonovan/',
    icon: Github,
    description: 'Open source projects and code collaboration',
    primary: false,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/LewisSonx',
    icon: Twitter,
    description: 'Tech thoughts and industry insights',
    primary: false,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/lewisjdonovan',
    icon: Instagram,
    description: 'Personal updates and behind-the-scenes',
    primary: false,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 md:py-32">
        <div className="container-custom">
          <div className="container-sm">
            <article className="space-y-12">
              <header className="space-y-6">
                <h1 className="heading-xl line-top">Contact</h1>
                <p className="text-lg text-muted-foreground">
                  Ready to work together? Let&apos;s discuss your project and how I can help bring your ideas to life.
                </p>
              </header>
              
              <div className="space-y-12">
                <section>
                  <h2 className="heading-lg mb-8">Get in Touch</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <Link
                          key={method.name}
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                              <Icon 
                                size={24} 
                                className="text-accent" 
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                                {method.name}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <h2 className="heading-lg mb-8">What I Can Help With</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg border border-border bg-card">
                      <h3 className="font-semibold text-lg mb-4 text-accent">Technical Services</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Full-stack web development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>React & Next.js applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>API design and development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Database architecture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Cloud infrastructure setup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Performance optimization</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-lg border border-border bg-card">
                      <h3 className="font-semibold text-lg mb-4 text-accent">Consulting</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Technical strategy and planning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Technology stack selection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Team building and mentoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Code reviews and audits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Project architecture design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Technical due diligence</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="p-8 md:p-12 rounded-lg border border-border bg-gradient-to-br from-card to-card/50">
                  <h2 className="heading-lg mb-4">Let&apos;s Start a Conversation</h2>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Whether you have a specific project in mind or just want to explore possibilities, 
                    I&apos;d love to hear from you. I typically respond within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="mailto:lewis@lewisdonovan.dev">
                        Send Email
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="https://linkedin.com/in/lewisdonovan" target="_blank" rel="noopener noreferrer">
                        Connect on LinkedIn
                      </Link>
                    </Button>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
