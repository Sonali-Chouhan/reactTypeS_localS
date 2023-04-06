import React from 'react';
import { Route, Routes } from "react-router-dom";
import ListUser from '../Page/user/UserList';
import AddUser from '../Page/user/AddUser';
// import Header from '../Component/Header';
import Layout from '../Component/Layout';

const PublicRoute = () => {
  return (
    <div>
      <Layout>
       {/* <Header> */}
        <Routes>
        <Route path="/" element={<ListUser/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/adduser/:id' element={<AddUser/>}/>
        </Routes>
        {/* </Header> */}
        </Layout>
    </div>
  )
}

export default PublicRoute