import { NextApiRequest, NextApiResponse } from 'next';
import scrapeDraw from '@lib/scrape-draw';

export default async function getDraw(req: NextApiRequest, res: NextApiResponse) {

    const { draw } = req.query || 0;
    const drawString = draw.toString()

    const reponseDraw = await scrapeDraw({draw: parseInt(drawString)});
    const cacheTime = 60*5

    res.setHeader('Cache-Control', `s-maxage=${cacheTime} stale-while-revalidate`);
    res.json(reponseDraw)
}