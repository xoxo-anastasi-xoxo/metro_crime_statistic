import React from 'react';
import "./Info.css"

class InfoText extends React.Component {
  render() {
    return (
      <p className="InfoText">
        {this.props.text || "Выберите станцию для получения информации..."}
      </p>
    );
  }
}

export default InfoText;
