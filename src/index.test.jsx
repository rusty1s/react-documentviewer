import React from 'react';
import { mount } from 'enzyme';

import Documentviewer from './index';

const NotSupportedError = () => (<p>Error</p>);

test('renders without crashing', () => {
  const viewer = mount(
    <Documentviewer
      name="file.pdf"
      url="http://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
      type="application/pdf"
      NotSupportedError={NotSupportedError}
    />);

  expect(viewer.find('div')).toHaveLength(1);
  expect(viewer.find('div')).toHaveLength(1);

  expect(viewer.html()).toMatch(/<object/);
  expect(viewer.html()).toMatch(/<\/object><\/div>$/);
  expect(viewer.html()).toMatch(/tracemonkey\.pdf/);
  expect(viewer.html()).toMatch(/application\/pdf/);
});
