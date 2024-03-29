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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-image: url('bg_full_3-768.jpg');
 
  @media screen and (min-width: 1921px) {
    background-image: url('bg_full_3.jpg'); 
  }
 
  @media screen and (min-width: 1201px) {
    background-image: url('bg_full_3-1920.jpg'); 
  }
  
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
  background-color: var(--color-grey);
  color: var(--color-dark);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-grey);
  outline-offset: -1px;
}



a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}


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
