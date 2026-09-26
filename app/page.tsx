import Link from 'next/link';
import Image from 'next/image';
import ProjectGallery from '@/components/ProjectGallery';
import ContactForm from '@/components/ContactForm';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import { getAllArticles } from '@/lib/articles';
import { site, waLink } from '@/lib/site';
import {
  IconArrow, IconGrass, IconHome, IconLeaf, IconMail, IconPencil,
  IconPhone, IconPin, IconScissors, IconSprout, IconStar, IconWater,
} from '@/components/Icons';

const SERVICES = [
  { icon: IconPencil, title: 'Desain Taman', text: 'Konsep & visual 3D gratis untuk setiap proyek pembuatan.', feature: true },
  { icon: IconHome, title: 'Pembuatan Taman', text: 'Taman depan, belakang, rooftop, hingga area komersial.' },
  { icon: IconSprout, title: 'Vertical Garden', text: 'Solusi hijau untuk lahan sempit dan dinding bangunan.' },
  { icon: IconGrass, title: 'Rumput & Tanaman', text: 'Rumput gajah mini, jepang, dan tanaman hias siap tanam.' },
  { icon: IconWater, title: 'Kolam & Hardscape', text: 'Kolam koi, batu alam, stepping stone, dan gazebo.' },
  { icon: IconScissors, title: 'Perawatan Rutin', text: 'Paket mingguan atau bulanan, taman selalu rapi.' },
];

const STEPS = [
  { title: 'Konsultasi', text: 'Chat WhatsApp atau telepon, lalu jadwalkan survei lokasi gratis.' },
  { title: 'Desain & RAB', text: 'Kami kirim konsep 3D dan rincian biaya yang transparan.' },
  { title: 'Pengerjaan', text: 'Tim membangun taman sesuai jadwal yang disepakati.' },
  { title: 'Serah Terima', text: 'Garansi tanaman 30 hari dan opsi perawatan rutin.' },
];

const TESTIMONIALS = [
  { quote: 'Taman depan rumah jadi cantik banget. Pengerjaan 5 hari selesai, rapi dan bersih.', name: 'Andi R.', place: 'Batam Centre' },
  { quote: 'Vertical garden di kafe kami jadi spot foto favorit pelanggan. Recommended!', name: 'Dewi S.', place: 'Pemilik kafe, Nagoya' },
  { quote: 'Pakai paket perawatan bulanan, rumput selalu hijau walau musim panas.', name: 'Michael K.', place: 'Sekupang' },
];

