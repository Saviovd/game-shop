import { NextApiRequest, NextApiResponse } from 'next';
import { ACCESS_TOKEN } from '../config';


export default async function getGameById(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const {id} = req.query
   try {
      const ulrGames = `https://api.rawg.io/api/games/${id}?token&key=${ACCESS_TOKEN}`;
      fetch(ulrGames)
         .then((res) => res.json())
         .then((data) => {
            res.status(200).json(data);
         })
         .catch((error) => console.error(error));
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}
