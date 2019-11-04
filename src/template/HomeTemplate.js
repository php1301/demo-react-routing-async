import React, {Fragment} from 'react'
import {Route} from 'react-router-dom';
import NavBar from "./../component/NavBar";
const HomeLayout = (props) =>{
    return (<Fragment>
        <NavBar/>
        { props.children}  
    </Fragment>)
}//// lay tat ca props da truyen trong cha
export default function HomeTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render = {propsComponent => (
                <HomeLayout>
                <Component {...propsComponent}>
                </Component>
                </HomeLayout> // chi dc truyen 3 props, muon truyen them phai viet kieu nay
            )}
        />
    )
}
