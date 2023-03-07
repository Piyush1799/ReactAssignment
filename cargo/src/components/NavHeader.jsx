import React from "react";
import classes from "./NavHeader.module.css"; // imports the module containing the styles for the component

const NavHeader = ({ pagehandler }) => {
  const cardHandler = () => {
    pagehandler(true); // handles click event for card view button and sets pagehandler function with a value of true
  };
  const tableHandler = () => {
    pagehandler(false); // handles click event for table button and sets pagehandler function with a value of false
  };
  return (
    <nav className={classes.mainnav}>
      {" "}
      {/*creates a nav element with a class name of "mainnav"*/}
      <ul>
        {" "}
        {/*creates an unordered list inside the nav element*/}
        <li onClick={tableHandler}>Table</li>
        {/*creates a list item for the table button and handles click event for it*/}
        <li onClick={cardHandler}>Card View</li>
        {/*creates a list item for the card view button and handles click event for it*/}
      </ul>
    </nav>
  );
};

export default NavHeader; // exports the NavHeader component as the default export
