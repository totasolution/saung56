import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap center-head">
        <span className="pill">404</span>
        <h1>Halaman tidak ditemukan.</h1>
        <p>Halaman yang Anda cari mungkin sudah dipindah atau tidak ada.</p>
        <div className="hero-cta" style={{ justifyContent: 'center', marginTop: 28 }}>
          <Link href="/" className="btn btn-green">Kembali ke Beranda</Link>
          <Link href="/artikel" className="btn btn-line">Baca Artikel</Link>
        </div>
      </div>
    </section>
  );
}
