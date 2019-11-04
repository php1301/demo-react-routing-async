import React, { Component } from 'react'

export default class FormNguoiDung extends Component {
    render() {
        return (
            <div>
                <div classname="form-group">
                    <label htmlfor>ten SP</label>
                    <input type="text" classname="form-control" />
                </div>
                <div classname="form-group">
                    <label htmlfor>Ma SP</label>
                    <input type="text" classname="form-control" />
                </div>
            </div>

        )
    }
}
