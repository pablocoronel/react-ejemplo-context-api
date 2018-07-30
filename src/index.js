import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {LocaleProvider} from './context/LocaleContext.js';

ReactDOM.render(
	<LocaleProvider>
		<App />
	</LocaleProvider>, 
	document.getElementById('root')
);
registerServiceWorker();
