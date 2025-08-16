import ContactHero from "@/components/ContactHero";
import ContactForm from '@/components/ContactForm';
import { client } from '@/sanity/lib/client'
import { SEO_QUERY } from '@/sanity/lib/queries'

// export async function generateMetadata() {
//   const seo = await client.fetch(SEO_QUERY)
//   return {
//     title: seo.title + " - Contact",
//     description: seo.ContactSEO.metaDescription,
//     keywords: seo.ContactSEO.metaTags,
//     icons: "/images/favicon.png",
//   }
// } ``

export default function Photography() {


    return (
        <>
            {/* <ContactHero /> */}
            {/* <ContactForm /> */}
        </>

    );
}
