import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => (
  <h1>Hello Worlds!</h1>
);

Home.getProps = () => ({});
Home.getPath = () => 'index.html';

if (__CLIENT__) {
  ReactDOM.render(<Home/>, document.getElementById('app'));

  // import('./async')
  //   .then(module => console.log(module))
  // ;

}

if (module.hot) {
  module.hot.accept();
}

export default Home;