import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`*[_type=="heros" ][0]{
  ...,
  
}`);

export const MAIN_QUERY = defineQuery(`*[_type=="main" ][0]{
   "resumeURL": resume.asset->url,
   ...,
  
}`);

export const SEO_QUERY = defineQuery(`*[_type=="seo" ][0]`);

export const PHOTO_QUERY = defineQuery(`*[_type=="photos" ][0]{
  ...,
  photoCollection[] {
      asset->{
        url,
        metadata {
          exif,
          dimensions,
          hasAlpha,
          isOpaque
        }
      }
},

  }`);
