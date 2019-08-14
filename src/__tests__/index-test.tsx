import React from 'react';
import Image from '..';

import renderer from 'react-test-renderer';

test(`lmao`, () => {
  expect(renderer.create(<Image />).toJSON()).toMatchSnapshot();
});
