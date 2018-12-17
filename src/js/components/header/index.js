import React, { Component } from 'react';

class Header extends Component {
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
              <a className="nav-link" href="#"><b>Active</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><b>Link</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Link</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#"><b>Disabled</b></a>
            </li>
          </ul>
        </nav>

        <div className="alert-panel">
          <div className="alert alert-success small mb-0" role="alert">
            Showing rows 0 - 24 (29 total, Query took 0.0006 seconds.)
          </div>

          <div className="alert alert-secondary mb-0" role="alert">
            <code>
              SELECT * FROM `columns_priv`
            </code>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
