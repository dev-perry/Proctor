import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import '../../styles/pages/Grades.css';


function Grades() {
  return (
    <React.Fragment>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Grades</h1>
            </div>
            <Accordion defaultActiveKey="0">
          <Card>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                <h4>Anatomy & Physiology II</h4>
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <div className="list-group">
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                </div>
            </Accordion.Collapse>
          </Card>
          <Card>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                <h4>Endocrinology</h4>
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <div className="list-group">
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                </div>
            </Accordion.Collapse>
          </Card>
          <Card>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                <h4>Pathophysiology</h4>
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
                <div className="list-group">
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                </div>
            </Accordion.Collapse>
          </Card>
          <Card>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                <h4>Statistics</h4>
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <div className="list-group">
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                  <li className="list-group-item text-break glist-item"><span className="badge badge-secondary">Example Date</span> <b>Assignment Name Info <span className="grade-data">Points earned: 15 Points possible: 20 Grade: 75% Weight: 25%</span></b></li>
                </div>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </main>
    </React.Fragment>
    )
}
export default Grades;
