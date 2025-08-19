import Hero from "@/components/Hero";
import { client } from '@/sanity/lib/client'
import { SEO_QUERY } from '@/sanity/lib/queries'

export async function generateMetadata() {
    const seo = await client.fetch(SEO_QUERY)
    return {
        title: seo.title + " - Contact",
        description: seo.PhotographySEO.metaDescription,
        keywords: seo.PhotographySEO.metaTags,
        icons: "/images/favicon.png",
    }
} ``

export default function Photography() {


    return (
        <>
            <main>
                <Hero />
            </main>
        </>

    );
}
