'use strict';

const React = require('react');

module.exports = class Layout extends React.Component {
  render() {
    return(
      <html>
        <head>
          <title>React Media Library</title>
        </head>
        <body>
          <div id="main"></div>
          <script src="medialibrary.js"></script>
        </body>
      </html>
    );
  }
};
