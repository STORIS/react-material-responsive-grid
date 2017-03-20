import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';

/* eslint-disable no-unused-vars */
import normalize from 'normalize.css';

import GridTestPage from './pages/GridTestPage';

const app = () => {
	if (process.env.NODE_ENV === 'development') {
		// attach react dev tools to window
		if (typeof window !== 'undefined') {
			window.React = React;
		}
	}

	/* eslint-disable react/jsx-filename-extension */
	render(
		<GridTestPage />,
		document.querySelector('#main'),
	);
};

// postpone initiation of app until fonts are active (for text components that require measurement)
const webFontConfig = {
	google: {
		families: ['Roboto'],
	},
	classes: false,
	timeout: 1000,
	active: app,
};

WebFont.load(webFontConfig);
