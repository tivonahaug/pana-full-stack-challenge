## Pana Full-Stack Code Challenge

### The Challenge

Using the included API server and your code wizardry, the goal is to implement a sample front-end for one of our products, **Pana Flight Search**, using Backbone/Marionette (_or another similar framework_). Based on the provided screenshots, you will need to implement the basic layout including sorting and filtering.

### Requirements

#### Core Requirements

- Query the API (and handle loading/erroring eloquently)
  - Your frontend should make a call to the provided API to query search results. For simplicity, the results will always be the same.
  - The API has a throttled api connection, so it could take 1 second or 4 seconds to return results.
  - The API has a random chance of failing (returning 500), make sure you handle any error states eloquently.
- Display the data according to the mocks
  - [Flight Search Design](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/flight_search.png)
- Implement filtering and sorting
  - [Layover Filter Dropdown](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/stops_filter.png)
  - [Sort By Dropdown (Mockup 1)](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/sort_by.png)
  - [Sort By Dropdown (Mockup 2)](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/sort_by_2.png)
- Use Backbone/Marionette or another frontend JS framework
  - We have provided a boilerplate Backbone/Marionette project in the client directory (see _installation_ below), however, if you would like to use a different framework (React, Vue, Angular, or even vanilla JS), you're more than welcome to. We'll be judging on your ability to take designs, specifications, and data to create something usable—not your knowledge of Backbone and Marionette.

#### Extra Credit

- To meet the core requirements of this project, you only need to develop the UI for selecting the first "leg" of the flight (a round-trip flight has an outbound and a return "leg"). There is an endpoint for fetching all available return flights for a given outbound flight. You can try implementing selection of first the outbound and then the return.
- [Implement Airline Filtering](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/airlines_filter.png)
- [Implement Time-Based Filtering](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/flight_times_filter.png)
- Make it mobile friendly! (We didn't provide any mocks for this, so use your imagination!)
- A check-out page. (Again, no mocks, but we're curious what you would include.)
- There's no security, so anyone can use your new app! Try to implement some sort of authentication or authorization.

### Evaluation

- **CSS**
  - How well you implement your styles including reusability and organization
  - We're looking for an implementation that is as close to the screenshots as possible
- **JavaScript**
  - Cleanliness and organization of your code
  - Your ability to effectively leverage a framework
  - Appropriate use of known development patterns
- **Fundamentals**
  - Grasp on the languages you're using
  - Sorting and filtering
  - How you handle unexpected errors and loading times
  - How you take unfamiliar data and understand it

### Installation

- **Client**
  - Located in `/client`
  - `$ npm install`
  - `$ npm run dev` to start the dev server
  - If you want to use a custom build or another framework, just make sure it lives in this directory.
- **API**
  - Located in `/server`
  - `$ npm install`
  - `$ npm start`

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

### Submission

When you're finished, zip the directory (excluding the node_modules) and email it to devon@pana.com. Please do not create a public repository with your solution, as we'd like to discourage others from using your code. 😁

With your submission, please include the approximate number of hours you spent working on this. Additionally, if you have any feedback for us about how the process went, we'd love to hear it! We're always looking to imrpove.

### Find a bug?

Bugs are a great way to earn bonus points! You can either create a Pull Request with a suggested fix or email engineers@pana.com with the bug, a suggested fix, and the subject line `Code Challenge Bug Report`.
