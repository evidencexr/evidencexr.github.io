import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function renderWorkshop() {
  return renderToString(<App />);
}
