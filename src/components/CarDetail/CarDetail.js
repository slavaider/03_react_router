import React, {Component} from 'react';
import './CarDetail.css'

class CarDetail extends Component {
    render() {
        return (
            <div className={'CarDetail'}>
                <h1>{this.props.match.params.name}</h1>
            </div>
        );
    }
}

export default CarDetail
