import { event, workshopDate, formatDate, navigation } from '../data/workshop.js';
import Brand from './Brand.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-main">
          <div>
            <Brand />
            <p className="footer-title">{event.title}</p>
            <p>Workshop at {event.conference}</p>
            <p><time dateTime={workshopDate}>{formatDate(workshopDate)}</time> · {event.location}</p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.slice(1).map(([id, label]) => <a key={id} href={'#' + id}>{label}</a>)}
          </nav>
        </div>
        <div className="footer-end">
          <p>© {event.year} {event.name} Workshop Organizing Committee</p>
          <a href={'mailto:' + event.contact}>{event.contact}</a>
        </div>
      </div>
    </footer>
  );
}
