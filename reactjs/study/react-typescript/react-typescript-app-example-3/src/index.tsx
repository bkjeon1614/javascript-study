import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // 여기에 company값을 주입하면 주입한값으로 페이지에 표시된다.
  <App name="Mark" company="ProtoPie" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();