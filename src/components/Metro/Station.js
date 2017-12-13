import React from 'react'
import {connect} from 'react-redux'
import "./Metro.css"

class Station extends React.Component {
  render() {
    return(<g>
      <circle id={this.props.info.id} className={this.props.info.class} cx={this.props.info.cx} cy={this.props.info.cy} r={this.props.info.r}/>
      <text id={this.props.info.id} transform={this.props.info.transform} className="st__title">{this.props.info.name}</text>
    </g>);
  }
}

export default Station;
//
// const mapStateToProps = state => ({
//   st: state.metro["Ветка_красная"].stations[0]
// });
// export default connect(mapStateToProps)(Station);