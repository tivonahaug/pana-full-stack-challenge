import React, { useContext } from 'react';
import Select from 'react-select';
import FilterContext from '../FilterContext';
import FlightSearchFilter from '../FlightSearchFilter';
import { SortByOptions, SortByEnum } from './enums';

export default function FlightSearchSortBy() {
  const { sortBy, setSortBy } = useContext(FilterContext);

  return (
    <FlightSearchFilter>
      <label htmlFor="sortBy">Sort By</label>
      <Select
        name="sortBy"
        styles={{ input: () => ({ width: 150 }) }}
        value={sortBy}
        onChange={setSortBy}
        options={SortByOptions}
      />
    </FlightSearchFilter>
  );
}
