import { NextApiRequest, NextApiResponse } from 'next';
import scrapeDraw from '@lib/scrape-draw';
import { SITE_URL } from '@lib/constants';

export default function Draw() {

    return null

    // const { draw } = req.query || 0;
    // const drawString = draw.toString()
    //
    // const reponseDraw = await scrapeDraw({draw: parseInt(drawString)});
    //
    // if (reponseDraw.error) {
    //     res.status(404).send(reponseDraw);
    // }
    //
    // res.statusCode = 200;
    // res.send(reponseDraw)
}