import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const KEUNGGULAN = [
  'Kualitas & Harga Terjamin',
  'Gabah Langsung Dari Petani Lokal',
  'Higienitas Produk Terjamin',
  'Tersertifikasi Halal',
  'Diolah Dengan Teknologi Mesin'
];

const PROGRAM = [
  'Trading & Supplier',
  'Distributor Resmi',
  'Jasa Makloon & Custom Product',
  'Private Label',
  'Pengelolaan Hasil Samping\n(Broken, Katul, Sekam, dsb)'
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' as const, damping: 20 } }
};

type Product = {
  name: string;
  desc: string;
  url: string | string[];
};

const PRODUCTS: Product[] = [
  {
    name: 'Punokawan',
    desc: `Hadirkan cita rasa tradisional yang membanggakan di setiap momen spesial bersama <strong>Befood Punokawan</strong>, beras premium terpercaya yang aman dan praktis untuk keluarga maupun kelancaran usaha Anda. Kami menjamin mutu yang selalu terjaga dengan hasil masak konsisten untuk berbagai hidangan. Dikemas secara modern dan informatif dalam pilihan 5 Kg, 10 Kg, dan 25 Kg, ketersediaan stok <strong>Befood Punokawan</strong> selalu stabil dan sangat mudah didapatkan di berbagai ritel modern terdekat.`,
    url: '/products/Befood Punokawan.png',
  },
  {
    name: 'Setra Ramos',
    desc: `Hadirkan kehangatan dan kebanggaan di meja makan keluarga dengan kualitas premium modern dari <strong>Befood Setra Ramos</strong>. Sebagai andalan sehari-hari yang lebih unggul di kelas harganya, beras ini memastikan mutu terjamin dengan hasil nasi pulen konsisten yang membuat masakan Anda selalu berhasil. Tampil kredibel melalui kemasan modern berwarna turquoise segar yang edukatif dengan ilustrasi alam, serta bersertifikasi halal dan aman. Didukung pasokan distribusi yang luas dan terjangkau, <strong>Befood Setra Ramos</strong> adalah pilihan praktis yang memiliki kedekatan emosional dengan keluarga Anda.`,
    url: '/products/Befood Setra Ramos.png',
  },
  {
    name: 'Slyp Super',
    desc: `Sempurnakan momen spesial keluarga dengan <strong>Befood Slyp Super</strong>, beras kredibel dan terpercaya yang menawarkan kualitas sensorik unggul. Sejak pertama kali ditanak, wangi nasinya yang menggugah selera berpadu dengan tekstur butir beras yang lebih utuh, menghadirkan aroma dan rasa khas premium yang konsisten pada setiap sajian. Dikemas dalam balutan desain elegan yang informatif lengkap dengan sertifikat halal, beras ini memberikan rasa tenang dan nilai yang sepadan untuk hidangan istimewa Anda. Kepraktisan juga terjamin karena <strong>Befood Slyp Super</strong> senantiasa mudah didapatkan melalui jaringan distribusi kuat di ritel modern.`,
    url: '/products/Befood Slyp Super.png',
  },
  {
    name: 'Mallopi',
    desc: `Hadirkan kebanggaan maritim Indonesia Timur di meja makan Anda dengan <strong>Befood Mallopi</strong>, beras varietas asli dari hasil pertanian terbaik Sulawesi Selatan. Tampil eye-catching melalui kemasan ekonomis berdesain modern dengan visual Phinisi yang ikonis, beras ini menawarkan kualitas pulen dan hasil masak konsisten yang aman untuk keluarga serta cocok disandingkan dengan segala macam lauk. Sangat mewakili identitas masyarakat Indonesia Timur dengan hasil yang selalu sesuai ekspektasi, <strong>Befood Mallopi</strong> dengan mudah bisa Anda dapatkan melalui ketersediaan yang kuat di ritel modern maupun pasar umum.`,
    url: '/products/Befood Mallopi.png',
  },
  {
    name: 'Candi Mulyo',
    desc: `Hadirkan kebanggaan tradisi di meja makan Anda dengan <strong>Befood Candi Mulyo</strong>, representasi sejati dari hasil pertanian terbaik Pulau Jawa. Menawarkan keaslian varietas dengan kualitas unggulan, beras ini menjamin hasil masak yang konsisten dan selalu sesuai ekspektasi untuk menyempurnakan sajian keluarga. Tampil dengan kemasan ekonomis yang sederhana namun informatif, desainnya mencerminkan masyarakat Jawa yang senantiasa menjunjung tinggi nilai tradisi dan keamanan keluarga. Kepraktisan berbelanja pun terjamin karena <strong>Befood Candi Mulyo</strong> sangat mudah didapatkan melalui ketersediaan yang kuat di ritel modern maupun pasar umum.`,
    url: '/products/Befood Candi Mulyo.png',
  },
  {
    name: 'Sibreh & Belinda',
    desc: `Penuhi kebutuhan konsumsi harian Anda dengan <strong>Befood Sibreh & Belinda</strong>, pilihan beras medium berkualitas yang sangat dapat diandalkan. Menawarkan butir beras bersih dengan mutu yang senantiasa terjaga, produk ini menjamin hasil nasi yang konsisten dan cocok untuk melengkapi berbagai menu masakan sehari-hari. Baik untuk sajian rumah tangga maupun mendukung kelancaran usaha kuliner, beras ini hadir dengan pilihan kemasan praktis yang menyesuaikan kebutuhan Anda. Tidak perlu repot mencarinya, karena <strong>Befood Sibreh & Belinda</strong> sudah tersedia luas dan sangat mudah ditemukan melalui berbagai jaringan distribusi.`,
    url: '/products/sibreh_bellinda_1.png',
  },
];

