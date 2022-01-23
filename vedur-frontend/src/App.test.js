import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/VEDUR/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders Talk to me button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Talk to me/i);
  expect(buttonElement).toBeInTheDocument();
})

