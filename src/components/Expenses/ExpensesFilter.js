import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterYears = [2019, 2020, 2021, 2022];
  const filterOptions = filterYears.map((yr, i) => (
    <option key={i} value={yr}>
      {yr}
    </option>
  ));

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {filterOptions}
          {/* <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option> */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