function ProductScrollItem({ prod }: { prod: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this specific product item
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"] 
  });
  
  // Continuously scale based on scroll position:
  // Starts small (0.6) at the bottom, reaches 1.0 near center, shrinks to 0.6 at the top
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.6, 1, 1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.2, 1, 1, 0.2]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0',
        gap: '60px',
        position: 'relative',
        willChange: 'transform, opacity'
      }}
    >
      {/* Subtle glow behind product (since background is removed) */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '25%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(3, 78, 123, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Left: Product Image */}
      <div style={{
        flex: '1 1 340px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '340px',
        zIndex: 1
      }}>
        {Array.isArray(prod.url) ? (
          <div style={{ display: 'flex', gap: '16px' }}>
            {prod.url.map((u, i) => (
              <img
                key={i}
                src={u}
                alt={prod.name}
                style={{
                  maxHeight: '340px',
                  maxWidth: '45%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))',
                }}
              />
            ))}
          </div>
        ) : (
          <img
            src={prod.url}
            alt={prod.name}
            style={{
              maxHeight: '440px',
              maxWidth: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))',
            }}
          />
        )}
      </div>

      {/* Right: Product Info */}
      <div style={{
        flex: '1 1 400px',
        maxWidth: '560px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ marginBottom: '16px' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#F59E0B',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 800,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>
            Befood
          </span>
        </div>
        <h3 style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 900,
          color: '#034E7B', // Dark blue since background is light now
          lineHeight: 1.15,
          marginBottom: '24px',
        }}>
          {prod.name}
        </h3>
        <p 
          style={{
            fontSize: '17px',
            color: '#475569', // Dark gray for readability
            lineHeight: 1.8,
            fontWeight: 500,
            whiteSpace: 'pre-line',
          }}
          dangerouslySetInnerHTML={{ __html: prod.desc }}
        />
      </div>
    </motion.div>
  );
}

