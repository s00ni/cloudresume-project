import AWSLogo from "../assets/AWS-SAA.png"
import NetLogo from "../assets/Network-Plus.png"
import "../index.css"

function LinkedIcon ({image="string", certurl="string", alttitle="string", width="string", height="string",}) {
    return (
       <div><a href= {certurl} target="_blank" rel="noopener noreferrer">
        <img className = "socialmedia-icon"
            src= {image}
            width= {width}
            height= {height}
            alt = {alttitle}/> </a>
        </div>
    )
}

export default function Certs () {
    return(
        <div className = "resume-block" style={{borderBottom: "#F7F6FB"}} id= "certifications">
        <p className = "heading-underline">CERTIFICATIONS</p>
        <section style={{borderBottom: "#F7F6FB", display: "flex", paddingTop:"2.5rem", paddingBottom: "3rem", gap: "2.5rem"}}>
            <LinkedIcon
                alttitle={"AWS-SAA icon"}
                image={AWSLogo}
                width={"200"}
                height= {"200"}
                certurl={"https://www.credly.com/badges/8f2d977c-1825-47b4-955f-0deb3586f38d/public_url"}
            />
            <LinkedIcon
                alttitle={"CompTia Network+ icon"}
                image={NetLogo}
                width={"215"}
                height={"200"}
                certurl={"https://www.credly.com/badges/ebc8eeaa-6340-4da9-8455-e8fbf43c6de2/public_url"}
            />
        </section>
        </div>
    )
}