import { useState } from 'react';
import { motion } from 'framer-motion';


// ============================================================
// DATA
// ============================================================

interface CapacityItem {
  label: string;
  value: string;
}

interface UnitData {
  code: string;
  name: string;
  image: string;
  color: string;
  capacities: CapacityItem[];
}

const UNITS: UnitData[] = [
  {
    code: 'SPP',
    name: 'Sentra Penggilingan Padi',
    image: 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/compro_ub_img/img/spp_topview_2.jpeg',
    color: '#2B8FBE',
    capacities: [
      { label: 'Kapasitas Dryer', value: '120 ton/hari' },
      { label: 'Kapasitas RMU', value: '6 ton/jam' },
      { label: 'Kapasitas SILO', value: '2.000 ton × 3 silo/unit — total 6.000 ton' },
    ],
  },
  {
    code: 'SPB',
    name: 'Sentra Pengolahan Beras',
    image: 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/compro_ub_img/img/spp_topview_2.jpeg',
    color: '#3BAA6B',
    capacities: [
      { label: 'Kapasitas RMU', value: '6 ton/jam' },
    ],
  },
  {
    code: 'SPJ',
    name: 'Sentra Pengeringan Jagung',
    image: 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/compro_ub_img/img/spj_bolmong.jpeg',
    color: '#E8843C',
    capacities: [
      { label: 'Kapasitas Dryer', value: '120 ton/hari' },
      { label: 'Kapasitas SILO', value: '3.000 ton × 3 silo/unit — total 9.000 ton' },
    ],
  },
  {
    code: 'UP',
    name: 'Unit Pengolahan',
    image: 'https://rzjlkpumrsjpafduhlgt.supabase.co/storage/v1/object/public/compro_ub_img/img/packing.png',
    color: '#C0392B',
    capacities: [
      { label: 'Kapasitas Dryer', value: '10 ton/hari' },
      { label: 'Kapasitas RMU', value: '2,5 ton/jam' },
    ],
  },
];



// ============================================================
// UNIT CARD
// ============================================================

function UnitCard({ unit, index }: { unit: UnitData; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: '1 1 280px',
        maxWidth: '340px',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'default',
        boxShadow: isHovered
          ? '0 30px 60px -15px rgba(0,0,0,0.25)'
          : '0 10px 30px -10px rgba(0,0,0,0.12)',
        transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={unit.image}
          alt={unit.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, transparent 30%, ${unit.color}dd 100%)`,
        }} />

        {/* Code badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderRadius: '12px',
          padding: '6px 16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}>
          <span style={{
            fontSize: '14px',
            fontWeight: 800,
            color: unit.color,
            letterSpacing: '1px',
          }}>
            {unit.code}
          </span>
        </div>

        {/* Name on image */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '20px',
          right: '20px',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.3,
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            {unit.name}
          </h3>
        </div>
      </div>

      {/* Capacity Info */}
      <div style={{
        padding: '24px 20px',
        backgroundColor: '#fff',
      }}>
        {/* Top accent bar */}
        <div style={{
          width: '50px',
          height: '4px',
          borderRadius: '2px',
          backgroundColor: unit.color,
          marginBottom: '20px',
        }} />

        {unit.capacities.map((cap, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '12px 14px',
              marginBottom: i < unit.capacities.length - 1 ? '10px' : '0',
              borderRadius: '12px',
              backgroundColor: isHovered ? `${unit.color}08` : '#f8fafc',
              border: `1px solid ${isHovered ? `${unit.color}20` : '#f1f5f9'}`,
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              color: unit.color,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '4px',
            }}>
              {cap.label}
            </span>
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#1e293b',
              lineHeight: 1.4,
            }}>
              {cap.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function UnitInfrastruktur() {
  return (
    <section id="unit-infrastruktur" style={{
      position: 'relative',
      padding: '100px 6%',
      backgroundColor: '#fff',
      overflow: 'hidden',
    }}>
      {/* Decorative background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-5%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,162,217,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-5%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(3,78,123,0.06) 0%, transparent 70%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 5, maxWidth: '1400px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: 700,
              color: '#78A2D9',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Our Facilities
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#034E7B',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}>
              Unit Infrastruktur
            </h2>
            <div style={{
              width: '80px',
              height: '5px',
              borderRadius: '3px',
              backgroundColor: '#E8843C',
              margin: '0 auto',
            }} />
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '28px',
          justifyContent: 'center',
          marginBottom: '80px',
        }}>
          {UNITS.map((unit, idx) => (
            <UnitCard key={unit.code} unit={unit} index={idx} />
          ))}
        </div>

        {/* Flow Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#034E7B',
              marginBottom: '8px',
            }}>
              Flow & Proses Produksi Beras
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Alur proses pengolahan beras dari bahan baku hingga produk siap distribusi
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              position: 'relative',
              padding: '20px 0',
            }}
          >
            {/* Desktop Horizontal Flow Layout */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              flexWrap: 'wrap',
            }}>
              {[
                { id: '01', title: 'DRYING', image: '/drying_illust_icon_1786006057246.jpg', desc: 'Penurunan kadar air gabah', color: '#E8843C' },
                { id: '02', title: 'STORAGE', image: '/storage_illust_icon_1786006076879.jpg', desc: 'Penyimpanan dalam silo', color: '#3BAA6B' },
                { id: '03', title: 'MILLING', image: '/milling_illust_icon_1786006181191.jpg', desc: 'Penggilingan jadi beras', color: '#2B8FBE' },
                { id: '04', title: 'MIXING', image: '/mixing_illust_icon_1786006202267.jpg', desc: 'Pencampuran & standarisasi', color: '#1A3A5C' },
              ].map((step, idx, arr) => (
                <div key={step.id} style={{ display: 'flex', alignItems: 'center' }}>
                  
                  {/* Step Card */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
                    }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      boxShadow: `0 20px 40px -10px ${step.color}40`,
                      borderColor: step.color,
                    }}
                    style={{
                      width: '210px',
                      padding: '30px 24px',
                      backgroundColor: '#fff',
                      borderRadius: '24px',
                      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
                      border: '2px solid transparent',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 2,
                      cursor: 'pointer',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    {/* Glowing Accent Top */}
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40px', height: '4px', backgroundColor: step.color, borderRadius: '0 0 4px 4px' }} />

                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '20px',
                      fontSize: '12px',
                      fontWeight: 900,
                      color: step.color,
                      opacity: 0.3,
                      letterSpacing: '1px'
                    }}>
                      {step.id}
                    </div>
                    <div style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginBottom: '20px',
                      marginTop: '12px',
                      boxShadow: `0 8px 20px -5px ${step.color}60`,
                      border: `3px solid #fff`,
                      backgroundColor: '#fff'
                    }}>
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={step.image} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <h4 style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: '#034E7B',
                      marginBottom: '10px',
                      letterSpacing: '0.5px',
                    }}>
                      {step.title}
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: '#64748b',
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}>
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Animated Arrow Connector */}
                  {idx < arr.length - 1 && (
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                      }}
                      style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '0 -10px',
                      zIndex: 1,
                    }}>
                      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12H50" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6 6" />
                        <motion.path 
                          d="M0 12H50" 
                          stroke="#78A2D9" 
                          strokeWidth="3" 
                          strokeDasharray="6 6"
                          initial={{ strokeDashoffset: 60 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                        <path d="M42 5L52 12L42 19" stroke="#78A2D9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}

                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
