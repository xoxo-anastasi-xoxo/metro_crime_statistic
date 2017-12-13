import React from 'react';
import "./Info.css";
import {connect} from 'react-redux'


class InfoText extends React.Component {
  render() {
    let text;
    console.log(this.props.page)
    if (this.props.page.current_info.amount === 1)
      text = this.props.metro[this.props.page.current_info.stationInStore[0]].stations[this.props.page.current_info.stationInStore[1]].text
    return (
      <div className="InfoText">
        {text || "Тут может быть любой приветственный текст:)) Состав команды, цель проекта и бла-бла-бла :)\n \n \n \n \nтекст_можно_прокрутить_ниже \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n вот так вот:)"}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  metro: state.metro
});
export default connect(mapStateToProps)(InfoText);