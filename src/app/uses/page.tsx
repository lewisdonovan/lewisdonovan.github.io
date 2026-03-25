import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Uses - Lewis Donovan',
  description: 'The tools, software, and hardware that Lewis Donovan uses for work and productivity.',
};

export default function Uses() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 md:py-32">
        <div className="container-custom">
          <div className="container-sm">
            <article className="space-y-12">
              <header className="space-y-6">
                <h1 className="heading-xl line-top">Uses</h1>
                <p className="text-lg text-muted-foreground">
                  The tools, software, and hardware I use for work and productivity.
                </p>
              </header>
              
              <div className="space-y-8">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-border">
                  <Image
                    src="/images/uses/desk.jpg"
                    alt="Lewis Donovan's workspace setup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-12">
                <section className="p-6 rounded-lg border border-border bg-card">
                  <h2 className="heading-md mb-6 text-accent">Hardware</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">MacBook Pro 16-inch (M1 Pro)</strong> - Primary development machine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Samsung S34J55x Monitor</strong> - External display</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Apple Magic Keyboard with Numeric Keypad</strong> - Because mechanical keyboards are annoying. There, I said it.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Logitech MX Vertical</strong> - To stop my wrists from hurting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Sony WH-1000XM5</strong> - For noice-cancelling bliss</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 rounded-lg border border-border bg-card">
                  <h2 className="heading-md mb-6 text-accent">Software</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">VS Code</strong> - Primary code editor with extensions for TypeScript, React, and Tailwind</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Terminal</strong> - iTerm2 with Oh My Zsh</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Git</strong> - Version control with GitHub</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Docker</strong> - Containerization for development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Figma</strong> - Design and prototyping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Notion</strong> - Note-taking and project management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Slack</strong> - Team communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Spotify</strong> - Music streaming</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 rounded-lg border border-border bg-card">
                  <h2 className="heading-md mb-6 text-accent">Development Stack</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Next.js</strong> - React framework for production</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">TypeScript</strong> - Type-safe JavaScript</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Tailwind CSS</strong> - Utility-first CSS framework</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">shadcn/ui</strong> - Component library</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Node.js</strong> - Backend JavaScript runtime</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">MongoDB</strong> - NoSQL database</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">PostgreSQL</strong> - SQL database</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">GraphQL</strong> - API query language</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">REST APIs</strong> - Traditional API architecture</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 rounded-lg border border-border bg-card">
                  <h2 className="heading-md mb-6 text-accent">Cloud & Deployment</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Vercel</strong> - Frontend deployment and hosting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">AWS</strong> - Cloud infrastructure and services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">GitHub Actions</strong> - CI/CD pipelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Netlify</strong> - Alternative hosting platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Railway</strong> - Backend deployment</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 rounded-lg border border-border bg-card">
                  <h2 className="heading-md mb-6 text-accent">Productivity</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Raycast</strong> - macOS launcher and productivity tool</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Alfred</strong> - Alternative launcher</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Rectangle</strong> - Window management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">CleanMyMac</strong> - System maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">1Password</strong> - Password management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Grammarly</strong> - Writing assistance</span>
                    </li>
                  </ul>
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
