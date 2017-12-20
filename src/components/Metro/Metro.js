import React from 'react'
import {connect} from 'react-redux'
import './Metro.css'
import Branch from './Branch'
import {treks} from '../../reducers/metro'
import Trek from "./Trek";

class Metro extends React.Component {
  render() {
    const styles = {
      enableBackground: "new 0 0 1920 1080"
    };
    return (
      <div className="Metro">
        <svg version="1.1"
             id="makeMeDraggable"
             className="Metro_image"
             xmlns="http://www.w3.org/2000/svg"
             x="0px"
             y="0px"
             viewBox="0 0 1920 1080"
             style={styles}>
          {
            treks.map((key, index) => (<Trek key={index} info={key}/>))
          }
          {
            this.props.metro.map((key, index) => (<Branch key={index} index={index}/>))
          }
        </svg>
      </div>);
  }
}

const mapStateToProps = state => ({
  metro: state.metro
});
export default connect(mapStateToProps)(Metro);
