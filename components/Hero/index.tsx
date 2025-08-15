import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { MAIN_QUERY } from '@/sanity/lib/queries'
import MainHeroContent from "@/components/MainHeroContent";
const MainHero = async () => {
  const hero = await client.fetch(MAIN_QUERY)
  return (
    <>
      <section
        className="hero-banner-block mainHeroTextWrapper"
        style={{
          backgroundImage:
            "url('" + urlFor(hero.mainHeroLogo).width(1024).url() + "')",
          backgroundPosition: "center",
        }}
      >
        {hero.mainHeroText &&
          <img className="mainHeroText" src={urlFor(hero.mainHeroText).width(1024).url()} />
        }
        {hero.mainHeroTitle &&
          <MainHeroContent title={hero.mainHeroTitle} subtitle={""} image={""} />
        }
      </section>
    </>
  );
};

export default MainHero;

