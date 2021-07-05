import {NextApiRequest, NextApiResponse} from "next";

function isDown (value: any, index: any, array: any) {
    if (value.resultType == 1)
        return value;
}

function isUp (value: any, index: any, array: any) {
    if (value.resultType == 0)
        return value;
}

function listFive(stocks: any) {
    let fiveStocks = [];
    for (let i = 0; i < 5; i++) {
        fiveStocks.push({
            code: stocks[i].code,
            company: stocks[i].companyName,
            variation: stocks[i].resultPercentageValue,
        });
    }
    return fiveStocks;
}

export default async function MarketApi(req: NextApiRequest, res: NextApiResponse) {
    let url: string;
    const { market } = req.query || {};
    const marketString = market.toString();
    if (marketString) {

        let stocksApi = {
            market: "",
            type: ""
        }

        switch (market) {
            case 'sp500':
                stocksApi.market = "sp-500";
                stocksApi.type = "stock";
                break;
            case 'ibov':
                stocksApi.market = "ibovespa";
                stocksApi.type = "acao";
                break;
            default:
                stocksApi.market = "";
                stocksApi.type = "";
        }

        if (!stocksApi.type) {

            res.setHeader(
                'Cache-Control',
                `public, s-maxage=360, max-age=360, stale-while-revalidate`
            );
            res.statusCode = 404;
            res.json({
                error: "Not Found"
            });

        } else {

            const uri = `https://statusinvest.com.br/${encodeURIComponent(
                stocksApi.type
            )}/getaltabaixa?IndiceCode=${encodeURIComponent(
                stocksApi.market
            )}`;

            const resApi = await fetch(uri);
            const data = await resApi.json();
            const dynamicDate = new Date();

            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            const down = data.filter(isDown);
            const up = data.filter(isUp);

            const upFive = listFive(up);
            const downFive = listFive(down);

            res.setHeader(
                'Cache-Control',
                `public, s-maxage=10, max-age=3600, stale-while-revalidate`
            );

            res.statusCode = 200;
            res.json({
                date: dynamicDate,
                market: marketString.toLowerCase(),
                up: upFive,
                down: downFive
            });
        }

    } else {
        res.status(404).send('Not Found');
    }
}