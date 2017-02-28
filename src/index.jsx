import React, { Component, PropTypes } from 'react';

class Documentviewer extends Component {
  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    // We need to take on a pretty ugly approach by adding the <object> tag by
    // modifying the innerHTML of our wrapper. Otherwise specific browsers
    // don't update their visual look if properties change.

    // First, remove the object tags on both sides.
    const error = this.wrapper.innerHTML
      .replace(/^<object[^>]*>/, '')
      .replace(/<\/object>$/, '');

    // Then create a new object tag.
    this.wrapper.innerHTML = '<object ' +
      `data="${this.props.url}" ` +
      `type="${this.props.type}" ` +
      'style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain" ' +
    `>${error}</object>`;
  }

  render() {
    const { name, url, type, NotSupportedError, style, ...props } = this.props;
    const styles = Object.assign({}, style, { position: 'relative' });

    return (
      <div style={styles} ref={(w) => { this.wrapper = w; }} {...props}>
        <NotSupportedError name={name} url={url} type={type} />
      </div>
    );
  }
}

Documentviewer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  NotSupportedError: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

Documentviewer.defaultProps = {
  style: {},
};


export default Documentviewer;
