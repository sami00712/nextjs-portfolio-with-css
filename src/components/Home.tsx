'use client'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';

export default function Home(){
    return(
      <div>  
      <div className='hero'>
        <div>
            <div className='type'>
              <Typewriter 
               options={{
               strings: ['Hello, My name is Muhammad Sami', ' I am Frontend Web-Developer','I am Next Js Developer.'],
               autoStart: true,
               loop: true,
               }}
              />
            </div>
            <div className='bio'>
                <p>I am a dedicated frontend web developer with a passion for building engaging user experiences.</p>
                <p>Currently, I am expanding my skill set by pursuing a certification in Cloud Applied Generative AI</p>
                <p>Engineering from GIAIC, focusing on cutting-edge AI technologies. I recently completed a comprehensive</p>
                <p>course on TypeScript, enhancing my development proficiency, and I am now diving deeper into the</p>
                <p>the principles of UI and UX design to create more intuitive and user-friendly interfaces. My expertise</p>
                <p> bridges technical development and creative design, equipping me to deliver innovative and efficient</p>
                <p> solutions in web development projects.</p>
                <div className='btn'>
                <Link href={''} className='hire'>Hire me</Link>
                <Link href={''} className='abt'>About me</Link>
                </div>
            </div>  

        </div>
        <div className='profile'>
          <Image src={'/images/profile.jpeg'} alt='profile' width={300} height={100}/>
        </div>
        
      </div>
      <Footer/>
      </div>
    )
}