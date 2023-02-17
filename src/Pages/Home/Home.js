import React from 'react';
import LeftBar from '../../Components/LeftSideContainer/LeftBar';
import MainPostContainer from '../../Components/MainPostContainer/MainPostContainer';
import Navbar from '../../Components/Navbar';
import RightSideContainer from '../../Components/RightSideContainer/RightSideContainer';
import './home.css'

// import './mainbar.css'
// import './leftbar.css'


const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <div className="ComponentContainer">
                <LeftBar></LeftBar>
                <MainPostContainer></MainPostContainer>
                <RightSideContainer></RightSideContainer>
            </div>
        </div>
    );
};

export default Home;