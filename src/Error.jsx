import React, { PropTypes } from 'react';

import styles from './error.css';

import icon from './download.svg';

const ErrorMessage = ({ name, url, ...props }) => (
  <div className={styles.main} {...props}>
    <a href={url} download={name} className={styles.link}>
      <img src={icon} className={styles.icon} alt="" />
    </a>
    <p className={styles.text}>
      Dokument kann nicht angezeigt werden.{' '}
      <a href={url} download={name} className={styles.text__link}>
        Bitte laden Sie es herunter.
      </a>
    </p>
  </div>
);

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ErrorMessage;
