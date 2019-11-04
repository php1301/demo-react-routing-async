import React, { Component } from 'react'

export default class FormSanPham extends Component {
    render() {
        return (
            <div>
                    <div classname="form-group">
                        <label htmlfor>Loai SP</label>
                        <input type="text" classname="form-control" />
                    </div>
                    <div classname="form-group">
                        <label htmlfor>Ma SP</label>
                        <input type="text" classname="form-control" />
                    </div>
                    <div classname="form-group">
                        <label htmlfor>Ten SP</label>
                        <input type="text" classname="form-control" />
                    </div>
                    <div classname="form-group">
                        <label htmlfor>Vat SP</label>
                        <input type="text" classname="form-control" />
                    </div>
            </div>
        )
    }
}
