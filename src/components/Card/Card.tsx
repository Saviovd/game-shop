import Image from 'next/image';
import Link from 'next/link';
import { CardStyle } from './cardStyle';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IGameListProps {
   id: number;
   name: string;
   background_image: string;
}
interface IGameProps {
   website: string;
   metacritic: number;
}

const Card = ({ id, name, background_image }: IGameListProps) => {
   const [isHovering, setIsHovering] = useState(false);
   const [gameData, setGameData] = useState<IGameProps>();

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         bounce: 0.3,
         duration: 0.5,
         delay: 0.1,
      },
   });

   useEffect(() => {
      function getGameById() {
         try {
            fetch(`/api/games/${id}`)
               .then((res) => res.json())
               .then((data) => {
                  setGameData(data);
               });
         } catch (error) {
            console.error(error);
         }
      }

      getGameById();
   }, [id]);

   return (
      <CardStyle
         onMouseEnter={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}
      >
         <motion.div
            {...(isHovering && { ...motionProps(0, -50) })}
            className={`about__game--top`}
         >
            {isHovering && gameData && (
               <div className='about__game--top-box'>
                  <p className='game__title'>{name}</p>
                  <p
                     className={`metacritic ${
                        gameData.metacritic < 50
                           ? 'low'
                           : gameData.metacritic > 75
                           ? 'high'
                           : 'medium'
                     }`}
                  >
                     {gameData.metacritic}
                  </p>
               </div>
            )}
         </motion.div>

         <Link href={`/games/[id]`} as={`/games/${id}`} className='game__image'>
            {background_image  ? (
               <>
                  <Image
                     src={background_image}
                     alt={`${name}`}
                     width={350}
                     height={100}
                     className={`game__image--background`}
                  />
               </>
            ) : <p>Carregado...</p>}
            {!isHovering && <h2 className='game__image--title'>{name}</h2>}
         </Link>
         <motion.div
            {...(isHovering && { ...motionProps(0, 50) })}
            className={`about__game--bottom`}
         >
            {isHovering && gameData && (
               <div className='about__game--bottom-box'>
                  <p className='game__website'>{gameData.website}</p>
               </div>
            )}
         </motion.div>
      </CardStyle>
   );
};

export default Card;
