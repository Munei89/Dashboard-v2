import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { StyledCard } from '../Loadable';

const renderer = createRenderer();

describe('<StyledCard />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<StyledCard>Card</StyledCard>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
