import './footer.css'

export default function Footer(){

    return(
        
        <>
            <footer className="footer">
                <div>
                <div>
                        <a href="https://github.com/MJ-Eng-codes" className="icons">
                            <i className="fa-brands fa-github-alt fa-3x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mj-yen-eng/" className="icons">
                            <i className="fa-brands fa-linkedin fa-3x"></i>
                        </a>
                        <a href="http://discordapp.com/users/479696785804230666" className="icons">
                            <i className="fa-brands fa-discord fa-3x"></i>
                        </a>
                        <a href="mailto:swan-yen.eng@chasacademy.se" className="icons">
                            <i className="fa-regular fa-envelope fa-3x"></i>
                        </a>
                </div>
                <br />

                    <div className="footer-text">
                    <p><span>©</span>2025 MJ (Yen) Eng. All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        
        </>

    )
}