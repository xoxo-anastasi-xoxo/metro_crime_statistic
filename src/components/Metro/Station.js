import React from 'react'
import {connect} from 'react-redux'
import "./Metro.css"

class Station extends React.Component {
  render() {
    return(<g>
      <circle onClick={this.props.chooseStation.bind(this, this.props.indexes)}
              id={this.props.info.id}
              className={this.props.info.class + " refs"}
              cx={this.props.info.cx}
              cy={this.props.info.cy}
              r={this.props.info.r}/>
      <text onClick={this.props.chooseStation.bind(this, this.props.indexes)}
            id={this.props.info.id}
            transform={this.props.info.transform}
            className="st__title refs">{this.props.info.name}
            </text>
      <text onClick={this.props.chooseStation.bind(this, this.props.indexes)}
            id={this.props.info.id}
            transform={this.props.info.transform}
            className="st__title refs">{this.props.info.name}
      </text>
    </g>);
  }
}

// export default Station;
const mapDispatchToProps = dispatch => ({
  chooseStation: (indexes) => dispatch({
    type: 'CHOOSE_STATION',
    info: indexes
  })
});

export default connect(undefined, mapDispatchToProps)(Station);
