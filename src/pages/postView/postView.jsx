import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  "./postView.scss"

const PostView = (props) => {
    const [posts, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(props.location.state.postId);

    const id = props.location.state.postId;

    useEffect(() => {
        const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b1e3f384c8943a2c5a6dba35d92e43b8`)
        // .then(res => console.log(res.data.results)) 
        .then(res => setPost(res.data))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    
    }, [])

    const imgpath = "https://image.tmdb.org/t/p/w1280";
    const imgContainer = {
        "display": "flex",
        "margin": "auto",
        "width": "20%",
        "height": "40vh",
        "margin-top": "5vh",
        
    }

    const movieList ={
        "text-align": "center"
    }

    const movieURL= "https://www.themoviedb.org/movie/";
    
  


  return <div className='post-view'>
      {loading ? "loading single post" :
          <div className="post" style={movieList}>
               
                    <h3>{posts.title}</h3>
                   
                    <img src={imgpath + posts.poster_path} style={imgContainer}></img>
                    <p>{posts.overview}</p>
                    <p>{posts.release_date}</p>
                    <p>{posts.vote_average}</p>
              
                    <a href={movieURL +posts.id} target="_BLANK" style={{textDecoration:"none", color: "orange"}}>Go to Movie</a>
        </div>}
  </div>;
};

export default PostView;
