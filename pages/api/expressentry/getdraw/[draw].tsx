import { NextApiRequest, NextApiResponse } from 'next';
import scrapeDraw from '@lib/scrape-draw';
import { SITE_URL } from '@lib/constants';

export default async function getDraw(req: NextApiRequest, res: NextApiResponse) {

    const { draw } = req.query || 0;
    const drawString = draw.toString()

    const reponseDraw = await scrapeDraw({draw: parseInt(drawString)});
    //
    // return
    //
    // res.setHeader('Content-Type', `application/json`);
    //
    //
    // if (reponseDraw.error) {
    //     res.status(404).send(reponseDraw);
    // }

    // res.statusCode = 200;
    // res.send(reponseDraw)
    res.json(reponseDraw)
}