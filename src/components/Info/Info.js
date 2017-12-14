import React from 'react';
import "./Info.css"
import InfoText from "./InfoText"
import InfoForm from "./InfoForm"
import List from "./List"


class Info extends React.Component {
  render() {
    return (
      <div className="Info">
        <div className="Info_inside">
          <InfoForm/>
          <List/>
          <InfoText/>
        </div>
      </div>
    );
  }
}

export default Info;
