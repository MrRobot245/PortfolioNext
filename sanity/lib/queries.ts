import {defineQuery} from 'next-sanity'


export const HERO_QUERY = defineQuery(`*[_type=="heros" ][0]{
  ...,
  
}`)

export const MAIN_QUERY = defineQuery(`*[_type=="main" ][0]{
  ...,
  
}`)


export const FEATURED_QUERY = defineQuery(`*[_type=="featured" ][0]{
    ...,

  }`)

export const LANDING_PRODUCTS_QUERY = defineQuery(`*[_type=="landingProducts" ] | order(order asc){
  ...,
 ptype->
}`)
export const TYPES_QUERY = defineQuery(`*[_type=="productTypes" ] | order(order asc){
  ...,
}`)
export const SLUG_QUERY = defineQuery(`*[slug.current == $slug][0]{
  ...,
  "plaintextproductDetails": pt::text(productDetails),
  }`)

export const LEADERS_QUERY = defineQuery(`*[_type=="leaders" ] | order(order asc){
  ...,
  "slug": slug.current,
}`)

export const BRANDS_QUERY = defineQuery(`*[_type=="brands" ] | order(order asc){
  _id, title, slug, ...,
}`)
export const DIVISIONS_QUERY = defineQuery(`*[_type=="division" ][0]{
 ...,
}`)
export const CAREER_QUERY = defineQuery(`*[_type=="careers" ][0]{
 ...,
}`)

export const PRESS_QUERY = defineQuery(`*[_type=="press" && externalLinkBoolean == false] | order(publishDate desc){
  _id, title, ...,
   "slug": slug.current,
}`)
export const NEWS_QUERY = defineQuery(`*[_type=="press" && externalLinkBoolean == true] | order(publishDate desc){
  _id, title, ...,
   "slug": slug.current,
}`)
export const ALL_NEWS_QUERY = defineQuery(`*[_type=="press"] | order(publishDate desc){
  _id, title, ...,
   "slug": slug.current,
}`)
export const ALL_NEWS_LIMITED_QUERY = defineQuery(`*[_type=="press"] | order(publishDate desc){
  _id, title, ...,
   "slug": slug.current,
}[0...3]`)




export const SEO_QUERY = defineQuery(`*[_type=="seo" ][0]`)
