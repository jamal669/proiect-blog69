import "./topbar.css"

export default function TopBar() {
  return (
  <>
    <div className="top">
      <div className="topLeft"> 
        <i className="topIcon fa-brands fa-tiktok"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-reddit"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="Toplist">
            <li className="topListItem">HOME ABOUT CONTACT WRITE LOGOUT</li>
            
        </ul>
      </div>
      <div className="topRight">
        <img 
          className="topImg"
          src={require("./pexels-fauxels-3183197.jpg")} 
          alt="  " 
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  </>
  )
}