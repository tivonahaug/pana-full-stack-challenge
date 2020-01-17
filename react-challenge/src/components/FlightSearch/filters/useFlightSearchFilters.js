import { useState } from 'react';
import { SortByOptions } from './SortBy/enums';

/**
 * This file serves as the FilterContext interface - Here you can
 * set up getters and setters for the various filters/sorting dropdowns
 *
 * This file should only be consumed once where the Context.Provider is
 * created - If you need access to the values from this file, you should
 * access them as a Consumer via useContext
 *
 * e.g.
 *
 * const { sortBy } = useContext(FilterContext);
 * console.log(sortBy.value) => 'BEST'
 */
const useFlightSearchFilters = () => {
  const [sortBy, setSortBy] = useState(SortByOptions[0]);
  // Other filter states

  return {
    sortBy,
    setSortBy,
  };
};

export default useFlightSearchFilters;
