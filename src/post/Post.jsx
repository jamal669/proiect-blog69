import React from 'react'

export default function Post() {
  return (
    <div className="post">
      <h1 style={{textAlign: "center"}}>Blog Posts</h1>
        <img 
        className="postImg"
        src= {require("./pexels-asia-kaser-6080928.jpg")}
        alt=" "
        style={{ width: 900 , height: 400 }}
        
        />
        
       <div className="postInfo">
        
       
            <hr/>
            <span className="postDate">1 day ago</span>
        </div>
        <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Et explicabo tempora aliquam, nihil id saepe iusto rerum sapiente, 
         nisi recusandae repellat placeat excepturi. Vel, doloribus sunt. 
         Ullam dolore quasi veniam!</p>
    </div>
  )
}
