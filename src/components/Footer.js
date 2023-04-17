import{FaLinkedin,FaGithub,FaRegEnvelope,FaPhoneAlt} from 'react-icons/fa'

const Footer =()=>{
    return(
        <div className="footer">
            <div className="footerLogo">
                <h1 className="footerBanner">DK</h1>
            </div>
            <div className="footerIconSection">
                <a className="footerLink" href="https://github.com/Dkapaku"><FaGithub className="footerIcon"/></a>
                <a className="footerLink" href="https://www.linkedin.com/in/dkapaku/"><FaLinkedin className="footerIcon" /></a>
            </div>
            <div className="footerContact">
                <p> <FaRegEnvelope /> : dkapaku1@gmail.com</p>
                <p> <FaPhoneAlt /> : +1 571-499-1929</p>
            </div>
        </div>
    )
}
export default Footer