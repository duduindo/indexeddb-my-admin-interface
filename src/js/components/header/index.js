import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  getLinkActive(pathname) {
    const { location } = this.props;
    const isLinkActive = location.pathname.includes(pathname);

    return (isLinkActive) ? 'nav-link active' : 'nav-link';
  }

  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb small mb-0">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>

        <nav>
          <ul className="nav mb-3 small nav-bar">
            <li className="nav-item">
              <Link to={{ pathname: '/databases' }} className={ this.getLinkActive('databases') } replace>
                <b>Databases</b>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Link</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Link</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#"><b>Disabled</b></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
