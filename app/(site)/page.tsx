import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { client } from '@/sanity/lib/client'
import { SEO_QUERY } from '@/sanity/lib/queries'

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
      <Navbar />
      <About />
      <Resume />
      <Skills />
      <Works />
      <Contact />

    </main>
  );
}
