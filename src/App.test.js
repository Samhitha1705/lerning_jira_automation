import { render, screen } from '@testing-library/react';
import App from './App';

test('test1: should render dashboard title (PASS)', () => {
  render(<App />);
  const title = screen.getByText(/DevOps Frontend Dashboard/i);
  expect(title).toBeInTheDocument(); // ✅ Pass
});

test('test2: should show status message (FAIL)', () => {
  render(<App />);
  const status = screen.getByText(/This text does not exist/i); // Intentional failure
  expect(status).toBeInTheDocument();
});



test('test3: check if button exists (PASS)', () => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument(); // ✅ Pass now that button exists
});
