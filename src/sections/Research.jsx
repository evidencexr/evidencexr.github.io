import { Activity, Boxes, Brain, CircuitBoard, Compass, FlaskConical, Focus, Layers3, MessagesSquare, SlidersHorizontal, Waypoints } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { about, cfp, links } from '../data/workshop.js';

const themeIcons = [Brain, Activity, SlidersHorizontal, Layers3];
const topicIcons = [Brain, Activity, CircuitBoard, MessagesSquare, Compass, Boxes, FlaskConical];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="shell">
        <div className="section-intro">
          <SectionHeading id="about-title" label="About the Workshop" title="Understanding people in immersive systems" />
          <div className="section-copy"><p>{about.intro}</p><p>{about.collaboration}</p></div>
        </div>
        <ul className="theme-grid">
          {about.themes.map(([name, description], index) => {
            const Icon = themeIcons[index] ?? Waypoints;
            return <li key={name} className="theme-card"><Icon className="icon-tile" aria-hidden="true" /><h3>{name}</h3><p>{description}</p></li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export function CallForPapers() {
  return (
    <section id="call-for-papers" className="section section-tinted" aria-labelledby="cfp-title" tabIndex={-1}>
      <div className="shell">
        <div className="section-intro">
          <SectionHeading id="cfp-title" title="Call for Papers" />
          <div className="section-copy">
            <p>{cfp.intro}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              {links.submission && <a className="button button-accent" href={links.submission}>Submit via HotCRP</a>}
              <a className="text-link" href="#submission">View submission guidelines</a>
            </div>
          </div>
        </div>
        <ul className="topic-grid">
          {cfp.topics.map(([name, description], index) => {
            const Icon = topicIcons[index] ?? Waypoints;
            return <li key={name} className="topic-card"><Icon className="icon-tile" aria-hidden="true" /><h3>{name}</h3><p>{description}</p></li>;
          })}
          <li className="scope-card"><Focus className="icon-tile" aria-hidden="true" /><h3>Scope of contributions</h3><p>{cfp.scope}</p></li>
        </ul>
      </div>
    </section>
  );
}
