import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/
// https://main.d271r6z8tdry4i.amplifyapp.com/