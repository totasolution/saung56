import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import './globals.css';

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'jasa taman batam',
    'landscaping batam',
    'tukang taman batam',
    'vertical garden batam',
    'rumput jepang batam',
    'desain taman rumah',
    'perawatan taman batam',
  ],
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Taman tropis karya Saung56' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [site.ogImage],
  },
  icons: { icon: '/logo.svg', apple: '/logo.svg' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#1f9d55',
  width: 'device-width',
  initialScale: 1,
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  '@id': `${site.url}/#business`,
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  image: site.ogImage,
  description: site.description,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: site.areaServed.map((c) => ({ '@type': 'City', name: c })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '17:00',
  },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={font.variable}>
      <body>
        <a href="#main" className="skip-link">Lewati ke konten</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <JsonLd data={localBusiness} />
      </body>
    </html>
  );
}
