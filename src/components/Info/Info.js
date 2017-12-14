import React from 'react';
import "./Info.css"
import InfoText from "./InfoText"
import Button from "./Button"
import InfoForm from "./InfoForm"
import List from "./List"
import {connect} from 'react-redux'


class Info extends React.Component {
  render() {
    return (
      <div className="Info">
        <div className="Info_inside">
          {/*<InfoForm/>*/}
          <Button/>
          {this.props.is_active ? <List/> : <InfoText/>}


        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  is_active: state.page.set
});


export default connect(mapStateToProps)(Info);

