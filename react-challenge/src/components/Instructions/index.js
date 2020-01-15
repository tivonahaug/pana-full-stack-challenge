import React from 'react';

export default function Instructions() {
  return (
    <div className="row">
      <div className="col-xs-12">
        <h2>Pana Frontend Code Challenge</h2>
      </div>
      <div className="col-xs-12">
        <h3>Overview</h3>
        <b>
          The goal is to finish implementing a sample front-end of one of our
          products, Pana Flight Search.
        </b>
        <p>
          During this challenge, you'll work through several "milestones" that
          have increasing difficulty. Each milestone will test a different part
          of your knowledge of frontend Javascript and React. We've built out
          the basic scaffolding for you, you'll need to build out the rest.
        </p>
      </div>
      <div className="col-xs-12">
        <h3>Milestones</h3>
        <ol>
          <li>
            <h4>Display the Data</h4>
            <ul>
              <li>
                The basic layout is already built out for each flight, you'll
                just need to finish up a few of the "Placeholder" sections. You
                can refer to the following rough mock to see what the end result
                will look like.
              </li>
              <img
                src="/assets/flight_search.png"
                alt=""
                style={{ width: '90%' }}
              />
            </ul>
          </li>
          <li>
            <h4>Implement Pagination</h4>
            <ul>
              <li></li>
            </ul>
          </li>
          <li>
            <h4>Implement Sorting</h4>
            <ul>
              <li></li>
            </ul>
          </li>
          <li>
            <h4>Implement Airlines Filtering</h4>
            <ul>
              <li></li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
