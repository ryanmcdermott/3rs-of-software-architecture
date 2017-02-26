import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const titleClass = cx({
  center: true
});

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className={titleClass}>Software Architecture Pyramid</h2>
        </div>
      </div>
    );
  }
}

export default App;
