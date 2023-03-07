import React from "react";
import classes from "./SingleCard.module.css"; // import css modules
import person from "../images/person.jpg"; // import image

const SingleCard = ({ name, occupation, age }) => {
  // define functional component SingleCard
  return (
    <div className={classes.container}>
      {" "}
      {/* render container with class name from css module*/}
      <div className={classes.img}></div>
      {/* render div for image with class name from css module */}
      <h1>{name}</h1> {/* render name */}
      <h3>{occupation}</h3> {/* render occupation */}
      <div className={classes.age}>{`${age} years`}</div>{" "}
      {/* render age with class name from css module */}
    </div>
  );
};

export default SingleCard; // export SingleCard component as default
