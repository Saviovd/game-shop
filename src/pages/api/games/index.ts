import { NextApiRequest, NextApiResponse } from 'next';
import { ACCESS_TOKEN } from '../config';


const ulrGames = `https://api.rawg.io/api/games?token&key=${ACCESS_TOKEN}&page_size=30&page=1`;

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      fetch(ulrGames)
         .then((res) => {
            return res.json()
         })
         .then((data) => {
            res.status(200).json(data.results);
         })
         .catch((error) => console.error(error));
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}
