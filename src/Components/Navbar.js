import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import searchIcon from "../Components/images/search.png";
import Notifications from "../Components/images/bell.png";
import Message from "../Components/images/message.png";
// import Profileimage from "../Images/Profile.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div>
            <a className="btn btn-ghost normal-case text-xl">Social App</a>
        </div>
        <div>
                    <div className='searchInputContainer'>
                              <img src={`${searchIcon}`} className="searchIcon" alt="" />
                              <input type="text" className='searchInput' placeholder='search your friends' name="" id="" />
                    </div>
          </div>
          <div className='IconsContainer'>
                    <img src={`${Notifications}`} className="Icons" alt="" />
                    <img src={`${Message}`} className="Icons" alt="" />
                   
                    <div style={{display:'flex' , alignItems:'center'}}>
                              <img src='' className="ProfileImage" alt="" />
                              <p style={{marginLeft:'5px'}}></p>
                    </div>
                   
                    <div style={{marginRight:"30px" , marginLeft:"20px" , cursor:"pointer"}} >
                      <p>Logout</p>
                    </div>
          </div>
      </div>
    );
};

export default Navbar;