import React, { PropTypes } from 'react';

import ErrorMessage from './Error';

import styles from './documentviewer.css';

const Documentviewer = ({ name, url, type, ...props }) => (
  <div {...props}>
    <object
      className={styles.main}
      data={url}
      type={type}
    >
      <ErrorMessage name={name} url={url} />
    </object>
  </div>
);

Documentviewer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Documentviewer;
