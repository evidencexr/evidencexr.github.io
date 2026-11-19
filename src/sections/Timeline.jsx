import { CalendarDays, Info } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { dates, formatDate, program, workshopDate } from '../data/workshop.js';

export function ImportantDates() {
  return (
    <section id="important-dates" className="section section-dark" aria-labelledby="dates-title" tabIndex={-1}>
      <div className="shell">
        <SectionHeading id="dates-title" title="Important Dates" />
        <ul className="date-grid">
          {dates.milestones.map(([title, date]) => (
            <li key={title} className={title === 'Workshop' ? 'date-card workshop-date' : 'date-card'}>
              <CalendarDays size={20} aria-hidden="true" />
              <time dateTime={date}>
                <strong>{formatDate(date, { month: 'short', day: 'numeric' })}</strong>
                <span>{formatDate(date, { year: 'numeric' })}</span>
              </time>
              <h3>{title}</h3>
            </li>
          ))}
        </ul>
        {dates.notice && <p className="date-note"><Info size={17} aria-hidden="true" />{dates.notice}</p>}
      </div>
    </section>
  );
}

export function Program() {
  return (
    <section id="program" className="section section-tinted" aria-labelledby="program-title" tabIndex={-1}>
      <div className="shell program-layout">
        <div>
          <SectionHeading id="program-title" title="Preliminary Program" />
          <p className="program-date"><CalendarDays size={19} aria-hidden="true" /><time dateTime={workshopDate}>{formatDate(workshopDate)}</time></p>
        </div>
        <ol className="program-list">
          {program.map(([start, end, title, kind]) => (
            <li key={start} className={kind === 'Break' ? 'program-row program-break' : 'program-row'}>
              <div className="program-time"><time dateTime={start}>{start}</time>–<time dateTime={end}>{end}</time></div>
              <div><p>{kind}</p><h3>{title}</h3></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
