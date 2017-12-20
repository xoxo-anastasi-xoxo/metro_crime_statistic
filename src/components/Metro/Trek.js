import React from 'react'
import "./Metro.css"

class Trek extends React.Component {
  render() {
    if (this.props.info.transform) {
      return(<g>
        <ellipse className="st17"
                 cx={this.props.info.cx}
                 cy={this.props.info.cy}
                 rx={this.props.info.rx}
                 ry={this.props.info.ry}
                 transform={this.props.info.transform}
        />
      </g>);
    } else {
      return(<g>
        <ellipse className="st17"
                 cx={this.props.info.cx}
                 cy={this.props.info.cy}
                 rx={this.props.info.rx}
                 ry={this.props.info.ry}
        />
      </g>);
    }
  }
}

export default Trek;