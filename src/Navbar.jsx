import React from 'react';
import logo from "./img/logo.png"
import { Leftdiv, LiAtag, Litag, NavBar, Rightdiv, Ultag } from "./GlobalCSS"

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="container">
                <NavBar>
                    <Leftdiv>
                        <div className="nav__logo">
                            <img src={logo}></img>
                        </div>
                    </Leftdiv>
                    <Rightdiv>
                        <Ultag>
                            <Litag><LiAtag>Home</LiAtag></Litag>
                            <Litag><LiAtag>Services</LiAtag></Litag>
                            <Litag><LiAtag>Contact Us</LiAtag></Litag>
                            <Litag><LiAtag>About US</LiAtag></Litag>
                        </Ultag>
                    </Rightdiv>
                </NavBar>
            </div>



        </div>
    );
};

export default Navbar;