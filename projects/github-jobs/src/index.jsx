import ReactDOM from 'react-dom';

import { StateProvider } from '@/store';

import App from './App';

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
