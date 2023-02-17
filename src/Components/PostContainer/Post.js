import React, { useState } from 'react';
import './post.css'
import ProfileImage from "../../Components/images/Profile.png";
import LikeIcon from "../../Components/images/like.png";
import CommentIcon from "../../Components/images/speech-bubble.png";
import Shareicon from "../../Components/images/share.png";
import Moreoption from "../../Components/images/more.png";
import anotherlikeicon from "../../Components/images/setLike.png"

const Post = () => {
    const [like,setLike] = useState(LikeIcon);
    const [count,setCount] = useState(10);
    const [comments,setComments] = useState([]);
    const [commentwriting, setcommentwriting] = useState('');
    const [show, setshow] = useState(false);


    const handleLike = ()=>{
        if(like === LikeIcon){
            setLike(anotherlikeicon);
            setCount(count + 1)
        }else{
            setLike(LikeIcon);
            setCount(count - 1)
        }
    }


    const addComment = ()=>{
        const comment = {
            'id': 'jDdkj1223',
            'username':'sumon',
            'title':`${commentwriting}`
        }
        setComments(comments.concat(comment));
    }


    const handleComment =()=>{
        addComment();
    }

    console.log(comments)

    const handleshow = ()=>{
        if(show === false){
          setshow(true)
        }else{
          setshow(false)
        }
      }

    
    return (
        <div className='PostContainer'>
        <div className='SubPostContainer'>
          <div>
            <div style={{ display: 'flex', alignItems: "center" }}>
              {/* {user.profile == ""? <img src={`${ProfileImage}`} className="PostImage" alt="" /> : <img src={`${user.profile}`} className="PostImage" alt="" />} */}
              <img src={`${ProfileImage}`} className="PostImage" alt="" />
              <div>
                <p style={{ marginLeft: '5px', textAlign: "start",marginBottom:'8px' }}>Sumon</p>
                <p style={{ fontSize: "11px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}> Fllowing by sumon</p>
              </div>
              <img src={`${Moreoption}`} className="moreicons" alt="" />
            </div>
            <p style={{ textAlign: 'start', width: "96%", marginLeft: 20, marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua......</p>

            <img src={`${ProfileImage}`} className="PostImages" alt="" />
            {/* {post.image !== '' ? 
             <img src={`${post.image}`} className="PostImages" alt="" />: post.video !== '' ? <video className="PostImages" width="500" height="500" controls >
             <source src={`${post.video}`} type="video/mp4"/>
            </video> : ''
            } */}
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", marginLeft: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  <img src={`${like}`} className="iconsforPost" onClick={handleLike}  alt="" />
                  <p style={{ marginLeft: "6px" }}> {count}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginLeft: 20, cursor: "pointer" }}>
                  <img src={`${CommentIcon}`} className="iconsforPost" onClick={handleshow} alt="" />
                  <p style={{ marginLeft: "6px" }}>{comments.length} Comments</p>
                </div>
              </div>


              <div style={{ display: "flex", alignItems: "center", marginLeft: 200, cursor: "pointer" }}>
                <img src={`${Shareicon}`} className="iconsforPost" alt="" />
                <p style={{ marginLeft: "6px" }}>Share</p>
              </div>
            </div>

           
           { show === true ?
           <div style={{padding:'10px'}}>
              <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${ProfileImage}`} className="PostImage" alt="" />
                <p style={{marginLeft:"6px"}}>Suman</p>
                 <input type="text" className='commentinput' placeholder='Write your thought' onChange={(e) => setcommentwriting(e.target.value)} />
                <button className='addCommentbtn' onClick={handleComment } >Post</button>
              </div> 
              {comments.map((item) => (
              <div style={{ alignItems: "center" }}>
                <div style={{display:"flex" , alignItems:"center"}}> 
              
                  <img src={`${ProfileImage}`} className="PostImage" alt="" /> 
               
                  <p style={{ marginLeft: "6px" , fontSize:18, marginTop:6 }}>{item.username}</p>
                </div>
                <p style={{ marginLeft: "55px" , textAlign:'start' , marginTop:-16 }}>{item.comment}</p>
                <p className='pt-2' style={{ marginLeft: "55px" , textAlign:'start' , marginTop:-10 , color:"#aaa" , fontSize:11}}>{item.title} </p>
                <p className='pt-2' style={{ marginLeft: "55px" , textAlign:'start' , marginTop:-10 , color:"#aaa" , fontSize:11}}>Reply</p>
                
              </div>

            ))}
          </div>:''}
           
          </div>
        </div>
      </div>
    );
};

export default Post;