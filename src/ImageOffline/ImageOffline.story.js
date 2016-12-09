import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ImageOffline from './ImageOffline';

const remoteLink = 'http://imgur.com/h0UFha7.jpg';

storiesOf('ImageOffline', module)
  .add('offline', () => (
    <ImageOffline remoteLink={remoteLink} localImg={'mGxer98WQqTudkdWK.jpg'} />
  ))
  .add('broken offline', () => (
    <ImageOffline remoteLink={remoteLink} localImg={'BROKENmGxer98WQqTudkdWK.jpg'} />
  ))
  .add('broken', () => (
    <ImageOffline remoteLink={'broken'} localImg={'BROKENmGxer98WQqTudkdWK.jpg'} />
  ));
