import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { HERO_QUERY } from '@/sanity/lib/queries'
import HeroContent from "@/components/HeroContent";
const ContactHero = async () => {
  const hero = await client.fetch(HERO_QUERY)
  return (
    <>
      <section
        className="hero-banner-block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('" + urlFor(hero.contactHeroImage).url() + "')",
          backgroundPosition: "top",
        }}
      >
        <HeroContent title={hero.contactHeroTitle} subtitle={hero.contactHeroSubtitle} image={""} />
      </section>
    </>
  );
};

export default ContactHero;

