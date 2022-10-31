import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {              // Группа тестов
  	test('renders learn react link', () => {         
    	render(<App />);
		expect(screen.getByText(/description 2/i)).toBeInTheDocument();    // Текст присутствует на странице
   	expect(screen.getByText(/Тестовое задание/i)).toBeInTheDocument();   // Текст присутствует на странице 
  	});
	test('renders and not checkbox', () => {
		render(<App />);
	  	expect(screen.queryByRole('checkbox')).toBeNull()  //Элемента нет на странице
	 });
	 test('App snapshot', () => {
		const app = render(<App />)
		expect(app).toMatchSnapshot()          // Создает папку _snapshots_ и записывает в файл данные snapshot (проверяет что файл не изменился)
	 });
	 test('App input placeholder text', () => {
		render(<App />);
		expect(screen.getByPlaceholderText(/Whats need to be done/i)).toBeInTheDocument() // Проверяет текст по умолчанию в инпуте (placeholder)
	 })
});
