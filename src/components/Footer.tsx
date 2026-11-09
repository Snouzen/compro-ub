import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const LOGO_BULOG = 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-bulog/logo-bulog.png';
const LOGO_UBI = 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-bulog/logo-ubi-full.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#034E7B',
      color: '#f8fafc',
      padding: '80px 4% 30px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '60px'
      }}>
        
        {/* Column 1: Company Info & NAP (Name, Address, Phone for Local SEO) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', padding: '12px', borderRadius: '12px', width: 'fit-content' }}>
            <img src={LOGO_BULOG} alt="Logo Perum Bulog" style={{ height: '32px', objectFit: 'contain' }} />
            <div style={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0' }} />
            <img src={LOGO_UBI} alt="Logo UB Industri Bulog" style={{ height: '32px', objectFit: 'contain' }} />
          </div>
          
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#cbd5e1' }}>
            Unit Bisnis Industri (UBI) Perum BULOG hadir untuk menyediakan beras berkualitas premium dengan teknologi modern, memastikan setiap butir beras memberikan cita rasa terbaik untuk keluarga Indonesia.
          </p>

          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#cbd5e1' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <MapPin size={18} style={{ color: '#E8843C', flexShrink: 0 }} />
              <span>Gedung BULOG, Jl. Jend. Gatot Subroto No.49, Jakarta Selatan, 12950</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Phone size={18} style={{ color: '#E8843C', flexShrink: 0 }} />
              <a href="tel:+622112345678" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+6281283330274</a>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Mail size={18} style={{ color: '#E8843C', flexShrink: 0 }} />
              <a href="mailto:info@bulog.co.id" style={{ color: '#cbd5e1', textDecoration: 'none' }}>industri@bulog.co.id</a>
            </div>
          </address>
        </div>

        {/* Column 2: Quick Links (SEO Internal Linking) */}
        <nav aria-label="Footer Navigation">
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: '#fff' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Beranda', path: '/' },
              { label: 'Tentang Kami', path: '/about' },
              { label: 'Produk Kami', path: '/products' },
              { label: 'Infrastruktur', path: '/infrastructure' },
              { label: 'Hubungi Kami', path: '/contact' }
            ].map((link, i) => (
              <li key={i}>
                <Link to={link.path} style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#E8843C'}
                onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Legal & Support (Trust signals for SEO) */}
        <nav aria-label="Legal Navigation">
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: '#fff' }}>Support & Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Kebijakan Privasi', path: '/privacy' },
              { label: 'Syarat & Ketentuan', path: '/terms' },
              { label: 'FAQ', path: '/faq' },
              { label: 'Karir', path: '/careers' }
            ].map((link, i) => (
              <li key={i}>
                <Link to={link.path} style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#E8843C'}
                onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 4: Social Media */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', color: '#fff' }}>Ikuti Kami</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { icon: <InstagramIcon />, url: 'https://instagram.com/industri.bulog', label: 'Instagram' },
              { icon: <FacebookIcon />, url: '#', label: 'Facebook' },
              { icon: <TwitterIcon />, url: '#', label: 'Twitter' },
              { icon: <LinkedinIcon />, url: '#', label: 'LinkedIn' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background-color 0.3s, transform 0.3s',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#E8843C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontSize: '13px',
        color: '#94a3b8'
      }}>
        <p style={{ margin: 0 }}>
          &copy; {currentYear} Unit Bisnis Industri - Perum BULOG. Hak cipta dilindungi undang-undang.
        </p>
        <p style={{ margin: 0 }}>
          Didesain dengan <span style={{ color: '#E8843C' }}>❤</span> untuk Indonesia.
        </p>
      </div>
    </footer>
  );
}
