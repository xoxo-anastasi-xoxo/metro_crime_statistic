import React from 'react';
import "./Info.css"
import InfoText from "./InfoText"
import Button from "./Button"
import List from "./List"
import {connect} from 'react-redux'


class Info extends React.Component {
    render() {
        let name;
        if (this.props.page.current_info.amount === 1)
            name = this.props.metro[this.props.page.current_info.stationInStore[0]].stations[this.props.page.current_info.stationInStore[1]].name

              if (this.props.page.current_info.amount === 2)
            name = this.props.page.sets[this.props.page.current_info.id].name;

        return (
            <div className="Info">
                <div className="Info_inside">
                    <div className="container">
                        <h4 className="Info_title">{this.props.is_active ? "Преступность в метро" : name}</h4>
                        <Button/>
                    </div>
                    {this.props.is_active ? <List/> : <InfoText/>}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    page: state.page,
    is_active: state.page.set,
    metro: state.metro
});


export default connect(mapStateToProps)(Info);

