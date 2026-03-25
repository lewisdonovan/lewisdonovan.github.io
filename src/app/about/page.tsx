import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Me - Lewis Donovan',
  description: 'Hiya, I\'m Lewis Donovan - a tech consultant, software engineer, and solutions architect based in Mallorca.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 md:py-32">
        <div className="container-custom">
          <div className="container-sm">
            <article className="space-y-12">
              <header className="space-y-6">
                <h1 className="heading-xl line-top">About Me</h1>
                <p className="text-xl text-muted-foreground">
                  Hiya, I&apos;m Lewis Donovan
                </p>
              </header>
              
              <div className="space-y-8">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-border">
                  <Image
                    src="/images/about/headshot.jpg"
                    alt="Lewis Donovan headshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  I&apos;m a tech consultant, based in Mallorca, Spain, creating awesome stuff in the digital space. 
                  I have a combined 13 years&apos; professional experience as a consultant, software engineer and solutions architect. 
                  In total, I have 17 years&apos; of professional experience across various industries, including tech, music, events and media. 
                  In that time, I&apos;ve been fortunate enough for my work to have been nominated for two Webby Awards, and a Clio Award, winning one of each.
                </p>
                
                <p className="text-muted-foreground">
                  I was formerly the Lead Web Developer at <Link href="https://sonymusic.co.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-medium">Sony Music UK</Link>, 
                  and CTO and Co-founder of <Link href="https://sonx.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-medium">SonX</Link>. 
                  I currently provide consulting and development services on a freelance basis.
                </p>
                
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 id="philosophy" className="heading-md mb-6">Philosophy</h3>
                  <p className="text-muted-foreground mb-4">
                    My approach to technology is firmly rooted in the needs of the end-user. I believe that any solution should be so intuitive and seamless that it feels like a natural extension of the user.
                  </p>
                  <p className="text-muted-foreground">
                    For this reason, I traverse multiple languages, stacks and frameworks, on both the front and back-end, opting for what is best suited to a given problem, as opposed to what is most expedient. 
                    I pride myself on the ability to identify and understand a problem, and having the knowledge and resources to deliver a pragmatic and holistic solution.
                  </p>
                  
                  <blockquote className="border-l-4 border-accent pl-6 py-6 my-8 italic text-lg bg-accent/5 rounded-r-lg">
                    <p className="text-foreground">
                      Only when technology is invisible, is it of any use.<br />
                      <em className="text-muted-foreground">- Jonathan Barnbrook</em>
                    </p>
                  </blockquote>
                </div>
                
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 id="get-in-touch" className="heading-md mb-6">Get in touch</h3>
                  <p className="text-muted-foreground">
                    It&apos;s always great to make new connections, please feel free to reach out via{' '}
                    <Link href="https://linkedin.com/in/lewisdonovan" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-medium">
                      LinkedIn
                    </Link>{' '}
                    for anything professional, or{' '}
                    <Link href="https://instagram.com/lewisjdonovan" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-medium">
                      Instagram
                    </Link>{' '}
                    for anything personal.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
