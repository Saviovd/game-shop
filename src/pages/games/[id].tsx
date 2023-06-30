import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IGameProps {
   id: number;
   slug: string;
   name: string;
   background_image: string;
}

const GamePage = ({ id }: { id: string }) => {
   const [game, setGame] = useState<IGameProps | null>(null);

   useEffect(() => {
      async function getGameById() {
         try {
            fetch(`/api/games/${id}`)
               .then((res) => res.json())
               .then((data) => {
                  setGame(data);
               });
         } catch (error) {
            console.error(error);
         }
      }

      getGameById();
   }, [id]);

   if (!game) {
      return <h1>Loading...</h1>;
   }
   return (
      <>
         <h1>{game.name}</h1>
         <Image
            src={game.background_image}
            alt={`${game?.name}`}
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
         />
      </>
   );
};

export async function getServerSideProps(context: { query: { id: string } }) {
   const { id } = context.query;
   return {
      props: {
         id,
      },
   };
}

export default GamePage;
