import React from "react";
import '../../styles/blocks/DueToday.css';

function DueToday(){
  return(
    <div className="card text-white bg-dark mb-3 duetoday-block">
  <div className="card-header"><h4>DUE THIS WEEK</h4></div>
  <ul className="list-group list-group-flush list-group-item-dark">
    <li className="list-group-item"><span className="badge badge-info badge-pill">3</span> Anatomy & Physiology</li>
    <li className="list-group-item"><span className="badge badge-info badge-pill">2</span> Endocrinology</li>
    <li className="list-group-item"><span className="badge badge-info badge-pill">0</span> Pathophysiology</li>
    <li className="list-group-item"><span className="badge badge-info badge-pill">2</span> Statistics</li>
  </ul>

</div>
);
}

export default DueToday;
