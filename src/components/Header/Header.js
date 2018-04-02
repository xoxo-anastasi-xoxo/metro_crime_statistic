import React from 'react';
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <a href="/" className="Header__Title">metro_crime_statistic</a>
      </div>
    );
  }
}

export default Header;
