"use client";
import { useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import { motion, type Variants } from "framer-motion";
import "photoswipe/dist/photoswipe.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { getImageDimensions } from "@sanity/asset-utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import Link from 'next/link';

export default function PhotoContent({ photos }) {
    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: "photos",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();
        return () => { lightbox?.destroy(); lightbox = null; };
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, x: 24 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.6,
                ease: "easeOut", // <- fix: string, not array
            },
        },
    };

    return (
        <div className="overflow-hidden w-full bg-[#1A1E24]">
            <Gallery id="photos" withCaption>
                <motion.div
                    className="grid grid-cols-3 grid-rows-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {photos.map((photo, idx) => {
                        const { width, height } = getImageDimensions(photo);
                        // console.log(photo.asset.metadata.exif);
                        const exif = photo.asset.metadata.exif


                        return (
                            <motion.div key={idx} variants={item}>
                                <Item
                                    original={urlFor(photo).url()}
                                    thumbnail={urlFor(photo).url()}
                                    width={width}
                                    caption={`\u2756 F${exif.FNumber} - ${exif.LensModel} - \u238A ${Math.floor(exif.FocalLength)}mm`}

                                    height={height}
                                >
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src={urlFor(photo).width(800).url()}
                                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                                            alt=""
                                            loading="lazy"
                                        />
                                    )}
                                </Item>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Gallery>
        </div>
    );
}
