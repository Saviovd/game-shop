import styled from 'styled-components';

export const CardStyle = styled.div`
   margin: 5.5rem auto;
   max-width: 35rem;
   height: 20rem;
   position: relative;

   .game__image {
      cursor: pointer;
      position: relative;
      width: 100%;
      height: 100%;
      display: block;
      .game__image--background {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }

      .game__image--title {
         position: absolute;
         right: 0;
         bottom: 0;
         color: white;
         padding: 1rem 2rem 1rem 0;
         z-index: 2;
      }

      &:hover {
         z-index: 1;
         .game__image--title {
            display: none;
         }
      }
   }

   .about__game--top {
      position: absolute;
      top: 0;
      z-index: -1;
      width: 99%;
      height: 5rem;
      border-radius: 0.5rem 0.5rem 0 0;
      border: 1px solid rgba(var(--white), .5);

      background-color: rgba(var(--purple), .2);

      .about__game--top-box {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 1rem;

         .game__title {
            margin: 0;
            font-size: 1.6rem;
            color: rgb(var(--blue));
            font-weight: 600;
         }

         .metacritic {
            border-radius: 0.5rem;
            padding: 0.5rem;
            font-size: 1.4rem;
         }
         .high {
            color: rgb(var(--green-score));
            border: 1px solid rgb(var(--green-score));
         }
         .medium {
            color: rgb(var(--yellow));
            border: 1px solid rgb(var(--yellow));
         }
         .low {
            color: rgb(var(--red));
            border: 1px solid rgb(var(--red));
         }
      }
   }

   .about__game--bottom {

      position: absolute;
      bottom: 0;
      z-index: -1;

      width: 99%;
      min-height: 5rem;
      height: auto;
      border-radius: 0 0 0.5rem 0.5rem;
      border: 1px solid rgba(var(--white), .5);

      display: flex;
      align-self: center;
      justify-content: center;

         background-color: rgba(var(--purple), .2);

      .about__game--bottom-box {
         display: flex;
         justify-content: center;
         align-items: center;
         .game__website {
            z-index: 2;
            margin: 0;
            padding: 0;
            font-size: 1.4rem;
            color: rgb(var(--green));
         }
      }
   }
   &::after {
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(var(--black), 0.2);
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.3s;
   }
   &:hover {
      &::after {
         width: 0;
         background-color: rgba(0, 0, 0, 0);
      }
   }
`;
