import { motion } from 'framer-motion';
import { Mail, MapPin, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import InfrastructureOverview from '../components/InfrastructureOverview';
import UnitInfrastruktur from '../components/UnitInfrastruktur';
import CompanyStats from '../components/CompanyStats';
import PassionSection from '../components/PassionSection';
import Footer from '../components/Footer';

const LOGO_BULOG = 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-bulog/logo-bulog.png';
const LOGO_UBI = 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-bulog/logo-ubi-full.png';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(10,20,40,0.5) 0%, rgba(10,20,40,0.25) 50%, rgba(10,20,40,0.05) 100%)',
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <main className="hero-content">
          {/* Brand Logos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-logos"
          >
            <img src={LOGO_BULOG} alt="Logo Bulog" className="hero-logo-img" />
            <div className="hero-logo-divider" />
            <img src={LOGO_UBI} alt="Logo UB Industri" className="hero-logo-img" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Passion in Every Grain
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            UNIT BISNIS<br />
            INDUSTRI
          </motion.h1>
        </main>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-footer"
        >
          <div className="hero-footer-item">
            <Mail size={16} />
            <span>INDUSTRI@BULOG.CO.ID</span>
          </div>
          <div className="hero-footer-divider" />
          <div className="hero-footer-item">
            <MapPin size={16} />
            <span>KANTOR PUSAT GEDUNG BULOG JL. GATOT SUBROTO NO.KAV. 49 JAKARTA SELATAN</span>
          </div>
        </motion.div>

        {/* Chevron */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hero-chevron"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ===== ABOUT US SECTION ===== */}
      <section id="about" style={{ position: 'relative', padding: '120px 8%', backgroundColor: '#f8fafc', color: '#1e293b', overflow: 'hidden' }}>
        
        {/* Background Decorative Element */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
           <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,162,217,0.15) 0%, rgba(255,255,255,0) 70%)' }} />
           <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(3,78,123,0.1) 0%, rgba(255,255,255,0) 70%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Top Content Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', marginBottom: '100px' }}>
            
            {/* Left Content (Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              style={{ flex: '1 1 400px' }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1, color: 'var(--color-primary)' }}>
                About <br/><span style={{ color: 'var(--color-tertiary)' }}>Unit Bisnis Industri</span>
              </h2>
              <div style={{ width: '80px', height: '6px', borderRadius: '4px', backgroundColor: 'var(--color-secondary)', marginBottom: '40px' }}></div>
              
              <div style={{ paddingRight: '20px' }}>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '24px', color: '#334155' }}>
                  <strong style={{ color: 'var(--color-primary)' }}>UB Industri</strong> merupakan unit bisnis yang dibentuk Perum BULOG <strong style={{ color: 'var(--color-primary)' }}>berfokus pada bisnis pengolahan serta perdagangan industri beras & jagung</strong>, mulai dari pengelolaan bahan baku gabah, beras, pengeringan jagung, hasil samping serta produk turunan lainnya.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#475569' }}>
                  Unit produksi didukung dengan teknologi modern serta kapasitas produksi skala besar.
                </p>
              </div>
            </motion.div>

            {/* Right Content (Image) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ flex: '1 1 500px', position: 'relative' }}
            >
               {/* Decorative offset box */}
               <div style={{ position: 'absolute', top: '30px', right: '-30px', width: '100%', height: '100%', borderRadius: '32px', backgroundColor: 'var(--color-secondary)', opacity: 0.15 }}></div>
               
               <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                 <img 
                   src="https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/compro_ub_img/img/spp_about.png" 
                   alt="Fasilitas Pengolahan" 
                   style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.7s ease' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                 />
               </div>
            </motion.div>

          </div>

          {/* Bottom Row (Services) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
            {[
              {
                title: "Memproduksi Komoditi Pangan",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>,
                delay: 0.1
              },
              {
                title: "Melayani jasa: Pengeringan Gabah, Pengolahan Pangan dan Pengemasan",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="3 4h8"/></svg>,
                delay: 0.3
              },
              {
                title: "Menjual Pangan Hasil Industri",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>,
                delay: 0.5
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                style={{ 
                  flex: '1 1 300px',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center', 
                  padding: '48px 32px', 
                  backgroundColor: '#fff', 
                  borderRadius: '24px', 
                  boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', backgroundColor: 'var(--color-primary)' }}></div>
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', backgroundColor: 'rgba(3, 78, 123, 0.05)' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.5 }}>{service.title}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== INFRASTRUCTURE MAP SECTION ===== */}
      <InfrastructureOverview />

      {/* ===== UNIT INFRASTRUKTUR SECTION ===== */}
      <UnitInfrastruktur />

      {/* ===== COMPANY STATS SECTION ===== */}
      <CompanyStats />

      {/* ===== PASSION & PRODUCTS SECTION ===== */}
      <PassionSection />

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
