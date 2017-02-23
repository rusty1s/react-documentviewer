import React, { Component } from 'react';

import Documentviewer from '../src';

import './app.css';

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
        { url ? <Documentviewer name={name} url={url} type={type} /> : null }

        <div>
          <button onClick={this.showPdf}>Show PDF</button>
          <button onClick={this.showPng}>Show PNG</button>
          <button onClick={this.showHtml}>Show HTML</button>
          <button onClick={this.showText}>Show TEXT</button>
          <button onClick={this.showSvg}>Show SVG</button>
          <button onClick={this.showZip}>Show ZIP</button>
        </div>
      </div>
    );
  }
}

export default App;
