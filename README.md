## Pana Full-Stack Code Challenge

### The Challenge

Using the included API server and your code wizardry, the goal is to implement a sample front-end for one of our products, **Pana Flight Search**, using Backbone/Marionette (_or another similar framework_).

### Requirements

### Installation

- Install the project and open `http://localhost:3041/instructions`

- **Client**
  - Located in `/client`
  - `$ npm install`
  - `$ npm run dev` to start the dev server
  - If you want to use a custom build or another framework, just make sure it lives in this directory.
- **API**
  - Located in `/server`
  - `$ npm install`
  - `$ npm start`

Getting an error with the node sass module? See https://github.com/sass/node-sass/issues/2536

#### Core Requirements

- Work through this project according to the instructions located in `views/instructions/layout` (after installing and running the project, the instructions will be the first thing you see).
- Use Backbone/Marionette or another frontend JS framework
  - We have provided a boilerplate Backbone/Marionette project in the client directory (see _installation_ below), however, if you would like to use a different framework (React, Vue, Angular, or even vanilla JS), you're more than welcome to.
  - **If you choose to use a different framework**, you _must_ build out the project in that framework prior to coming in for your in-person code challenge. Part of our goal is to see how you work through problems including fetching from an api, interpreting unfamiliar data, and reasoning about sorting and filter. If your non-Backbone project is not ready to do these things for the code challenge, you'll be asked to complete the challenge in Backbone and Marionette.

### Evaluation

- **JavaScript**
  - Cleanliness and organization of your code
  - Your ability to effectively leverage a framework
  - Appropriate use of known development patterns
- **Fundamentals**
  - Ability to debug someone elses code and make changes
  - Ability to implement sorting and filtering
  - Clear knowledge of Javascript fundamentals and patterns
  - How you take unfamiliar data and understand it
  - How you handle unexpected errors and loading times
- **CSS** _(if you choose to complete any extra credit)_
  - How well you implement your styles including reusability and organization

### Styleguide

- **Colors**
  - Background: #F8FCFF
  - Primary: #1A96FC
  - Secondary: #EE3690
  - Tertiary: #171AB2
  - Quaternary: #FEC61E
  - Quinary: #1BC98E
- **SASS** - All styles use the indented style styntax of SASS (no brackets).
- **Grid System** - We've included a grid system library that is very similar to our internally built grid library. Documentation can be found at `http://flexboxgrid.com/`.
