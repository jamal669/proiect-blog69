import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
            src= {require("./pexels-andrea-piacquadio-774909.jpg")} alt=""
            style={{ width: 450, height: 550 }}
            />

            <p>Fortnite is a massive online shooter game developed by Epic Games in 2017.
             It comes in 3 Game Modes : Save the World, Battle Royale and Creative. 
             Battle Royale and Creative are available on Playstation, Xbox, Nintendo Switch and PC.
             The game mode Save the World is only on PC and Console Platforms.</p>

        </div>  
        <div className="sidebarItem"> 
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">LIFE</li>
            <li className="sidebarListItem">FORTNITE</li>
            <li className="sidebarListItem">GTA5</li>
            <li className="sidebarListItem">LIGMA</li>
            <li className="sidebarListItem">SKILL</li>
        </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <i className="topIcon fa-brands fa-tiktok"></i>
        <i className=" sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-reddit"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>


    </div>
</div>
  )
}
