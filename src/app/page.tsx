import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ballpit from "@/components/Ballpit";
import InfiniteMenu from "@/components/InfiniteMenu";
import { Button } from "@/components/ui/button";

// Import all projects from projects page
const allProjects = [
  {
    title: "SonX",
    href: "/projects/sonx",
    imageSrc: "/images/projects/sonx-purple.jpg",
    imageAlt: "SonX mobile app",
  },
  {
    title: "MOOD Playlist",
    href: "/projects/mood-playlist",
    imageSrc: "/images/projects/mood-playlist.jpg",
    imageAlt: "MOOD Playlist logo blue",
  },
  {
    title: "MusicML Hackathon 2020",
    href: "/projects/musicml-hackathon-2020",
    imageSrc: "/images/projects/hackathon-2020.jpg",
    imageAlt: "Lewis Donovan at MusicML hackathon at Sony Music in partnership with AWS and The Orchard.",
  },
  {
    title: "Google News Scraper",
    href: "/projects/google-news-scraper",
    imageSrc: "/images/projects/google-news-scraper.jpg",
    imageAlt: "Google News Scraper by Lewis Donovan",
  },
  {
    title: "Amo In Colour",
    href: "/projects/amo-in-colour",
    imageSrc: "/images/projects/amo-in-colour.jpg",
    imageAlt: "Amo In Colour website",
    badge: {
      src: "/images/badges/clios.png",
      alt: "Clio Award Winner",
      href: "https://clios.com/music/winner/digital-mobile/bring-me-the-horizon/bring-me-the-horizon-s-data-driven-personalised-me-82857",
      position: "bottom-left" as const,
    },
  },
  {
    title: "NAO 'Orbit' interactive video",
    href: "/projects/nao-orbit",
    imageSrc: "/images/projects/nao-orbit.jpg",
    imageAlt: "NAO Orbit interactive video",
    badge: {
      src: "/images/badges/webby-2020-nominee.gif",
      alt: "Webby Award Nominee",
      href: "https://winners.webbyawards.com/2020/video/immersive-and-mixed-reality/volumetric-6-degrees-of-freedom/114482/nao-interactive-video-powered-by-microsoft-ai",
      position: "top-right" as const,
    },
  },
  {
    title: "Little Mix BRIT Awards GIF Generator",
    href: "/projects/little-mix-woman-like-me-gif-generator",
    imageSrc: "/images/projects/lm-woman-like-me.jpg",
    imageAlt: "Little Mix Woman Like Me",
    badge: {
      src: "/images/badges/brits.gif",
      alt: "BRIT Awards Winner",
      href: "https://www.brits.co.uk/news/brits-2019-winners",
      position: "bottom-right" as const,
    },
  },
  {
    title: "Sundara Karma interactive live stream",
    href: "/projects/sundara-karma-interactive-livestream",
    imageSrc: "/images/projects/sundara-livestream.jpg",
    imageAlt: "Sundara Karma interactive live stream concert at Albert Hall Manchester for Dot To Dot Festival 2017. Take control of the show.",
  },
  {
    title: "ACF Fields to REST API (WP plugin)",
    href: "/projects/acf-fields-to-wp-rest-api",
    imageSrc: "/images/projects/acf-to-wp-rest-api.jpg",
    imageAlt: "ACF Fields to REST API (WP plugin) by Lewis Donovan",
  },
  {
    title: "Nothing But Thieves cipher game",
    href: "/projects/nothing-but-thieves-game",
    imageSrc: "/images/projects/nbt.jpg",
    imageAlt: "Album cover of Broken Machine by Nothing But Thieves",
  },
  {
    title: "Mat Plus",
    href: "/projects/matplus",
    imageSrc: "/images/projects/matplus.jpg",
    imageAlt: "Mat Plus consumer rewards app",
  },
];

// Services data
const services = [
  {
    number: "1.",
    title: "Software engineering",
    description: "I build scalable, performant products that your customers will love. With 13 years of experience across startups, agencies, and enterprise, I can make meaningful impact quickly, whether you need a prototype brought to production or an existing product improved.",
  },
  {
    number: "2.",
    title: "Solutions architecture",
    description: "I find solutions you haven't considered. Rather than forcing your needs into standard patterns, I architect scalable and reliable systems that fit your unique requirements. I'll explain not just what I'm building, but why, so you understand every decision.",
  },
  {
    number: "3.",
    title: "Tech consulting",
    description: "Got an idea but not sure how to bring it to life? Need help figuring out if your concept is viable, or what skills to hire for? I'll guide you through the process from concept to launch, translating technical complexity into clear, actionable steps.",
  },
  {
    number: "4.",
    title: "Technical leadership",
    description: "I build and lead engineering teams that deliver. As an experienced CTO and Engineering Manager, I help you scale your team, establish best practices, and mentor your developers. I focus on creating environments where great work happens.",
  },
];

// Blog posts data
const blogPosts = [
  {
    title: "Unlocking Success: How musicians can tap into the value of their superfans",
    href: "https://medium.com/@lewisdonovan/how-musicians-can-tap-into-the-value-of-their-superfans-9b0f486f65a1",
    imageSrc: "https://miro.medium.com/v2/format:webp/1*drUt2pZoOrFog8FGygYOIg.png",
    imageAlt: "Music fan creating heart shape with hands in a crowd at a concert",
    date: "October 03, 2023",
  },
  {
    title: "Have Agile principles defined a recipe for neuroplasticity, flow state and regaining motivation?",
    href: "https://lewisdonovan.medium.com/could-agile-principles-hold-the-key-that-unlocks-motivation-and-adult-neuroplasticity-2937d94fcb9f",
    imageSrc: "https://miro.medium.com/max/700/1*rcOwKnKhHcN4VTySvWCQrA.jpeg",
    imageAlt: "Drawing of the two sides of the brain",
    date: "February 18, 2020",
  },
];

