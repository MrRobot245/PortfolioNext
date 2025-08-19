import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client'
import { MAIN_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
export default async function Works() {
    const works = await client.fetch(MAIN_QUERY);
    return (
        <>
            <div id="works" className="container mt-20 mb-20 mx-auto relative">
                <h2
                    className="section-title"
                    data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                >
                    Works
                </h2>
                <div id="grid" className="row">
                    {works.worksList.map((work, idx) => (
                        <div
                            className="portfolio-item col-xs-12 col-sm-4 col-md-4" key={idx}>
                            <div className="portfolio-bg">
                                <div className="portfolio">
                                    <div className="tt-overlay" />
                                    <div className="links">
                                        <a href={work.link} target="_blank">
                                            <i className="">
                                                <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="absolute -left-0.5 top-0" />
                                            </i>
                                        </a>
                                    </div>
                                    <img src={urlFor(work.image).url()} alt={work.title} className="w-full object-cover h-[200px] rounded image-cover" key={idx} />
                                    <div className="portfolio-info">
                                        <h3>{work.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
};



