import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Press - Lewis Donovan',
  description: 'Press coverage and media mentions featuring Lewis Donovan\'s work in tech and music.',
};

// All press articles data
const allPressArticles = [
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
  {
    title: "NAO Orbit interactive video powered by Microsoft AI",
    href: "https://winners.webbyawards.com/2020/video/immersive-and-mixed-reality/volumetric-6-degrees-of-freedom/114482/nao-interactive-video-powered-by-microsoft-ai",
    imageSrc: "/images/press/webby.jpg",
    imageAlt: "Webby Awards logo",
    date: "April 20, 2020",
  },
  {
    title: "Bring Me The Horizon's data-driven personalised merch wins Clio Award",
    href: "https://clios.com/music/winner/digital-mobile/bring-me-the-horizon/bring-me-the-horizon-s-data-driven-personalised-me-82857",
    imageSrc: "/images/press/clios.jpg",
    imageAlt: "Clio Awards logo",
    date: "September 24, 2019",
  },
  {
    title: "Little Mix BRIT Awards 2019 Winners",
    href: "https://www.brits.co.uk/news/brits-2019-winners",
    imageSrc: "/images/press/brits.jpg",
    imageAlt: "BRIT Awards logo",
    date: "February 20, 2019",
  },
];

export default function Press() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 md:py-32">
        <div className="container-custom">
          <header className="container-sm mb-16">
            <h1 className="heading-xl line-top mb-4">Press</h1>
            <p className="text-lg text-muted-foreground">
              Media coverage and press mentions featuring my work.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPressArticles.map((article) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
