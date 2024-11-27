import React, { useState, useEffect } from 'react';
import './styles/Main.css';
import reactLogo from './react.svg';
import electronLogo from './electron.svg';

const App = () => {
	return (
		<div id='App'>
			<header className='App-header'>
				<div className='horizontal'>
					<img src={reactLogo} className='App-logo-react' alt='react-logo' />
					<p>+</p>
					<img src={electronLogo} className='App-logo-electron' alt='electron-logo' />
				</div>
				<h2>This is the React + Electron boilerplate</h2>
				<p>
					Edit <code>src/components/Main.js</code> and save to reload.
				</p>
				<div className='horizontal'>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						React
					</a>
					<a
						className='App-link'
						href='https://electronjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Electron
					</a>
				</div>
			</header>
		</div>
	);
};

export default App;
