import React, { PropTypes } from 'react';

import styles from './error.css';

import icon from './download.svg';

const ErrorMessage = ({ name, url, text, link, ...props }) => (
  <div className={styles.main} {...props}>
    <a href={url} download={name}>
      <img src={icon} className={styles.icon} alt="" />
    </a>
    <p className={styles.text}>
      {`${text} `}
      <a href={url} download={name} className={styles.link}>{link}</a>
    </p>
  </div>
);

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ErrorMessage;
