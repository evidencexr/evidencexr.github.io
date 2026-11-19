import { Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { event, links, organizers } from '../data/workshop.js';

export function Organizers() {
  return (
    <section id="organizers" className="section" aria-labelledby="organizer-title" tabIndex={-1}>
      <div className="shell">
        <SectionHeading id="organizer-title" title="Organizing Committee" />
        <ul className="organizer-list" role="list">
          {organizers.map(({ name, affiliation, country, initials, bio }) => (
            <li key={name} className="person-row">
              <div className="person-heading">
                <span className="initials" aria-hidden="true">{initials}</span>
                <div><h3>{name}</h3><p className="person-affiliation">{affiliation}, {country}</p></div>
              </div>
              <p className="person-bio">{bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section section-dark contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="shell contact-layout">
        <div>
          <SectionHeading id="contact-title" title="Contact" />
          <p>For questions about the workshop, submissions, or participation, email the organizing team.</p>
        </div>
        <div className="contact-links">
          <a className="button button-accent" href={'mailto:' + event.contact}><Mail size={19} aria-hidden="true" />{event.contact}</a>
          <a className="button button-outline-light" href={links.conference}>{event.conference} website</a>
        </div>
      </div>
    </section>
  );
}