const FAQ = [
  { q: 'Apakah survei lokasi berbayar?', a: 'Tidak. Survei lokasi dan konsultasi awal gratis untuk area Batam.' },
  { q: 'Berapa lama pembuatan taman rumah?', a: 'Taman rumah ukuran umum (20–60 m²) biasanya selesai 3–10 hari kerja, tergantung desain dan material.' },
  { q: 'Apakah ada garansi tanaman?', a: 'Ada. Tanaman dan rumput bergaransi hidup 30 hari setelah serah terima, selama perawatan dasar diikuti.' },
  { q: 'Melayani daerah mana saja?', a: 'Seluruh Batam, serta Bintan dan Karimun untuk proyek tertentu.' },
  { q: 'Bisa perawatan saja tanpa pembuatan?', a: 'Bisa. Kami punya paket perawatan mingguan dan bulanan untuk taman yang sudah ada.' },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const MARQUEE = ['Desain Taman', 'Vertical Garden', 'Rumput Jepang', 'Kolam Ikan', 'Perawatan Rutin', 'Batu Alam'];

export default function Home() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="pill">Landscaping pilihan warga Batam</span>
            <h1>
              Jasa taman Batam, bikin rumah lebih <span className="hl">segar</span>.
            </h1>
            <p>
              Desain, pembuatan, dan perawatan taman untuk rumah, ruko, kantor, dan hotel di Batam.
              Cepat, rapi, dan bergaransi.
            </p>
            <div className="hero-cta">
              <a href={waLink('Halo Saung56, saya mau jadwalkan survei gratis.')} className="btn btn-green" target="_blank" rel="noopener">
                Survei Gratis <IconArrow />
              </a>
              <Link href="/#proyek" className="btn btn-line">Lihat Proyek</Link>
            </div>
            <div className="trust">
              <div className="avatars" aria-hidden="true"><span>AR</span><span>DS</span><span>MK</span><span>+</span></div>
              <div><b>150+ klien puas</b><small>di {site.areaServed.join(', ')}</small></div>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              className="main"
              src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1000&q=75"
              alt="Taman tropis hijau dengan tanaman rimbun"
              width={1000}
              height={1050}
              priority
            />
            <div className="float-card fc-1"><div className="dot"><IconLeaf /></div><div>Garansi 30 hari<small>tanaman hidup</small></div></div>
            <div className="float-card fc-2"><div className="dot"><IconStar /></div><div>4.9 / 5<small>rating Google</small></div></div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>

      <section id="layanan">
        <div className="wrap">
          <div className="center-head reveal">
            <span className="pill">Layanan Kami</span>
            <h2>Apa pun tamannya, kami siap bantu.</h2>
            <p>Pilih layanan satuan atau paket lengkap dari desain sampai perawatan.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.map(({ icon: Icon, title, text, feature }) => (
              <div key={title} className={`svc reveal${feature ? ' feature' : ''}`}>
                <div className="ic"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why" id="kenapa">
        <div className="wrap why-grid">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=75"
            alt="Tukang taman Saung56 menanam bibit"
            width={900}
            height={990}
            className="reveal"
          />
          <div className="reveal">
            <span className="pill">Kenapa Saung56</span>
            <h2>Dikerjakan orang lokal yang paham Batam.</h2>
            <p className="lead">
              Tanah Batam cenderung merah dan asam, cuacanya panas, dan angin lautnya kencang. Kami tahu
              tanaman mana yang bertahan dan cara menyiapkan media tanam yang tepat.
            </p>
            <div className="num-grid">
              <div><b>150+</b><span>proyek selesai</span></div>
              <div><b>10 th</b><span>pengalaman</span></div>
              <div><b>30 hr</b><span>garansi tanaman</span></div>
              <div><b>24 jam</b><span>respon WhatsApp</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="proses">
        <div className="wrap">
          <div className="center-head reveal">
            <span className="pill">Cara Kerja</span>
            <h2>Empat langkah menuju taman impian.</h2>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.title} className="reveal">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="proyek" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head reveal">
            <span className="pill">Proyek Terbaru</span>
            <h2>Hasil kerja yang bicara.</h2>
          </div>
          <ProjectGallery />
        </div>
      </section>

      <section id="testimoni" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head reveal">
            <span className="pill">Testimoni</span>
            <h2>Kata mereka tentang kami.</h2>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="testi reveal">
                <div className="stars" aria-label="5 dari 5 bintang">★★★★★</div>
                <blockquote><p>“{t.quote}”</p></blockquote>
                <figcaption><b>{t.name}</b><small>{t.place}</small></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="artikel" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head reveal">
            <span className="pill">Artikel</span>
            <h2>Tips & inspirasi taman.</h2>
            <p>Panduan praktis merawat dan merancang taman di iklim tropis Batam.</p>
          </div>
          <div className="gallery">
            {articles.map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/artikel" className="btn btn-line">Semua Artikel <IconArrow /></Link>
          </div>
        </div>
      </section>

      <section id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head reveal">
            <span className="pill">FAQ</span>
            <h2>Pertanyaan yang sering diajukan.</h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>Yuk, mulai taman impian Anda.</h2>
              <p>Isi form singkat, tim kami akan membalas via WhatsApp dalam 24 jam.</p>
              <ul className="cta-contacts">
                <li><IconPhone /> <a href={waLink()}>{site.phoneDisplay}</a></li>
                <li><IconMail /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><IconPin /> {site.address.street}, {site.address.city}</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <JsonLd data={faqLd} />
    </>
  );
}
