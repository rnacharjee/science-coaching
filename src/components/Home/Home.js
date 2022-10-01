import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import Subject from "../Subject/Subject";
import "./Home.css";

const Home = () => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);
  console.log(subjects);
  return (
    <div className="container ">
      <div className="row g-2 p-2 bg-dark mb-3 rounded">
        <div className="col-md-6 col-sm-12">
          <h1 className="display-4 fw-bold text-light">
            Welcome to Science Coaching
          </h1>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            className="w-100 rounded"
            src="https://www.ei-ie.org/image/Tlnu8GyoQNUIeCnfkxx8TVnwFrhyaczaEBBCmMU6.jpg/lead.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row g-2">
        <h2>Courses</h2>
        {subjects.map((subject) => (
          <Subject subject={subject}></Subject>
        ))}
      </div>
    </div>
  );
};

export default Home;
