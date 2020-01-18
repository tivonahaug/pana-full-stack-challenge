import React from 'react';

export default [
  {
    title: 'Sort the Results',
    subtext: (
      <span>
        The first step is to allow the user to Sort by various criteria. You
        should be able to sort by <strong>Best</strong>,{' '}
        <strong>Price (low)</strong>, <strong>Time of Day (earlier)</strong>.
        We've already built out the dropdown component and hooked it up for you,
        you'll just need to implement the logic that sorts the results when the
        dropdown changes. You're welcome to implement the actual sorting on the
        backend or the frontend.
      </span>
    ),
    criteria: [
      `The flight results come pre-sorted by Best`,
      `Sorting by Best should sort results by the "score" property. The lower the score, the better the flight.`,
      `Sorting by Price (low) should sort results by price in ascending order.`,
      `Sorting by Time of Day should sort results from the earliest departure to the latest departure.`,
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
    title: 'Tests',
    subtext: (
      <span>
        At Pana, all Pull Requests must have at least 50% code coverage before
        we merge them into master, however we aim to get closer to 100%. Using{' '}
        <a href="https://jestjs.io/">Jest</a>, you'll need to write some unit
        tests that prove the functionality you just built out. On both the
        frontend and backend, Jest is configured to pick up any test files that
        live in a <i className="fade">__tests__</i> directory anywhere in the
        project, or any files that end with
        <i className="fade">*.test.js</i>.
        <p>
          Your goal should be to aim for 100% code coverage here - What happens
          if bad data is passed in? How do you think about error handling? What
          happens if the flight data is missing info or is corrupt? What else
          can unit tests help with?
        </p>
      </span>
    ),
    criteria: [
      `Write unit tests for your sorting methods - You should have a unit tests for Sort By Best, Price (low), and Time of Day.`,
      `Write unit tests for any methods that you wrote while writing pagination - For example, you should be able to prove that Previous Page doesn't decrement to negative numbers, etc...`,
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
            Morning should filter results departing between 6:00am and 11:59am.
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
