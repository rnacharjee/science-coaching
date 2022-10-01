import React, { useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./SubDetail.css";

const SubDetail = () => {
  const { subject } = useParams();

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [tutor, setTutor] = useState([]);

  useEffect(() => {
    fetch("../../subjectdata.json")
      .then((res) => res.json())
      .then((data) => {
        const questions = data.filter((sub) => sub.subject === subject);
        setSelectedQuestions(questions);
      });
  }, [subject]);
  useEffect(() => {
    fetch("../../fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedTutor = data.filter((tutor) => tutor.subject === subject);
        setTutor(selectedTutor);
        console.log(selectedTutor);
      });
  }, [subject]);

  console.log(tutor);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 py-1 px-2 tutor-details">
          <div className="row">
            <img
              className=" col-md-6 mx-auto rounded-circle"
              src={tutor[0]?.tutorImg}
              alt={tutor[0]?.tutor}
            />
          </div>
          <h3 className="fw-bolder text-danger">
            {tutor[0]?.subject.toUpperCase()}
          </h3>
          <h5>Mentor</h5>
          <h3 className="fw-bolder">{tutor[0]?.tutor}</h3>
          <p className="fst-italic text-secondary">
            {tutor[0]?.tutor} is a {tutor[0]?.tutorProfession} at{" "}
            {tutor[0]?.tutorInstitution}. Currently he resides in{" "}
            {tutor[0]?.tutorLocation}.
          </p>
          <h4>Course Duration: {tutor[0]?.courseDuration}</h4>
          <h6>Certificate: {tutor[0]?.certificate.toUpperCase()}</h6>
          <h4>Course Fee: ${tutor[0]?.courseFee}</h4>
          <Button className="my-2">Enroll Now</Button>
        </div>
        <div className="col-md-6 px-2 py-1 questions">
          <h4>Sample Questions</h4>
          {selectedQuestions.map((question) => {
            return (
              <Accordion>
                <Accordion.Item eventKey={question.id}>
                  <Accordion.Header>
                    Question: -{question.question}
                  </Accordion.Header>
                  <Accordion.Body className="bg-dark text-light">
                    Answer: -{question.answer}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubDetail;
