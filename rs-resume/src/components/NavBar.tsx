import Logo from "../assets/RACHEL SOON.svg"

export default function Navbar() {
    return (
        <div className= "site-nav">
            <div className="nav-wrapper">
                <div><a href="#top"><img src={Logo} alt="Rachel Soon Logo"/></a></div>
                <div>
                    <nav style={{gap: "2rem", display: "flex", fontSize: "16px", fontWeight: "50"}}>
                        <p><a href="#experience">EXPERIENCE</a></p>
                        <p><a href="#education">EDUCATION</a></p>
                        <p><a href="#skills">SKILLS</a></p>
                        <p><a href="#certifications">CERTIFICATIONS</a></p>
                    </nav>
                </div>
            </div>
        </div>
    )
}

