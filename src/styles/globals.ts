import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
   font-size: 10px;
   body {
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: red;

      a {
         color: inherit;
         text-decoration: none;
      }
      li {
         list-style-type: none;
      }
      ul {
         padding: 0;
      }
   }
}`;
