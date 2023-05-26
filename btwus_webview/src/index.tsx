import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyles from './globalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <Router />
  </>
);
