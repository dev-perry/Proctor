import React from 'react';
import Sidebar from '../frame/Sidebar.jsx';
import '../../styles/pages/Class.css';

function Class() {
  return (<React.Fragment>
    <div className="container-fluid">
      <div className="row">
        <Sidebar/>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Anatomy & Physiology II</h1>
            <div className="btn-group mr-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Course Info</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Attendance Record</button>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <button className="card text-white text-left bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Course Syllabus</h5>
                  <p className="card-text">All you need to know to stay on top of your coursework.</p>
                </div>
              </button>
            </div>
            <div className="col-4">
              <button className="card text-white text-left bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Course Resources</h5>
                  <p className="card-text">Supplementary materials your professor has prepared.</p>
                </div>
              </button>
            </div>
            <div className="col-4">
              <button className="card text-white text-left bg-info mb-3">
                <div className="card-body">
                  <h5 className="card-title">Schedule Meeting</h5>
                  <p className="card-text">Book time to meet with your professor during their office hours.</p>
                </div>
              </button>
            </div>
          </div>

          <div class="jumbotron jumbotron-fluid bg-light">
            <div class="container">
              <h3 className="upcoming-heading">Upcoming</h3>
            </div>

          </div>

        </main>
      </div>
    </div>
  </React.Fragment>)
}

export default Class;
