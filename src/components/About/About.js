import React from "react";

const About = () => {
  return (
    <div className="container bg-light">
      <div className=" m-4 p-4 d-flex justify-content-center flex-column align-items-center">
        <h1 className="m-4 text-primary">About Science Coaching</h1>
        <h5 className="m-4">
          Science Coaching is a digital learning platform. We provide world
          class education. Our mentors are from worlds top scientists or
          teachers. With Science Coaching you will receive a true quality
          education at affordable price
        </h5>
      </div>
      <div className=" m-4 p-4 d-flex justify-content-center flex-column align-items-center">
        <h2 className="text-primary">Available Courses</h2>
        <div className="text-secondary">
          <h5>1. Physics</h5>
          <h5>2. Chemistry</h5>
          <h5>3. Biology</h5>
          <h5>4. Computer Science</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
