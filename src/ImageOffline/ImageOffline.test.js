/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ImageOffline from './ImageOffline';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <ImageOffline
      localImg={'mGxer98WQqTudkdWK.jpg'}
      remoteLink={'http://imgur.com/h0UFha7.jpg'}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
