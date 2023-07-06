import { Swiper, SwiperSlide } from 'swiper/react';
import { GameListStyle } from './gameListStyles';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import 'swiper/css';

interface IGameProps {
   id: number;
   name: string;
   background_image: string;
}

interface IGameListProps {
   page: number;
}
const GameList = ({ page }: IGameListProps) => {
   const [data, setData] = useState<Array<IGameProps>>();
   const [isLoad, setIsload] = useState(false);

   useEffect(() => {
      async function getGames() {
         try {
            fetch(`/api/games?page=${page}`)
               .then((res) => res.json())
               .then((data) => {
                  setData(data);
                  setIsload(true);
               });
         } catch (error) {
            console.error(error);
         }
      }

      getGames();
   }, [page]);

   if (!isLoad) {
      return <p>CARREGANDO...</p>;
   }

   return (
      <GameListStyle>
         <Swiper spaceBetween={30} slidesPerView={5} className='swiperList'>
            {data &&
               data.map(({ id, name, background_image }: IGameProps, i) => {
                  return (
                     <SwiperSlide className='swiper__item' key={`${id}_${i}`}>
                        <Card
                           id={id}
                           name={name}
                           background_image={background_image}
                        />
                     </SwiperSlide>
                  );
               })}
         </Swiper>
      </GameListStyle>
   );
};

export default GameList;
