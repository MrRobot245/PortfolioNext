import Hero from "@/components/Hero";
import { client } from '@/sanity/lib/client'
import  { SEO_QUERY } from '@/sanity/lib/queries'

// export async function generateMetadata() {
//   const seo =await client.fetch(SEO_QUERY)
//   return {
//     title: seo.title,
//     description: seo.HomepageSEO.metaDescription,
//     keywords: seo.HomepageSEO.metaTags,
//     icons: "/images/favicon.png",
//   }
// }

export default function Home() {
  return (
    <main>
       <Hero />
      {/* <Hero />
      <LandingBrands />
      <LandingDivisions />
      <LandingPress /> */}
    </main>
  );
}
