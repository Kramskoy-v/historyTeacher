import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-dark: #252525;
  --color-white:  #f7f7f7;
  --color-grey-white: #d0d0d0;
  --color-grey: #5c5c5c;
  --color-dark-grey: #444;
  --color-red: #da2c2c;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {

  font-family: 'Open Sans', sans-serif;
  transition: color 0.3s, background-color 0.3s;
  min-width: 360px;
  min-height: 100dvh;
  line-height: 1.5;
  font-size: 1.6rem;
  background-image: url('bg_full_3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


img {
  max-width: 100%;
}

`;

export default GlobalStyles;
