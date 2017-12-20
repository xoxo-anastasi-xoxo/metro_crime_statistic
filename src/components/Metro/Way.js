import React from 'react'
import "./Metro.css"

class Way extends React.Component {
  render() {
    if (this.props.info.is_circle){
      return(<g>
        <path className={this.props.info.class}
              d={this.props.info.d}/>
      </g>);
    }
    else
    if (this.props.info.transform) {
      return(<g>
        <rect id={this.props.info.id}
              x={this.props.info.x}
              y={this.props.info.y}
              transform={this.props.info.transform}
              className={this.props.info.class}
              width={this.props.info.width}
              height={this.props.info.height}/>
      </g>);
    } else {
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
}

export default Way;