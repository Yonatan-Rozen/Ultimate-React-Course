# 02| Worldwise

## Pages

### Homepage

![Homepage](./public/view/homepage.png)

### Pricing

![Pricing](./public/view/pricing.png)

### Product

![Product](./public/view/product.png)

### Login

![Login](./public/view/login.png)

### App

#### Cities

![App Cities](./public/view/app-cities.png)

#### Countries

![App Countries](./public/view/app-countries.png)

#### Add City Form

![App Form](./public/view/app-form.png)

## Description

This project uses the Vite tool. Inside the code you can find a lot of\
different libraries (such as Router, DatePicker, Leaflet, etc.,), including:

- seperation of files to different folders (components, contexts, hooks & pages)
- custom context files (CitiesContext & AuthContext) and usage of the useContext hook
- custom hooks (useGeolocation & useUrlPosition)
- using fake api for the cities data and related fetch functions (loading, adding and deleting cities)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
Lint errors are displayed in the page and you may also see them in the console.

### `npm run server`

Runs a fake api of a local .json file

## Installation

### `npm create vite@4`

Install all related Vite files (version 4)

### `npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev`

Install a plugin to make eslint compatible with Vite

- add `eslint()` to the plugin array at [vite.config.js](vite.config.js)
- modify the rules at [.eslintrc.cjs](.eslintrc.cjs) as you wish

### `npm i json-server`

Install server files to use fake api from local .json files

Make sure to add the following line in the [package.json](package.json) inside the _"scripts"_ object:

- `"server": "json-server --watch data/cities.json --port 8000 --delay 500"`

If `--delay 500` doesn't work, modify the version of `json-server` inside the _"dependencies"_ object:

- `"json-server": "^0.17.3"`,

### `npm i react-router-dom@6`

Install the **Route** library (version 6)

### `npm i country-flag-emoji-polyfill`

The **Country Flag Emoji Polyfill** library helps displaying\
flags emojis as icons instead of codes on Windows OS.

To use the library add the following lines to your App file:

- `import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";`
- `polyfillCountryFlagEmojis();`

### `npm i react-leaflet leaflet`

Leaflet is an open-source library to add a world map app.\
Visit [https://leafletjs.com](https://leafletjs.com) to learn more.

### `npm i react-datepicker`

A react date picker component.\
Visit [https://www.npmjs.com/package/react-datepicker](https://www.npmjs.com/package/react-datepicker) to learn more.
