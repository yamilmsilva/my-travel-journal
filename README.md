# Scrimba - Travel Journal solution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents
- [Overview]()
  - [Requirements](#screenshot)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learnt](#what-i-learnt)
- [Author](#author)

## Overview
### Requirements

- Data array in a separate .js file
    - Title, description, price, cover image, rating, review count, location, open spots
- Use .map() and props
- Style & polished
- Mobile designed


### Screenshot
![localhost_3000_(Desktop)](https://github.com/yamilmsilva/my-travel-journal/blob/main/src/screenshots/SCR-20231028-oi0.png)
![localhost_3000_(iPhone 12 Pro)](https://github.com/yamilmsilva/my-travel-journal/blob/main/src/screenshots/SCR-20231028-oi9.png)


### Links
- Live Site URL: [@Netlify](https://personaltraveljournal.netlify.app/)

### Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My process
### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- React.JS
- Flexbox

### What I Learnt

```css
.card {
  padding: 2em 0;
}

.cards-list > .card + .card {
  padding: 2em 0;
  border-top: 1px solid var(--clr-text-light);
}

.cards-list .card:first-child {
  padding-top: 0;
}

.cards-list .card:last-child {
  padding-bottom: 0;
}
```

```css
@media (prefers-color-scheme: light) {
  :root {
    --clr-text-main: #2b283a;
    --clr-text-light: #918e9b;

    --clr-background-light: #ffffff;
  }
}

/* Dark Mode */

@media (prefers-color-scheme: dark) {
  :root {
    --clr-text-main: #fff;
    --clr-text-light: #e5e5e5;

    --clr-background-light: #1d1d1c;
  }
}
```



## Author
- Yamil Silva

## Acknowledgements

- [Scrimba](https://scrimba.com)
