import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { SwitchButton } from '../Loadable';

const renderer = createRenderer();

describe('<SwitchButton />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<SwitchButton />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
