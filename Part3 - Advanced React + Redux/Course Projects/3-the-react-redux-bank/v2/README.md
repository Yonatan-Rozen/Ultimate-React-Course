# 03| The React Redux Bank (v2)

## Pages

### create new customer screen

![Create Customer](create-customer.png)

### account operations screen

![Account Operations](account-operations.png)

## Description

This project includes modifications for [The React Redux Bank](../v1):

- creating the store.js file with Redux Toolkit(RTK) with 'configureStore' function
- creating the slice.js files with RTK
- using thunk middleware together with RTK

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Getting Started with React-Redux (old version)

### Redux Installation

#### `npm install redux`

To install the redux core package by itself

#### `npm install react-redux`

To use React Redux with your React app

#### `npm install redux-thunk`

Thunk middleware for Redux. It allows writing functions with logic\
 inside that can interact with a Redux store's dispatch and getState methods

#### `npm i redux-devtools-extension --force`

To connect your React-Redux project to the [Google's Redux Devtools Extension](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).\
Developer tools to power-up Redux development workflow or any other\
architecture which handles the state change
