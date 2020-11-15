import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
            <div>
                <div className="navbar" style={{backgroundColor: "#ef838b"}} >
                    <nav className="nav nav-pills nav-fill">
                        <Link className="nav-link" to="/friendlies">
                            <li className="nav-item" style={{color: "white"}} >Home</li>
                        </Link>
                        {/* <Link className="nav-link" to="/bracket">
                            <li className="nav-item" style={{color: "white"}} >Bracket</li>
                        </Link>
                        <Link className="nav-link" to="/bracket">
                            <li className="nav-item" style={{color: "white"}} >Scoreboard</li>
                        </Link> */}
                    </nav>
                </div>
            </div>
    );
}

export default Header