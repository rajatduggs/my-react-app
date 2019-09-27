import React from 'react';

function Header() {
    return (

            <nav className="navbar navbar-light bg-light navbar-expand-lg">

                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">  
                    <a href="#" class="nav-link">ABOUT ME</a>
                    </li>
                    <li className="navbar-item">  
                    <a href="#" class="nav-link">SKILL</a>
                    </li>
                    <li className="navbar-item">  
                    <a href="#" class="nav-link">EDUCATION</a>
                    </li>
                    <li className="navbar-item">  
                    <a href="#" class="nav-link">SERVICES</a>
                    </li>
                    <li className="navbar-item"> 
                    <a href="#" class="nav-link">PORTFOLIO</a>
                    </li>
                    <li className="navbar-item"> 
                    <a href="#" class="nav-link">CONTACT</a>
                    </li>
                </ul>
            </nav>

    );
}


export default Header
