import React, { Component } from 'react';
import { Button, Grid } from 'react-pattern-library';

import Documentviewer from '../src';

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
    url: 'http://entropymine.com/jason/testbed/mime/png/file.png',
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
      <div>
        <Grid>
          <Button onClick={this.showPdf} text="Show PDF" />
          <Button onClick={this.showPng} text="Show PNG" />
          <Button onClick={this.showHtml} text="Show HTML" />
          <Button onClick={this.showText} text="Show TEXT" />
          <Button onClick={this.showSvg} text="Show SVG" />
          <Button onClick={this.showZip} text="Show ZIP" />
        </Grid>
        { url ? <Documentviewer name={name} url={url} type={type} /> : null }
      </div>
    );
  }
}

export default App;
