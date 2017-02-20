import React, { PropTypes } from 'react';

import styles from './documentviewer.css';

const Documentviewer = ({ url, type, width, height }) => (
  <div style={{ width, height }}>
    <object className={styles.main} data={url} type={type}>
      Fehler passiert
    </object>
  </div>
);

Documentviewer.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Documentviewer.defaultProps = {
  width: '100%',
  height: '100%',
};

export default Documentviewer;
