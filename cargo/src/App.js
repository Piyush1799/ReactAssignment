// Importing necessary modules and components
import { useEffect, useState } from "react";
import Table from "./components/Table";
import classes from "./App.module.css";
import LoginDetails from "./components/LoginDetails";
import NavHeader from "./components/NavHeader";
import CardView from "./components/CardView";

function App() {
  // Setting initial states using useState
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [page, setPage] = useState(false);

  // Fetching data from API using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://coralmango.com/api/react-test");
        const resData = await response.json();
        setData([...resData]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  // Handler function for search value
  const onSearchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  // Handler function for dropdown change
  const dropdownChangeHandler = (event) => {
    setSortBy((prevValue) => event.target.value);
  };

  // Handler function for login
  const onLoggedInHandler = () => {
    setIsLoggedin(true);
  };

  // Handler function for page toggle
  const pagehandler = (toggle) => {
    setSortBy("");
    setPage(toggle);
  };

  // App Component JSX code
  return (
    <>
      {/* Checking if user is not logged in, showing LoginDetails component */}

      {!isLoggedin && <LoginDetails onLoggedInHandler={onLoggedInHandler} />}
      {/* If user is logged in, showing other components */}
      {isLoggedin && (
        <main className={classes.container}>
          <NavHeader pagehandler={pagehandler} />
          {/* Input field for searching */}
          <input
            type="text"
            placeholder="search"
            onChange={onSearchValueHandler}
            className={classes.searchField}
          />
          {/* Filter section for sorting */}
          <div className={classes.filter}>
            <label>Sort By Name and Age</label>
            <select value={sortBy} onChange={dropdownChangeHandler}>
              <option value="default">Default</option>
              <option value="sort">Sorted</option>
            </select>
          </div>

          {/* Checking if page is set to table, showing Table component */}
          {!page && (
            <Table
              data={data}
              searchValue={searchValue}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          )}
          {/* Checking if page is set to card, showing CardView component */}
          {page && <CardView data={data} />}
        </main>
      )}
    </>
  );
}

// Exporting App component as default
export default App;
