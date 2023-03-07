import React from "react";
import SingleCard from "./SingleCard"; // Importing the SingleCard component
import classes from "./CardView.module.css"; // Importing CSS styles

// CardView component receives the data as props
const CardView = ({ data }) => {
  // Renders a container div with a CSS class
  return (
    <div className={classes.container}>
      {/* If data is not empty, map through it and create a SingleCard component for each person */}
      {data &&
        data.map((person, index) => {
          return (
            <SingleCard
              name={person.name}
              occupation={person.occupation}
              age={person.age}
              key={index} // Unique key prop for each SingleCard component
            />
          );
        })}
    </div>
  );
};

export default CardView; // Exporting the CardView component
