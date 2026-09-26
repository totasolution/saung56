// Central business info. Replace placeholders with real data before launch.
export const site = {
  name: 'Saung56',
  legalName: 'Saung56 Landscaping',
  url: 'https://saung56.com',
  tagline: 'Jasa Landscaping & Taman di Batam',
  description:
    'Saung56 melayani desain, pembuatan, dan perawatan taman untuk rumah, kantor, dan hotel di Batam. Vertical garden, rumput, kolam, dan hardscape. Survei gratis.',
  whatsapp: '6281200000000',
  phoneDisplay: '+62 812-0000-0000',
  email: 'halo@saung56.com',
  address: {
    street: 'Jl. Contoh No. 56',
    city: 'Batam',
    region: 'Kepulauan Riau',
    postalCode: '29400',
    country: 'ID',
  },
  geo: { lat: 1.1301, lng: 104.0529 },
  hours: 'Senin–Sabtu, 08.00–17.00',
  areaServed: ['Batam', 'Bintan', 'Karimun'],
  social: {
    instagram: 'https://instagram.com/saung56',
    tiktok: 'https://tiktok.com/@saung56',
    facebook: 'https://facebook.com/saung56',
  },
  ogImage: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1200&h=630&fit=crop&q=75',
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
