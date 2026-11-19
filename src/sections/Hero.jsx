import { CalendarDays, MapPin, Users } from 'lucide-react';
import { event, links, formatDate, workshopDate } from '../data/workshop.js';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <a className="hero-label" href={links.conference}>{event.conference} Workshop</a>
          <h1 id="hero-title">{event.name.replace(/ XR$/, '')} <span>XR</span></h1>
          <p className="hero-subtitle">{event.title}</p>
          <p className="hero-summary">{event.summary}</p>
          <div className="flex flex-wrap gap-3.5">
            <a className="button button-accent" href="#call-for-papers">Call for Papers</a>
            <a className="button button-outline-light" href="#important-dates">Important Dates</a>
          </div>
        </div>
        <img className="hero-art" src={import.meta.env.VITE_WORKSHOP_ASSET_BASE + 'immersive-field.svg'}
          width="620" height="510" alt="" fetchPriority="high" />
      </div>
      <div className="facts-bar">
        <dl className="shell facts">
          <div>
            <dt><CalendarDays aria-hidden="true" />Workshop date</dt>
            <dd><time dateTime={workshopDate}>{formatDate(workshopDate)}</time></dd>
          </div>
          <div>
            <dt><MapPin aria-hidden="true" />Location</dt>
            <dd>{event.location}</dd>
          </div>
          <div>
            <dt><Users aria-hidden="true" />Edition</dt>
            <dd>{event.edition}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
