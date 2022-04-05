import React,{ useState, useEffect, useContext } from "react";
import Axios from 'axios'


const Feed = () =>{
    const [feedPost, setFeedPost] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);



    //show all post
    useEffect (() => {

            Axios.get(`http://localhost:8000/feed/`, {
            }).then((response) => {
                setFeedPost(response.data);
            });
        
    }, []);


    return (
        <div>
            
            <row>
                
            {feedPost.map((val, key) => {
          return (
            <div >
              <div >
                <p >Name: {val.post_name}</p>
            
                <p >postid: {val.post_id}</p>
                <p >description: {val.description}</p>
                <p >location: {val.location}</p>
              </div>
            </div>
          );
        })}
            
            </row>
            </div>
                    )

};

export default Feed;