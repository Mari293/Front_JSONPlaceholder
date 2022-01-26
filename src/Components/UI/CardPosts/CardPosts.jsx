import React from "react";


export const CardPosts = (infoPost) =>{
    const {userId, id, title, body} = infoPost.infoPost;
    
    return(
        <div className="card" >
            <h3>UserId: {userId}</h3>
            <h3>Id: {id}</h3>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}