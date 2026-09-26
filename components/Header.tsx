'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV = [
  { href: '/#layanan', label: 'Layanan' },
  { href: '/#proyek', label: 'Proyek' },
  { href: '/#testimoni', label: 'Testimoni' },
  { href: '/artikel', label: 'Artikel' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label="Saung56 — beranda">
          <Image src="/logo.svg" alt="" width={38} height={38} priority />
          Saung56
        </Link>
        <nav aria-label="Menu utama">
          <ul id="menu" className={`menu${open ? ' open' : ''}`}>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={n.href === '/artikel' && pathname.startsWith('/artikel') ? 'active' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#kontak" className="btn btn-green">Hubungi Kami</Link>
        <button
          className="burger"
          aria-label="Buka menu"
          aria-controls="menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
