import React from 'react';
import { useState,useEffect } from 'react';
import { CardPosts } from '../../UI/CardPosts/CardPosts';

export const Main = () => {
    
    const [posts, setPosts] = useState([]);
    
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    
    const FetchPosts=()=> {    
        fetch(URL)
        .then(response => response.json())
        .then(data => setPosts(data));
    }
    
    useEffect(() =>{
        FetchPosts() 
    },[])

    return (
        <div className="cards">   
        {
            posts.map(element=>(
                <CardPosts key={element.id}  infoPost={element} />
            ))
        }
        </div>
    )
}