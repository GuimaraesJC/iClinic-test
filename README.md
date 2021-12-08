# Jean Carlos Guimarães - iClinic Test

The challenge was to make two concurrent request when a button is clicked. SWAPI endpoints return either "Darth Vader" or "Luke Skywalker" data. Based on which request returns data first, it should show which side of "the Force" you are on.

It also should be responsive for screens smaller than 800px.

## Setup

After cloning the project, go to the root folder and run `yarn`. All dependencies will be installed. Once it is done, run `yarn start` and the project will automatically open in your browser, running on `http://localhost:3000`.

It is also available on [https://iclinic-test-jean.netlify.app/](https://iclinic-test-jean.netlify.app/).

## Techs

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the TypeScript template.

- For CSS, Styled Components was the choice.

- For tests, Jest and React Testing Library.

## Folder and Files Structure

For organization, the two main folders inside `src` are `components` and `pages`. Each component or page folder contains:

- index.tsx (Template and Logic)
- styles.ts (Styled Components)
- [Component/Page].test.tsx (Containing all tests related to it)

Inside `src/styles`, there's `global.ts`, which contains a simple CSS reset and default behaviors, like the hover effect for buttons and anchors.

Inside `src/utils`, there's `api.ts`, which contains the concurrent API call that returns data in JSON format. It has been separated because it is called at different places on the same page, so it helps not to repeat code unnecessarily.

The folder `src/assets` contains all images and icons used in the project.

The router file (`routes.tsx`) is directly placed in `src`, and has a simple path system that switches between the pages in `src/pages`.

## Tests

The main objective of the tests in this project was to show the use and knowledge of the different methods available on Jest and RTL, such as:

- render()
- toHaveStyle()
- toContainHTML()
- toBeInTheDocument()
- getByText()
- toMatchSnapshot()

In `src/setupTests.ts`, there's an import of 'jest-styled-components'. The main purpose of this on this project is the visualization of styles on snapshots, which were made using Styled Components.

You can launch the test runner in the interactive watch mode using `yarn test`.
