'use client';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { 
  SiNextdotjs, SiAngular, SiReact, SiHtml5, SiCss, SiJavascript, SiBootstrap, 
  SiPython, SiFastapi, SiSpringboot, SiDjango, SiMysql, SiPostgresql, 
  SiPostman, SiFigma, SiJira, SiGit, 
  SiLinux, SiApple 
} from 'react-icons/si';
import { FaJava, FaAws, FaWindows } from 'react-icons/fa';

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs size={45} />,
  "Angular": <SiAngular size={45} />,
  "Angular Material": <SiAngular size={45} />,
  "React.js": <SiReact size={45} />,
  "HTML": <SiHtml5 size={45} />,
  "CSS": <SiCss size={45} />,
  "JavaScript": <SiJavascript size={45} />,
  "Bootstrap": <SiBootstrap size={45} />,
  "Python": <SiPython size={45} />,
  "FastAPI": <SiFastapi size={45} />,
  "Java": <FaJava size={45} />,
  "Spring Boot": <SiSpringboot size={45} />,
  "Django": <SiDjango size={45} />,
  "MySQL": <SiMysql size={45} />,
  "PostgreSQL": <SiPostgresql size={45} />,
  "AWS (Certified Cloud Practitioner)": <FaAws size={45} />,
  "Postman": <SiPostman size={45} />,
  "Figma": <SiFigma size={45} />,
  "Jira": <SiJira size={45} />,
  "Git": <SiGit size={45} />,
  "Windows": <FaWindows size={45} />,
  "Linux": <SiLinux size={45} />,
  "macOS": <SiApple size={45} />
};

const TechIcon = ({ name, icon, index }: { name: string; icon: React.ReactNode; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
    whileHover={{ scale: 1.15, color: 'var(--accent-color)' }}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      padding: '1rem',
      transition: 'color 0.2s ease'
    }}
    title={name}
  >
    {icon}
  </motion.div>
);

const SkillCategory = ({ title, skills, index }: { title: string; skills: string[]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    style={{
      padding: '2rem',
      borderRadius: '16px',
      background: 'var(--card-bg)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-color)',
    }}
  >
    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--accent-color)' }}>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      {skills.map((skill) => (
        <span
          key={skill}
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '99px',
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            fontWeight: 500,
            border: '1px solid var(--border-color)',
            transition: 'all 0.2s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-color)';
            e.currentTarget.style.color = 'var(--accent-color)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const allTech = [
    ...(resumeData.techStack.languages || []),
    ...(resumeData.techStack.frontend || []),
    ...(resumeData.techStack.backend || []),
    ...(resumeData.techStack.databases || []),
    ...(resumeData.techStack.cloudAndTools || []),
    ...(resumeData.techStack.aiMl || []),
    ...(resumeData.techStack.computerScience || [])
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginBottom: '5rem',
          maxWidth: '900px',
          margin: '0 auto 5rem auto'
        }}>
          {allTech.map((tech, index) => (
            techIcons[tech] ? (
              <TechIcon key={tech} name={tech} icon={techIcons[tech]} index={index} />
            ) : null
          ))}
        </div>

        <h2 className="section-title">Core Skills & Domains</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 800px)', justifyContent: 'center', gap: '2rem' }}>
          <SkillCategory title="Methodologies & Concepts" skills={resumeData.skills} index={0} />
        </div>
      </div>
    </section>
  );
}
