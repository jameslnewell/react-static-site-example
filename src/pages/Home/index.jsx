import React from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

const Home = ({name}) => (
  <h1>Hello {name}!</h1>
);

Home.getProps = () => ({name: 'World'});
Home.getPath = () => 'index.html';
Home.propTypes = {
  name: PropTypes.string
};

if (__CLIENT__) {
  ReactDOM.render(<Home {...window.__INITIAL_PROPS__}/>, document.getElementById('app'));

  // import('./async')
  //   .then(module => console.log(module)) // eslint-disable-line no-console
  // ;

}

if (module.hot) {
  module.hot.accept();
}

export default Home;