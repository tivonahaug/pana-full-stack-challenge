import React from 'react';

export default [
  {
    title: 'Sort the Results',
    subtext: (
      <span>
        The first step is to allow the user to Sort by various criteria. You
        should be able to sort by <strong>Best</strong>,{' '}
        <strong>Price (High)</strong>, and <strong>Price (low)</strong>,
        <strong>Time of Day (earlier)</strong>,{' '}
        <strong>Time of Day (later)</strong>. We've already built out the
        dropdown component for you and hooked it up to a context provider,
        you'll just need to implement the logic that sorts the results when the
        dropdown changes. You're welcome to implement the actual sorting on the
        backend or the frontend.
      </span>
    ),
    criteria: [
      `The flight results come pre-sorted by Best`,
      `Sorting by Best should sort results by the "score" property. The lower the score, the better the flight.`,
      `Sorting by Price (low) should sort results by price in ascending order.`,
      `Sorting by Price (high) should sort results by price in descending order.`,
      `Sorting by Time of Day (earlier) should sort results from the earliest departure to the latest departure.`,
      `Sorting by Time of Day (later) should sort results from the latest departure to the earliest departure.`,
    ],
  },
  {
    title: `Implement Pagination`,
    subtext: (
      <span>
        The next step is to paginate the flight search so that we're not
        rendering too many results at once. The current pagination is hard-coded
        to show 8 results, however you'll want to build a more scalable and
        functional version. Again, you're welcome to implement this feature on
        the frontend or the backend, whichever you prefer.
      </span>
    ),
    criteria: [
      `Each page of results should show only enough flights to fill the page on your current screen size. You should not need to scroll in order to click "Next Page", however these buttons should be close to the bottom of the page still.`,
      `Clicking on the [Previous Page] and [Next Page] buttons should navigate backward and forward a page.`,
      `If the user is already on the first page of results, the Previous Page button should be disabled and should not navigate to a negative page.`,
      `If the user is on the last page of results, the Next Page button should be disabled and should not navigate to an invalid page.`,
      `Between the First Page and Next Page buttons, you should display the current page number and the total page number as "Page X of Y".`,
    ],
  },
  {
    title: 'Filter By Time of Day Presets',
    subtext: (
      <span>
        For this step you will need to add a new dropdown next to the "Sort By"
        field that allows the user to filter results by the time of day. There
        will be four presets that the user can choose from{' '}
        <strong>Morning</strong>, <strong>Afternoon</strong>,{' '}
        <strong>Evening</strong>, and <strong>Red-eye</strong>.
      </span>
    ),
    criteria: [
      `Build a new <Select /> field to the left of the "Sort By" field.`,
      `The initial value of this dropdown should be empty and no flights should be filtered out.`,
      `The <Select /> component should allow the user to select multiple presets to filter on - Meaning if they select Morning and Afternoon, we'll only render flights that depart in the morning or afternoon.`,
      <span>
        <span>The presets should be implemented as follows:</span>
        <ul>
          <li>
            Morning should filter results departing between 6:00am and 11:59am
          </li>
          <li>
            Afternoon should filter results departing between 12:00pm and
            5:59pm.
          </li>
          <li>
            Evening should filter results departing between 6:00pm and 11:59pm.
          </li>
          <li>
            Red-eye should filter results departing between 12:00am and 5:59am.
          </li>
        </ul>
      </span>,
    ],
  },
];
