import React from 'react';
import './rightbars.css'
import ads from '../../Components/images/ads.jpg';
import image1 from '../../Components/images/image3.jpg';
import image2 from '../../Components/images/image2.jpg';

import image4 from '../../Components/images/image4.jpg';
import image5 from '../../Components/images/image5.jpg';
import image6 from '../../Components/images/image6.jpg';
import addFriends from '../../Components/images/add-user.png';


const RightSideContainer = () => {
    return (
        <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={`${ads}`} className="adsimg" alt="" />
          <div >
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }} className='my-4'>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${image1}`} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }} className='my-4'>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>

      </div>

      <div className='rightcontainer2'>
        <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>
        {/* {users.map((item)=>(
          <Follow userdetails={item}/>

          ))} */}
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginRight:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={`${image2}`} className='profileimage' alt="" />
                    <p>Sumon</p>
                </div>
                <div>
                    <img src={`${addFriends}`} className='addfriend'  alt="" />
                </div>
            </div>
          </div>
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginRight:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={`${image1}`} className='profileimage' alt="" />
                    <p>Rasel</p>
                </div>
                <div>
                    <img src={`${addFriends}`} className='addfriend'  alt="" />
                </div>
            </div>
          </div>
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginRight:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={`${image2}`} className='profileimage' alt="" />
                    <p>Sumon</p>
                </div>
                <div>
                    <img src={`${addFriends}`} className='addfriend'  alt="" />
                </div>
            </div>
          </div>
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginRight:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={`${image4}`} className='profileimage' alt="" />
                    <p>Sumon</p>
                </div>
                <div>
                    <img src={`${addFriends}`} className='addfriend'  alt="" />
                </div>
            </div>
          </div>
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginRight:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={`${image5}`} className='profileimage' alt="" />
                    <p>Sumon</p>
                </div>
                <div>
                    <img src={`${addFriends}`} className='addfriend'  alt="" />
                </div>
            </div>
          </div>
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginRight:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={`${image6}`} className='profileimage' alt="" />
                    <p>Sumon</p>
                </div>
                <div>
                    <img src={`${addFriends}`} className='addfriend'  alt="" />
                </div>
            </div>
          </div>
        

        

      </div>


    </div>
    );
};

export default RightSideContainer;