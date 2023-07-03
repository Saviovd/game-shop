import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
   font-size: 10px;
   body {
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      div {
         margin: 0;
         padding: 0;
      }
      a, p {
         color: inherit;
         text-decoration: none;
         margin: 0;
         padding: 0;
      }
      li {
         list-style-type: none;
      }
      ul {
         padding: 0;
      }

      main {
         height: 100vh;
         display: flex;
         align-self: center
         ;
      }
   }
}`;
