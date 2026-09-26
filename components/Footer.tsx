import Link from 'next/link';
import Image from 'next/image';
import { site, waLink } from '@/lib/site';
import { IconWhatsApp } from './Icons';

export default function Footer() {
  const a = site.address;
  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot">
            <div>
              <Link href="/" className="logo">
                <Image src="/logo.svg" alt="" width={38} height={38} />
                Saung56
              </Link>
              <p>Jasa landscaping terpercaya di Batam. Desain, pembuatan, dan perawatan taman untuk rumah dan bisnis.</p>
            </div>
            <div>
              <h4>Layanan</h4>
              <ul>
                <li><Link href="/#layanan">Desain Taman</Link></li>
                <li><Link href="/#layanan">Vertical Garden</Link></li>
                <li><Link href="/#layanan">Perawatan Rutin</Link></li>
                <li><Link href="/artikel">Artikel</Link></li>
              </ul>
            </div>
            <div>
              <h4>Kontak</h4>
              <address style={{ fontStyle: 'normal' }}>
                <ul>
                  <li><a href={waLink()}>{site.phoneDisplay}</a></li>
                  <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                  <li>{a.street}, {a.city}</li>
                  <li>{site.hours}</li>
                </ul>
              </address>
            </div>
            <div>
              <h4>Sosial</h4>
              <ul>
                <li><a href={site.social.instagram} rel="noopener" target="_blank">Instagram</a></li>
                <li><a href={site.social.tiktok} rel="noopener" target="_blank">TikTok</a></li>
                <li><a href={site.social.facebook} rel="noopener" target="_blank">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
            <span>Batam, Kepulauan Riau</span>
          </div>
        </div>
      </footer>
      <a href={waLink('Halo Saung56, saya mau tanya soal taman.')} className="wa-float" aria-label="Chat WhatsApp" target="_blank" rel="noopener">
        <IconWhatsApp />
      </a>
    </>
  );
}
