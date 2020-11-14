import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
            <div>
                <br/>
                <div style={{backgroundColor: "#E8A87C"}} >
                    <nav className="nav nav-pills nav-fill">
                        <Link className="nav-link" to="/form">
                            <li className="nav-item" style={{color: "white"}} >New Game</li>
                        </Link>
                    </nav>
                </div>
                <br/>
            </div>
    );
}

export default Header