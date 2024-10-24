'use client'
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About(){
    const [showSkills, setShowSkills] = useState(true);
    return(
        <div>
        <Header/>
        <div className="aboutpage">
            <div>
                <Image src={'/images/ab.jpeg'} alt="pic" width={300} height={100} className="b" />
            </div>
            <div className="about-left">
                <h1 className="abm">About Me</h1>
                <div className="left-p">
                    <p>I am a dedicated frontend web developer with a passion for building engaging user experiences.</p>
                    <p>Currently, I am expanding my skill set by pursuing a certification in Cloud Applied Generative AI</p>
                    <p>Engineering from GIAIC, focusing on cutting-edge AI technologies. I recently completed a important</p>
                    <p>course on TypeScript, enhancing my development proficiency, and I am now diving deeper into the</p>
                    <p>the principles of UI and UX design to create more intuitive and user-friendly interfaces. My expertise</p>
                    <p> bridges technical development and creative design, equipping me to deliver innovative and efficient</p>
                    <p> solutions in web development projects.</p>
                </div>
                <div className="tgl">
                <a  onClick={() => setShowSkills(true)}  className={`prg ${showSkills ? 'active' : ''}`}>Skills</a>
                <a  onClick={() => setShowSkills(false)} className={`prg ${!showSkills ? 'active' : ''}`}>Education</a>
                </div> 
      

      {/* Conditionally show Skills or Education based on the state */}
      {showSkills ? (
        <div id="skills" className="content">
          
          <ul>
            <li>Frontend Development (HTML, CSS, JavaScript, React, Next.js).</li>
            <li>TypeScript.</li>
            <li>JavaScript.</li>
            <li>UI/UX Design.</li>
            <li>Cloud Applied Generative AI Engineering (GIAIC).</li>
            <li>E-Commerce (Shopify).</li>
          </ul>
        </div>
      ) : (
        <div id="education" className="content">
          
          <ul>
            <li>Certified Cloud Applied Generative AI Engineering (GIAIC).</li>
            <li>Completed TypeScript.</li>
            <li>Currently Learning UI/UX Design.</li>
            <li>Matric Completed in 2023</li>
            <li>1st Year Completed in 2024</li>
            <li>Diploma in Civil Engineering (Ongoing)</li>
          </ul>
        </div>
      )}
            </div>
        </div>
        <Footer/>
        </div>
    )
}