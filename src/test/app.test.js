import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../app';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/RESTy/i);
  expect(linkElement).toBeInTheDocument();
});