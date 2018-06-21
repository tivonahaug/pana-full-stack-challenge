## Pana Full Stack Code Challenge

### The Challenge
  - Using the included api server and your code wizardry, implement our newest product **Pana Flight Search** using Backbone/Marionette. Based on the provided screenshots, you will need to implement the basic layout including sorting and filtering.

### Requirements
- ##### Core Requirements
  - Query the API and handle loading/erroring eloquently
    - Your frontend should make a call to the provide API to query search results. For simplicity, the results will always be the same.
    - The API has a throttled api connection, so it could take 1 second or 10 seconds to return results.
    - The API has a random chance of failing (returning 500), make sure you handle any error states eloquently.
  - Display the data according to the mocks
    - Flight Search Design **LINK**
  - Implement filtering and sorting
    - Layover Filter Dropdown **LINK**
    - Airlines Filter Dropdown **LINK**
    - Sort by Dropdown **LINK**
  - Use Backbone/Marionette or another frontend JS framework
    - We have provided a boilerplate Backbone/Marionette project in the client directory (see *installation* below), however if you would like to build your own from scratch or use a different framework (React, Vue, Angular, or even vanilla JS), you're more than welcome to. We'll be judging on your ability to take designs, specifications, and data to create something usable, not your knowledge of Backbone and Marionette.
- ##### Extra Credit
  - Implement time Based Filtering **LINK TO MOCK**
  - Make it mobile friendly! - We didn't provide any mocks for this, so use your imagination
  - Any other extra credits?

### Evaluation
  - **CSS**
    - How well you implement your styles including reusability and organization
    - We're looking for an implementation that is as close to the screenshots as possible
  - **Code**
    - Cleanliness and organization of your code
    - Your ability to use Backbone/Marionette AND/OR your ability to quickly learn a new framework OR your ability to implement something in a framework you're an expert at
  - **Fundamentals**
    - How well you know how to write Javascript
    - Sorting and Filtering
    - How well you handle unexpected errors and loading times
    - How well you can take unfamiliar data and understand it

### Installation
- __Client__
  - Located in `/client`
  - `$ npm install`
  - `$ npm run dev` to start the dev server
  - If you want to use a custom build or another framework, just make sure it lives in this directory.
- __API__
  - Located in `/server`
  - `$ npm install`
  - `$ npm start`

### Styleguide
- **Colors**
  - background: #F8FCFF
  - primary: #1A96FC
  - secondary: #EE3690
  - tertiary: #171AB2
  - quaternary: #FEC61E
  - quinary: #1BC98E
- **SASS** - All styles use the indented style styntax of sass (no brackets).
- **Grid System** - We've included a grid system library that is very similar to our internal built library. Documentation can be found at `http://flexboxgrid.com/`.
