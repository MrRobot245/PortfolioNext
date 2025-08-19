import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { MAIN_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity';
import { RotatingText } from '@/components/ui/shadcn-io/rotating-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import Link from 'next/link';
// const icons = [
//   // { icon: faGithub, url: "https://github.com/MrRobot245" },
//   // { icon: faHeartPulse, url: "http://pulsepassion.ca" },
//   // { icon: faApple, url: "https://itunes.apple.com/us/app/mypulseplus/id1094113394?ls=1&mt=8" },
//   // { icon: faCameraRetro, url: "/photography" },
// ];
const MainHero = async () => {
  const hero = await client.fetch(MAIN_QUERY)
  // console.log(hero)
  return (
    <>

      <section>
        <div className="heroWrapper min-h-[900px] flex items-center justify-center h-screen p-4">
          <div className="intro">
            <div className="intro-sub">{hero.title}</div>
            <h1>
              <div id="rotate">
                <RotatingText
                  className="text-4xl font-semibold"
                  text={hero.scrollingText.map((item: { text: string }) => item.text)}
                />
              </div>
            </h1>
            <PortableText value={hero.quote} />
            <div className="social-icons">
              <div className="flex justify-center gap-8 py-8">
                {hero.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.url}
                    target='_blank'
                  >
                    <div

                      className="transition duration-300 ease-in-out cursor-pointer w-10 h-10 flex items-center justify-center border border-white rounded-lg transform rotate-45 bg-transparent hover:bg-[#68c3a3]"
                    >
                      <FontAwesomeIcon icon={[link.fa, link.faIcon]} inverse className="-rotate-45" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mouse-icon">
            <div className="wheel" />
          </div>
        </div>
      </section >

    </>
  );
};

export default MainHero;

