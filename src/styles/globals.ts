import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
   --black: 37, 37, 37;
   --white: 249, 249, 249;
   --purple: 105, 48, 195;
   --blue: 100, 223, 223;
   --green: 128, 255, 219;

}

html {
   font-size: 10px;
   body {
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: rgb(var(--black));

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
