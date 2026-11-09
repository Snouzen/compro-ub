import { motion } from 'framer-motion';
import InfrastructureMap from './InfrastructureMap';

export default function InfrastructureOverview() {
  return (
    <section id="infrastructure-overview" style={{
      position: 'relative',
      padding: '80px 4% 100px',
      backgroundColor: '#f0f6fb',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px', position: 'relative', zIndex: 5 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
            fontWeight: 800, letterSpacing: '2px',
            color: '#034E7B', textTransform: 'uppercase', marginBottom: '8px',
          }}
        >
          Peta Persebaran Infrastuktur
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
            fontStyle: 'italic', color: '#78A2D9', fontWeight: 500,
          }}
        >
          Unit Bisnis Industri
        </motion.p>
      </div>

      {/* Map Container */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 5, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', borderRadius: '32px' }}>
        <InfrastructureMap height="600px" borderRadius="32px" />
      </div>
    </section>
  );
}
