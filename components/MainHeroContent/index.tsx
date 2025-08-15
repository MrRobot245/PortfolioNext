"use client";
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
export default function HeroContent({ title, subtitle, image }) {

    return (
        <>
            <div className="content-container">
                <div className="row">
                    <div className="col-lg-12 align-self-center mainHero" data-aos="fade-down" data-aos-once="true" data-aos-duration="1500">
                    <PortableText
                                    value={title}
                                />
                    </div>
                </div>
            </div>
        </>
    );
};



