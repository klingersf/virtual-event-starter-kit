import HighFeed from "@components/highfeed";
import {NextApiRequest, NextApiResponse} from "next";

export default function HighFeedPage({ stockData }: any) {

  return (
      <>
        <HighFeed stockData={stockData}/>
      </>
  );
}

export const getServerSideProps: (request: NextApiRequest, response: NextApiResponse) => Promise<{
    props: { stockData: any }
}> = async (request: NextApiRequest, response: NextApiResponse) => {

    const stock = request.query?.stock?.toString() || "";
    const trend = request.query?.trend?.toString() || "up";
    const highValue = request.query?.h?.toString() || 0;

    const trendText = trend == "up" ? "máxima" : "mínima";

    const text: string = highValue == 0 ? `${trendText} histórica` : `${trendText} de 52 semanas`;
    const type: any = (stock.indexOf(".sa") > -1) ? "br" : "us";
    let imgID: string = type == "br" ? stock.substr(0, 4) : stock;
    imgID = imgID.indexOf("-") > -1 ? imgID.replace('-', '.') : imgID ;

    const uri = `https://query2.finance.yahoo.com/v7/finance/quote?formatted=true&lang=pt-BR&region=BR&symbols=${stock}`;
    const res = await fetch(uri);
    const quoteData = await res.json();
    const yfData = quoteData['quoteResponse']['result'][0];

    let code: string = type == "br"
        ? yfData.symbol.substr(0, 5)
        : yfData.symbol;
    code = (stock.indexOf("11.sa") > -1) ? yfData.symbol.substr(0, 6) : code;
    const price: number = (parseFloat((+yfData.regularMarketPrice.raw).toFixed(2)))
    const high: number = (parseFloat((+yfData.fiftyTwoWeekHigh.raw).toFixed(2)))
    const low: number = (parseFloat((+yfData.fiftyTwoWeekLow.raw).toFixed(2)))
    const name: string = yfData.longName;

    const data = {
        type,
        imgID,
        name,
        code,
        high,
        price,
        text,
        low,
        trend
    }

    return {
        props: {
            stockData: data
        } // will be passed to the page component as props -
    };
};
