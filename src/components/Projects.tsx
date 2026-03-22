'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resume';

const ProjectCard = ({ project, index }: { project: { name: string; client?: string; description?: string; details?: string[]; tech?: string; }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    style={{
      background: 'var(--card-bg)',
      borderRadius: '16px',
      padding: '2.5rem',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
      backgroundColor: 'var(--accent-color)',
    }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
      <div>
        <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          {project.client || 'Academic / Personal'}
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{project.name}</h3>
      </div>
    </div>

    <div style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, fontSize: '1rem', lineHeight: 1.6 }}>
      {project.description ? (
        <p>{project.description}</p>
      ) : (
        <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {project.details?.map((detail: string, i: number) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      )}
    </div>

    {project.tech && (
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <span style={{ color: 'var(--text-primary)' }}>{project.tech}</span>
      </div>
    )}
  </motion.div>
);

export default function Projects() {
  const allProjects = [
    ...resumeData.experience.flatMap(exp => exp.projects.map(p => ({ ...p, client: exp.company }))),
    ...resumeData.academicProjects
  ];

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {allProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
