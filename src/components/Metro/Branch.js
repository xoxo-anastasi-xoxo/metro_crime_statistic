import React from 'react'
import {connect} from 'react-redux'
import './Metro.css'
import Station from "./Station"
import Way from "./Way"

class Branch extends React.Component {
  render() {
    const branch = this.props.metro[this.props.index];
    return (
      <g>
        {
          branch.ways.map((key, index) => (<Way key={index} info={key}/>))
        }
        {
          branch.stations.map((key, index) => (<Station key={index} info={key} indexes={[this.props.index, index]}/>))
        }
      </g>);
  }
}

const mapStateToProps = state => ({
  metro: state.metro
});
export default connect(mapStateToProps)(Branch);
