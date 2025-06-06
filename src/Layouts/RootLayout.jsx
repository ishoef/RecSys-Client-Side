import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

export const responsive = "w-11/12 md:w-10/12 lg:w-9/12 mx-auto"
const RootLayout = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;