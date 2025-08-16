// import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { MAIN_QUERY } from '@/sanity/lib/queries'
import { RotatingText } from '@/components/ui/shadcn-io/rotating-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faApple } from '@fortawesome/free-brands-svg-icons';
import { faHeartPulse, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const icons = [
  { icon: faGithub, url: "https://github.com/MrRobot245" },
  { icon: faHeartPulse, url: "http://pulsepassion.ca" },
  { icon: faApple, url: "https://itunes.apple.com/us/app/mypulseplus/id1094113394?ls=1&mt=8" },
  { icon: faCameraRetro, url: "/photography" },
];
const MainHero = () => {
  // const hero = await client.fetch(MAIN_QUERY)
  return (
    <>

      <section
        id="home"
        className="tt-fullHeight"
        data-stellar-vertical-offset={50}
        data-stellar-background-ratio="0.2"
        style={{ height: 1066, backgroundPosition: "50% -80px" }}
      >
        <div className="intro">
          <div className="intro-sub">Nathan Reymer</div>
          <h1>
            <div id="rotate">
              <RotatingText
                className="text-4xl font-semibold"
                text={['SOFTWARE ENGINEER', 'Full Stack Developer', 'React/Next.js Developer']}
              />
            </div>
          </h1>
          <p>
            “You don’t have to know everything. <br />
            You simply need to know where to find it when necessary.”
          </p>
          {/* <p>“Never let a computer know you're in a hurry.”</p> */}
          <div className="social-icons">
            <div className="flex justify-center gap-8 py-8">
              {icons.map((icon, i) => (
                <Link
                  key={i}
                  href={icon.url}
                  target='_blank'
                >
                  <div

                    className="transition duration-300 ease-in-out cursor-pointer w-10 h-10 flex items-center justify-center border border-white rounded-lg transform rotate-45 bg-transparent hover:bg-[#68c3a3]"
                  >
                    <FontAwesomeIcon icon={icon.icon} inverse className="-rotate-45" />
                  </div>
                </Link>
              ))}
            </div>
            {/* <ul className="list-inline">
              <li>
                <a href="https://github.com/MrRobot245">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="http://pulsepassion.ca">
                  <i className="fa fa-heartbeat" />
                </a>
              </li>
            <li>
              <a href="https://itunes.apple.com/us/app/mypulseplus/id1094113394?ls=1&mt=8">
                <i className="fa fa-apple" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="/photography">
                <i className="fa fa-camera-retro" aria-hidden="true" />
              </a>
            </li>
          </ul> */}
          </div>
        </div>
        <div className="mouse-icon">
          <div className="wheel" />
        </div>
      </section >

      {/* <section
        className="hero-banner-block mainHeroTextWrapper"
        style={{
          backgroundImage:
            "url('" + urlFor(hero.mainHeroLogo).width(1024).url() + "')",
          backgroundPosition: "center",
        }}
      >

      </section> */}
    </>
  );
};

export default MainHero;

