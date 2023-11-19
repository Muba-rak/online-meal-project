import React, { useRef } from "react";
import { useGlobalContext } from "../hooks/context";
//current

const SearchForm = () => {
  const { searchValue, setSearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputContainer = useRef();
  const searchMeal = () => {
    setSearchValue(inputContainer.current.value);
  };

  return (
    <div className="my-3">
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="search"
          className="form-label text-success fw-bold fs-4 w-100 text-center"
        >
          Search for Your Favorite Meals
        </label>
        <input
          type="text"
          id="search"
          ref={inputContainer}
          onChange={searchMeal}
          className="border border-success w-100 form-control shadow-none bg-success-subtle text-dark fs-5"
        />
      </form>
    </div>
  );
};

export default SearchForm;
