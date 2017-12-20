import React from 'react';
import "./Info.css";
import {connect} from 'react-redux'


class InfoText extends React.Component {
  render() {
    let text, name;
    if (this.props.page.current_info.amount === 1) {
      text = this.props.metro[this.props.page.current_info.stationInStore[0]].stations[this.props.page.current_info.stationInStore[1]].text;
name = this.props.metro[this.props.page.current_info.stationInStore[0]].stations[this.props.page.current_info.stationInStore[1]].name
    }
    if (this.props.page.current_info.amount === 2) {
      text = this.props.page.sets[this.props.page.current_info.id].text;
      name = this.props.page.sets[this.props.page.current_info.id].name;
    }
    return (
      <div className="InfoText">
        <h2>{name || "Преступность в метро"}</h2>
        {text || "В среднем московское метро перевозит 8 миллионов пассажиров в день. Заполняемость в вагонах метро в \"часы пик\" составляет от 9,5 человек на 1 кв. м, хотя такое расстояние рассчитано на 4,4 человека. Это свидетельствует о перегруженности вагонов в \"часы пик\". Именно в это время в метро чаще всего происходят кражи: карманникам легче незаметно достать у жертвы ценные вещи, деньги или телефон."}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  metro: state.metro
});
export default connect(mapStateToProps)(InfoText);