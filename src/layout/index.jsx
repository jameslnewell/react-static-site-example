import fs from 'fs';
import path from 'path';
import React from 'react';

const Layout = ({scripts, styles, children}) => {
  const files = fs.readFileSync(path.join(__dirname, 'rev-manifest.json')).toString();
  return (
    <html>
      <head>
        {styles.map(style => <link rel="stylesheet" href={style}/>)}
      </head>
      <body>
        <div id="app">
          {children}
        </div>
        {scripts.map(script => <script src={script} defer/>)}
      </body>
    </html>
  );
};

Layout.propTypes = {
  children: React.PropTypes.node
};

export default Layout;
