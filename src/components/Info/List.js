import React from 'react';
import "./Info.css"
import ListItem from "./ListItem";
import {connect} from 'react-redux'


class List extends React.Component {
  render() {
    return (

      <div className="InfoText">
        <h2>Подборки</h2>
        {
          this.props.sets.map((key, index) => (<ListItem id={index} key={index} name={key.name}/>))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sets: state.page.sets
});

const mapDispatchToProps = dispatch => ({
  chooseStation: (indexes) => dispatch({
    type: 'CHOOSE_STATION',
    info: indexes
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
