"use client";
import { useEffect } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { motion } from "framer-motion";
import 'photoswipe/dist/photoswipe.css'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Gallery, Item } from 'react-photoswipe-gallery'
import { getImageDimensions } from '@sanity/asset-utils';
export default function PhotoContent({ photos }) {
    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: 'my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            if (lightbox) {
                lightbox.destroy();
                lightbox = null;
            }
        };
    }, []);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // controls delay between each square
            },
        },
    };


    const item = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <div className="overflow-hidden w-full bg-[#1A1E24]">
                <Gallery id="my-gallery">
                    <motion.div
                        className="grid grid-cols-3 grid-rows-4"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {photos.map((photo, idx) => {
                            const { width, height } = getImageDimensions(photo);
                            return (
                                <motion.div key={idx} variants={item}>
                                    <Item
                                        original={urlFor(photo).url()}
                                        thumbnail={urlFor(photo).url()}
                                        width={width}
                                        height={height}
                                    >
                                        {({ ref, open }) => (
                                            <img ref={ref} onClick={open} src={urlFor(photo).width(600).url()} />
                                        )}
                                    </Item>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </Gallery>
            </div>
        </>
    );
};



