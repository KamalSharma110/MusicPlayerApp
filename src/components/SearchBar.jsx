import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const ref = useRef();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    history.push(`/search/${ref.current.value}`);
  };

  return (
    <form className={`col-12 ${classes.form}`} onSubmit={submitHandler}>
      <label htmlFor="search">
        <i className="bi bi-search"></i>
      </label>
      <input type="text" id="search" placeholder="Search" autoComplete="off" ref={ref} />
    </form>
  );
};

export default SearchBar;
