import React from 'react';
import config from './challenge.config';
import ChallengeCriteria from './ChallengeCriteria';

export default function Instructions() {
  return (
    <div
      className="row"
      style={{ maxWidth: '1000px', display: 'flex', justifyContent: 'center' }}
    >
      <div className="col-xs-12 m-b-1">
        <h1 className="m-b-0">Pana Fullstack Code Challenge</h1>
      </div>
      <div className="col-xs-12 m-t-1">
        <h2>Overview</h2>
        <p>
          The goal of this challenge is to implement usable version of one of
          our products, Pana Flight Search. During this interview, you'll work
          through several challenges that will improve the functionality and
          user experience of Flight Search. Your goal should be to implement the
          challenge crtieria thoughtfully and completely.
        </p>
      </div>
      <div className="col-xs-12 m-t-1">
        <h2>Preface</h2>
        <h4>Definition of Done</h4>
        <p>
          Don't worry about completing all of the following challenges in the
          alloted time. We've intentionally added a lot of challenge steps to
          accommodation different skill levels.
        </p>
        <h4>Be Vocal</h4>
        <p>
          Please talk through your thought process as you're coding, explain
          your decisions, and walk us through how you're implementing various
          parts of the challenge. We want to know what you're thinking.
        </p>
        <h4>React Hooks vs Class Components</h4>
        <p>
          We've written this challenge using React's hooks API, however if
          you're unfamiliar with hooks or prefer writing class components, feel
          free to take the first few minutes of the interview converting the
          fetch functionality to a <i className="fade">class</i>.
        </p>
        <h4>Documentation</h4>
        <ul>
          <li>
            <a href="https://github.com/JedWatson/react-select">
              React {'<Select />'} (dropdown component)
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>
          </li>
          <li>
            <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">
              React Hooks with Context
            </a>
          </li>
          <li>
            <a href="https://momentjs.com/docs/">Moment</a>
          </li>
          <li>
            <a href="https://jestjs.io/">Jest Unit Tests</a>
          </li>
          <li>
            Feel free to Google Search anything else you may need, this is not a
            memory challenge.
          </li>
        </ul>
      </div>
      <div className="col-xs-12 m-t-2">
        <h2 className="m-b-1">The Challenge</h2>
        <ol>
          {config.map((challenge, index) => (
            <ChallengeCriteria key={`challenge-${index}`} {...challenge} />
          ))}
        </ol>
      </div>
    </div>
  );
}
