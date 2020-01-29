 import React from 'react';
import '../../styles/pages/Dashboard.css';
import NotificationCenter from '../blocks/NotificationCenter.jsx';
import DueToday from '../blocks/DueToday.jsx';
import ClassDeck from '../blocks/ClassDeck.jsx';

function Dashboard(props) {
  return (
  <React.Fragment>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-8">
              <NotificationCenter/>
            </div>
            <div className="col-4">
              <DueToday/>
            </div>
          </div>
          <ClassDeck userID={props.userID}/>
        </main>
  </React.Fragment>)
}
export default Dashboard;
