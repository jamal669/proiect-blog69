import React from 'react';
export default function header() {
  return (
    <div className="header">

        <div className="headerTitles">
          <span className="headerTitleSm"><h2 style={{textAlign: "center"}}>React & Node</h2></span>
          <span className="headerTitleLg"><h1 style={{textAlign: "center"}}>Blog</h1></span>
        </div>

           <img 
            className="imagine"
           src= {require("./pexels-jahoo-clouseau-388415.jpg")} 
           alt=" "
           style={{ width: 1500, height: 550 }}
           
      

        />
          
       
       
    </div>
  )
}
