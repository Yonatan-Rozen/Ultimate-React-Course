# 02| The Wild Oasis (v2)

## Pages

### Dashboard

![Dashboard](./public/readme-pages/dashboard.png)

### Bookings

![Bookings](./public/readme-pages/bookings.png)

### Cabins

![Cabins](./public/readme-pages/cabins.png)

### Users

![Users](./public/readme-pages/users.png)

### Settings

![Settings](./public/readme-pages/settings.png)

## Description

This version contains everything from [v1](../v1), with updates to the cabins and settings page, as well as:

- Setting up react query
- Fetching cabin data from Supabase & applications settings
- Functionally for deleting, creating, editing and duplicating cabins & updating application settings
- Displaying toasts (using the toaster library)
- Implementing forms with React Hook Form
- Handling form errors
- Uploading images to Supabase
- Abstracting React Query into custom hooks

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

## Installation

### `npm create vite@4`

Install all related Vite files (version 4)

### `npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev`

Install a plugin to make eslint compatible with Vite

- modify the rules at [.eslintrc.cjs](.eslintrc.cjs) as you wish

### `npm i react-router-dom@6`

Install the **Route** library (version 6)
