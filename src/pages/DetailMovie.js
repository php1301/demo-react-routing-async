import React, { Component } from 'react'
import * as action from "./../reducer/action/index";
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'
class DetailMovie extends Component {
    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.id;
        this.props.detaiLMovie(id);
    }
    renderTable = () => {
        let { movie } = this.props
        if (movie.lichChieu){
        return movie.lichChieu.map((item, index) => {
            return (
                <tr>
                    <td>{item.thongTinRap.tenCumRap}</td>
                    <td>{item.thongTinRap.tenRap}</td>
                    <td>{item.ngayChieuGioChieu}</td>
                    <td>{item.ngayChieuGioChieu}</td>
                    <td>
                        <NavLink class = "btn btn-success" to=""> Mua vé </NavLink>
                    </td>
                </tr>
            )
        })
    }
        }
    render() {
        let { movie } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={movie.hinhAnh} />
                    </div>
                    {/* <div className="col-sm-6">
                        <h2> {movie.tenPhim}</h2>
                        <p>{movie.moTa}</p>
                    </div> */}
                    <div className="col-sm-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td scope="row"></td>
                                    <td>Tên Phim</td>
                                    <td>{movie.tenPhim}</td>
                                </tr>
                                <tr>
                                    <td scope="row"></td>
                                    <td>Mô tả</td>
                                    <td>{movie.moTa}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Cụm rạp</th>
                                    <th>Tên rạp</th>
                                    <th>Ngày chiếu</th>
                                    <th>Giờ chiếu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie
    }
}
const mapDispatchToProp = dispatch => {
    return {
        detaiLMovie: (id) => {
            dispatch(action.actDetailMoviesApi(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(DetailMovie)