function ProductScrollList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '140px', marginTop: '60px' }}>
      {PRODUCTS.map((prod) => (
        <ProductScrollItem key={prod.name} prod={prod} />
      ))}
    </div>
  );
}
export default function PassionSection() {
  return (
    <section style={{
      padding: '100px 4%',
      background: 'linear-gradient(180deg, #e2e8f0 0%, #f1f5f9 100%)',
      color: '#034E7B',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        
        {/* Top Title & Quote */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            fontStyle: 'italic',
            color: '#034E7B',
            marginBottom: '24px',
            letterSpacing: '1px'
          }}>
            "PASSION IN EVERY GRAIN"
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#475569',
            fontWeight: 500
          }}>
            Setiap butir beras membawa komitmen untuk menghadirkan nasi dengan kualitas terbaik, cita rasa lezat, dan kenikmatan dalam melengkapi berbagai hidangan keluarga.
          </p>
        </motion.div>

        {/* 2 Columns: Keunggulan & Program */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          {/* Keunggulan Card */}
          <motion.div variants={fadeUpVariant} whileHover={{ y: -5 }} style={{ transition: 'transform 0.3s' }}>
            <div style={{
              backgroundColor: '#d8e5ee',
              borderRadius: '24px 24px 0 0',
              padding: '24px 20px',
              textAlign: 'center',
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#034E7B', letterSpacing: '1px' }}>KEUNGGULAN</h3>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#034E7B', textTransform: 'uppercase', marginTop: '4px' }}>
                Produksi Beras UB Industri
              </div>
            </div>
            <div style={{
              backgroundColor: '#78A2D9',
              borderRadius: '0 0 24px 24px',
              padding: '40px 32px',
              height: 'calc(100% - 90px)',
              boxShadow: '0 15px 30px -10px rgba(3, 78, 123, 0.2)'
            }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {KEUNGGULAN.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#fff', fontSize: '15px', fontWeight: 600 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff', marginTop: '8px', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Program Card */}
          <motion.div variants={fadeUpVariant} whileHover={{ y: -5 }} style={{ transition: 'transform 0.3s' }}>
            <div style={{
              backgroundColor: '#d8e5ee',
              borderRadius: '24px 24px 0 0',
              padding: '24px 20px',
              textAlign: 'center',
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#034E7B', letterSpacing: '1px' }}>PROGRAM</h3>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#034E7B', textTransform: 'uppercase', marginTop: '4px' }}>
                Kemitraan atau Kerjasama
              </div>
            </div>
            <div style={{
              backgroundColor: '#78A2D9',
              borderRadius: '0 0 24px 24px',
              padding: '40px 32px',
              height: 'calc(100% - 90px)',
              boxShadow: '0 15px 30px -10px rgba(3, 78, 123, 0.2)'
            }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {PROGRAM.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#fff', fontSize: '15px', fontWeight: 600 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ whiteSpace: 'pre-line', lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Products Scroll Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '40px', marginBottom: '20px' }}
        >
          <h2 style={{
            fontSize: '28px',
            fontWeight: 900,
            color: '#034E7B',
            marginBottom: '40px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textAlign: 'center'
          }}>
            Products :
          </h2>


          <ProductScrollList />
        </motion.div>

        {/* Our Partner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <h2 style={{
            fontSize: '28px',
            fontWeight: 900,
            color: '#034E7B',
            marginBottom: '48px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Our Partner
          </h2>

          {/* Marquee CSS */}
          <style>{`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
            }
            .marquee-left .marquee-track {
              animation: marquee-left 60s linear infinite;
            }
            .marquee-right .marquee-track {
              animation: marquee-right 70s linear infinite;
            }
            .marquee-container:hover .marquee-track {
              animation-play-state: paused;
            }
            .partner-logo-slot {
              flex-shrink: 0;
              width: 140px;
              height: 60px;
              margin: 0 16px;
              background: transparent;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px 16px;
              transition: transform 0.3s ease, opacity 0.3s ease;
              opacity: 0.75;
            }
            .partner-logo-slot:hover {
              transform: translateY(-2px);
              opacity: 1;
            }
            .partner-logo-slot img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
            }
          `}</style>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            overflow: 'hidden',
            borderRadius: '20px',
            padding: '24px 0',
            background: 'rgba(255,255,255,0.3)',
          }}>
            {/* Row 1: scroll left */}
            <div className="marquee-container marquee-left">
              <div className="marquee-track">
                {[...Array(2)].map((_, setIdx) => (
                  [
                    'logo-ada1.png','logo-aeon1.png','logo-alfamart-sumber-alfaria1.png','logo-aneka-jaya1.png',
                    'logo-assalam1.png','logo-borma.jpeg','logo-gaya1.png','logo-goori1.png',
                    'logo-grandlucky1.png','logo-grooceries1.png','logo-harja-gunatama-borma1.png',
                    'logo-hero1.png','logo-hokky1.png','logo-indogrosir-inti-cakrawala1.png',
                  ].map((file, i) => (
                    <div key={`r1-${setIdx}-${i}`} className="partner-logo-slot">
                      <img src={`https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-ritel/${file}`} alt={file.replace(/logo-|1?\.(png|jpeg)/g,'').replace(/-/g,' ')} />
                    </div>
                  ))
                ))}
              </div>
            </div>

            {/* Row 2: scroll right */}
            <div className="marquee-container marquee-right">
              <div className="marquee-track">
                {[...Array(2)].map((_, setIdx) => (
                  [
                    'logo-indomarco1.png','logo-kage-diamond1.png','logo-laris1.png','logo-lion-superindo1.png',
                    'logo-lotte1.png','logo-lulu1.png','logo-luwes1.png','logo-matahari-prima1.png',
                    'logo-mega-harapan-stock-point1.png','logo-midi-utama1.png','logo-mitra-swalayan1.png',
                    'logo-naga1.png','logo-ramai1.png','logo-ramayana1.png',
                  ].map((file, i) => (
                    <div key={`r2-${setIdx}-${i}`} className="partner-logo-slot">
                      <img src={`https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-ritel/${file}`} alt={file.replace(/logo-|1?\.(png|jpeg)/g,'').replace(/-/g,' ')} />
                    </div>
                  ))
                ))}
              </div>
            </div>

            {/* Row 3: scroll left (slower) */}
            <div className="marquee-container marquee-left">
              <div className="marquee-track" style={{ animationDuration: '80s' }}>
                {[...Array(2)].map((_, setIdx) => (
                  [
                    'logo-samudera1.png','logo-satu-sama-jaya1.png','logo-sukses-abadi1.png',
                    'logo-sumber-agri-frestive1.png','logo-super-ekonomi1.png','logo-supra-boga1.png',
                    'logo-tip-top1.png','logo-trans-groserindo1.png','logo-trans-ritel1.png',
                    'logo-trinico1.png','logo-victory-papaya1.png','logo-yogya1.png','logo-yomart.png',
                  ].map((file, i) => (
                    <div key={`r3-${setIdx}-${i}`} className="partner-logo-slot">
                      <img src={`https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-ritel/${file}`} alt={file.replace(/logo-|1?\.(png|jpeg)/g,'').replace(/-/g,' ')} />
                    </div>
                  ))
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
