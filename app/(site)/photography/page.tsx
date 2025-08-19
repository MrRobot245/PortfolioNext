import PhotoContent from "@/components/PhotoContent";
import { client } from '@/sanity/lib/client'
import { SEO_QUERY, PHOTO_QUERY } from '@/sanity/lib/queries'

export async function generateMetadata() {
    const seo = await client.fetch(SEO_QUERY)
    return {
        title: seo.title + " - Contact",
        description: seo.PhotographySEO.metaDescription,
        keywords: seo.PhotographySEO.metaTags,
        icons: "/images/favicon.png",
    }
} ``

export default async function Photography() {
    const photos = await client.fetch(PHOTO_QUERY);

    return (
        <>
            <main>
                <PhotoContent photos={photos.photoCollection} />
            </main>
        </>

    );
}
