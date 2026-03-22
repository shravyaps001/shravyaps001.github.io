'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '@/data/resume';

export default function Hero() {
  return (
    <section id="hero" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ maxWidth: '800px' }}
        >
          <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '1rem' }}>
            Hi, my name is
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            {resumeData.name}.
          </h1>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--text-secondary)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            I build robust digital experiences.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6 }}>
            I'm an {resumeData.role} specializing in full-stack development, with a deep focus on crafting exceptional, accessible, and high-performance applications.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
              Check out my work <ArrowRight size={20} />
            </a>
            <a href={`mailto:${resumeData.email}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', gap: '8px' }}>
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
