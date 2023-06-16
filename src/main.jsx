import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'virtual:svg-icons-register';
import '../styles/bootstrap-grid.min.css';
import '../styles/bootstrap.rtl.min.css';
import '../styles/index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