// Press articles data
const pressArticles = [
  {
    title: "A Chat with Lee Gray, Founder & CEO at SonX",
    href: "https://techround.co.uk/interviews/a-chat-with-lee-gray-sonx/",
    imageSrc: "/images/press/techround.png",
    imageAlt: "TechRound logo",
    date: "November 03, 2022",
  },
  {
    title: "Sony Music's 4th Floor Creative debuts Mood Playlist creator",
    href: "https://musically.com/2021/03/25/sony-musics-4th-floor-creative-debuts-mood-playlist-creator/",
    imageSrc: "/images/press/musically.jpg",
    imageAlt: "MusicAlly logo",
    date: "March 25, 2021",
  },
  {
    title: "The Orchard, Sony Push Boundaries Of Music, Machine Learning With Multi-City Hackathon",
    href: "https://www.hypebot.com/hypebot/2020/03/the-orchard-sony-music-push-boundaries-of-music-machine-learning-with-multi-city-hackathon.html",
    imageSrc: "/images/press/hypebot.jpg",
    imageAlt: "Hypebot logo",
    date: "February 27, 2020",
  },
  {
    title: "Sony Music and The Orchard held a machine-learning hackathon",
    href: "https://musically.com/2020/02/27/sony-music-and-the-orchard-held-a-machine-learning-hackathon/",
    imageSrc: "/images/press/musically.jpg",
    imageAlt: "MusicAlly logo",
    date: "February 27, 2020",
  },
  {
    title: "Spotify Helps Bring Me the Horizon Fans Customize Their T-Shirts",
    href: "https://www.adweek.com/performance-marketing/spotify-helps-bring-me-the-horizon-fans-customize-their-t-shirts/",
    imageSrc: "/images/press/adweek.jpg",
    imageAlt: "AdWeek logo",
    date: "October 14, 2019",
  },
  {
    title: "Bring Me The Horizon launch unique merch based on streaming data",
    href: "https://www.musicweek.com/digital/read/bring-me-the-horizon-launch-unique-merch-based-on-streaming-data/077730",
    imageSrc: "/images/press/musicweek.jpg",
    imageAlt: "MusicWeek logo",
    date: "October 14, 2019",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
          <Ballpit
            count={75}
            gravity={0.3}
            speed={0.5}
            friction={1}
            wallBounce={0.95}
            followCursor={false}
          />
          {/* Subtle backdrop for text readability */}
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-none z-[1]" />
          <div className="container-custom relative z-10 w-full py-20">
            <div className="container-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1 space-y-6">
                  <h1 className="heading-xl">
                    Hi, I&apos;m <span className="text-accent">Lewis Donovan</span>.
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    I&apos;m a freelance software engineer and solutions architect.
                    If you need help transforming your ideas into scalable, performant products that customers love, get in touch. 
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="/about">Learn more about me</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/contact">Get in touch</Link>
                    </Button>
                  </div>
                </div>
                <div className="avatar">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Lewis Donovan headshot avatar"
                    width={160}
                    height={160}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-20 md:py-32">
          <div className="container-custom">
            <div className="container-sm mb-12">
              <h2 className="heading-lg line-top mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                A selection of projects I&apos;ve worked on, including Webby Award nominees and Clio Award winners. Click-and-drag to see more.
              </p>
            </div>
          </div>
          
          <div className="w-full h-[600px] md:h-[800px]">
            <InfiniteMenu
              items={allProjects.map((project) => ({
                image: project.imageSrc,
                link: project.href,
                title: project.title,
                description: project.badge 
                  ? `${project.badge.alt} • Interactive digital experience`
                  : 'Interactive digital experience',
              }))}
            />
          </div>
          
          <div className="container-custom">
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View all projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-custom">
            <div className="container-sm mb-12">
              <h2 className="heading-lg line-top mb-4">What I Do</h2>
              <p className="text-lg text-muted-foreground">
                From software engineering to technical leadership, I help bring ideas to life.
              </p>
            </div>
            
            <div className="grid-services">
              {services.map((service) => (
                <div 
                  key={service.number} 
                  className="group p-8 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-accent/10 border-2 border-accent/20 flex items-center justify-center font-bold text-xl text-accent group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                        {service.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-20 md:py-32">
          <div className="container-custom">
            <div className="container-sm mb-12">
              <h2 className="heading-lg line-top mb-4">Latest Writing</h2>
              <p className="text-lg text-muted-foreground">
                Thoughts on technology, software engineering, and the digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogPosts.map((post) => (
                <article 
                  key={post.title} 
                  className="group rounded-lg border border-border bg-card overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <Link href={post.href} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={post.imageSrc}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="heading-sm mb-3">
                      <Link 
                        href={post.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="https://lewisdonovan.medium.com" target="_blank" rel="noopener noreferrer">
                  Read more on Medium
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Press */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-custom">
            <div className="container-sm mb-12">
              <h2 className="heading-lg line-top mb-4">Press & Recognition</h2>
              <p className="text-lg text-muted-foreground">
                Media coverage and industry recognition for my work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {pressArticles.map((article) => (
                <article 
                  key={article.title} 
                  className="group rounded-lg border border-border bg-card overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <Link href={article.href} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full aspect-video overflow-hidden bg-muted">
                      <Image
                        src={article.imageSrc}
                        alt={article.imageAlt}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="heading-sm mb-3">
                      <Link 
                        href={article.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors duration-300"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{article.date}</p>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/press">View all press coverage</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
