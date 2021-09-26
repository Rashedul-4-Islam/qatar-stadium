import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div>
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand qatar-stadium" href="/buildings">Qatar Stadium</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/site">Tournaments</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/site">Future Stadiums</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-warning" type="submit">Search</button>
              </form>
            </div>
          </div>
         </nav>
          </div>
          <div className="w-50 budget">
            <h2>Qatar Stadium</h2>
            <h3>Total Budget: $32.50 Billion</h3>
          </div>
        </div>
    );
};

export default Header;