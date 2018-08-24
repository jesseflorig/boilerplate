# [WIP] Boilerplate

A **[WIP]** boilerplate for building web applications, but mostly something I set up once (pending) and leave to become perpetually stale. *Yay!*

## The Stack
 
 - Package Management: [Yarn](https://yarnpkg.com/en/)
 - Build: [Webpack](https://webpack.js.org/)
 - Code Style: [Prettier](https://github.com/prettier/prettier) **[WIP]**
 - Front End: [React](https://reactjs.org/)
 - CSS: [Emotion](https://emotion.sh/)
 - State: [Apollo Link](https://www.apollographql.com/docs/link/) **[WIP]**
 - Data: [Apollo Client](https://www.apollographql.com/docs/react/) **[WIP]**
 - Testing: [Jest & Enzyme]() **[WIP]**

## Gaps
Some aspects of my preferred stack change so much between projects that they have been intentionally left out. Here are some of my favorites:

 - UI: [Material-UI](https://material-ui.com/), [Semantic UI](https://semantic-ui.com/)
 - Icons: [Material Design Icons](https://materialdesignicons.com/)

## Setup
Clone the repo, install dependencies, and start the project:
```
git clone git@github.com:jesseflorig/boilerplate.git
cd boilerplate
yarn
yarn start
```

## Development
Running `yarn start` will start a dev server  with the following features:
 - [Hot module replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)

## Testing [WIP]
Running `yarn test` will run tests once and generate a coverage report. Intended to be used with CI.

Running `yarn test:dev` will start a dev server for test driven development (TDD). 
## Production [WIP]
Running `yarn build` will generate the bundles for a production deployment

## Contributinh
Go [fork](https://help.github.com/articles/fork-a-repo/) yourself.

Seriously though, I love opinions. Feel free to submit an issue if you want to discuss the stack, config or project structure.
