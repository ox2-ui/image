import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageOffline from './ImageOffline';

const remoteLink = 'http://imgur.com/h0UFha7.jpg';

storiesOf('ImageOffline', module)
  .add('offline', () =>
    <ImageOffline
      localImg={'mGxer98WQqTudkdWK.jpg'}
      remoteLink={remoteLink}
    />,
  )
  .add('broken offline', () =>
    <ImageOffline
      localImg={'BROKENmGxer98WQqTudkdWK.jpg'}
      remoteLink={remoteLink}
    />,
  )
  .add('broken', () =>
    <ImageOffline
      localImg={'BROKENmGxer98WQqTudkdWK.jpg'}
      remoteLink={'broken'}
    />,
  );
