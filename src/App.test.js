import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HYTALE NFT MARKETPLACE link', () => {
  render(<App />);
  const linkElement = screen.getByText(/HYTALE NFT MARKETPLACE/i);
  expect(linkElement).toBeInTheDocument();
});
