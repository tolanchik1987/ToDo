import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  	test('renders learn react link', () => {
    	render(<App />);
		expect(screen.getByText(/description 2/i)).toBeInTheDocument();
   	expect(screen.getByText(/task 1/i)).toBeInTheDocument();
  	});
	test('renders and not checkbox', () => {
		render(<App />);
	  	expect(screen.queryByRole('checkbox'))
	 });
});
