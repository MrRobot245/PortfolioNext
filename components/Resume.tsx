import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client'
import { MAIN_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity';
export default async function Resume() {
    const resume = await client.fetch(MAIN_QUERY);
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="resume" className="resume-section section-padding">
                <div className="container">
                    <h2
                        className="section-title wow fadeInUp animated"
                        data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                    >
                        Resume
                    </h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="resume-title">
                                <h3>Experience</h3>
                            </div>
                            <div className="resume">
                                <ul className="timeline">
                                    {resume.resumeList.map((job, idx) => (
                                        <li className={idx % 2 === 0 ? 'timeline-inverted arrow-left' : 'timeline arrow-right'} key={idx}>
                                            <div className="posted-date">
                                                {job.currentflag ? <span className="month">{job.startyear} - {currentYear}</span> : <span className="month">{job.year}</span>}
                                            </div>
                                            <div
                                                className="timeline-panel wow fadeInUp animated"
                                                data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                                            >
                                                <div className="timeline-content">
                                                    <div className="timeline-heading">
                                                        <h3>{job.jobtitle}</h3>
                                                        <span>{job.businessname}</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <PortableText value={job.body} />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul >
                            </div>
                        </div>
                    </div>
                    {/* /row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="resume-title">
                                <h3>Education</h3>
                            </div>
                            <div className="resume">
                                <ul className="timeline">
                                    {resume.educationList.map((school, idx) => (

                                        <li className={idx % 2 === 0 ? 'timeline-inverted' : 'timeline'} key={idx}>
                                            <div className="posted-date">
                                                <span className="month">{school.year}</span>
                                            </div>
                                            <div
                                                className="timeline-panel wow fadeInUp animated"
                                                data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                                            >
                                                <div className="timeline-content">
                                                    <div className="timeline-heading">
                                                        <h3>{school.school}</h3>
                                                        <span>{school.program}</span>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <PortableText value={school.body} />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};



