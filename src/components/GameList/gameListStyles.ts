import styled from 'styled-components';

export const GameListStyle = styled.div`
   width: 100vw;
   /* display: flex; */
   align-self: center;
   height: 25rem;

   .swiperList {
      padding: 0 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .swiper__item {
         max-width: 35rem;
      }

      .swiper-button-prev, .swiper-button-next {
         color: rgb(var(--green));
         align-self: center;
         height: 100%;
         width: 5rem;
         top: 2rem;
         border-radius: 1rem;
         position: absolute;
         z-index: 9;

         &:hover {
            background-color: rgba(var(--white), .4);
         }
      }
      .swiper-button-prev {
         left: -.3rem;
         transform: translateX(-.5rem);
      }
      .swiper-button-next {
         right: -.3rem;
         transform: translateX(.5rem);
      }

      @media screen {
         @media (max-width: 440px) {
            padding: 0 4rem;
         }
         @media (max-width: 385px) {
            padding: 0 3rem;
         }
      }
   }
`;
