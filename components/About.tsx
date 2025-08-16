import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { MAIN_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
export default async function About() {
    const about = await client.fetch(MAIN_QUERY)
    return (
        <>
            <div id="about" className="container mt-20 mb-20 mx-auto">
                <h2
                    className="section-title"
                    data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                >
                    About Me
                </h2>
                <div className="flex items-center justify-center">
                    <div className="w-full rounded-2xl grid md:grid-cols-3">
                        {/* Left Content */}
                        <div className="md:col-span-2 p-8">
                            {/* Objective */}
                            <h2 className="text-xl font-bold mb-2">OBJECTIVE</h2>
                            <p className="mb-6 text-gray-700">{about.aboutObjective}</p>

                            {/* Who Am I */}
                            <h2 className="text-xl font-bold mb-2">WHO AM I</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {about.aboutWhoAmI}
                            </p>

                            {/* Skills */}
                            <div className="grid sm:grid-cols-2 gap-4 text-gray-700 mb-6"
                                data-aos="fade-up" data-aos-once="true" data-aos-duration="1500">
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span> UX Experience
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span> Web Developer
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span> iOS Developer
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span> Virtualization Experience
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span> CLI Developer
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span> Legacy Language Experience
                                    </li>
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 download-button mt-5">
                                <a className="btn btn-info btn-lg" href="#contact">
                                    <FontAwesomeIcon icon={['fas', 'paper-plane']} inverse className="mr-2" />
                                    Send me message</a>
                                <a className="btn btn-primary btn-lg" href="files/Resume.pdf">
                                    {/* <i className="fa fa-download"></i> */}
                                    <FontAwesomeIcon icon={['fas', 'download']} inverse className="mr-2" />
                                    Download my CV</a>
                            </div>
                        </div>

                        {/* Right Sidebar */}

                        <div className="biography">
                            <div className="myphoto">
                                <img src={urlFor(about.aboutPicture).url()} alt="" />
                            </div>
                            <div className="text-sm w-full text-gray-700 space-y-2 aboutInfoWrapper text-left pt-[25px] pb-[30px] px-3">
                                <PortableText value={about.aboutInfo} />
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        </>
    );
};



