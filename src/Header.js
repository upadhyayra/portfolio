import React from 'react'
import {Link} from 'react-router-dom';

const Header=()=> {
  return (
    <div>
    <header>
    <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" href="#"><h1 className='text-white'>Portfolio</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                   <i class="bi bi-list text-white fs-1"></i>
                </button>
                <div className="collapse navbar-collapse navbar-right" style={{flexGrow: 0}} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ">
                        <li className="nav-item">
                            <Link className="nav-link active text-white " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="./About">About</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link text-white " to="./Project">Projects</Link>
                        </li>  
                        
                    </ul>

                </div>
            </div>
        </nav>
    </header>
</div>
  )
}

export default Header