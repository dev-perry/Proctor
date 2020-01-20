import React from 'react';
import '../../styles/pages/Calendar.css';
import Sidebar from '../frame/Sidebar.jsx';

function Calendar() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <Sidebar/>
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Calendar</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
          <button type="button" className="btn btn-sm btn-outline-secondary">Day</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Week</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Month</button>
        </div>
      </div>
    </div>
    <div className="card bg-light mb-3 calendar-card">
      <div className="card-header card-title">
        <h5>Thursday, January 23</h5>
      </div>
      <div className="list-group">
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Pathophysiology
        </span> Summary of paper by Dr. Rowe</h6></a>
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Endocrinology
        </span> Take Home Exam 3</h6></a>
      </div>
    </div>
    <div className="card bg-light mb-3 calendar-card">
      <div className="card-header card-title">
        <h5>Monday, January 27</h5>
      </div>
      <div className="list-group">
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Statistics
        </span> Analysis of trends in stunted height</h6></a>
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Anatomy & Physiology II
        </span> Extra Credit: Immune Response Case-Study</h6></a>
      </div>
    </div>
    <div className="card bg-light mb-3 calendar-card">
      <div className="card-header card-title">
        <h5>Friday, January 31</h5>
      </div>
      <div className="list-group">
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Pathophysiology
        </span> Assessment of night-time epileptic shocks</h6></a>
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Anatomy & Physiology II
        </span> Extra Credit: Cat Dissection Case Study</h6></a>
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Statistics
        </span> Submit final project here</h6></a>
        <a href=" " className="list-group-item list-group-item-action calendar-list-group-item"><h6><span className="badge badge-secondary">Endocrinology
        </span> Endotext Worksheet</h6></a>
      </div>
    </div>
  </main>
</div>
</div>
</React.Fragment>);
}
export default Calendar;
