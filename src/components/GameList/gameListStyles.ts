import styled from 'styled-components';

export const GameListStyle = styled.div`
   width: 100vw;
   display: flex;
   align-self: center;
   border-top: .1rem solid rgb(var(--white));
   border-bottom: .1rem solid rgb(var(--white));
   padding: 2rem 0;

   .swiperList {
      display: flex;
      justify-content: space-evenly;
      .swiper__item {
         max-width: 35rem;
      }
   }
`;
