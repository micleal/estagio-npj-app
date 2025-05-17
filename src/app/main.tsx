import '@app/styles/globals.css';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return <div>Hello World</div>;
}

root.render(<App />);

