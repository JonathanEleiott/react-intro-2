# React - a JS library for building user interfaces (DOM)

## Notes

- created by Facebook (Meta) in 2011
- uses components that have JS and HTML together (JSX - Javascript Syntax Extension)
- JSX is a syntax extension and React is a library
- a component is a piece of the UI... could be as small as a button or as big as an entire webpage
- the browser CANNOT read JSX (React code)

## Library - some pre-written JS code that helps us speed up development

- hides implementation and internal details

## Connecting to HTML

- create an element in the HTML for all of the React code to go inside of
- container -> connecting element
- root -> Reacts connection to the container
- root.render -> what to put in the container

## Components

- functional components
  - function declaration
    - starts with a capital letter (Pascal Case)
    - our own custom name
  - return
    - JSX (a markup language that looks like HTML)
    - can contain inline JS
    - 1 OUTER ELEMENT
- old way: class components
  - syntax is complex
  - lifecycle methods
- Components should only do one thing. If it grows too much, break it into subcomponents.

## Hooks

- useState -> remembers information and will update the page when it changes (have to update the information correctly)
  - Examples: array of data from an API, selected item, input values from a form, etc.
  - const [state, setState] = useState(initialState)
  - state -> variable name
  - setState -> function you use to change the variable
  - initialState -> starting value of the variable

## Array Destructuring

- if you know how many items are going to be in an array, you can assign variables to the values at those indexes

## JS in JSX

- use curly braces

## Events

- can add listeners directly to the element
- onEventName = { functionDefinition }
- DO NOT INVOKE THE FUNCTION

## Node - environment that can run JS

## npm (Node Package Manager) - manages all packages (code we're bringing in from an outside source) and a little bit more

## Vite - tool than can run React locally and build files for production

- npm create vite@latest

## New Files

- vite.config -> what Vite needs in order to know what to do behind the scenes to run our code
- package.json
  - displays the information about the project
  - scripts -> commands npm can run
    - npm run scriptName
    - npm install -> creates the node_modules folder and package-lock.json file
  - dependencies and devDependencies -> list of pakcages and version numbers we'll use in the project
- .gitignore -> what files we don't want to push to GitHub (should always contain node_modules and dist)
- .eslintrc.cjs -> what syntax rules to follow

## Export/Import

- export -> sends data out
  - inline -> adds to the exported object
  - can only have one defualt which can be imported directly (not in an object)
- import -> brings in data that has been exported
  - if it's in an object, we need to use object destructuring
  - if it's the default, no need to destructure