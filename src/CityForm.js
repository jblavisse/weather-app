import React, { Component } from 'react'


class CityForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" value={this.props.city} onChange={this.props.changeCity} />
                <input type="submit" value="OK" />
            </form>
        )
    }
}

export default CityForm;