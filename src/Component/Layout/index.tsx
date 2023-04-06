import React ,{ReactNode}from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
// import './Layout.css'

type layoutProps={
    children?: ReactNode
}
const Layout = (props :layoutProps) => {
    return(
        <div className='app'>
            <Header/>
            <div className='app-wrapper'>
                <div className='app-body'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Layout;