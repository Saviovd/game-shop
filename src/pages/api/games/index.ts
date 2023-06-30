import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
dotenv.config();

const accessToken = process.env.ACCESS_TOKEN;
const ulrGames = `https://api.rawg.io/api/games?token&key=${accessToken}&page_size=30`;

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
