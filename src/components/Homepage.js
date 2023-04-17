import {AboutMe} from "./index.js"
import {FaCaretRight} from "react-icons/fa"
const Homepage = () => {
    return (
      <div className="fade-in">
        <div className="parallax" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}>
          <div className="profileContainer">
            <h1 className="nameText fade-in-text">David Kapaku</h1>
            <h3 className="jobText fade-in-text">Fullstack Developer</h3>
            <div className="resume fade-in-text">
                <h1>Resume</h1>
                <a className="resumeLink"href="https://docs.google.com/document/d/1fI8P0qf7isHIfBU-tHohhx2ScJ3oNj5rprLHDObMzVU/edit?usp=sharing" target="_blank"><FaCaretRight />  Click Here!</a>
            </div>
          </div>
        </div>
        <AboutMe />
      </div>
    )
  }
  
export default Homepage