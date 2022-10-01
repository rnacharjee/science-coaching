import React from "react";
import { Button, Card } from "react-bootstrap";

import "./Subject.css";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Subject = (props) => {
  const navigate = useNavigate();
  const handleDetailsBtn = (subject) => {
    navigate(`/subjects/${subject}`);
    console.log("btn clicked");
  };
  console.log(props.subject);
  const {
    id,
    tutor,
    tutorImg,
    subjectImg,
    subject,
    tutorProfession,
    tutorLocation,
    courseDuration,
    certificate,
    courseFee,
    tutorInstitution,
  } = props.subject;
  const link = `/subjects/${subject}`;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 rounded">
      <Card className="h-100">
        <Card.Img className="img-fluid" src={subjectImg}></Card.Img>

        <Card.Body className=" bg-dark text-light align-items-end rounded">
          <p className="p-0 m-0 text-warning fs-3 fw-bolder">
            {subject.toUpperCase()}
          </p>

          <p className=" p-0 m-0  fw-bolder">By</p>
          <Card.Text className=" p-0  m-0 text-primary fw-bolder">
            {tutor}
          </Card.Text>
          <Card.Text className="p-0 m-0 text-info">{tutorProfession}</Card.Text>
          <Card.Text className="p-0 m-0">{tutorInstitution}</Card.Text>
          <Card.Text className="p-0 m-0">{tutorLocation}</Card.Text>
          <Button
            className="w-100 m-auto"
            variant="light"
            onClick={() => handleDetailsBtn(subject)}
          >
            {" "}
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Subject;
