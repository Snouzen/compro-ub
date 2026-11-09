import Navbar from '../components/Navbar';
import InfrastructureMap from '../components/InfrastructureMap';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Main Content */}
      <motion.div 
        style={{ paddingTop: '90px', flex: 1, display: 'flex', flexDirection: 'column' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div style={{ flex: 1, position: 'relative' }}>
          <InfrastructureMap />
        </div>
      </motion.div>

      {/* Footer */}
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
    </div>
  );
}
