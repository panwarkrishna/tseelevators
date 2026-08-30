import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tseelevators.com'),
  title: {
    default: 'TSE Elevators – Premium Lift Manufacturers & Elevator Company in Delhi NCR',
    template: '%s | TSE Elevators',
  },
  description: 'TSE Elevators (I) Pvt Ltd is a premier lift manufacturer, elevator installation, and maintenance company in Delhi-NCR. We offer high-quality home elevators, passenger lifts, hospital elevators, and hydraulic lift solutions.',
  applicationName: 'TSE Elevators',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  appleWebApp: {
    capable: true,
    title: 'TSE Elevators',
    statusBarStyle: 'default',
  },
  keywords: [
    'lift manufacturers in Delhi',
    'elevator company Delhi NCR',
    'home elevators Delhi',
    'passenger elevators manufacturer',
    'hydraulic lifts India',
    'hospital elevators suppliers',
    'elevator installation services',
    'elevator maintenance AMC Delhi',
    'capsule elevators manufacturers',
    'TSE Elevators',
  ],
  authors: [{ name: 'TSE Shaft Elevators (I) Pvt Ltd' }],
  creator: 'TSE Shaft Elevators (I) Pvt Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tseelevators.com',
    siteName: 'TSE Elevators',
    title: 'TSE Elevators – Premium Lift Manufacturers & Elevator Company in Delhi NCR',
    description: 'We design, manufacture, install, and maintain high-performance residential and commercial elevators across Delhi NCR.',
    images: [{ url: 'https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png', width: 1200, height: 630, alt: 'TSE Elevators' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tseelevators',
    creator: '@tseelevators',
    title: 'TSE Elevators – Premium Lift Manufacturers in Delhi NCR',
    description: 'Reliable lift manufacturing, installation, and 24/7 AMC services in Delhi-NCR.',
    images: ['https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tseelevators.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}