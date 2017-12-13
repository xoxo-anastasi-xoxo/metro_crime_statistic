import React from 'react';
import "./Info.css"
import InfoText from "./InfoText"

class Info extends React.Component {
  render() {
    return (
      <div className="Info">
        <div className="Info_inside">

<InfoText/>
        </div>
      </div>
    );
  }
}

export default Info;
