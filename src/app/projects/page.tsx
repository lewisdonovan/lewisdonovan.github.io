import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects - Lewis Donovan',
  description: 'Portfolio of award-winning projects by Lewis Donovan, including Webby Award nominees and Clio Award winners.',
};

// All projects data
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

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 md:py-32">
        <div className="container-custom">
          <header className="container-sm mb-16">
            <h1 className="heading-xl line-top mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground">
              A collection of award-winning projects I&apos;ve worked on throughout my career.
            </p>
          </header>

          <div className="grid-portfolio">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                href={project.href}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                badge={project.badge}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
