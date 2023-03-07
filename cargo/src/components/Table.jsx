// Importing necessary modules
import React, { useEffect, useState } from "react";
import classes from "./Table.module.css";

// Creating Table component
function Table({ data, searchValue, sortBy, setSortBy }) {
  // Defining states
  const [filterdata, setfilterData] = useState([]);
  const [sorted, setSorted] = useState();

  // UseEffect Hook with dependencies to execute when they change
  useEffect(() => {
    // When a search is made
    if (searchValue) {
      // Reset sortBy and filter the data
      setSortBy("");
      setfilterData((prev) => {
        return data.filter((person) => {
          return person.name.toLowerCase().includes(searchValue);
        });
      });
    } else {
      // When no search is made
      setfilterData((preData) => {
        setSorted(false);
        if (sortBy === "sort") {
          // If the data is being sorted
          filterdata.sort((a, b) => {
            const nameAndage1 = a.name + " " + a.age;
            const nameAndage2 = b.name + " " + b.age;
            if (nameAndage1 > nameAndage2) {
              return 1;
            } else if (nameAndage1 === nameAndage2) {
              return 0;
            } else {
              return -1;
            }
          });
          setSorted(true);
          return filterdata;
        }
        // If data is not being sorted
        return [...data];
      });
    }
  }, [data, searchValue, sortBy]); // Dependencies array

  // Return JSX
  return (
    <>
      {/* Conditional rendering based on searchValue */}
      {searchValue && (
        <p className={classes.msg}>You are viewing filtered results!</p>
      )}
      {/* Creating the table */}
      <table className={classes.containerTable}>
        <thead className={classes.tableHead}>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {/* Mapping through filterdata array */}
          {filterdata.map((person, index) => {
            return (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.occupation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// Exporting Table component
export default Table;
