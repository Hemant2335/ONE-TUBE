import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import "./Home.css"
const Home = () => {
    return <div className='home'>
        <Navbar/>
        <div className='side-main'>
        <Sidebar/>
        <Main/>
        </div>
        
    </div>;
}
export default Home;