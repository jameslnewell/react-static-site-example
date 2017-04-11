import React from 'react';
import serialize from 'serialize-javascript';

const Layout = ({styles, scripts, props, children}) => {
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
        <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_PROPS__ = ${serialize(props)};`}}/>
        {scripts.entry.map(script => <script key={script} src={script} defer/>)}
      </body>
    </html>
  );
};

Layout.propTypes = {
  styles: React.PropTypes.array,
  scripts: React.PropTypes.object,
  props: React.PropTypes.object,
  children: React.PropTypes.node
};

export default Layout;
