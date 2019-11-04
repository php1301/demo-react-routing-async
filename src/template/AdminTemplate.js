import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
const AdminLayout = props => {
    return (
        <Fragment>
            <div>Menu Admin</div>
            {props.children}
            {/* { props.children}   */}
        </Fragment>
    )
}
export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => {
                if (localStorage.getItem("userAdmin")) {

                    return (
                        <AdminLayout>
                            <Component {...propsComponent}>

                            </Component>
                        </AdminLayout>
                    )// chi dc truyen 3 props, muon truyen them phai viet kieu nay
                }
            }
            }

        />
    )
}

