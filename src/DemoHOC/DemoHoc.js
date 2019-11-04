import React, { Component } from 'react'
import FormSanPham from './FormSanPham'
import FormNguoiDung from './FormNguoiDung'
import WithModal from './WithModal'
let FormMal = WithModal(FormSanPham)
export default class DemoHoc extends Component {
    render() {
        return (
            <div>
                {/* <FormSanPham />
                <FormNguoiDung /> */}
                <FormMal/>
            </div>
        )
    }
}
