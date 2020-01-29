import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

function CourseInfo(props){
 const [info] = useState(props.info)
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{props.buttonLabel}</Button> */}
      <Modal isOpen={props.modal} unmountOnClose={true}>
        <ModalHeader toggle={props.modalShow}>Course Info</ModalHeader>
        <ModalBody>
        <p><b>Catalog Name:</b> {info.catalog_name}</p>
        <p><b>Registration Number:</b> {info.course_id}</p>
        {info.instructor.map((element, index) => {
          return (
            <p key={index}><b>Instructor:</b> {element.fname} {element.lname} / <a href={"mailto:" + element.username}>{element.username}</a> </p>
          )
        })}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CourseInfo;
