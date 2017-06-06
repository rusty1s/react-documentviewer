import React, { Component, PropTypes } from 'react';

class Documentviewer extends Component {
  state = {
    hidden: false,
  };

  componentWillReceiveProps() {
    this.setState({ hidden: true }, () => this.setState({ hidden: false }));
  }

  render() {
    const { style, url, type, NotSupportedError, ...props } = this.props;
    const wrapperStyles = Object.assign({}, style, { position: 'relative' });

    const objectStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    };

    if (this.state.hidden) return null;

    return (
      <div style={wrapperStyles} ref={(w) => { this.wrapper = w; }} {...props}>
        <object
          data={url}
          type={type}
          style={objectStyles}
        >
          {NotSupportedError}
        </object>
      </div>
    );
  }
}

Documentviewer.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  NotSupportedError: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any),
};

Documentviewer.defaultProps = {
  style: {},
  NotSupportedError: null,
};


export default Documentviewer;
