import React from 'react';
import "./Info.css"
import {connect} from 'react-redux'


class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem"
           onClick={this.props.chooseSet.bind(this, this.props.id)}>
        {this.props.name}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  chooseSet: (id) => dispatch({
    type: 'CHOOSE_SET',
    id: id
  })
});

export default connect(undefined, mapDispatchToProps)(ListItem);
