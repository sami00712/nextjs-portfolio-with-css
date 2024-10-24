import Link from "next/link"


export default function Header(){
    return(
        <div>
        <div className="body">
            <div>
            <h1 className="h1"><span className="logo">S</span>ami<span className="ext"> .</span></h1>
            </div>
            <div>
                <Link href={"/"} className="home">Home</Link>
                <Link href={"/about"} className="about">About</Link>
                <Link href={"/contact"} className="contact">Contact</Link>
            </div>

        </div>
        <div className="line"></div>
        </div>
    )
  }