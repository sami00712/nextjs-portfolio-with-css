
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdEmail } from 'react-icons/md';   // Material Design Icon
import { FiPhone } from 'react-icons/fi';   // Feather Icon
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Contact(){
    return(
        <div>
          <Header/>  
            <div className="ctn">
                <div className="next">
                    <h1 className="ctnh1">Contact Us</h1>
                    <p className="ctnp2">I am a dedicated frontend web developer</p>
                    <p className="ctnp2"> with a passion for building engaging user </p>
                    <p className="ctnp2">Currently, I am expanding my skill . </p>
                    <div className="ctn4">
                        <MdEmail className="ctni3"/>
                        <p>samiqaimkhani43@gmail.com</p>
                    </div>
                    <div className="ctn4">
                        <FiPhone className="ctni3"/>
                        <p>+92 333 3739199</p>
                        
                    </div>
                    <div className="icons">
                         <Link href={''}><FaFacebook  className="iconf"/></Link>
                         <Link href={''}><FaGithub className="icong"/></Link>
                         <Link href={''}><FaYoutube  className="icony"/></Link>
                         <Link href={''}><FaLinkedin  className="iconl"/></Link>
                        </div>
                </div>
                <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
            </div>
           <Footer/> 
        </div>
    )
}