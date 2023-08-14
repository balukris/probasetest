import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Dashboard from './index';

describe('App', () => {
  it('Renders hello world', () => {
    render(<Dashboard />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
