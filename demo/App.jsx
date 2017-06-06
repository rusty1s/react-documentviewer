import React, { Component } from 'react';
import { Box, Title, SubTitle, Grid, Button } from 'react-pattern-library';

import Documentviewer from '../src';
import NotSupportedError from './NotSupportedError';

import styles from './app.css';

class App extends Component {
  state = {
    url: null,
    type: null,
    name: null,
  }

  showPdf = () => this.setState({
    name: 'pdf_file',
    url: 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf',
    type: 'application/pdf',
  });

  showPng = () => this.setState({
    name: 'png_file',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/2000px-Tux.svg.png',
    type: 'image/png',
  });

  showHtml = () => this.setState({
    name: 'html_file',
    url: 'http://entropymine.com/jason/testbed/mime/html/file.html',
    type: 'text/html',
  });

  showText = () => this.setState({
    name: 'text_file',
    url: 'http://entropymine.com/jason/testbed/mime/plain/file.txt',
    type: 'text/plain',
  });

  showSvg = () => this.setState({
    name: 'svg_file',
    url: 'https://wiki.selfhtml.org/local/Kaleidoskop.svg',
    type: 'image/svg+xml',
  });

  showZip = () => this.setState({
    name: 'zip_file',
    url: 'http://entropymine.com/jason/testbed/mime/zip/file.zip',
    type: 'application/zip',
  });

  render = () => {
    const { name, url, type } = this.state;

    return (
      <div className={styles.main}>
        <Box className={styles.buttons}>
          <Title text="Documentviewer" />
          <SubTitle text="Please choose a document" />
          <Grid>
            <Button onClick={this.showPdf} text="Show PDF" />
            <Button onClick={this.showPng} text="Show PNG" />
            <Button onClick={this.showHtml} text="Show HTML" />
            <Button onClick={this.showText} text="Show TEXT" />
            <Button onClick={this.showSvg} text="Show SVG" />
            <Button onClick={this.showZip} text="Show ZIP" />
          </Grid>
        </Box>
        { url && <Documentviewer
          name={name}
          url={url}
          type={type}
          NotSupportedError={<NotSupportedError name={name} url={url} />}
          style={{ width: '100%', height: '100%' }}
        /> }
      </div>
    );
  }
}

export default App;
