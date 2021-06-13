import { NextApiRequest, NextApiResponse } from 'next';
import screenshot from '@lib/screenshot';
import { SITE_URL } from '@lib/constants';

export default async function storyCadImages(req: NextApiRequest, res: NextApiResponse) {
    let url: string;
    console.log(req.query)
    const { username, city } = req.query || {};
    const usernameString = username.toString();

    // const cityString = city.toString();
    const cityInt = parseInt(city);
    const cityString = parseInt(city);
    if (username) {
        url = `${SITE_URL}storycad?username=${encodeURIComponent(
            usernameString
        )}`;


        url = parseInt(cityString) > 34 ? `${url}&city=${cityString}` : url ;

        console.log(url)

        const file = await screenshot(url, 1080, 1900);
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
