import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
       
          <span><span className="g" style={{"color": "#938eef" , "fontSize" : "25px"}} >G</span>olden <span style={{"color": "#938eef" , "fontSize" : "25px"}}>S</span>ocial</span>
      
        <Link to="/" style={{ textDecoration: "none" }}>
        <HomeOutlinedIcon  />
        </Link>
       
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{cursor:'pointer'}} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} style={{cursor:'pointer'}}/>
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
      <Link to={'/profile/'+currentUser.id }>
      <PersonOutlinedIcon  />
      </Link>
       <Link to="/massnger" >
        <EmailOutlinedIcon /></Link>
        
        <NotificationsOutlinedIcon />
        <div className="user">
        <Link to="/login">
                <button className="new-account-btn">Logout</button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
