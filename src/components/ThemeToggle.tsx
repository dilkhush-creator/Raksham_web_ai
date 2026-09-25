import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

/** Light/dark switch. Starts from whatever index.html applied; an explicit choice is remembered. */
const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  // Follow the OS setting live until the visitor picks a theme themselves
  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try { saved = localStorage.getItem('theme'); } catch { /* storage blocked */ }
      if (saved) return;
      document.documentElement.classList.toggle('dark', e.matches);
      setDark(e.matches);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* storage blocked */ }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`w-9 h-9 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 transition-colors ${className}`}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
