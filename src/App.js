import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import ReadableBad from './1-readable/bad';

const examples = {
  readable: {
    bad: ReadableBad
  }
};

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
          {React.createElement(examples.readable.bad)}
        </div>
      </div>
    );
  }
}

export default App;
