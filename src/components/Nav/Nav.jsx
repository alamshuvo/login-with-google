import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className=' flex gap-5'>
            <Link to={"/"}> Home</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    );
};

export default Nav;