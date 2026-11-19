import { event } from '../data/workshop.js';

export default function Brand() {
  return (
    <a href="#home" className="brand">
      <img src={import.meta.env.VITE_WORKSHOP_ASSET_BASE + 'favicon.svg'} width="36" height="36" alt="" />
      <span>{event.name}{' '}<small>{event.year}</small></span>
    </a>
  );
}
