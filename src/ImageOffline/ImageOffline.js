import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';

/**
 * ImageOffline Component
 */

class ImageOffline extends Component {
  static propTypes = {
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Offline/local server image filename
     */
    localImg: PropTypes.string,
    /**
     * Image remote server url
     */
    remoteLink: PropTypes.string,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  state = {
    loadOffline: true,
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return shallowCompare(this, nextProps, nextState);
  }

  handleError = () => {
    this.setState({loadOffline: false});
  };

  render() {
    const { className: classNameProp, remoteLink, localImg, style } = this.props;
    const { loadOffline } = this.state;

    const className = classNames(
      classNameProp
    );

    const offlineLink = `/images/${localImg}`;

    let img;
    if (loadOffline) {
      img = (
        <img
          src={offlineLink} className={className}
          onError={this.handleError}
          style={style}
        />
      );
    } else {
      img = (
        <img
          src={remoteLink} className={className}
          style={style}
        />
      );
    }

    return img;
  }
}

export default ImageOffline;
