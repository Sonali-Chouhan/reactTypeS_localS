import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
// import './Layout.css'

const Layout = (props :any) => {
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