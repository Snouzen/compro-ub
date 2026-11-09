import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Minus, Plus } from 'lucide-react';

// ============================================================
// DATA: Semua lokasi unit bisnis industri
// ============================================================

type FacilityType = 'SPP' | 'SPB' | 'SPJ' | 'UP';
type RegionalType = 'Regional I' | 'Regional II' | 'Regional III';

interface LocationData {
  province: string;
  regional: RegionalType;
  facilities: {
    city: string;
    type: FacilityType;
    lat: number;
    lng: number;
    imageUrl?: string;
  }[];
}

const LOCATIONS: LocationData[] = [
  // ===== REGIONAL 1 =====
  {
    province: 'Regional 1',
    regional: 'Regional I',
    facilities: [
      { city: 'Lampung', type: 'SPP', lat: -5.409684868369789, lng: 105.29747095456123 },
      { city: 'DKI Jakarta', type: 'SPB', lat: -6.16278394790207, lng: 106.89975225816819 },
      { city: 'Karawang', type: 'SPP', lat: -6.386458648537184, lng: 107.50526345457057, imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop' },
      { city: 'Subang', type: 'SPP', lat: -6.315055964110272, lng: 107.82157836806256 },
      { city: 'Indramayu', type: 'SPB', lat: -6.520653225947102, lng: 108.49337568746651 },
    ],
  },
  // ===== REGIONAL 2 =====
  {
    province: 'Regional 2',
    regional: 'Regional II',
    facilities: [
      { city: 'Sidoarjo', type: 'SPB', lat: -7.4478, lng: 112.7183 },
      { city: 'Bojonegoro', type: 'SPP', lat: -7.1503, lng: 111.8819 },
      { city: 'Magetan', type: 'SPP', lat: -7.6464, lng: 111.3594 },
      { city: 'Candirejo', type: 'UP', lat: -7.6253, lng: 110.1989 }, // Approx Magelang
      { city: 'Sukoharjo', type: 'SPB', lat: -7.6746, lng: 110.8307 },
      { city: 'Jember', type: 'SPP', lat: -8.1845, lng: 113.6681 },
      { city: 'Sragen', type: 'SPP', lat: -7.4317, lng: 111.0198 },
      { city: 'Mojolaban', type: 'UP', lat: -7.6080, lng: 110.8720 },
      { city: 'Banyuwangi', type: 'SPP', lat: -8.2190, lng: 114.3692 },
      { city: 'Kendal', type: 'SPP', lat: -6.9204, lng: 110.1756 },
      { city: 'Bantul', type: 'UP', lat: -7.8886, lng: 110.3289 },
    ],
  },
  // ===== REGIONAL 3 =====
  {
    province: 'Regional 3',
    regional: 'Regional III',
    facilities: [
      { city: 'Lombok Timur (Lotim)', type: 'SPB', lat: -8.5650, lng: 116.5460 },
      { city: 'Sumbawa', type: 'SPP', lat: -8.4889, lng: 117.4236 },
      { city: 'Makassar', type: 'SPB', lat: -5.1477, lng: 119.4327 },
      { city: 'Annabanua', type: 'UP', lat: -4.0583, lng: 119.9417 },
      { city: 'Sidrap', type: 'SPB', lat: -3.9683, lng: 119.9889 },
      { city: 'Lancirang', type: 'UP', lat: -3.9900, lng: 119.9300 },
    ],
  },
];

// ============================================================
// WARNA & KONFIGURASI
// ============================================================

const REGIONAL_COLORS: Record<RegionalType, string> = {
  'Regional I': '#2B8FBE',   // Biru Teal
  'Regional II': '#E8843C',  // Orange
  'Regional III': '#1A3A5C', // Biru Tua
};

const FACILITY_CONFIG: Record<FacilityType, { label: string, iconSvg: string }> = {
  SPP: { 
    label: 'Sentra Penggilingan Padi',
    iconSvg: `<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z'/></svg>`
  },
  SPB: { 
    label: 'Sentra Pengolahan Beras',
    iconSvg: `<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='m7.5 4.27 9 5.15'/><path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'/><path d='m3.3 7 8.7 5 8.7-5'/><path d='M12 22V12'/></svg>`
  },
  SPJ: { 
    label: 'Sentra Pengeringan Jagung',
    iconSvg: `<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='4'/><path d='M12 2v2'/><path d='M12 20v2'/><path d='m4.93 4.93 1.41 1.41'/><path d='m17.66 17.66 1.41 1.41'/><path d='M2 12h2'/><path d='M20 12h2'/><path d='m6.34 17.66-1.41 1.41'/><path d='m19.07 4.93-1.41 1.41'/></svg>`
  },
  UP:  { 
    label: 'Unit Pengolahan',
    iconSvg: `<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='3'/><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'/></svg>`
  },
};

// ============================================================
// CUSTOM MARKER ICON
// ============================================================

function createFacilityIcon(regional: RegionalType, type: FacilityType): L.DivIcon {
  const color = REGIONAL_COLORS[regional];
  const svgContent = FACILITY_CONFIG[type].iconSvg;
  return L.divIcon({
    className: '',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    html: `
      <div style="
        width:28px; height:28px; border-radius:50%;
        background:${color}; border:3px solid #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display:flex; align-items:center; justify-content:center;
        color: #fff;
      ">
        ${svgContent}
      </div>
    `,
  });
}

// ============================================================
// FIT BOUNDS COMPONENT
// ============================================================

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    // Bounds for Indonesia
    map.fitBounds(
      [
        [-11.0, 95.0],  // SW corner
        [6.0, 141.0],   // NE corner
      ],
      { padding: [20, 20] }
    );
  }, [map]);
  return null;
}

