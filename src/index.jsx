import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import ErrorMessage from './Error';

import styles from './documentviewer.css';

class Documentviewer extends Component {
  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    let error = this.wrapper.innerHTML
                    .replace(/<\/object>$/, '');

    if (error.match(/^<object/)) error = error.slice(error.indexOf('>') + 1);

    const { url, type } = this.props;
    const obj = `<object data="${url}" type="${type}">${error}</object>`;
    this.wrapper.innerHTML = obj;
  }

  render() {
    const { name, url, className, errorText, errorLink, ...props } = this.props;
    delete props.type;

    return (
      <div
        className={cx(className, styles.main)}
        {...props}
        ref={(wrapper) => { this.wrapper = wrapper; }}
      >
        <ErrorMessage
          name={name}
          url={url}
          text={errorText}
          link={errorLink}
        />
      </div>
    );
  }
}

Documentviewer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  errorText: PropTypes.string,
  errorLink: PropTypes.string,
};

Documentviewer.defaultProps = {
  className: null,
  errorText: 'Document can\'t be displayed.',
  errorLink: 'Please download it here.',
};

export default Documentviewer;
