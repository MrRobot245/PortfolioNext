import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`*[_type=="heros" ][0]{
  ...,
  
}`);

export const MAIN_QUERY = defineQuery(`*[_type=="main" ][0]{
  ...,
  
}`);

export const SEO_QUERY = defineQuery(`*[_type=="seo" ][0]`);
