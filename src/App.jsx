import { useEffect } from 'react';
import { Navigation, BackToTop } from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import { About, CallForPapers } from './sections/Research.jsx';
import { ImportantDates, Program } from './sections/Timeline.jsx';
import Submission from './sections/Submission.jsx';
import { Contact, Organizers } from './sections/People.jsx';

export default function App() {
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <CallForPapers />
        <ImportantDates />
        <Submission />
        <Program />
        <Organizers />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
