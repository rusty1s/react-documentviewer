import React, { PropTypes } from 'react';

import styles from './error.css';
import icon from './download.svg';

const NotSupportedError = ({ name, url }) => (
  <div className={styles.main}>
    <a href={url} download={name}>
      <img src={icon} className={styles.icon} alt="" />
    </a>
    <p className={styles.text}>
      {'Document can\'t be displayed. '}
      <a href={url} download={name} className={styles.link}>
        {'Please download it here.'}
      </a>
    </p>
  </div>
);

NotSupportedError.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NotSupportedError;
