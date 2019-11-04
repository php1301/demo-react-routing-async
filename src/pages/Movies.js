import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Movies extends Component {
    render() {
        let { movie } = this.props
        return (
            <div className="col-sm-3">
                <div className="card" style={{ width: 200 }}>
                    <img className="card-img-top img-fluid" src={movie.hinhAnh} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{movie.tenPhim}</h4>
                        <p className="card-text">Some example text.</p>
                        <NavLink className="btn btn-primary" to={`/detail-movie/${movie.maPhim}`}>See Profile</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
