import React from "react";
import courses from "../data/data";
const Courses = () => {
  return (
    <div className="coursesWrapper">
      <h1>Our Courses</h1>
      <div className="iconWrapper">
        {courses.map((course) => {
          const { id, name, text, img } = course;
          return (
            <div className="card" key={id}>
              <img src={img} alt="img" />
              <div>
                <h5>{name}</h5>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
