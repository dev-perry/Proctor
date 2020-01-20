import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar(){
  return(
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Dashboard
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calendar">
              Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/grades">
              Grades
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>My Classes</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="/class">
              Anatomy & Physiology II
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Endocrinology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Pathophysiology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Statistics
            </a>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Tools</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Meetings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Directory
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Registrar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Institution Site
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
