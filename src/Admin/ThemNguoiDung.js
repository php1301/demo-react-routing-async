import React, { Component } from 'react';
import * as action from "./../reducer/action/index";
import { connect } from "react-redux";
class ThemNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
            hoTen: ""
        }
    }
    handleOnChange = (event) => {
        let { name, value } = event.target
        this.setState({

            [name]: value
        })
        console.log(this.state)
    }
    handleOnSubmit = event => {
        event.preventDefault();
        const user = { ...this.state }
        user.maNhom = "GP01"
        user.maLoaiNguoiDung = "QuanTri"
        this.props.themNguoiDung(user)
    }

    render() {
        return (
            <div>
                <form className="form-horizontal" action method="POST">
                    <fieldset>
                        <div id="legend">
                            <legend className>Register</legend>
                        </div>
                        <div className="control-group">
                            {/* Username */}
                            <label className="control-label" htmlFor="username">Username</label>
                            <div className="controls">
                                <input type="text" id="username" name="taiKhoan" placeholder className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div>
                        <div className="control-group">
                            {/* Username */}
                            <label className="control-label" htmlFor="username">Mat Khau</label>
                            <div className="controls">
                                <input type="text" id="username" name="matKhau" placeholder className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div>
                        <div className="control-group">
                            {/* Username */}
                            <label className="control-label" htmlFor="username"> Email </label>
                            <div className="controls">
                                <input type="text" id="username" name="email" placeholder className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div>
                        <div className="control-group">
                            {/* Username */}
                            <label className="control-label" htmlFor="username"> So dien thoai </label>
                            <div className="controls">
                                <input type="text" id="username" name="soDT" placeholder className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div>
                        {/* <div className="control-group">
                            <label className="control-label" htmlFor="username">Ma nhom </label>
                            <div className="controls">
                                <input type="text" id="username" name="maNhom" placeholder className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label" htmlFor="username">Ma loai nguoi dung</label>
                            <div className="controls">
                                <input type="text" id="username" name="maLoaiNguoiDung" placeholder className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div> */}

                        <div className="control-group">
                            {/* Button */}
                            <div className="controls">
                                <button className="btn btn-success">Register</button>
                            </div>
                        </div>
                    </fieldset>
                </form>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themNguuoiDung: user => {
            dispatch(action.actThemNguoiDung(user))
        }
    }

}
export default connect(null, mapDispatchToProps)(ThemNguoiDung)