import Link from "next/link";
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin} from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="footer">
            <div className="li">
                <div className="h1">
                    <h1><span className="logo">S</span>ami <span className="ext">.</span></h1>
                </div>
                <div className="icons">
                    <Link href={''}><FaFacebook width={30} className="iconf"/></Link>
                    <Link href={''}><FaGithub width={30} className="icong"/></Link>
                    <Link href={''}><FaYoutube width={30} className="icony"/></Link>
                    <Link href={''}><FaLinkedin width={30} className="iconl"/></Link>
                </div>
            </div>
            <div className="foot">
                <div className="var">
                    <div className="cont">
                        <h3>Pages</h3>
                        <Link href={""}>Home</Link>
                        <Link href={""}>About</Link>
                        <Link href={""}>Contact</Link>
                    </div>
                    <div className="cont">
                        <h3>Home</h3>
                        <Link href={""}>About me</Link>
                        <Link href={""}>Profile Pic</Link>
                        <Link href={""}>Hire me</Link>
                    </div>
                    <div className="cont">
                        <h3>About</h3>
                        <Link href={""}>About me</Link>
                        <Link href={""}>Profile Pic</Link>
                        <Link href={""}>Skills</Link>
                    </div>
                    <div className="cont">
                        <h3>Contact</h3>
                        <Link href={""}>Contact form</Link>
                        <Link href={""}>Profile Pic</Link>
                        <Link href={""}>Social links</Link>
                    </div>
                </div>
                <div className="side">
                    <div className="mt">
                     <p className="mail">✉</p>
                     <input type="email" placeholder="Enter your Email Here..." className="input" />
                   </div>
                    <button className="sub">Subscribe</button>
                </div>
            </div>
            <div className="lin"></div>
            <p className="cpy">Copyright © Sami. All Rights ® Reserved.</p>
        </div>
    )
}