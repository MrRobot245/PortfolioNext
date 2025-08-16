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

      <section>
        <div className="heroWrapper min-h-[900px] flex items-center justify-center h-screen">
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

