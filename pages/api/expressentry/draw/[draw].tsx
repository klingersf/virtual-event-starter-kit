import { NextApiRequest, NextApiResponse } from 'next';
import screenshot from '@lib/screenshot';
import { SITE_URL } from '@lib/constants';

export default async function drawImages(req: NextApiRequest, res: NextApiResponse) {
    let url: string;
    const { draw } = req.query || {};
    const drawString = draw.toString();
    if (drawString) {
        url = `${SITE_URL}/drawexpressentry/?draw=${encodeURIComponent(
            drawString
        )}`;

        const file = await screenshot(url, 1080, 1080);
        res.setHeader('Content-Type', `image/png`);
        res.setHeader(
            'Cache-Control',
            `public, s-maxage=10, max-age=10, stale-while-revalidate`
            //`public, s-maxage=10, max-age=31536000, stale-while-revalidate`
        );
        res.statusCode = 200;
        res.end(file);
    } else {
        res.status(404).send('Not Found aa_');
    }
}
