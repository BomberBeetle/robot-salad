import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

test('renders homepage', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Robot Salad/i);
  expect(linkElement).toBeInTheDocument();
});
