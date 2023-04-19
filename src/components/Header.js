import {Link} from "react-router-dom"
const Header=()=>{
    return(
    <div className="headerSpace">
        <Link to="" className="headerLink">
        <h1 className="nameBanner">DK</h1>
        </Link>
    <div className="header">
        <Link to="" className="headerLink">
              <p className="headerLinks">Home</p>
        </Link>
        <Link to="/portfolio" className="headerLink"> 
              <p className="headerLinks">Projects</p>    
        </Link>
        <Link to="/skills" className="headerLink">
              <p className="headerLinks">Skills</p>
        </Link>
    </div>
    </div>
    )
}
export default Header