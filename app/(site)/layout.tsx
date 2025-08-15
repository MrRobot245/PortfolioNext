// "use client";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "../fonts.css";
import "../bulk.css";
import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
// const inter = Inter({ subsets: ["latin"] });
import { ReCaptchaProvider } from "next-recaptcha-v3";
import AOSInit from '@/components/AOSInit';

// import ToasterContext from "../context/ToastContext";
const myGtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-DEFAULT';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AOSInit />
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <body>
          {children}
          {/* <Footer /> */}
      </body>
      <GoogleAnalytics gaId={myGtmId} />
      </ReCaptchaProvider>
    </html>
  );
}
