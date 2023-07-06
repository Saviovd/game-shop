import styled from 'styled-components';

export const GameListStyle = styled.div`
   width: 98vw;
   /* display: flex; */
   align-self: center;
   padding: 1rem 2.5rem 0 2.5rem;
   height: 25rem;

   .swiperList {
      display: flex;
      align-items: center;
      justify-content: space-between;
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

         &:hover {
            background-color: rgba(var(--white), .4);
         }
      }
      .swiper-button-prev {
         transform: translateX(-1.5rem);
      }
      .swiper-button-next {
         transform: translateX(1.5rem);
      }
   }
`;
