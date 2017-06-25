import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

/**
 * ImageOffline Component
 */
class ImageOffline extends PureComponent {
  static propTypes = {
    /**
      * The css class name of the root element.
      */
    className: PropTypes.string,
    /**
      * Offline/local server image filename
      */
    localImg: PropTypes.string.isRequired,
    /**
      * Image remote server url
      */
    remoteLink: PropTypes.string.isRequired,
    /**
      * Override the inline-styles of the root element.
      */
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  state = {
    loadOffline: true,
  };

  handleError = () => {
    this.setState({ loadOffline: false });
  };

  render() {
    const {
      className,
      remoteLink,
      localImg,
      style,
    } = this.props;
    const { loadOffline } = this.state;

    const offlineLink = `/images/${localImg}`;

    let img;
    if (loadOffline) {
      img = (
        <img
          className={className}
          onError={this.handleError}
          src={offlineLink}
          style={style}
        />
      );
    } else {
      img = (
        <img
          className={className}
          src={remoteLink}
          style={style}
        />
      );
    }

    return img;
  }
}

export default ImageOffline;
