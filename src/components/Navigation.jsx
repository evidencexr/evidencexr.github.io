import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';
import { navigation } from '../data/workshop.js';
import Brand from './Brand.jsx';

export function Navigation() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    const sections = navigation.map(([id]) => document.getElementById(id));
    let frame = 0;

    function update() {
      frame = 0;
      const line = header.current.offsetHeight + 44;
      const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
      const current = atBottom ? sections.at(-1) : sections.findLast((section) => section.getBoundingClientRect().top <= line);
      setActive(current?.id ?? 'home');
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)');
    function onDesktop(event) {
      if (event.matches) setMenuOpen(false);
    }
    desktop.addEventListener('change', onDesktop);
    return () => desktop.removeEventListener('change', onDesktop);
  }, []);

  function closeOnEscape(event) {
    if (event.key !== 'Escape' || !menuOpen) return;
    setMenuOpen(false);
    toggle.current.focus();
  }

  return (
    <header ref={header} className="site-header" onKeyDown={closeOnEscape}>
      <div className="shell header-inner">
        <div onClick={() => setMenuOpen(false)}><Brand /></div>
        <button ref={toggle} className="menu-toggle" type="button" aria-controls="primary-nav" aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-nav" className={menuOpen ? 'primary-nav open' : 'primary-nav'} aria-label="Main navigation">
          {navigation.map(([id, label]) => (
            <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function check() {
      setVisible(window.scrollY > 550);
    }
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <a href="#home" className="back-to-top" aria-label="Back to top" hidden={!visible}>
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  );
}
