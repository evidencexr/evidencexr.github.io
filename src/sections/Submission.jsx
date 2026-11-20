import { ClipboardList, FileText, Ticket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { links, submission } from '../data/workshop.js';

function Resource({ icon: Icon, label, url }) {
  if (!url) return null;

  return (
    <li>
      <Icon size={20} aria-hidden="true" />
      <a href={url}>{label}</a>
    </li>
  );
}

export default function Submission() {
  return (
    <section id="submission" className="section" aria-labelledby="submission-title" tabIndex={-1}>
      <div className="shell">
        <div className="section-intro">
          <SectionHeading id="submission-title" title="Submission Guidelines" />
          <div className="section-copy">{submission.notice && <p>{submission.notice}</p>}</div>
        </div>
        <div className="submission-layout">
          <div>
            <div className="paper-grid">
              {submission.categories.map(([name, length, description]) => (
                <article className="paper-card" key={name}>
                  <FileText className="icon-tile" aria-hidden="true" />
                  <h3>{name}</h3>
                  <p className="page-limit"><strong>{length}</strong>, excluding references</p>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <dl className="submission-guidance">
              {submission.guidance.map(({ title, description, example, reference }) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>
                    <p>{description}</p>
                    {example && <code className="submission-example">{example}</code>}
                    {reference && <p><a className="submission-reference" href={reference.url}>{reference.label}</a></p>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="submit-panel" aria-labelledby="submit-panel-title">
            <ClipboardList className="icon-tile" aria-hidden="true" />
            <h3 id="submit-panel-title">Submit Your Paper</h3>
            {!links.submission && <p>{submission.platform}</p>}
            {links.submission
              ? <a className="button button-accent" href={links.submission}>Submit via HotCRP</a>
              : <p className="pending">Submission link coming soon</p>}
            {(links.template || links.registration) && (
              <ul className="resource-list">
                <Resource icon={FileText} label="ACM paper template" url={links.template} />
                <Resource icon={Ticket} label="Workshop registration" url={links.registration} />
              </ul>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
