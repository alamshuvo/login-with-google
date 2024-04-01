
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Mainlayout = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;