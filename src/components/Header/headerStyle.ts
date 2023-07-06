import styled from 'styled-components';

export const HeaderStyle = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 2rem;
   height: 10rem;
   border-bottom: 1px solid rgb(var(--white));

   .navigation {
      width: 60%;
      .navigation_list {
         display: flex;
         justify-content: space-evenly;
         align-items: center;
         padding: 0 1rem 0 2rem;

         .navigation_list--item {
            font-size: 1.7rem;
            font-weight: 500;
            color: rgb(var(--blue));
         }
      }
   }
`;
