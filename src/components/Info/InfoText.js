import React from 'react';
import "./Info.css";
import {connect} from 'react-redux'


class InfoText extends React.Component {
    render() {
        let text, name;
        // Выбираем показывать информацию о станции или о наборе станций
        if (this.props.page.current_info.amount === 1)
            text = this.props.metro[this.props.page.current_info.stationInStore[0]].stations[this.props.page.current_info.stationInStore[1]].text;
        if (this.props.page.current_info.amount === 2)
            text = this.props.page.sets[this.props.page.current_info.id].text;
        return (
            <div className="InfoText">
                {text}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    page: state.page,
    metro: state.metro
});
export default connect(mapStateToProps)(InfoText);