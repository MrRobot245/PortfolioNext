import { urlFor } from '@/sanity/lib/image';
export default function Resume() {

    return (
        <>
            {/* <div id="resume" className="container mt-20 mb-20 mx-auto">
                <h2
                    className="section-title"
                    data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                >
                    Resume
                </h2>
            </div> */}
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
                                    <li className="timeline-inverted">
                                        <div className="posted-date">
                                            <span className="month">2019-2024</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>Operations Systems Specialist</h3>
                                                    <span>Entourage Health Corp</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Onboard Sage X3 V11/V12 ERP system into business workflow{" "}
                                                        <br />
                                                        Work with other departments to implement and develop
                                                        applications that interface with Sage X3 ERP system <br />
                                                        Establish automated ways to control inventory and
                                                        construct a digital count system that integrates with Sage
                                                        X3
                                                        <br />
                                                        Design and maintain a process, and automation for labeling
                                                        of products <br />
                                                        Create easy to use tools to let QA/Ops review automation
                                                        information <br />
                                                        Support IT and other computer business needs
                                                        <br />
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>
                                        {/* /timeline-panel */}
                                    </li>
                                    <li className="timeline">
                                        <div className="posted-date">
                                            <span className="month">2018-2019</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>Full Stack Web / iOS Developer</h3>
                                                    <span>MMD Data Systems</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Develop and test data imports from other Healthcare
                                                        systems
                                                        <br />
                                                        Administrate server and maintain server infrastructure
                                                        <br />
                                                        Independently prioritize and complete assigned tasks
                                                        <br />
                                                        Design and implement a stand-alone iOS app for EMR
                                                        interfacing
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>
                                        {/* /timeline-panel */}
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="posted-date">
                                            <span className="month"> 2017-2018</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>Full Stack Web Developer</h3>
                                                    <span>Res.IM</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Plan and develop websites and web applications using
                                                        wordpress and a combination of stock and customized
                                                        plugins
                                                        <br />
                                                        Support existing projects through upgrades and new
                                                        development
                                                        <br />
                                                        Build custom websites, applications and prototypes using
                                                        whichever tools that suit the project requirements
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>
                                        {/* /timeline-panel */}
                                    </li>
                                    <li className="timeline">
                                        <div className="posted-date">
                                            <span className="month">2015-2016</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>iOS Developer</h3>
                                                    <span>Pulse Passion</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Create a companion iOS app for the PulsePassion product
                                                        line
                                                        <br />
                                                        Develop entirely in native Swift 2.0
                                                        <br />
                                                        Incorporate 3rd party software for SQLite DB
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>
                                        {/* /timeline-panel */}
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="posted-date">
                                            <span className="month">2015-2016</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>Web Designer</h3>
                                                    <span>Pulse Passion</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        {" "}
                                                        Create and maintain a company website for Pulse Passion
                                                        <br />
                                                        Took team member input and UX into consideration
                                                        <br />
                                                        Pushed a fully functional website for the team and
                                                        companion app
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>{" "}
                                        {/* /timeline-panel */}
                                    </li>
                                    <li className="timeline">
                                        <div className="posted-date">
                                            <span className="month">2015-2016</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>iOS Developer</h3>
                                                    <span>Pulse Passion</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Create a companion iOS app for the PulsePassion product
                                                        line
                                                        <br />
                                                        Develop entirely in native Swift 2.0
                                                        <br />
                                                        Incorporate 3rd party software for SQLite DB
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>
                                        {/* /timeline-panel */}
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="posted-date">
                                            <span className="month">2010-2014</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>Tier 1 &amp; 2 Helpdesk </h3>
                                                    <span>St. Thomas Elgin General Hospital</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Install and perform repairs to hardware, software, or
                                                        peripheral equipment, following design or installation
                                                        specifications
                                                        <br />
                                                        Answer phone calls and troubleshoot users encountering
                                                        problems
                                                        <br />
                                                        Set up, Reset, Assign rights, Administer groups to users
                                                        Active Directory
                                                        <br />
                                                        Create and maintain Zenworks images
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>{" "}
                                        {/* /timeline-panel */}
                                    </li>
                                </ul>
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
                                    <li>
                                        <div className="posted-date">
                                            <span className="month">2011-2016</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>Bachelor Degree</h3>
                                                    <span>BA (Computing) University of Guelph</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Graduate of the Software Engineering Program
                                                        <br />
                                                        Coursework in Distributed Computing, Networks, Databases,
                                                        and Software Engineering
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>
                                        {/* /timeline-panel */}
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="posted-date">
                                            <span className="month">2006-2011</span>
                                        </div>
                                        {/* /posted-date */}
                                        <div
                                            className="timeline-panel wow fadeInUp animated"
                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                        >
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>Higher Secondary certificate</h3>
                                                    <span>High School Diploma - St. Josephs High School</span>
                                                </div>
                                                {/* /timeline-heading */}
                                                <div className="timeline-body">
                                                    <p>
                                                        Finished with highest grade for Business Technology
                                                        <br /> Honor Roll for 2 years
                                                        <br />
                                                        Developed internal school website for 2 years
                                                    </p>
                                                </div>
                                                {/* /timeline-body */}
                                            </div>{" "}
                                            {/* /timeline-content */}
                                        </div>{" "}
                                        {/* /timeline-panel */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /.container */}
            </section>

        </>
    );
};



