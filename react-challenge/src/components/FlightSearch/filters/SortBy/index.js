import React, { useContext } from 'react';
import Select from 'react-select';
import FlightSearchFilter from '../FlightSearchFilter';
import { SortByOptions } from './enums';

export default function FlightSearchSortBy({ value, onChange }) {
  return (
    <FlightSearchFilter>
      <label htmlFor="sortBy">Sort By</label>
      <Select
        name="sortBy"
        value={value}
        onChange={onChange}
        options={SortByOptions}
        styles={{ input: () => ({ width: 150 }) }}
      />
    </FlightSearchFilter>
  );
}
