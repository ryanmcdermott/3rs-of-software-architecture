import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import ReadableBad from './1-readable/bad';
import ReadableGood from './1-readable/good';
import ReusableBad from './2-reusable/bad';
import ReusableGood from './2-reusable/good';
import RefactorableBad from './3-refactorable/bad';
import RefactorableGood from './3-refactorable/good';

const examples = {
  readable: {
    bad: ReadableBad,
    good: ReadableGood
  },
  reusable: {
    bad: ReusableBad,
    good: ReusableGood
  },
  refactorable: {
    bad: RefactorableBad,
    good: RefactorableGood
  }
};

let chosenPyramidSection = 'readable';
let choseQuality = 'good'

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
          {React.createElement(examples[chosenPyramidSection][choseQuality])}
        </div>
      </div>
    );
  }
}

export default App;
