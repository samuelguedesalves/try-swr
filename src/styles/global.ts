import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fefefe;
}

h1, h2, h3, h4, h5, h6, p, strong, span, a, label {
  font-family: 'Roboto', sans-serif;
}
`;