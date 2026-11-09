import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedNumber = ({ 
  value, 
  suffix = '', 
  duration = 2.5 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            // format with dots for thousands, e.g. 16.000
            ref.current.textContent = Math.round(v).toLocaleString('id-ID') + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
};

const SectionHeader = ({ title }: { title: string }) => (
  <div style={{
    backgroundColor: '#E8843C',
    color: '#fff',
    padding: '8px 24px',
    borderRadius: '24px',
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 800,
    marginBottom: '32px',
    boxShadow: '0 4px 12px rgba(232, 132, 60, 0.3)'
  }}>
    {title}
  </div>
);

export default function CompanyStats() {
  return (
    <section style={{
      padding: '80px 4%',
      background: 'linear-gradient(180deg, #f0f6fb 0%, #e2e8f0 100%)',
      color: '#034E7B',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
      }}>

        {/* COLUMN 1: Production */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Production & Kapasitas Unit" />
          <p style={{ fontSize: '13px', fontStyle: 'italic', color: '#64748b', marginTop: '-24px', marginBottom: '24px', paddingLeft: '8px' }}>
            *per unit/tahun
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* 10 SPP */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center', lineHeight: 1 }}>
                <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B' }}>
                  <AnimatedNumber value={10} />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B' }}>SPP</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>UNIT</div>
              </div>
              <div style={{
                backgroundColor: '#78A2D9',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: '0 16px 16px 16px',
                fontSize: '13px',
                fontWeight: 700,
                lineHeight: 1.5,
                flex: 1
              }}>
                DRYER : <AnimatedNumber value={15840} /> TON<br/>
                RMU : <AnimatedNumber value={10560} /> TON
              </div>
            </div>

            {/* 2 SPJ */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center', lineHeight: 1 }}>
                <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B' }}>
                  <AnimatedNumber value={2} />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B' }}>SPJ</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>UNIT</div>
              </div>
              <div style={{
                backgroundColor: '#78A2D9',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: '0 16px 16px 16px',
                fontSize: '13px',
                fontWeight: 700,
                lineHeight: 1.5,
                flex: 1
              }}>
                DRYER : <AnimatedNumber value={31680} /> TON<br/>
                RMU : <AnimatedNumber value={21120} /> TON
              </div>
            </div>

            {/* 5 UP */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center', lineHeight: 1 }}>
                <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B' }}>
                  <AnimatedNumber value={5} />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B' }}>UP</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>UNIT</div>
              </div>
              <div style={{
                backgroundColor: '#78A2D9',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: '0 16px 16px 16px',
                fontSize: '13px',
                fontWeight: 700,
                lineHeight: 1.5,
                flex: 1
              }}>
                DRYER : <AnimatedNumber value={1320} /> TON<br/>
                RMU : <AnimatedNumber value={4400} /> TON
              </div>
            </div>
          </div>
        </motion.div>

        {/* COLUMN 2: Customer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}
        >
          <SectionHeader title="Customer" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '340px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B', width: '160px', textAlign: 'right' }}>
                <AnimatedNumber value={187} suffix="+" />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B', lineHeight: 1.2 }}>
                TOKO<br/>& AGEN
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B', width: '160px', textAlign: 'right' }}>
                <AnimatedNumber value={51} suffix="+" />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B', lineHeight: 1.2 }}>
                RITEL<br/>MODERN
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B', width: '160px', textAlign: 'right' }}>
                <AnimatedNumber value={115} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B', lineHeight: 1.2 }}>
                DISTRIBUTOR<br/><span style={{ fontSize: '11px', color: '#64748b' }}>+ channeling with</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B', width: '160px', textAlign: 'right' }}>
                <AnimatedNumber value={126} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B', lineHeight: 1.2 }}>
                KANCAB<br/>BULOG
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#034E7B', width: '160px', textAlign: 'right' }}>
                <AnimatedNumber value={16000} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#034E7B', lineHeight: 1.2 }}>
                RUMAH PANGAN KITA<br/>(RPK)
              </div>
            </div>

          </div>
        </motion.div>

        {/* COLUMN 3: Supplier */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <SectionHeader title="Supplier" />
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '72px', fontWeight: 900, color: '#034E7B', lineHeight: 1 }}>
              <AnimatedNumber value={327} suffix="+" />
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#034E7B', marginTop: '16px', lineHeight: 1.4 }}>
              Total supplier<br/>gabah dan beras
            </div>
            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '8px', fontStyle: 'italic' }}>
              ..masih terus berkembang
            </div>
          </div>
        </motion.div>

        {/* COLUMN 4: Varian Beras */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SectionHeader title="Varian Beras" />
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: '20px 0 0 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {['Premium', 'Medium', 'Pera IR42', 'dsb..'].map((item, i) => (
              <li key={i} style={{ 
                fontSize: '22px', 
                fontWeight: 700, 
                color: '#034E7B',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#034E7B' }} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
