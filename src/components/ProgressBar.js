import React from 'react';
import '../App.css';

class ProgressBar extends React.Component {
  getColor(progress) {
    if (progress <= 50) {
      return 'red';
    } else if (progress <= 80) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  render() {
    const { progress } = this.props;
    const color = this.getColor(progress);
    return (
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: color }}></div>
      </div>
    );
  }
}

export default ProgressBar;