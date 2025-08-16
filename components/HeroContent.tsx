"use client";
import { urlFor } from '@/sanity/lib/image';
export default function HeroContent({ title, subtitle, image }) {

    return (
        <>
            <div className="content-container">
                <div className="row">
                    <div className="col-lg-6 align-self-center" data-aos="fade-right" data-aos-once="true" data-aos-duration="1500">
                        <h1>
                            {title}
                        </h1>
                        <p>
                            {subtitle}
                        </p>
                    </div>
                    <div className="col-lg-6 order-lg-last order-first">
                             {image!="" &&
                             <img src={urlFor(image).url()} alt="" className="img-fluid"></img>
                             }
                    </div>
                </div>
            </div>
        </>
    );
};



