import React from 'react';
import "./Info.css"
import {connect} from 'react-redux'


class Button extends React.Component {
  render() {
    return (
      <div className="Button"
           onClick={this.props.openSet}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openSet: () => dispatch({
    type: 'OPEN_SET'
  })
});

export default connect(undefined, mapDispatchToProps)(Button);
