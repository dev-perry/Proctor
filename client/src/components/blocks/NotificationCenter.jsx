import React from "react";
import '../../styles/blocks/NotificationCenter.css';


function NotificationCenter(){
  return(
    <div className="card mb-3 border-secondary notification-block">
  <div className="card-header text-white bg-secondary"><h4> Notification Center</h4></div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item text-break"><span className="badge badge-primary">Today at 5:44 pm</span> Professor Gunther updated the assignment <b>Paris movie summary</b></li>
    <li className="list-group-item text-break"><span className="badge badge-secondary">August 23</span> <b>Message:</b> Regarding tomorrow's class trip</li>
    <li className="list-group-item text-break"><span className="badge badge-secondary">September 5</span> Your <b>Mid-term Exam</b> grade has been posted</li>
    <li className="list-group-item text-break"><span className="badge badge-secondary">Septermber 4</span> You have been added to a group for <b>Final Project</b></li>
  </ul>
</div>
  )
}
export default NotificationCenter;
