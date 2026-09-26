'use client';

import { waLink } from '@/lib/site';
import { IconWhatsApp } from './Icons';

const SERVICES = [
  'Desain & Pembuatan Taman',
  'Vertical Garden',
  'Rumput & Tanaman',
  'Kolam & Hardscape',
  'Perawatan Rutin',
];

export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      'Halo Saung56,',
      `Nama: ${f.get('name')}`,
      `Lokasi: ${f.get('location')}`,
      `Layanan: ${f.get('service')}`,
    ];
    if (f.get('message')) lines.push(`Catatan: ${f.get('message')}`);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="cf-name">Nama</label>
      <input id="cf-name" name="name" placeholder="Nama Anda" autoComplete="name" required />
      <label htmlFor="cf-location">Lokasi</label>
      <input id="cf-location" name="location" placeholder="mis. Batam Centre" required />
      <label htmlFor="cf-service">Layanan</label>
      <select id="cf-service" name="service">
        {SERVICES.map((s) => <option key={s}>{s}</option>)}
      </select>
      <label htmlFor="cf-message">Catatan (opsional)</label>
      <textarea id="cf-message" name="message" placeholder="Luas lahan, gaya taman, dll." />
      <button className="btn btn-green" type="submit">
        <IconWhatsApp /> Kirim via WhatsApp
      </button>
    </form>
  );
}
