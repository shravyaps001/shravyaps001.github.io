'use client';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';

const EducationItem = ({ edu, index }: { edu: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    style={{
      display: 'flex',
      gap: '2rem',
      position: 'relative',
      paddingBottom: index !== resumeData.education.length - 1 ? '3rem' : '0',
    }}
  >
    {/* Timeline Line & Dot */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-color)',
        zIndex: 1,
        marginTop: '6px',
        boxShadow: '0 0 0 4px var(--bg-secondary)', // Matches the container background
      }} />
      {index !== resumeData.education.length - 1 && (
        <div style={{
          width: '2px',
          flexGrow: 1,
          backgroundColor: 'var(--border-color)',
          marginTop: '8px',
        }} />
      )}
    </div>

    {/* Content */}
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: 1.4 }}>
          {edu.degree}
        </h3>
        <span style={{ 
          padding: '0.35rem 0.85rem', 
          backgroundColor: 'var(--card-bg)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '99px', 
          fontSize: '0.85rem', 
          fontWeight: 600, 
          color: 'var(--accent-color)',
          whiteSpace: 'nowrap'
        }}>
          {edu.period}
        </span>
      </div>
      
      <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.5rem' }}>
        {edu.institution} <span style={{ opacity: 0.6 }}>• {edu.location}</span>
      </div>

      {edu.details && edu.details.length > 0 && (
        <ul style={{ 
          marginTop: '1.2rem', 
          paddingLeft: '1.2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.5rem',
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          lineHeight: 1.6
        }}>
          {edu.details.map((detail: string, i: number) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div style={{ 
          maxWidth: '850px', 
          margin: '0 auto', 
          padding: '3rem 2.5rem',
          background: 'var(--bg-secondary)',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          {resumeData.education.map((edu, index) => (
            <EducationItem key={`${edu.institution}-${index}`} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
