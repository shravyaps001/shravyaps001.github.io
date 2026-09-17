'use client';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '4rem', 
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}>
          {/* Profile Photo - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{
              flex: '0 0 auto',
              width: '100%',
              maxWidth: '320px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              width: '320px',
              height: '400px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid var(--card-bg)',
              position: 'relative',
              background: 'var(--bg-tertiary)'
            }}>
              {/* Image Placeholder with fallback */}
              <img 
                src={resumeData.profileImage} 
                alt={resumeData.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.display = 'flex';
                  e.currentTarget.parentElement!.style.justifyContent = 'center';
                  e.currentTarget.parentElement!.style.alignItems = 'center';
                  e.currentTarget.parentElement!.innerHTML = `<span style="font-size: 5rem">👤</span>`;
                }}
              />
            </div>
            {/* Decorative element */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '100px',
              height: '100px',
              background: 'var(--accent-color)',
              opacity: 0.1,
              borderRadius: '50%',
              zIndex: -1
            }} />
          </motion.div>

          {/* Text and Highlights - Right Side */}
          <div style={{ 
            flex: '1 1 500px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2.5rem' 
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p style={{ 
                fontSize: '1.15rem', 
                color: 'var(--text-primary)', 
                lineHeight: 1.8,
                textAlign: 'justify'
              }}>
                {resumeData.about}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '2rem',
                background: 'var(--card-bg)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--accent-color)' }}>Quick Highlights</div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem', 
                color: 'var(--text-secondary)' 
              }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem' }}>🎓</span>
                  <span>{resumeData.education[0].degree}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem' }}>☁️</span>
                  <span>AWS Certified Cloud Practitioner</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem' }}>💻</span>
                  <span>Experienced in Frontend & Backend</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
