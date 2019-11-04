import React, { Component } from 'react';
import Axios from 'axios';
import Movies from './Movies';
import * as action from "../reducer/action/index";
import { connect } from "react-redux"
class ListMovies extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         listMovies: []

    //     }
    // }

    componentDidMount() {
        // console.log("helloworld");
        // Axios({
        //     method: "GET",
        //     url:
        //         "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10"
        // })
        //     .then(result => {
        //         console.log(result);
        //         this.props.onSaveListMovie(result.data)
        //         // this.setState({listMovies: result.data})
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        this.props.onSaveListMovie()
    }
    renderHTML = () => {
        return this.props.listMovies.map((item, index) => {
            return <Movies key={index} movie={item} /> //props movie mang value item
        })
        console.log(123)
    }
    render() {
        return (
            < div className="container">
                <div className="row">
                    {this.renderHTML()}
                    {/* {console.log(this.props.listMovie)} */}
                </div>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return{
        listMovies: state.movieReducer.listMovies
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveListMovie: () => {
            dispatch(action.actOnSaveListMovieAPI())
        }
    }
} 
// o day hieu la can props chạy hành động gì thay vì cần bắn hành động gì lên
// cần props (action) handle event on save list movie
// thực hiện / bắn hàm onsavelistmovie 
//Hanh dong (dispatch to props) de co props goi hanh dong => goi hanh dong => dispatch action gì? ở đây là action on save list movie api
// => action on save list movie api làm việc với api bằng return axios và nếu thành công sẽ trả (return về các tình huống) 
// promise là chạy hành động lưu phim
// =>Hành động lưu phim làm (return) 2 thứ là return về case (type) và list phim
// =>Ở moviereducer chọn case On save list movie và thực hiện thuật toán
//=>Sau đó up lên rootreducer
//=> mapstatetprops bóc ra state
//=> render html bằng cách duyệt map gọi props chứa state và gắn vô thành phần con
export default connect(mapStateToProps, mapDispatchToProps)(ListMovies)