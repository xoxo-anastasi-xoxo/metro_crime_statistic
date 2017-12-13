import React from 'react'
import "./Metro.css"

class Way extends React.Component {
  render() {
    return(<g>
      <rect id={this.props.info.id}
            x={this.props.info.x}
            y={this.props.info.y}
            className={this.props.info.class}
            width={this.props.info.width}
            height={this.props.info.height}/>
    </g>);
  }
}

export default Way;