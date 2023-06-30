import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
dotenv.config();

const accessToken = process.env.ACCESS_TOKEN;

export default async function getGameById(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const {id} = req.query
   try {
      const ulrGames = `https://api.rawg.io/api/games/${id}?token&key=${accessToken}`;
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
