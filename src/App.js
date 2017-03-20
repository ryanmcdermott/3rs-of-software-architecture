import React, { Component } from 'react';
import classNames from 'classnames/bind';

import ReadableBad from './1-readable/bad';
import ReadableGood from './1-readable/good';
import ReusableBad from './2-reusable/bad';
import ReusableGood from './2-reusable/good';
import RefactorableBad from './3-refactorable/bad';
import RefactorableGood from './3-refactorable/good';
import styles from './index.css';

const examples = {
  readable: {
    bad: ReadableBad,
    good: ReadableGood,
  },
  reusable: {
    bad: ReusableBad,
    good: ReusableGood,
  },
  refactorable: {
    bad: RefactorableBad,
    good: RefactorableGood,
  },
};

const cx = classNames.bind(styles);

const titleClass = cx({
  center: true,
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      section: 'refactorable',
      quality: 'good',
    };
  }

  onSelectSection(e) {
    this.setState({
      section: e.target.value,
    });
  }

  onSelectQuality(e) {
    this.setState({
      quality: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className={titleClass}>
            3 Rs of Software Architecture
          </h2>
        </div>

        <div className="row">
          <div className="six columns">
            <label htmlFor="pyramidSectionSelector">Pyramid Section</label>
            <select
              className="u-full-width"
              id="pyramidSectionSelector"
              onChange={this.onSelectSection.bind(this)}
              value={this.state.section}
            >
              <option value="readable">Readable</option>
              <option value="reusable">Reusable</option>
              <option value="refactorable">Refactorable</option>
            </select>
          </div>

          <div className="six columns">
            <label htmlFor="qualitySelector">Quality</label>
            <select
              className="u-full-width"
              id="qualitySelector"
              onChange={this.onSelectQuality.bind(this)}
              value={this.state.quality}
            >
              <option value="bad">Bad</option>
              <option value="good">Good</option>
            </select>
          </div>
        </div>

        <hr />

        <div className="row">
          {React.createElement(examples[this.state.section][this.state.quality])}
        </div>
      </div>
    );
  }
}
