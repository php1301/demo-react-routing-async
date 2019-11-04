import React, { Component } from 'react';
import * as action from "../reducer/action/index";
import { connect } from "react-redux";
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
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
        console.log(this.props);
        this.props.login(this.state, this.props.history);
    }
    render() {
        return (
            <div classname="wrapper">
                <form classname="form-signin">
                    <h2 classname="form-signin-heading">Please login</h2>
                    <input type="text" classname="form-control" name="taiKhoan" onChange={(e) => this.handleOnChange(e)} />
                    <input type="text" classname="form-control" name="matKhau" onChange={(e) => this.handleOnChange(e)} />
                    <label classname="checkbox">
                        <input type="checkbox" defaultvalue="remember-me" id="rememberMe" name="rememberMe" /> Remember me
    </label>
                    <button classname="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleOnSubmit}>Login</button>
                </form>
            </div>

        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (user, history) => {
            dispatch(action.actOnLoginAdmin(user, history))
        }
    }
}
export default connect(null, mapDispatchToProps)(Admin)