/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageOffline from './ImageOffline';
import { assert } from 'chai';

describe('ImageOffline', () => {
  it('should render a <ImageOffline> element', () => {
    const wrapper = shallow(
      <ImageOffline />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
