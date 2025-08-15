import * as motion from "motion/react-client"
import Link from "next/link";
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { FEATURED_QUERY } from '@/sanity/lib/queries'

const Footer = async () => {

  // const featured = await client.fetch(FEATURED_QUERY)

  return (
    <>
      <footer>
       
      </footer>
    </>
  );
};

export default Footer;
