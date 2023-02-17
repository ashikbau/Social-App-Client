import React from 'react';
import './ContentPost.css'
import imageIcon from "../../Components/images/gallery.png"
import emojiIcon from "../../Components/images/cat-face.png"
import VideoIcon from "../../Components/images/video.png"
import profileimage from "../../Components/images/Profile.png"

const ContentPost = () => {
    return (
        <div>
        <div className='ContentUploadContainer'>
          <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
            <img src={`${profileimage }`} className="profileimage" alt="" />
            <input type="text" className='contentWritingpart' placeholder='Write your real thought.....'  />
          </div>
          <div style={{marginLeft: '10px' }}>
            {/* {imagePre !== null ? <img src={imagePre} style={{width:"410px" , height:'250px' , objectFit:"cover" , borderRadius:'10px'}} alt="" /> : VideoPre !== null ? <video className="PostImages" width="500" height="500" controls >
             <source src={VideoPre} type="video/mp4"/>
            </video> : ''
            } */}
            <div  >
            <div style={{display:'flex' , justifyContent:'space-between'}} >
              <label htmlFor='file'>
                <img src={`${imageIcon}`} className="icons" alt="" />
                <input type="file" name="file" id="file" style={{display:"none"}} />
              </label>
              <img src={`${emojiIcon}`} className="icons" alt="" />
              <label htmlFor='file2'>
                <img src={`${VideoIcon}`} className="icons" alt="" />
                <input type="file" name="file2" id="file2" style={{display:"none"}} />
              </label>
            </div>         
              <button style={{height:"30px" ,marginRight:"12px",marginTop:"40px", paddingLeft:"20px" , paddingRight:"20px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer"}} >Post</button>
            </div>
          </div>
        </div>
  
        
      </div>
    );
};

export default ContentPost;