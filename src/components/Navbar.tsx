import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'PRODUCTS', to: '/products' },
  { label: 'CONTACT', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Aktifkan background solid hanya ketika scroll sudah melewati area hero (tinggi layar - navbar)
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 24px',
        backgroundColor: (location.pathname !== '/' || isScrolled) ? '#034E7B' : 'transparent',
        transition: 'background-color 0.3s ease',
        boxShadow: (location.pathname !== '/' || isScrolled) ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      {/* Logo */}
      <Link 
        to="/" 
        onClick={handleLogoClick}
        style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
      >
        <img 
          src="https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/logo-img/logo-bulog/logo-ubi.png" 
          alt="UB Industri Logo" 
          style={{ height: '24px', objectFit: 'contain' }} 
        />
        <span style={{ fontSize: '18px', fontWeight: 600, color: '#fff', letterSpacing: '0.5px' }}>
          UB Industri
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
        {NAV_LINKS.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              style={{
                color: isActive ? '#fff' : 'rgba(255,255,255,0.85)',
                fontSize: '13px',
                fontWeight: isActive ? 800 : 500,
                letterSpacing: '1px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderBottom: isActive ? '2px solid #fff' : '2px solid transparent',
                paddingBottom: '4px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive ? '#fff' : 'rgba(255,255,255,0.85)';
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Desktop spacer */}
      <div className="hidden md:block" style={{ width: '80px' }}></div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: '4px',
          zIndex: 60,
        }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10,20,40,0.95)',
            zIndex: 55,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {NAV_LINKS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                style={{
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.9)',
                  fontSize: '20px',
                  fontWeight: isActive ? 800 : 600,
                  letterSpacing: '2px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  borderBottom: isActive ? '3px solid #fff' : '3px solid transparent',
                  paddingBottom: '4px',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
