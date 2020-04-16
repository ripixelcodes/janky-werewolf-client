import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import MobileLayout from '.';

jest.mock('../../../../public/assets/favicon.png', () => 'favicon/path.png');

describe('<MobileLayout>', () => {
  it('renders as expected', () => {
    const result = render(
      <MobileLayout>
        <p>Test</p>
      </MobileLayout>
    );

    expect(result.getByText('Janky Werewolf')).toBeInTheDocument();
    expect(result.getByText('Test')).toBeInTheDocument();
  });
});