// ============================================================
// MAIN MAP COMPONENT
// ============================================================

export default function InfrastructureMap({ 
  height = 'calc(100vh - 90px)', 
  borderRadius = '0' 
}: { 
  height?: string; 
  borderRadius?: string; 
}) {
  const [isLegendOpen, setIsLegendOpen] = useState(true);

  // Dynamically count facilities
  const facilityCounts = LOCATIONS.reduce((acc, loc) => {
    loc.facilities.forEach(fac => {
      acc[fac.type] = (acc[fac.type] || 0) + 1;
    });
    return acc;
  }, {} as Record<FacilityType, number>);
  return (
    <div style={{ position: 'relative', width: '100%', height, borderRadius, overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
      
      {/* Full Screen Map */}
      <MapContainer
        center={[-2.5, 118.0]}
        zoom={5}
        minZoom={5}
        maxBounds={[[-13.0, 93.0], [8.0, 143.0]]}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%', zIndex: 1 }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FitBounds />

        {LOCATIONS.map((loc) =>
          loc.facilities.map((fac, idx) => (
            <Marker
              key={`${loc.province}-${fac.city}-${idx}`}
              position={[fac.lat, fac.lng]}
              icon={createFacilityIcon(loc.regional, fac.type)}
            >
              <Tooltip
                direction="top"
                offset={[0, -16]}
                opacity={1}
                permanent={false}
                className="custom-popup"
              >
                <div style={{ padding: 0, minWidth: '220px', overflow: 'hidden', borderRadius: '8px' }}>
                  {fac.imageUrl ? (
                    <div style={{ width: '100%', height: '120px', marginBottom: '12px' }}>
                      <img src={fac.imageUrl} alt={fac.city} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                    </div>
                  ) : (
                    <div style={{ width: '100%', height: '120px', marginBottom: '12px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                      <span style={{ color: '#94a3b8', fontSize: '12px' }}>No Image Available</span>
                    </div>
                  )}
                  <div style={{ fontWeight: 800, fontSize: '15px', color: '#1e293b', marginBottom: '4px' }}>
                    {fac.city}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                    {loc.province}
                  </div>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#475569',
                    backgroundColor: '#f1f5f9',
                    border: '1px solid #cbd5e1'
                  }}>
                    {fac.type} — {FACILITY_CONFIG[fac.type].label}
                  </div>
                  <div style={{
                    marginTop: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: REGIONAL_COLORS[loc.regional],
                  }}>
                    {loc.regional}
                  </div>
                </div>
              </Tooltip>
            </Marker>
          ))
        )}
      </MapContainer>

      {/* Floating Legend Card */}
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '30px',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        width: '320px',
        border: '1px solid rgba(255,255,255,0.5)',
        transition: 'all 0.3s ease',
      }}>
        <div 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => setIsLegendOpen(!isLegendOpen)}
        >
          <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#034E7B', letterSpacing: '0.5px', margin: 0 }}>
            INFORMASI INFRASTRUKTUR
          </h3>
          <button style={{ 
            background: '#f1f5f9', 
            border: 'none', 
            cursor: 'pointer', 
            color: '#034E7B', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            transition: 'background 0.2s',
          }}>
            {isLegendOpen ? <Minus size={18} /> : <Plus size={18} />}
          </button>
        </div>

        {isLegendOpen && (
          <div style={{ marginTop: '24px' }}>
            {/* Regional Legend */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
                {(Object.entries(REGIONAL_COLORS) as [RegionalType, string][]).map(([name, color]) => (
                  <div key={name} style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      backgroundColor: color, margin: '0 auto 6px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                    }} />
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#475569' }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px dashed #cbd5e1', marginBottom: '20px' }} />

            {/* Facility Types Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(Object.keys(FACILITY_CONFIG) as FacilityType[])
                .filter(type => facilityCounts[type] > 0)
                .map((type) => (
                <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    backgroundColor: '#f1f5f9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid #e2e8f0'
                  }}>
                    <div dangerouslySetInnerHTML={{ __html: FACILITY_CONFIG[type].iconSvg.replace('stroke="currentColor"', 'stroke="#64748b"') }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#1e293b' }}>
                      {facilityCounts[type]} {type}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {FACILITY_CONFIG[type].label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
