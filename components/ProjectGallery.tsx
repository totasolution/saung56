'use client';

import Image from 'next/image';
import { useState } from 'react';

type Category = 'rumah' | 'komersial' | 'indoor';

const PROJECTS: { title: string; location: string; category: Category; img: string; alt: string }[] = [
  { title: 'Lawn Rumah Modern', location: 'Batam Centre', category: 'rumah', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=75', alt: 'Hamparan rumput hijau di rumah modern' },
  { title: 'Landscape Kantor', location: 'Batam Kota', category: 'komersial', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=75', alt: 'Taman depan gedung kantor' },
  { title: 'Taman Bunga', location: 'Tiban', category: 'rumah', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=75', alt: 'Jalan setapak diapit bunga' },
  { title: 'Indoor Plant Styling', location: 'Nagoya', category: 'indoor', img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=75', alt: 'Tanaman hias dalam ruangan' },
  { title: 'Pergola Resort', location: 'Nongsa', category: 'komersial', img: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=800&q=75', alt: 'Lorong pergola dengan tanaman rambat' },
  { title: 'Kebun Rumah', location: 'Sekupang', category: 'rumah', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=75', alt: 'Bedengan kebun sayur di halaman rumah' },
];

const TABS: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'Semua' },
  { key: 'rumah', label: 'Rumah' },
  { key: 'komersial', label: 'Komersial' },
  { key: 'indoor', label: 'Indoor' },
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState<Category | 'all'>('all');

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Filter proyek">
        {TABS.map((t) => (
          <button key={t.key} role="tab" aria-selected={filter === t.key} onClick={() => setFilter(t.key)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="gallery">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card" hidden={filter !== 'all' && p.category !== filter}>
            <div className="img">
              <Image src={p.img} alt={p.alt} width={800} height={600} />
            </div>
            <div className="body">
              <h3>{p.title}</h3>
              <small>{p.location}</small>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
