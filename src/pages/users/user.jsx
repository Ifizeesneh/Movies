import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './user.scss';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Pagination from "react-js-pagination";


const User = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState("1");
    

    const history = useHistory();

    console.log(loading);

    useEffect(() => {
        const response = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b1e3f384c8943a2c5a6dba35d92e43b8&language=en-US&page=${page}`)
        // .then(res => console.log(res.data))
      

        .then(res => setPosts(res.data.results))
        .then(res => setLoading(false))
        .catch(err => console.log(err))

        


    
    }, [page])

    const handleRouting = async (id) => {
        await setId(id)
        history.push(`/user/${id}`, {postId: id})
    }

    const imgpath = "https://image.tmdb.org/t/p/w1280";

    const imgContainer = {
        "display": "flex",
        "margin": "auto",
        "width": "100%",
        "height": "40vh",
        "marginTop": "5vh"

    }
 

    const pageNumber = (e) => {
        setPage(e.target.value)
        
    }

    const pageDrop = () => {
const itemsPerPage = 20;
const itemsFetched = 500;
const totalPage = itemsFetched / itemsPerPage;
const listDrop = document.getElementById("myPages");
if(listDrop.innerHtml == ""){
    for (let i=1; i <=totalPage; i++){

        const node = document.createElement("option")
        node.setAttribute("value", i)
        node.innerText = "Page" + i;
        console.log("clicked")
        listDrop.appendChild(node)
    }
}

    }





    const movieList ={
        "textAlign": "center"
    }

   
    


       
  return <div className='user'>
       
      <h1>MY MOVIES</h1>

      <select id="myPages" value="" onChange={pageNumber} onClick={pageDrop} >
           <option value=""></option>
       </select>
     

      {loading ? "Loading posts..." : 
          <div className="postlist">
          {posts.map(({title, overview, id, poster_path}) => {
          return (
                <div onClick={() => handleRouting(id)} style={movieList} className="post" key={id}>
                    
                    <img src={imgpath + poster_path} style={imgContainer}></img>
                            <h3>{title}</h3>
                </div>
          )
      })}
     
      </div>}
      

     
    

      


   

  </div>
 
};
  

export default User;
