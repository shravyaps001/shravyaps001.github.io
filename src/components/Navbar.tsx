'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--accent-color)' }}>
          Shravya.
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#education" className="nav-link">Education</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="btn btn-secondary"
              style={{ padding: '0.5rem', borderRadius: '50%' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
