import fs from 'fs';
import path from 'path';
import React from 'react';

const Layout = ({scripts, styles, children}) => {
  const files = fs.readFileSync(path.join(__dirname, 'rev-manifest.json')).toString();
  return (
    <html>
      <head>
        {styles.map(style => <link key={style} rel="stylesheet" href={style}/>)}
        {scripts.async.map(script => <link key={script} rel="prefetch" href={script}/>)}
      </head>
      <body>
        <div id="app">
          {children}
        </div>
        {scripts.entry.map(script => <script key={script} src={script} defer/>)}
      </body>
    </html>
  );
};

Layout.propTypes = {
  children: React.PropTypes.node
};

export default Layout;
