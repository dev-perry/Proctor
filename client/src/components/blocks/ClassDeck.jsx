import React from "react";
import '../../styles/blocks/ClassDeck.css';

function ClassDeck(){
  return(
    <div className="row">
      <div className="col">
        <div className="card bg-light border-secondary class-card">
          <div className="card-body">
            <h5 className="card-title">Anatomy & Physiology</h5>
            <p className="card-text">Dr. Anthony Russo</p>
          </div>
        </div>
        <div className="card bg-light border-secondary class-card">
          <div className="card-body">
            <h5 className="card-title">Endocrinology</h5>
            <p className="card-text">Dr. Christina McKittrick</p>
          </div>
        </div>
        <div className="card bg-light border-secondary class-card">
          <div className="card-body">
            <h5 className="card-title">Pathophysiology</h5>
            <p className="card-text">Dr. Anthony Russo</p>
          </div>
        </div>
        <div className="card bg-light border-secondary class-card">
          <div className="card-body">
            <h5 className="card-title">Statistics</h5>
            <p className="card-text">Dr. Steven Kass</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default ClassDeck;
